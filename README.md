# Heidy De La Cruz - Podcast Coach Landing Page

A modern, polished Next.js 14 landing page for Heidy De La Cruz, Podcast Coach. Built with Next.js App Router and Tailwind CSS.

## Design Features

- **Modern luxury aesthetic** inspired by Apple and high-end editorial design
- **Brand colors**: Red (#CC0000 / #E00000), Black (#000000), White (#FFFFFF)
- **Typography**: Playfair Display (serif) for headlines, Inter (sans-serif) for body text
- **Fully responsive** mobile-first design
- **Smooth animations** including marquee ticker
- **Clean sections**: Hero, About, Services, Testimonials, CTAs

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Project Structure

```
HeidyReBuild/
├── app/
│   ├── layout.tsx       # Root layout with fonts and metadata
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles and animations
├── public/              # Static assets
├── tailwind.config.ts   # Tailwind configuration with brand colors
├── next.config.mjs      # Next.js configuration
└── package.json         # Project dependencies
```

## Customization

### Replace Placeholder Images

All images currently use `placehold.co` placeholders. Replace them with actual photos:

- **Hero Photo** (600x800px): Professional portrait
- **About Photo** (600x800px): Casual professional photo
- **Collage Photos** (400x400px each): 3 lifestyle/work photos
- **Services Photo** (600x800px): Coaching or podcast setup photo

### Update Links

- **Book a Call button**: Update Calendly link in the final CTA section
- **Social media links**: Update Instagram, Facebook, LinkedIn URLs in footer
- **Subscribe button**: Add newsletter/checklist subscription link

### Brand Colors

Configured in [tailwind.config.ts](tailwind.config.ts):
- `brand-red`: #CC0000
- `brand-redLight`: #E00000
- `brand-dark`: #8B0000
- `brand-black`: #0A0A0A

## Technologies Used

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** (Playfair Display, Inter)

## License

© 2024 Heidy De La Cruz. All rights reserved.
