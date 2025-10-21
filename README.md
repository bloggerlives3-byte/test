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

Populate `.env.local` with:

```
NEXT_PUBLIC_SUPABASE_URL=https://bbpoeyzaxxsnawcxkydp.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJicG9leXpheHhzbmF3Y3hreWRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA3NDg0MDksImV4cCI6MjA3NjMyNDQwOX0.fYDoVa3GyA126bXIpSynVJesFRAmqqt8PTAlyRkcCuQ
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
- `/pricing/packs` Dedicated pack marketplace with product detail pages and checkout.

Local storage retains smoothies and favorites for offline use. When Supabase keys are provided, actions sync in the background.

### Scripts

- `npm run dev` – start the local dev server (Turbopack enabled).
- `npm run build` – production build.
- `npm run lint` – ESLint check (already clean).

### Design Notes

Brand styling uses Montserrat headings, Open Sans body copy, and a fresh palette (leaf green, berry pink, mango yellow) per the PRD guidance.
