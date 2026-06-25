# Social Impact Leadership Podcast Series

A modern, minimal website for the Ashank Desai Centre Social Impact Podcast Series at IIM Ahmedabad.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **shadcn/ui** (Radix UI primitives + CVA)
- **TypeScript**
- **Lucide React** (icons)

## Getting Started

### 1. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Install the `tailwindcss-animate` plugin (required)

```bash
npm install tailwindcss-animate
```

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Global styles + Google Fonts import
│   ├── layout.tsx         # Root layout with Navbar + Footer
│   ├── page.tsx           # Homepage (Hero, About, Podcasts, Newsletter)
│   └── podcasts/
│       └── page.tsx       # Podcasts listing with sidebar
├── components/
│   ├── ui/                # Reusable UI primitives (Button, Card, Input, Badge, Separator)
│   ├── Navbar.tsx         # Sticky responsive navigation
│   ├── EpisodeCard.tsx    # Reusable episode card (preview + full variants)
│   └── Footer.tsx         # Site footer
├── data/
│   └── episodes.ts        # Mock episode data — replace with real data/API
└── lib/
    └── utils.ts           # cn() utility
```

## Customization

### Adding Real Episodes
Edit `src/data/episodes.ts` — each episode has:
- `id`, `number`, `title`
- `speakerName`, `designation`, `organisation`
- `description`, `releaseDate`, `status`
- `photoUrl`, `youtubeUrl`, `spotifyUrl`, `podcastUrl`

### Updating Logos
Replace the text-based logo in `src/components/Navbar.tsx` with actual `<Image>` components pointing to your logo files in `/public`.

### Color Palette
Defined in `tailwind.config.ts`:
- `iima-blue`: `#003366`
- `iima-gold`: `#C9A96E`
- `cream`: `#FAF8F5`
- `warm-gray`: `#F4F1EC`

### Fonts
Uses Google Fonts: **Playfair Display** (serif) + **DM Sans** (sans). Imported in `globals.css`.

## Deployment

```bash
npm run build
npm run start
```

Compatible with Vercel, Netlify, or any Node.js host.
