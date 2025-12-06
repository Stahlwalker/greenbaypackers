# Packers Nation Invasion

A React-based website documenting the yearly journey of supporting the Green Bay Packers at road games across the NFL.

## Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components (configured and ready to use)

## Getting Started

### Development

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.tsx      # Navigation and hero section
│   ├── Tradition.tsx   # Game stats and countdown timer
│   ├── Games.tsx       # Photo gallery of attended games
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer with links
├── lib/
│   └── utils.ts        # Utility functions for shadcn/ui
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles with Tailwind

public/
└── img/                # All images and assets
```

## Using shadcn/ui Components

The project is configured to use shadcn/ui. To add components:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
# etc.
```

Components will be added to `src/components/ui/`

## Original HTML

The original HTML version is preserved as `index-old.html` for reference.

## Features

- Responsive design with mobile navigation
- Live countdown timer to next season
- Interactive game history tabs
- Contact form integration with Formspree
- Parallax background effects
- Image gallery with hover effects

## Customization

- Brand colors are defined in `tailwind.config.js` under `colors.packers`
- Fonts use the Caveat cursive font from Google Fonts
- All images are in the `public/img/` directory
