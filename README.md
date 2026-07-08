# Card Cafe Website

A dark-mode TCG shop website boilerplate built with **vanilla HTML, CSS, and JavaScript** — no frameworks, no build tools required.

## Project Structure

```
card-cafe-website/
├── index.html        # Main page (single-page layout)
├── css/
│   └── style.css     # All styles — design tokens, components, responsive
├── js/
│   └── main.js       # Interactivity — nav, tournament grid, inventory, modals, store status
└── assets/           # Place logo, product images, and other assets here
```

## Features

| Section | Description |
|---|---|
| **Navigation** | Fixed glass-effect header with hamburger mobile menu, active-link highlighting |
| **Hero** | Full-screen dark hero with neon gradient, decorative card art, store status pill |
| **Tournament Schedule** | Filterable card grid (Pokémon / One Piece / MTG) with registration modal |
| **Inventory Highlights** | Hot items + single card highlights with hover-reveal details |
| **Community / Shop Info** | Store philosophy, new-player callout, and kiosk/store-status widget |
| **Footer** | Address, hours, KakaoTalk channel link, social links |

## Design System

- **Theme:** Dark mode by default (`#0d0d14` background)
- **Accents:** Electric purple (`#7c3aed`) + electric blue (`#3b82f6`)
- **Typography:** [Pretendard Variable](https://github.com/orioncactus/pretendard) — Korean/English support
- **Responsive:** Mobile-first; breakpoints at 480 / 768 / 900 / 1024 px
- **Accessibility:** Semantic HTML, ARIA labels, focus-visible outlines, colour-contrast checked

## Store Status / Kiosk Widget

The store status pill in the hero and the **실시간 매장 현황** widget in the Community section are powered by `fetchStoreStatus()` in `js/main.js`.

Currently it uses a local time calculation as a placeholder. To connect to a real POS system, replace the function body with a `fetch()` call to your API endpoint:

```js
async function fetchStoreStatus() {
  const res = await fetch('/api/store-status');
  return res.json();
  // Expected: { isOpen: boolean, todayHours: string, vacancies: number | null }
}
```

## Getting Started

No build step required. Open `index.html` directly in a browser, or serve with any static file server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Customisation Checklist

- [ ] Replace `CC` logo mark with actual shop logo (`assets/logo.svg`)
- [ ] Update Google Maps link in hero and footer
- [ ] Update KakaoTalk channel URL (`https://pf.kakao.com/_placeholder`)
- [ ] Update Instagram URL
- [ ] Fill real tournament data in `TOURNAMENTS` array (`js/main.js`)
- [ ] Fill real inventory data in `HOT_ITEMS` / `SINGLES` arrays
- [ ] Add product images in `assets/` and update product cards to use `<img data-src="...">` for lazy loading
- [ ] Connect `fetchStoreStatus()` to your POS API
- [ ] Update address in footer