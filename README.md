# Om Parkash Namkeens

Storefront for **Om Parkash Namkeens** — a family-run namkeen manufacturer in Kotkapura, Punjab (since 1995).

**Live:** https://om-parkash-namkeens.vercel.app

## Stack
- **Front end:** single-page site rendered by a self-contained runtime (`support.js` loads React and mounts the `<x-dc>` template in `index.html`). No build step required.
- **Data:** product catalogue in `catalogue.js` (also inlined into the page as `window.__CATALOGUE`).
- **Backend:** Supabase (Postgres) — captures wholesale enquiries and cart order-requests. Every submission is also handed off to WhatsApp.

## Structure
```
index.html                 # the site (served copy; mirror of the .dc.html source)
Om-Parkash-Namkeens.dc.html # design-canvas source (edit here, then copy to index.html)
support.js                 # runtime (do not edit — generated)
catalogue.js               # product/category data
assets/                    # products, shop photos, hero, logo, founder
supabase/schema.sql        # database schema + row-level security policies
```

## Run locally
```bash
python3 -m http.server 8777
# open http://localhost:8777
```
After editing `Om-Parkash-Namkeens.dc.html`, copy it to `index.html` so the served page matches.

## Supabase
- Project: `epnuegvelnqkjggqitvg` (URL + **public anon** key are embedded in `index.html` — safe to expose).
- To (re)create the database, run `supabase/schema.sql` in the Supabase SQL Editor.
- Forms insert only; enquiry/order data is **not** publicly readable (owner reads it in the Supabase dashboard).

## Deploy (Vercel)
Static deploy of the trimmed `dist/` build to the **TARAhut's projects** team:
```bash
# build dist/ = index.html + support.js + catalogue.js + referenced assets, then:
vercel deploy --prod --scope tara-hut-s-projects
```

## Pending
- Real prices + pack sizes (currently "pending") → order totals, Razorpay
- Admin dashboard for enquiries/orders
- Custom domain: omparkashnamkeens.com
