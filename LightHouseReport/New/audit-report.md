# Lighthouse Audit Report — heidydelacruz.com
**Audit Date:** 2026-06-11
**Tool:** Lighthouse 13.2.0
**Pages Audited:** Home (PC + Mobile), Blog (PC + Mobile), Services (PC + Mobile)

---

## Scores Before Fixes

| Page           | Performance | Accessibility | Best Practices | SEO |
|----------------|-------------|---------------|----------------|-----|
| PC Home        | 100         | 88            | 100            | 100 |
| Mobile Home    | 98          | 89            | 100            | 100 |
| PC Blog        | 99          | 88            | 100            | 92  |
| Mobile Blog    | 95          | 88            | 100            | 92  |
| PC Services    | 100         | 88            | 100            | 100 |
| Mobile Services| 98          | 89            | 100            | 100 |

---

## Issues Identified & Fixes Applied

### 1. `color-contrast` — Accessibility (all pages)
**Cause:** `text-brand-red` (`#CC0000`) on the black footer background (`#0A0A0A`) produced a contrast ratio of ~3.36:1. WCAG AA requires 4.5:1 for small text (text-xs / 12px).
**Element:** `<div class="text-xs text-brand-red ...">PODCAST COACH</div>` in `Footer.tsx:11`
**Fix:** Changed `text-brand-red` → `text-red-400` (`#f87171`), which yields ~7.6:1 contrast (AAA level).
**File:** `app/components/Footer.tsx`

---

### 2. `link-name` — Accessibility (all pages)
**Cause:** Social media icon links (Instagram, Facebook, LinkedIn, Spotify, Apple Podcasts, Pinterest) had no accessible name — screen readers could not identify them.
**Fix:** Added descriptive `aria-label` attributes to all six social icon links (e.g., `aria-label="Follow Heidy on Instagram"`). SVG icons marked `aria-hidden="true"`.
**File:** `app/components/Footer.tsx`

---

### 3. `landmark-one-main` — Accessibility (all pages)
**Cause:** Lighthouse reported no `<main>` landmark on the live site, meaning page content was not wrapped in a semantic `<main>` element.
**Fix:** All page files (`page.tsx`, `about/page.tsx`, `services/page.tsx`, `contact/page.tsx`, `blog/page.tsx`) confirmed to have proper `<main>` wrappers in the current codebase.
**Files:** All page-level files under `app/`

---

### 4. `heading-order` — Accessibility (Blog page)
**Cause:** The blog page jumped from `<h1>` ("My Latest Blog Posts") directly to `<h3>` (PostCard titles), skipping `<h2>`. This violates WCAG heading hierarchy requirements.
**Fix:** Added `<h2 className="sr-only">Latest Posts</h2>` before the PostCard grid. Visually invisible but restores correct heading order: `h1 → h2 → h3`.
**File:** `app/blog/page.tsx`

---

### 5. `link-text` — SEO (Blog page)
**Cause:** All blog post "Read More" links shared identical visible text. Search engines and screen readers could not distinguish them.
**Fix:** Added `aria-label={`Read more about ${post.title.rendered}`}` to the Read More link in PostCard, giving each link a unique, descriptive accessible name.
**File:** `app/components/PostCard.tsx`

---

## Core Web Vitals (Pre-Fix, from original reports)

| Page            | FCP    | LCP    | TBT    | CLS |
|-----------------|--------|--------|--------|-----|
| PC Home         | 0.3 s  | 0.7 s  | 0 ms   | 0   |
| Mobile Home     | 1.0 s  | 2.4 s  | 50 ms  | 0   |
| PC Blog         | 0.6 s  | 0.8 s  | 0 ms   | 0   |
| Mobile Blog     | 1.3 s  | 2.9 s  | 20 ms  | 0   |
| PC Services     | 0.3 s  | 0.6 s  | 0 ms   | 0   |
| Mobile Services | 1.0 s  | 2.3 s  | 100 ms | 0   |

All Core Web Vitals were already in the green range. No performance fixes were required.

---

## Expected Scores After Fixes

| Page           | Performance | Accessibility | Best Practices | SEO        |
|----------------|-------------|---------------|----------------|------------|
| PC Home        | 100         | ~97–100       | 100            | 100        |
| Mobile Home    | 98          | ~97–100       | 100            | 100        |
| PC Blog        | 99          | ~97–100       | 100            | ~97–100    |
| Mobile Blog    | 95          | ~97–100       | 100            | ~97–100    |
| PC Services    | 100         | ~97–100       | 100            | 100        |
| Mobile Services| 98          | ~97–100       | 100            | 100        |

---

## Note — Pending Verification

SEO re-test is pending. Once the fixes are deployed to production, a new Lighthouse run should be conducted on all 6 page/device combinations and the results added to this folder as the final comparative report. Key metrics to confirm:

- Blog SEO score rising from 92 → 100 (`link-text` fix verified)
- Accessibility score rising from 88–89 → 97–100 across all pages
- No regressions in Performance or Best Practices

Final report should include side-by-side before/after scores and note any remaining findings.
