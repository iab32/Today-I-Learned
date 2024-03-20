import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://fakjalpdywwtzbslvnwr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZha2phbHBkeXd3dHpic2x2bndyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY5MjQ1OTksImV4cCI6MjAyMjUwMDU5OX0.6vDWGrzN_eXVS9ciQHfkJhVvrqpnbbXUONZKnXfSnBA";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
