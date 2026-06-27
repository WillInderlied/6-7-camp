# 6-7 Camp — Summer Lacrosse Camp Landing Page

A responsive, professional landing page for the **6-7 Camp** lacrosse camp, built with **React (Vite)** and **Tailwind CSS**. It includes a Hero section, About the Camp, a Daily Schedule, FAQs, and an embedded Google Form with "Register Now" calls to action throughout.

## Tech stack

- [React 18](https://react.dev/)
- [Vite 6](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/) (via the official `@tailwindcss/vite` plugin)

## Getting started (local development)

Requires [Node.js](https://nodejs.org/) 18+.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

## The registration form

The "Register Now" buttons link to the Google Form, and the **Register** section also embeds the form inline via an `<iframe>`. Both point at the same form. To change the form, update the two constants at the top of `src/App.jsx`:

```js
const FORM_URL = 'https://docs.google.com/forms/d/e/.../viewform?usp=dialog'
const FORM_EMBED_URL = 'https://docs.google.com/forms/d/e/.../viewform?embedded=true'
```

> Tip: In Google Forms, click **Send → `< >` (embed HTML)** to get the `embedded=true` URL.

## Deploy to Vercel (free)

### Option A — Git + Vercel dashboard (recommended)

1. Push this project to a GitHub/GitLab/Bitbucket repository.
2. Go to [vercel.com](https://vercel.com), click **Add New → Project**, and import the repo.
3. Vercel auto-detects Vite. Keep the defaults:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**. Your site goes live at `https://<your-project>.vercel.app`.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel        # follow the prompts for a preview deploy
vercel --prod # deploy to production
```

## Customizing content

All page content lives in `src/App.jsx` in plain data arrays near the top of the file:

- `highlights` — the About section feature cards
- `schedule` — the Daily Schedule rows
- `faqs` — the FAQ questions and answers

Edit those arrays to update copy without touching the layout.
