-- =====================================================================
-- Om Parkash Namkeens — Supabase schema
-- Designed for the full store from day one:
--   * enquiries + order requests work NOW (no prices/payment needed)
--   * products/categories, prices, payments (Razorpay) and admin plug in later
-- Paste this whole file into: Supabase Dashboard -> SQL Editor -> Run
-- Safe to re-run (uses IF NOT EXISTS / idempotent policies).
-- =====================================================================

-- ---------- extensions ----------
create extension if not exists "pgcrypto";  -- for gen_random_uuid()

-- ---------- helper: auto updated_at ----------
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end; $$;

-- =====================================================================
-- CATALOG (public-readable; owner/admin writes). Prices nullable for now.
-- The live site still reads catalogue.js today; migrate to these tables
-- when prices are finalised.
-- =====================================================================
create table if not exists public.categories (
  id          uuid primary key default gen_random_uuid(),
  slug        text unique not null,
  name        text not null,
  sort_order  int  not null default 0,
  created_at  timestamptz not null default now()
);

create table if not exists public.products (
  id            uuid primary key default gen_random_uuid(),
  slug          text unique not null,
  name          text not null,
  category_slug text references public.categories(slug) on update cascade on delete set null,
  image         text,
  price         numeric(10,2),                 -- null = "price pending"
  pack_sizes    jsonb not null default '[]',   -- [{label, price, stockStatus}]
  stock_status  text not null default 'pending-confirmation',
  featured      boolean not null default false,
  bestseller    boolean not null default false,
  ingredients   text,
  allergens     text,
  shelf_life    text,
  active        boolean not null default true,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);
drop trigger if exists products_updated_at on public.products;
create trigger products_updated_at before update on public.products
  for each row execute function public.set_updated_at();

-- =====================================================================
-- WHOLESALE ENQUIRIES
-- =====================================================================
create table if not exists public.enquiries (
  id             uuid primary key default gen_random_uuid(),
  created_at     timestamptz not null default now(),
  business       text not null,
  contact_person text not null,
  city           text not null,
  products       text not null,
  quantity       text,
  message        text,
  status         text not null default 'new'   -- new | contacted | closed
);

-- =====================================================================
-- CONTACT MESSAGES (general; form can be added later)
-- =====================================================================
create table if not exists public.contact_messages (
  id         uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name       text not null,
  phone      text not null,
  city       text,
  message    text not null,
  status     text not null default 'new'
);

-- =====================================================================
-- ORDERS + ORDER ITEMS
-- "Order request" now (no total/payment). Razorpay + totals wire in later.
-- =====================================================================
create table if not exists public.orders (
  id              uuid primary key default gen_random_uuid(),
  created_at      timestamptz not null default now(),
  customer_name   text not null,
  customer_phone  text not null,
  customer_city   text,
  customer_address text,
  note            text,
  payment_method  text not null default 'pending',  -- pending | COD | UPI | razorpay
  payment_status  text not null default 'unpaid',    -- unpaid | paid | refunded
  razorpay_order_id   text,   -- filled when Razorpay is integrated
  razorpay_payment_id text,
  total           numeric(10,2),   -- null until prices exist
  status          text not null default 'requested', -- requested | confirmed | packed | delivered | cancelled
  source          text not null default 'website',
  updated_at      timestamptz not null default now()
);
drop trigger if exists orders_updated_at on public.orders;
create trigger orders_updated_at before update on public.orders
  for each row execute function public.set_updated_at();

create table if not exists public.order_items (
  id           uuid primary key default gen_random_uuid(),
  order_id     uuid not null references public.orders(id) on delete cascade,
  product_slug text,
  product_name text not null,
  pack_label   text,
  qty          int  not null default 1,
  unit_price   numeric(10,2),   -- null until prices exist
  line_total   numeric(10,2)
);
create index if not exists order_items_order_id_idx on public.order_items(order_id);

-- =====================================================================
-- ROW LEVEL SECURITY
-- Public (anon) can: read active catalog, submit enquiries/contact/orders.
-- Public CANNOT read enquiries/contact/orders — the owner reads those in
-- the Supabase dashboard (or a future admin using the service role).
-- =====================================================================
alter table public.categories      enable row level security;
alter table public.products        enable row level security;
alter table public.enquiries       enable row level security;
alter table public.contact_messages enable row level security;
alter table public.orders          enable row level security;
alter table public.order_items     enable row level security;

-- Catalog: public read (only active products)
drop policy if exists "anon read categories" on public.categories;
create policy "anon read categories" on public.categories
  for select to anon using (true);

drop policy if exists "anon read active products" on public.products;
create policy "anon read active products" on public.products
  for select to anon using (active = true);

-- Enquiries: public insert only
drop policy if exists "anon insert enquiries" on public.enquiries;
create policy "anon insert enquiries" on public.enquiries
  for insert to anon with check (true);

-- Contact: public insert only
drop policy if exists "anon insert contact" on public.contact_messages;
create policy "anon insert contact" on public.contact_messages
  for insert to anon with check (true);

-- Orders: public insert only
drop policy if exists "anon insert orders" on public.orders;
create policy "anon insert orders" on public.orders
  for insert to anon with check (true);

drop policy if exists "anon insert order_items" on public.order_items;
create policy "anon insert order_items" on public.order_items
  for insert to anon with check (true);

-- (No anon SELECT on enquiries/contact/orders/order_items — owner-only.)
-- =====================================================================
-- Done.
-- =====================================================================
