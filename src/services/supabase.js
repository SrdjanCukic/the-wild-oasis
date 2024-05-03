import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://sfalgfcprtdudjxysrgl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmYWxnZmNwcnRkdWRqeHlzcmdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAyNzg3ODYsImV4cCI6MjAyNTg1NDc4Nn0.h3UsqINe74oeRPlnboDkF9wlKNLu4zdtw8RA68-e9xY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
