# Frontend Challenge – DigiForge Landing Page (Atena Solutions)

This repository contains my solution for the **Frontend Challenge: Responsive Landing Page** proposed by **Atena Solutions** for a **Front‑end Developer (Junior)** position.

The goal was to rebuild a landing page (DigiForge) from a design reference, focusing on **clean structure**, **maintainability**, and **responsive behavior**.  
The implementation uses **HTML5 + SCSS (BEM)**, **Bootstrap 5 (CDN)**, and **Vanilla JavaScript (ES6)** – no external JS libraries.

---

## ✅ What I built

### UI/UX & Layout
- Pixel‑aware structure following the provided mock
- Responsive grid using **Bootstrap 5** (desktop, tablet, mobile)
- Reusable typography utilities:
  - `.text--base` (16px), `.text--md` (36px/500), `.text--xl` (54px/600)
  - `.text--accent` for the brand red
- Gradient/section helpers from SCSS mixins

### Interactions (Vanilla JS)
- **Sticky header** that adds a translucent background on scroll
- **Mobile menu**: hamburger (`bi-list`) toggles a fullscreen modal and changes to `bi-x-lg`
- **Featured list**: hover and selection state (`featured__item--active` + line highlight)
- **Newsletter**: client‑side email validation (no libs)
- **Back‑to‑Top**: always visible button with smooth scroll (kept visible by decision)

### Sections implemented
- Header / Navbar
- Hero (title, subtitle, CTA, hero illustration)
- Partners (brand logos)
- Services (6 cards + hover effect with 1% white overlay)
- Why Us (metrics/counters layout as in the mock)
- Featured Work (interactive list + preview)
- Ready to Innovate (CTA stripe)
- Customer (testimonials over world map image)
- Footer (newsletter, links, contacts)

---

## 🧠 Technical decisions

- **SCSS + BEM**: readable and maintainable naming, small modifiers for states
- **Bootstrap via CDN**: grid and utilities only (no JS bundle usage)
- **Assets structure** kept inside the source tree for Vite processing
- **No jQuery / no extra libs**: all behavior in **pure ES6**
- **Vite** chosen for simple dev server + production build

---

## 📂 Project structure

```
/
├─ src/
│  ├─ assets/
│  │  └─ images/
│  │     ├─ brands/
│  │     ├─ customer-section/
│  │     ├─ feature-section/
│  │     ├─ hero-section/
│  │     ├─ logo/
│  │     └─ services-section/
│  ├─ main.js          # interactions (header fade, modal, featured, validation, back-to-top)
│  └─ main.scss        # variables, mixins, helpers, sections (BEM)
├─ index.html          # entry (Bootstrap 5 & Icons via CDN)
├─ vite.config.js      # base: './' for relative assets in /dist
├─ package.json
└─ README.md
```

> **Image paths**
> - In **HTML**, reference images from the repo root: `/src/assets/images/...`
> - In **SCSS** (from `src/main.scss`), use relative: `./assets/images/...`
> - Avoid spaces in filenames (e.g., `sony-logo-1.svg`).

---

## ⚙️ How to run locally

1) Install dependencies
```bash
npm install
```

2) Development server
```bash
npm run dev
```

3) Production build
```bash
npm run build
```

4) Preview the build
```bash
npm run preview
```

> If deploying from a subpath (e.g., GitHub Pages), `vite.config.js` uses:
> ```js
> // vite.config.js
> import { defineConfig } from 'vite';
> export default defineConfig({ base: './' });
> ```

---

## 📦 Design references (as provided in the test)

- See the references stored under `assets/design-reference.*` (when applicable in the repo)
- Visual parity aimed; minor spacing tweaks use Bootstrap utilities

---

## 🙌 About this challenge

This solution was implemented specifically for the **Atena Solutions – Front‑end Developer (Junior)** coding test.  
I focused on clarity, maintainability and adherence to the design while using the requested stack.

---
