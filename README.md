# Parallel Grid Studio

An ultra-modern portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Colors

All colors are defined in `tailwind.config.js` under the `neon` and `dark` theme extensions. Easy to swap:

```js
neon: {
  primary: '#00ff88',    // Main accent color
  secondary: '#00d4ff',  // Secondary accent
  accent: '#ff00ff',     // Additional accent
}
```

### Content

All content (projects, copy, timeline items) is in `src/data/content.ts`. Simply update the arrays and objects to customize:

- `projects` - Portfolio projects
- `heroContent` - Hero section copy
- `aboutContent` - About section copy
- `timelineItems` - Timeline milestones
- `aboutCapabilities` - Capabilities list

### Images

Replace image placeholders with actual images:

1. Add images to `public/` folder
2. Update `project.image` paths in `src/data/content.ts`
3. Replace placeholder divs in:
   - `src/components/ProjectCard.tsx`
   - `src/components/ProjectModal.tsx`
   - `src/components/HeroGridTile.tsx`

Look for comments like `{/* Replace this with actual image */}`

### Contact Form

The contact form currently logs to console. To wire to a backend:

1. Update the `onSubmit` handler in `src/App.tsx` (around line 200)
2. Add your API endpoint
3. Handle form submission and responses

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── Button.tsx
│   ├── Section.tsx
│   ├── FilterPill.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectModal.tsx
│   └── HeroGridTile.tsx
├── data/
│   └── content.ts    # All content data
├── App.tsx           # Main page component
├── main.tsx          # Entry point
└── index.css         # Global styles
```

## Features

- ✅ Fully responsive design
- ✅ Smooth scrolling navigation
- ✅ Interactive project grid with filters
- ✅ Modal project details
- ✅ Keyboard accessible (focus traps, ARIA labels)
- ✅ Dark theme with neon accents
- ✅ Framer Motion animations
- ✅ Clean, minimal typography

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge) with ES2020 support.

"# demo-site-two" 
"# newsite2" 
"# newsite2" 
"# demo-site-two" 
"# demo-site-two" 
"# demo-site-two" 
"# demo-site-two" 
"# demo-site-two" 
"# demo-site-two" 
"# demo-site-two" 
"# demo-site-two" 
"# demo-site-two" 
"# demo-site-two" 
"# demo-site-two" 
"# demo-site-two" 
"# demo-site-two" 
"# realdemositeone" 
"# realdemositeone" 
"# realdemositeone" 
