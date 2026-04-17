-- Supabase SQL Schema for Portfolio

-- Create tables

-- 1. Projects
CREATE TABLE projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text,
  img_url text,
  image_paths jsonb,
  gh_link text,
  demo_link text,
  skills jsonb,
  technologies jsonb,
  tools jsonb,
  key_features jsonb,
  date text,
  created_at timestamptz DEFAULT now()
);

-- 2. Certificates
CREATE TABLE certificates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text,
  img_url text,
  org_logos jsonb,
  live_link text,
  created_at timestamptz DEFAULT now()
);

-- 3. Work Experience
CREATE TABLE work_experience (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  company text NOT NULL,
  duration text,
  type text,
  roles jsonb,
  created_at timestamptz DEFAULT now()
);

-- 4. About Info (skills and tools)
CREATE TABLE about_info (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type text NOT NULL UNIQUE, -- 'skills' or 'tools'
  items jsonb NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security (RLS)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE work_experience ENABLE ROW LEVEL SECURITY;
ALTER TABLE about_info ENABLE ROW LEVEL SECURITY;

-- Create admin policy (Only the specific admin email can write/edit)
-- Assuming you use Supabase Auth, we check the user's email
CREATE OR REPLACE FUNCTION is_admin()
RETURNS boolean AS $$
BEGIN
  RETURN (auth.jwt() ->> 'email') = 'fastfady2019@gmail.com';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Projects Policies
CREATE POLICY "Public read access for projects" ON projects
  FOR SELECT USING (true);

CREATE POLICY "Admin write access for projects" ON projects
  FOR ALL USING (is_admin());

-- Certificates Policies
CREATE POLICY "Public read access for certificates" ON certificates
  FOR SELECT USING (true);

CREATE POLICY "Admin write access for certificates" ON certificates
  FOR ALL USING (is_admin());

-- Work Experience Policies
CREATE POLICY "Public read access for experience" ON work_experience
  FOR SELECT USING (true);

CREATE POLICY "Admin write access for experience" ON work_experience
  FOR ALL USING (is_admin());

-- About Info Policies
CREATE POLICY "Public read access for about info" ON about_info
  FOR SELECT USING (true);

CREATE POLICY "Admin write access for about info" ON about_info
  FOR ALL USING (is_admin());

-- Storage Setup
-- Note: Replace with actual Storage creation via the Supabase dashboard or API if needed.
insert into storage.buckets (id, name, public) values ('portfolio-images', 'portfolio-images', true);
insert into storage.buckets (id, name, public) values ('resume', 'resume', true);

CREATE POLICY "Public read access for portfolio images" ON storage.objects
  FOR SELECT USING (bucket_id = 'portfolio-images');

CREATE POLICY "Admin write access for portfolio images" ON storage.objects
  FOR ALL USING (bucket_id = 'portfolio-images' AND is_admin());

CREATE POLICY "Public read access for resume" ON storage.objects
  FOR SELECT USING (bucket_id = 'resume');

CREATE POLICY "Admin write access for resume" ON storage.objects
  FOR ALL USING (bucket_id = 'resume' AND is_admin());
