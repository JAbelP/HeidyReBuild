# Heidy De La Cruz – Podcast Coach Site

## Project Overview
Next.js 14 site (App Router) for Heidy De La Cruz, a podcast coach for Latinas. Deployed on Vercel. Connects to a WordPress backend via REST API for blog content.

## Tech Stack
- **Framework**: Next.js 14.2 (App Router, TypeScript)
- **Styling**: Tailwind CSS v3 with custom brand colors
- **Fonts**: Playfair Display (serif/headings), Inter (sans/body) via `next/font`
- **Blog CMS**: WordPress REST API (`app/lib/wordpress.ts`)
- **Deployment**: Vercel (`vercel.json`)
- **Ads**: Google AdSense (`ca-pub-4434021670272172`)

## Brand Colors (tailwind.config.ts)
- `brand-red` – primary accent (deep red)
- `brand-dark` – dark near-black
- `brand-redLight` – lighter red variant
- `brand-black` – true black used for dark sections

## Project Structure
```
app/
  layout.tsx           # Root layout, global metadata, fonts, AdSense script
  page.tsx             # Homepage (hero, about, collage, services, testimonials, CTA)
  globals.css          # Global styles, marquee animation
  about/page.tsx       # About page with sticky red sidebar
  services/page.tsx    # Services cards (4 offerings)
  blog/page.tsx        # Blog with WordPress posts + sidebar
  contact/page.tsx     # Contact options (Zoom/email)
  [slug]/page.tsx      # Dynamic WordPress post pages
  lib/wordpress.ts     # WordPress REST API helpers
  api/
    revalidate/        # ISR revalidation webhook endpoint
    wp/[...path]/      # WordPress API proxy
  components/
    Navbar.tsx         # Sticky top nav, mobile hamburger (client component)
    Footer.tsx         # Links, social icons, copyright
    Button.tsx         # Reusable button (variants: default, secondary, outline-white, white)
    CtaSection.tsx     # Full-width CTA with heading + email button
    Testimonials.tsx   # Grid of testimonial cards (3 or 4 col)
    PodcastersChecklist.tsx  # Newsletter subscribe CTA (black bg)
    PodcastAppearances.tsx   # 6 podcast appearance cards linking to Spotify
    PostCard.tsx        # Blog post card used in grids
    SectionDivider.tsx  # Decorative horizontal divider
public/images/         # All static images (see image-optimization.csv)
```

## Pages & Routes
| Route | File | Purpose |
|---|---|---|
| `/` | `app/page.tsx` | Homepage |
| `/about` | `app/about/page.tsx` | About Heidy |
| `/services` | `app/services/page.tsx` | Service offerings + pricing |
| `/blog` | `app/blog/page.tsx` | Blog listing (WordPress) |
| `/contact` | `app/contact/page.tsx` | Contact options |
| `/[slug]` | `app/[slug]/page.tsx` | Dynamic WordPress posts |

## Services & Pricing
1. **6 Weeks Podcast Launch Strategy** – $2,000 (weekly 1:1, 6 sessions)
2. **One Hour Podcast Strategy Call** – $70
3. **The V.O.I.C.E. Method Podcast Launch Course** – $197
4. **Podcast Editing and Production Services** – Starting at $80/episode

Booking links go to `stan.store/heidydelacruz`.

## Key Content & Brand Details
- **Methodology**: V.O.I.C.E. Method Podcast Launch Framework
- **Podcast**: "The American Dream In The Eyes of Immigrants" – award-winning, top 5% globally, listened to in 100+ countries
- **Newsletter**: "Into My Thoughts" (Substack)
- **Book**: "Words From The Heart" (poetry)
- **Awards**: WWP Awards 2025 Winner
- **Target audience**: Latinas who want to launch a podcast

## Development Commands
```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
```

## Environment Variables
See `.env.local` (not committed). WordPress API URL and any revalidation secrets live here.

## WordPress Integration
- Posts fetched via proxy at `/api/wp/[...path]` → avoids CORS
- ISR revalidation via `/api/revalidate` webhook
- Helper functions in `app/lib/wordpress.ts`: `getPosts`, `getTotalPages`, `getPost`

## Image Notes
All images live in `public/images/`. Several large RAW-quality JPEGs (3–4MB) are served as-is and should be resized for performance. See `image-optimization.csv` in the project root for a full audit with recommended dimensions. Next.js `Image` with `fill` is used on most images (CLS is mitigated by explicit aspect-ratio wrappers). Exception: `contact/page.tsx` uses a plain `<img>` tag for `HDLC4976.jpg` — no automatic optimization there.

## Deployment
Deployed to Vercel. Push to `main` triggers production deploy. The `vercel.json` file contains any rewrite/header configuration.

## Lighthouse Audit — 2026-06-11
Ran a full Lighthouse audit (PC + Mobile) on Home, Blog, and Services pages. Original scores: Performance 95–100, Accessibility 88–89, Best Practices 100, SEO 92–100. Five issues were identified and fixed:

1. **`color-contrast`** (`Footer.tsx`) — `text-brand-red` (`#CC0000`) on the black footer background failed WCAG AA for small text (~3.36:1). Changed to `text-red-400` (`#f87171`, ~7.6:1 contrast).
2. **`link-name`** (`Footer.tsx`) — Social icon links had no accessible name. Added `aria-label` to all six social links; SVGs marked `aria-hidden="true"`.
3. **`landmark-one-main`** — All page files confirmed to have a `<main>` wrapper.
4. **`heading-order`** (`app/blog/page.tsx`) — Page jumped from `<h1>` to `<h3>` (PostCard titles), skipping `<h2>`. Added `<h2 className="sr-only">Latest Posts</h2>` before the PostCard grid.
5. **`link-text` / SEO** (`PostCard.tsx`) — "Read More" links had identical visible text. Added `aria-label={`Read more about ${post.title.rendered}`}` to each link.

Full audit report and before/after scores live in `LightHouseReport/`. A re-test is pending to confirm accessibility rising to 97–100 and blog SEO rising from 92 → 100. Final comparative report will be written to `LightHouseReport/New/` once new JSONs are captured.
