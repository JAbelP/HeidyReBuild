import { writeFileSync, mkdirSync } from "fs";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// Load API key from .env.local if present
let API_KEY = "";
try {
  const env = readFileSync(join(ROOT, ".env.local"), "utf8");
  const match = env.match(/PAGESPEED_API_KEY=(.+)/);
  if (match) API_KEY = match[1].trim();
} catch {}

const PAGES = [
  { label: "Home",     url: "https://www.heidydelacruz.com/" },
  { label: "Blog",     url: "https://www.heidydelacruz.com/blog" },
  { label: "Services", url: "https://www.heidydelacruz.com/services" },
];

const STRATEGIES = ["desktop", "mobile"];

const CATEGORIES = ["performance", "accessibility", "best-practices", "seo"];

function buildApiUrl(url, strategy) {
  const base = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";
  const params = new URLSearchParams({
    url,
    strategy,
    ...(API_KEY ? { key: API_KEY } : {}),
  });
  for (const cat of CATEGORIES) params.append("category", cat);
  return `${base}?${params}`;
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function pad(str, len) {
  return String(str).padEnd(len);
}

async function runAudit(page, strategy) {
  const apiUrl = buildApiUrl(page.url, strategy);
  const res = await fetch(apiUrl);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API error ${res.status}: ${text.slice(0, 200)}`);
  }
  return res.json();
}

function extractScores(data) {
  const cats = data?.lighthouseResult?.categories ?? {};
  return {
    performance:      Math.round((cats.performance?.score      ?? 0) * 100),
    accessibility:    Math.round((cats.accessibility?.score    ?? 0) * 100),
    "best-practices": Math.round((cats["best-practices"]?.score ?? 0) * 100),
    seo:              Math.round((cats.seo?.score              ?? 0) * 100),
  };
}

function extractVitals(data) {
  const audits = data?.lighthouseResult?.audits ?? {};
  return {
    fcp: audits["first-contentful-paint"]?.displayValue  ?? "N/A",
    lcp: audits["largest-contentful-paint"]?.displayValue ?? "N/A",
    tbt: audits["total-blocking-time"]?.displayValue      ?? "N/A",
    cls: audits["cumulative-layout-shift"]?.displayValue  ?? "N/A",
  };
}

async function main() {
  const date = new Date().toISOString().slice(0, 10);
  const outDir = join(ROOT, "LightHouseReport", "New");
  mkdirSync(outDir, { recursive: true });

  const results = [];

  for (const page of PAGES) {
    for (const strategy of STRATEGIES) {
      const label = `${page.label} (${strategy})`;
      process.stdout.write(`Running ${label}...`);
      try {
        const data = await runAudit(page, strategy);
        const scores = extractScores(data);
        const vitals = extractVitals(data);
        results.push({ label, scores, vitals });

        const filename = `${date}-${page.label}${strategy.charAt(0).toUpperCase() + strategy.slice(1)}.json`;
        writeFileSync(join(outDir, filename), JSON.stringify(data.lighthouseResult, null, 2));
        console.log(` done → saved ${filename}`);
      } catch (err) {
        console.log(` FAILED: ${err.message}`);
        results.push({ label, scores: null, vitals: null, error: err.message });
      }
      // Respect rate limit when no API key
      if (!API_KEY) await sleep(2500);
    }
  }

  // Print summary table
  console.log("\n" + "=".repeat(80));
  console.log("LIGHTHOUSE SUMMARY — " + date);
  console.log("=".repeat(80));
  console.log(
    pad("Page", 24) +
    pad("Perf", 7) +
    pad("A11y", 7) +
    pad("BP", 7) +
    pad("SEO", 7) +
    pad("FCP", 9) +
    pad("LCP", 9) +
    "TBT"
  );
  console.log("-".repeat(80));
  for (const r of results) {
    if (r.error) {
      console.log(pad(r.label, 24) + "ERROR: " + r.error.slice(0, 50));
      continue;
    }
    const s = r.scores;
    const v = r.vitals;
    const flag = (n) => n < 90 ? `${n}⚠` : `${n} `;
    console.log(
      pad(r.label, 24) +
      pad(flag(s.performance), 7) +
      pad(flag(s.accessibility), 7) +
      pad(flag(s["best-practices"]), 7) +
      pad(flag(s.seo), 7) +
      pad(v.fcp, 9) +
      pad(v.lcp, 9) +
      v.tbt
    );
  }
  console.log("=".repeat(80));
  console.log(`\nJSON files saved to LightHouseReport/New/`);
  if (!API_KEY) console.log("Tip: add PAGESPEED_API_KEY to .env.local to remove rate limiting.");
}

main();
