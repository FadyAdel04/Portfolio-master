import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || process.env.REACT_APP_SUPABASE_PUBLISHABLE_KEY; // using the one provided

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing Supabase env variables");
}

export const supabase = createClient(supabaseUrl || "", supabaseAnonKey || "");
