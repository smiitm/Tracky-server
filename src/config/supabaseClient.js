import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://ncqmbtcmsncvklaimdze.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jcW1idGNtc25jdmtsYWltZHplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzMTczNDYsImV4cCI6MjA1MDg5MzM0Nn0.yJmYk_uBavpdk3kxzDBa7aZmss9LsudkCnnfqKdDKfQ");

export default supabase;