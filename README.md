# NEXA Business Park

A modern, polished landing page for **NEXA Business Park** — a premium commercial
real estate development in Bashundhara Residential Area, Dhaka, Bangladesh.

Rebuilt with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Features

- ⚡ Next.js 16 App Router with static generation
- 🎨 Premium dark + gold theme with animated gradient accents
- ✨ Entrance animations, floating logo, glassmorphism cards
- 📱 Fully responsive — verified from 320px to 1920px with no horizontal overflow
- 🔍 SEO-ready metadata, Open Graph tags, and accessible markup
- ♿ Respects `prefers-reduced-motion`

## Tech Stack

| Tool          | Purpose            |
| ------------- | ------------------ |
| Next.js 16    | React framework    |
| TypeScript    | Type safety        |
| Tailwind CSS  | Styling            |
| Inter (Google)| Typography         |

## Getting Started

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run start    # run the production build
```

## Project Structure

```
app/
  layout.tsx        # root layout, fonts, metadata
  page.tsx          # landing page composition
  globals.css       # Tailwind + global styles
components/
  Background.tsx    # animated background (gradient, grid, orbs)
  Header.tsx        # top nav
  Hero.tsx          # hero section with logo + title
  StatusBadge.tsx   # "Under Development" pill
  Highlights.tsx    # feature cards
  Contact.tsx       # address + email
  Footer.tsx
public/
  logo.png
```

## Contact

- 📍 Plot 844/E, Block I, Bashundhara Residential Area, Dhaka 1229
- ✉️ info@nexabusinesspark.com

© 2026 NEXA Business Park. All Rights Reserved.
