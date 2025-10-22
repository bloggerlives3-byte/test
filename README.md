## SMU-V Guide MVP

Next.js (App Router) + Supabase build for the SMU-V smoothie companion. The MVP delivers a guided smoothie builder, signature recipe library, grocery list exports, and a daily wellness tip surfaced on the home screen.

### Prerequisites

- Node 18+
- Supabase project (optional for offline-only mode)

### Setup

```bash
npm install
cp .env.example .env.local
# populate Supabase keys if available
npm run dev
```

Visit `http://localhost:3000` to explore the experience.

### Supabase Configuration

Populate `.env.local` with your Supabase project credentials:

```
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Create tables to sync saved smoothies, favorite recipes, and wellness tips:

```sql
create table if not exists custom_smoothies (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  ingredients text[] not null,
  boosters text[] not null,
  calories numeric,
  protein numeric,
  carbs numeric,
  fat numeric,
  created_at timestamptz default now()
);

create table if not exists favorite_recipes (
  recipe_id text primary key,
  created_at timestamptz default now()
);

create table if not exists wellness_tips (
  id uuid primary key default uuid_generate_v4(),
  tip text not null,
  created_at timestamptz default now()
);
```

Seed `signature_recipes` (optional) or rely on the built-in library:

```sql
create table if not exists signature_recipes (
  id text primary key,
  name text not null,
  description text,
  color text,
  calories numeric,
  protein numeric,
  carbs numeric,
  fat numeric,
  instructions jsonb,
  ingredients jsonb,
  boosters text[]
);
```

### Product Walkthrough

- `/` Home hero, daily wellness tip, feature highlights, and top recipes.
- `/builder` Multi-select ingredient builder with live macros, booster toggles, and local + Supabase persistence.
- `/recipes` Signature library with step-by-step instructions and favorite syncing.
- `/grocery` Generates a combined grocery checklist with clipboard/email/download export options.
- `/pricing` Freemium, Premium, and Pro plans with shoppable add-on packs.
- `/pricing/free`, `/pricing/premium`, `/pricing/pro` tier deep-dives with CTAs into checkout.
- `/pricing/packs` Dedicated pack marketplace with product detail pages and checkout.
- `/pricing/checkout` Demo checkout flow ready to wire to Stripe.
- `/premium/success` Post-purchase resource hub for SMU-V+ Premium members (set Stripe return URL to `https://smuvvguide.vercel.app/premium/success`).

Local storage retains smoothies and favorites for offline use. When Supabase keys are provided, actions sync in the background.

### Scripts

- `npm run dev` – start the local dev server (Turbopack enabled).
- `npm run build` – production build.
- `npm run lint` – ESLint check (already clean).

### Stripe Integration

- Set the following env vars with your Stripe price IDs (see `.env.example`):
  - `NEXT_PUBLIC_STRIPE_PRICE_PREMIUM`
  - `NEXT_PUBLIC_STRIPE_PRICE_PRO`
  - `NEXT_PUBLIC_STRIPE_PRICE_PACK_IMMUNITY`
  - `NEXT_PUBLIC_STRIPE_PRICE_PACK_LOW_SUGAR`
  - `NEXT_PUBLIC_STRIPE_PRICE_PACK_KIDS`
- Update `src/app/pricing/checkout/page.tsx` to call your API route that creates Stripe Checkout Sessions (the current handler is a stub with an alert).
- Replace the sample card fields with Stripe Elements or redirect to a hosted Checkout session once your backend is wired.
- If you are using Stripe Buy Buttons, edit `src/app/pricing/premium/page.tsx` (component `StripeBuyButton`) with your live `buy-button-id`, `publishable-key`, and optional fallback URL. Set Stripe’s redirect URL to `https://smuvvguide.vercel.app/premium/success` so customers land on their resource hub.

### Design Notes

Brand styling uses Montserrat headings, Open Sans body copy, and a fresh palette (leaf green, berry pink, mango yellow) per the PRD guidance. The header now includes a responsive hamburger menu for mobile/tablet with accessible labels.
