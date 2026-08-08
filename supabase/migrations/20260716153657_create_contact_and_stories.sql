/*
# Create contact_submissions and stories tables (single-tenant, no auth)

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key)
  - `name` (text, not null)
  - `email` (text, not null)
  - `country` (text, nullable)
  - `church_or_organization` (text, nullable)
  - `message` (text, not null)
  - `created_at` (timestamptz, default now)
- `stories`
  - `id` (uuid, primary key)
  - `title` (text, not null)
  - `excerpt` (text, not null)
  - `body` (text, not null)
  - `category` (text, not null) - one of: Ministry Updates, Testimonies, Camp Reports, School of Leadership Updates, Social Outreach Stories, Prayer Requests, Partner Stories, Mission Center Updates
  - `author` (text, nullable)
  - `location` (text, nullable)
  - `image_url` (text, nullable)
  - `published_at` (date, default today)
  - `created_at` (timestamptz, default now)
2. Security
- Enable RLS on both tables.
- Allow anon + authenticated INSERT on contact_submissions (public contact form).
- Allow anon + authenticated SELECT on stories (public stories listing).
- No read access on contact_submissions for anon (submissions are private to org staff via dashboard).
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  country text,
  church_or_organization text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact" ON contact_submissions FOR INSERT
  TO anon, authenticated WITH CHECK (true);

CREATE TABLE IF NOT EXISTS stories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  excerpt text NOT NULL,
  body text NOT NULL,
  category text NOT NULL,
  author text,
  location text,
  image_url text,
  published_at date DEFAULT CURRENT_DATE,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE stories ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_stories" ON stories;
CREATE POLICY "anon_select_stories" ON stories FOR SELECT
  TO anon, authenticated USING (true);

CREATE INDEX IF NOT EXISTS idx_stories_category ON stories(category);
CREATE INDEX IF NOT EXISTS idx_stories_published ON stories(published_at DESC);
