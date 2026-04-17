-- Seed script for Supabase
-- Run this in your Supabase SQL Editor to populate your projects table.
-- The image paths and img_url fields are left empty strings so you can upload and replace them via your Admin Dashboard.

INSERT INTO projects (title, description, gh_link, demo_link, category, date, skills, tools, key_features, img_url, image_paths)
VALUES
(
  'Care Pulse Health care',
  'Care Pulse Health Care is a platform dedicated to providing comprehensive health services and wellness information. It offers users easy access to healthcare professionals, services, and resources tailored to their needs.',
  'https://github.com/FadyAdel04/CarePulesHealthCare',
  'https://care-pules-health-care.vercel.app/',
  'Web Development',
  'Nov 27, 2024',
  '["React", "Next.js", "TypeScript", "Tailwind"]'::jsonb,
  '["VS Code", "API", "AppWrite", "Vercel", "GitHub", "SMS"]'::jsonb,
  '["Healthcare Services: Comprehensive directory of medical services", "Doctor Profiles: Detailed profiles", "Appointment Booking: User-friendly appointment scheduling"]'::jsonb,
  '',
  '[]'::jsonb
),
(
  'Suk Arabia E-Commerce Store',
  'Suk Arabia is a modern, responsive e-commerce platform designed for selling electronics and gadgets in the Gulf region. The store features an elegant Arabic-right-to-left (RTL) interface.',
  'https://github.com/FadyAdel04/Suk-Arabia-Store',
  'https://suk-arabia-store.vercel.app/',
  'E-Commerce',
  'June 16, 2025',
  '["React", "Next.js", "Tailwind", "ShadCN", "TypeScript"]'::jsonb,
  '["VS Code", "Vercel", "Figma"]'::jsonb,
  '["RTL Support: Fully designed for Arabic users", "Product Display", "Modern UI"]'::jsonb,
  '',
  '[]'::jsonb
),
(
  'Rawafed Academy Online Platform',
  'Rawafed Academy is a comprehensive Arabic online learning platform offering educational content and programs for students across various levels.',
  'https://github.com/FadyAdel04/rawafed-academy-online',
  'https://rawafed-academy-online.vercel.app/',
  'Education',
  'June 28, 2025',
  '["React", "Next.js", "Tailwind", "ShadCN", "TypeScript"]'::jsonb,
  '["VS Code", "Vercel", "Figma"]'::jsonb,
  '["RTL Arabic Support", "Structured Learning", "Dynamic Video Playback"]'::jsonb,
  '',
  '[]'::jsonb
),
(
  'Aurora Brand Store',
  'Aurora Brand Store is a modern, visually engaging e-commerce website designed to showcase stylish fashion products and deliver a smooth online shopping experience.',
  'https://github.com/FadyAdel04/stitch-showcase-static',
  'https://aurora-brand-store.vercel.app/',
  'E-Commerce',
  'July 10, 2025',
  '["React", "Next.js", "Tailwind", "TypeScript"]'::jsonb,
  '["VS Code", "Vercel", "Figma"]'::jsonb,
  '["Elegant UI Design", "Product Showcase", "Responsive Layout"]'::jsonb,
  '',
  '[]'::jsonb
),
(
  'Imaginify AI Platform',
  'Imaginify is an innovative platform that offers customizable digital design services. Users can create unique designs tailored to their preferences.',
  'https://github.com/FadyAdel04/Imaginify',
  'https://imaginify-eight-pi.vercel.app/',
  'Artificial Intelligence',
  'June 3, 2024',
  '["React", "Next.js", "Tailwind", "TypeScript"]'::jsonb,
  '["VS Code", "Vercel", "Strapi", "Figma", "Ai"]'::jsonb,
  '["Creative Tools: Provides image restoration", "Credit System"]'::jsonb,
  '',
  '[]'::jsonb
),
(
  'Golden Escape Tourism Portal',
  'Golden Escape is a dynamic tourism booking portal tailored for showcasing rural tourism, farm stays, and unique travel experiences in Egypt and the Gulf.',
  'https://github.com/FadyAdel04/golden-escape-portal',
  'https://golden-escape-portal.vercel.app/',
  'Tourism',
  'June 29, 2025',
  '["React", "Next.js", "Tailwind", "TypeScript", "ShadCN"]'::jsonb,
  '["VS Code", "Vercel", "Figma"]'::jsonb,
  '["Tourism-Focused UI", "Responsive Booking System", "Multilingual Support"]'::jsonb,
  '',
  '[]'::jsonb
),
(
  'Holla Movies Platform',
  'Holla Movies is a user-friendly streaming platform that provides a vast collection of movies and TV shows.',
  'https://github.com/FadyAdel04/Holla-Movies',
  'https://holla-movies.vercel.app/',
  'Entertainment',
  'September 25, 2024',
  '["React", "Next.js", "Tailwind"]'::jsonb,
  '["Vercel", "GitHub", "Figma"]'::jsonb,
  '["Browse by Genre", "Trending and Top-Rated", "Search Functionality"]'::jsonb,
  '',
  '[]'::jsonb
),
(
  'Café Bloom Bistro Website',
  'Café Bloom is a modern, elegant website built to showcase the unique charm of a local bistro or café.',
  'https://github.com/FadyAdel04/cafe-bloom-bistro-site',
  'https://cafe-bloom-bistro-site.vercel.app/',
  'Business',
  'June 1, 2025',
  '["React", "Next.js", "Tailwind", "ShadCN"]'::jsonb,
  '["VS Code", "Vercel", "Figma"]'::jsonb,
  '["Beautiful UI", "Responsive Design", "Gallery Showcase"]'::jsonb,
  '',
  '[]'::jsonb
),
(
  'YC Directory',
  'A Next.js 15 platform where entrepreneurs can submit their startup ideas for virtual pitch competitions.',
  'https://github.com/FadyAdel04/YC_Directory',
  'https://yc-directory-nine-zeta.vercel.app/',
  'Business',
  'Nov 26, 2024',
  '["React", "Next.js", "Sanity", "Tailwind", "ShadCN", "TypeScript"]'::jsonb,
  '["VS Code", "GitHub", "API", "Vercel"]'::jsonb,
  '["Live Content API", "GitHub Authentication", "Pitch Submission"]'::jsonb,
  '',
  '[]'::jsonb
),
(
  'Tech Trove Shop',
  'Tech Trove Shop is an online store specializing in electronic products and gadgets. It features a modern interface that allows users to browse a wide range of items.',
  'https://github.com/FadyAdel04/Tech-Trove-Shop',
  'https://tech-trove-shop.vercel.app/',
  'E-Commerce',
  'Nov 26, 2024',
  '["React", "Next.js", "TypeScript", "Tailwind"]'::jsonb,
  '["VS Code", "API", "Strapi", "Vercel", "GitHub", "Firebase"]'::jsonb,
  '["Product Catalog", "Modern Interface"]'::jsonb,
  '',
  '[]'::jsonb
);
