# Misk Real Estate

A modern, responsive real estate landing page built with [Astro](https://astro.build), [React](https://react.dev), and [Tailwind CSS](https://tailwindcss.com).

## Features

- **Modern & Fancy UI**: Designed with a clean and luxurious aesthetic.
- **RTL & LTR Support**: Fully localized for Arabic (RTL) and English (LTR).
- **Animations**: Smooth transitions using [Framer Motion](https://www.framer.com/motion/).
- **Responsive**: Works perfectly on all devices.
- **Single Page Landing**: All sections in one page with smooth scrolling.
- **SEO Friendly**: Static generation for fast performance and better SEO.

## Getting Started

1.  **Install dependencies**:

    ```bash
    npm install
    ```

2.  **Start the development server**:

    ```bash
    npm run dev
    ```

3.  **Build for production**:
    ```bash
    npm run build
    ```

## Customization

- **Content**: Edit `src/data/content.ts` to update text for both languages.
- **Theme**: Edit `src/styles/global.css` or `src/data/theme.ts` to change colors and fonts.
- **Images**: Replace placeholder images in components or update the URLs in `src/data/content.ts`.

## Structure

- `src/pages/index.astro`: Arabic Landing Page (Default)
- `src/pages/en/index.astro`: English Landing Page
- `src/components/`: React UI Components
- `src/layouts/`: Astro Layouts
- `src/data/`: Content and Theme configuration
