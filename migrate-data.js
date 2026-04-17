import { createClient } from "@supabase/supabase-js";
import fs from "fs";

// Initialize Supabase. Replace with your actual credentials if not in .env
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'https://wmnjtyhifnsmlrvysgke.supabase.co';
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'sb_publishable_8aBwchvPilsaq2SJBf_V0g_JwigWJHO'; 

const supabase = createClient(supabaseUrl, supabaseKey);

// IMPORTANT: In your actual codebase, images are imported as webpack assets.
// During migration, you will need to upload those images to Supabase Storage, 
// get their public URLs, and place those URLs here.
// Below is the mapped JSON structure based on your current React files.
const projects = [
  {
    title: "Care Pulse Health care",
    description: "Care Pulse Health Care is a platform dedicated to providing comprehensive health services and wellness information.",
    category: "Health",
    img_url: "https://wmnjtyhifnsmlrvysgke.supabase.co/storage/v1/object/public/portfolio-images/health.png", // Supabase storage URL for health
    image_paths: [], // Array of Supabase storage URLs for health1, health2, etc.
    gh_link: "https://github.com/FadyAdel04/CarePulesHealthCare",
    demo_link: "https://care-pules-health-care.vercel.app/",
    skills: ["React", "Next.js", "TypeScript", "Tailwind"],
    technologies: [],
    tools: ["VS Code", "API", "AppWrite", "Vercel", "GitHub", "SMS"],
    key_features: [
      "Healthcare Services: Comprehensive directory of medical services...",
      "Doctor Profiles: Detailed profiles of healthcare professionals..."
    ],
    date: "Nov 27, 2024"
  },
  // Add the rest of your objects from src/App.js here
];

const certificates = [
  {
    title: "ITIDA Gigs – Web Development Training",
    description: "A professional freelancing and web development training program by ITIDA, focused on enhancing technical expertise,",
    category: "Web Development",
    img_url: "", // Supabase storage URL
    org_logos: [], // Supabase storage URLs
    live_link: ""
  },
  // Add the rest of your certificates from Certificates.js
];

const aboutSkills = [
  "HTML", "CSS", "JavaScript", "TypeScript", 
  "React", "Next.js", "Redux", "Bootstrap", 
  "Tailwind", "ShadCN", "WordPress", "WooCommerce", 
  "Framer Motion", "Node.js", "Supabase", 
  "SQL", "MongoDB" ,"Express.js"
];

const aboutTools = [
  "Git", "GitHub", "Vercel", "Figma", "VS Code",
  "Lovable", "Cursor", "Postman", "Antigravity",
  "Animation", "Responsive"
];

async function migrateData() {
  console.log("Starting DB migration to Supabase...");

  // 1. Migrate Projects
  for (const project of projects) {
    const { error } = await supabase.from('projects').insert([project]);
    if (error) console.error("Error inserting project:", project.title, error);
    else console.log("Inserted project:", project.title);
  }

  // 2. Migrate Certificates
  for (const cert of certificates) {
    const { error } = await supabase.from('certificates').insert([cert]);
    if (error) console.error("Error inserting cert:", cert.title, error);
    else console.log("Inserted cert:", cert.title);
  }

  // 3. Migrate About Info
  const { error: errSkills } = await supabase.from('about_info').insert([
    { type: 'skills', items: aboutSkills }
  ]);
  if (errSkills) console.error("Error inserting skills:", errSkills);

  const { error: errTools } = await supabase.from('about_info').insert([
    { type: 'tools', items: aboutTools }
  ]);
  if (errTools) console.error("Error inserting tools:", errTools);

  console.log("Migration Complete!");
}

migrateData();
