# Deployment Guide — e-talase.com Homepage

## Overview

This is a **static site** (no build step). Files are served as-is by any web host.
Stack: HTML + React 18 (CDN) + Babel Standalone (CDN) + Google Fonts.

Target domains:
- Homepage → `e-talase.com` (and `www.e-talase.com`)
- App → `app.e-talase.com` (redirect from "Daftar sekarang" button)

---

## Step 1 — Pre-deploy code fixes

Make these changes before uploading.

### 1a. Swap React to production build

In `index.html`, replace the two `unpkg.com` React script tags:

```html
<!-- REPLACE THIS -->
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" ...></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" ...></script>

<!-- WITH THIS -->
<script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js" crossorigin="anonymous"></script>
```

> The development builds are large and print warnings in the console — not appropriate for production.

### 1b. Wire "Daftar sekarang" to redirect to app.e-talase.com

Currently `WaitlistForm` (in `prelaunch-v2.jsx`, line ~280) only sets a local success state.
Update `onSubmit` to redirect after the state is set:

```js
// In WaitlistForm, replace onSubmit with:
const onSubmit = (e) => {
  e.preventDefault();
  if (!email.trim()) return;
  setSubmitted(true);
  // Redirect after a short delay so the user sees the confirmation message
  setTimeout(() => {
    window.location.href = 'https://app.e-talase.com';
  }, 1500);
};
```

If you want to **collect the emails** (recommended for a waitlist), add a call to a form service before the redirect — see Step 1c.

### 1c. (Recommended) Collect waitlist emails

Use one of these free services — no backend needed:

**Option A — Formspree (simplest)**
1. Create a free account at formspree.io and create a new form.
2. Copy your form endpoint, e.g. `https://formspree.io/f/xabc1234`.
3. In `onSubmit`, add before the redirect:

```js
await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email }),
});
```

**Option B — Google Forms hidden embed**
Create a Google Form with one email field, grab the pre-fill URL, and POST to it.

**Option C — Airtable / Notion API**
Use their REST API to insert a row for each submission.

### 1d. Fix the mock browser URL

In `prelaunch-v2.jsx` around line 948, change:

```js
// BEFORE
<FauxBrowser url={`app.e-talase.id/${f.mock}`} ...>

// AFTER
<FauxBrowser url={`app.e-talase.com/${f.mock}`} ...>
```

---

## Step 2 — Choose a hosting provider

This is a static site so any of these work. Recommended in order:

| Provider | Free tier | Custom domain | Deploy method |
|---|---|---|---|
| **Vercel** | Yes | Yes (free) | Drag & drop or CLI |
| **Netlify** | Yes | Yes (free) | Drag & drop or CLI |
| **Cloudflare Pages** | Yes | Yes (free) | Git or direct upload |
| **GitHub Pages** | Yes | Yes (free) | Git push |
| Shared hosting (cPanel) | Paid | Yes | FTP/File Manager |

The fastest option is **Netlify drag & drop** — takes under 2 minutes.

---

## Step 3 — Deploy (Netlify — recommended)

1. Go to [app.netlify.com](https://app.netlify.com) and sign in (or create a free account).
2. From the dashboard, click **"Add new site" → "Deploy manually"**.
3. Drag the entire `deploy/` folder onto the upload area.
4. Netlify assigns a random URL like `https://random-name.netlify.app` — the site is live.

---

## Step 4 — Connect your custom domain

### On Netlify

1. Open your site in Netlify → **Domain management → Add a domain**.
2. Type `e-talase.com` and confirm.
3. Also add `www.e-talase.com` and set it to redirect to `e-talase.com`.
4. Netlify will show you the nameservers or DNS records to add.

### On your domain registrar

Log in to wherever you bought `e-talase.com` (GoDaddy, Namecheap, Niagahoster, etc.).

**Option A — Use Netlify nameservers (easiest, full DNS control to Netlify)**

Replace your registrar's nameservers with the ones Netlify gives you, e.g.:
```
dns1.p01.nsone.net
dns2.p01.nsone.net
dns3.p01.nsone.net
dns4.p01.nsone.net
```

**Option B — Add DNS records manually (keep your current DNS)**

Add these records in your registrar's DNS panel:

```
Type    Name      Value
A       @         75.2.60.5
CNAME   www       e-talase.netlify.app
```

> DNS propagation takes 10 minutes to 48 hours depending on your registrar.

### Enable HTTPS

After the domain is connected, go to **Site settings → Domain management → HTTPS** and click **"Provision certificate"**. Netlify uses Let's Encrypt — it's free and automatic.

---

## Step 5 — Point app.e-talase.com to the app

`app.e-talase.com` is where "Daftar sekarang" redirects users. Add a CNAME or A record pointing to wherever your app is hosted:

```
Type    Name      Value
CNAME   app       your-app-host.com
```

If the app isn't live yet, you can temporarily point it to a "coming soon" page or leave the subdomain unset — just make sure the button in the code doesn't redirect until the app is ready.

---

## Step 6 — Verify

1. Open `https://e-talase.com` — homepage should load with fonts and animations.
2. Open `https://www.e-talase.com` — should redirect to `e-talase.com`.
3. Click "Daftar sekarang" — should redirect to `https://app.e-talase.com`.
4. Open browser DevTools → Console — should be no React warnings.
5. Test on mobile (resize browser or use DevTools device emulation).

---

## Files to upload

All five files must be in the same flat directory:

```
index.html
prelaunch-v2.jsx
prelaunch-final.jsx
hero-animation.jsx
hifi-mocks.jsx
```

No `node_modules`, no build output, no `.env` — just these five files.

---

## Quick reference — Netlify CLI (alternative to drag & drop)

```bash
npm install -g netlify-cli
netlify login
cd path/to/deploy/
netlify deploy --prod --dir .
```

Follow the prompts to link to your site.
