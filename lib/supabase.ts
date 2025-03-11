import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qqctowpvctqdggwlwwnp.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxY3Rvd3B2Y3RxZGdnd2x3d25wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3OTM1MjMsImV4cCI6MjA1NjM2OTUyM30.me78aj_kMyuNocg2DSSkj1DE3VQB2gnj3O_boEyHjno";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
