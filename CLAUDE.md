# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Denis Bedlow, a film editor based in Paris. Hosted on GitHub Pages at `https://www.denisbedlow.com` (custom domain via `CNAME`). No build step — the site is pure HTML/CSS/JS served statically.

## Development

Open `index.html` directly in a browser, or use a local server:

```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

There is no package manager, build tool, linter, or test suite.

## Architecture

Single-page site with one HTML file, one CSS file, and one JS file:

- `index.html` — All content. Sections: `#movies`, `#art-films`, `#music-videos`, `#vfx`. Each section uses a `.movie-grid` containing `.movie-item` elements (poster image + `.movie-info` overlay).
- `assets/css/styles.css` — All styles. Uses CSS custom properties (`--primary-color`, `--secondary-color`, etc.). Responsive breakpoints at 1200px, 768px, and 480px. The movie grid goes from 4 → 3 → 2 → 1 column as screen width narrows.
- `assets/js/script.js` — Only handles the mobile hamburger menu toggle (`.menu-toggle` / `.header-right.active`).
- `assets/images/` — Poster images (JPEG/JPG). `Hero picture cropped.jpg` is preloaded in `<head>`. All other images use `loading="lazy"`.
- `assets/icons/` — `favicon.ico`, `imdb.png`, `mail.png`.

## Key Patterns

**Adding a new film entry:** Add a `.movie-item` div inside the relevant section's `.movie-grid`. Wrap the `<img>` in an `<a>` linking to the IMDB title if available. Add `loading="lazy"` to all images except the hero. Place the image file in `assets/images/`.

**Image aspect ratio:** All poster images use `aspect-ratio: 2.7 / 4` via CSS — do not set explicit `width`/`height` attributes on `.movie-item img` elements (the hero image is separate and not subject to this rule).

**Deployment:** Push to `main` branch — GitHub Pages deploys automatically.
