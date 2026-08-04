-- =====================================================================
-- Om Parkash Namkeens — Admin views (owner dashboard)
-- Clean, newest-first, key-columns-only views over the raw tables.
-- Paste this whole file into: Supabase Dashboard -> SQL Editor -> Run.
-- Safe to re-run (create or replace). Read-only: no data is changed.
--
-- SECURITY: each view uses security_invoker = on, so it obeys Row Level
-- Security. The public/anon key CANNOT read these (no anon SELECT policy);
-- we also REVOKE access explicitly. You (the owner) read them in the
-- Supabase dashboard, which runs with full access.
-- After running, find them in: Table Editor -> "Views" (left list).
-- =====================================================================

-- ---------------------------------------------------------------------
-- 1) ORDERS — one row per order, with a readable item summary
-- ---------------------------------------------------------------------
create or replace view public.admin_orders
with (security_invoker = on) as
select
  o.created_at                                        as received_at,
  o.status,                                           -- requested | confirmed | packed | delivered | cancelled
  o.customer_name,
  o.customer_phone,
  o.customer_city,
  o.customer_address,
  o.note,
  count(oi.id)                                        as items_count,
  string_agg(
    oi.qty || '× ' || oi.product_name
      || coalesce(' (' || oi.pack_label || ')', ''),
    ', ' order by oi.product_name
  )                                                   as items,
  o.payment_method,
  o.payment_status,
  o.total,
  o.source,
  o.id                                                as order_id
from public.orders o
left join public.order_items oi on oi.order_id = o.id
group by o.id
order by o.created_at desc;

revoke all on public.admin_orders from anon, authenticated;

-- ---------------------------------------------------------------------
-- 2) WHOLESALE ENQUIRIES — newest first, key columns
-- ---------------------------------------------------------------------
create or replace view public.admin_enquiries
with (security_invoker = on) as
select
  created_at                                          as received_at,
  status,                                             -- new | contacted | closed
  business,
  contact_person,
  city,
  products,
  quantity,
  message,
  id                                                  as enquiry_id
from public.enquiries
order by created_at desc;

revoke all on public.admin_enquiries from anon, authenticated;

-- ---------------------------------------------------------------------
-- 3) CONTACT MESSAGES — newest first (form may be added later)
-- ---------------------------------------------------------------------
create or replace view public.admin_contact_messages
with (security_invoker = on) as
select
  created_at                                          as received_at,
  status,                                             -- new | ...
  name,
  phone,
  city,
  message,
  id                                                  as message_id
from public.contact_messages
order by created_at desc;

revoke all on public.admin_contact_messages from anon, authenticated;

-- =====================================================================
-- Done. Open Table Editor -> Views: admin_orders / admin_enquiries /
-- admin_contact_messages. They are sortable & filterable in the UI.
-- =====================================================================
