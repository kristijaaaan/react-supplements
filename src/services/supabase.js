import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = "https://krlfxzogfsrxjucqshdy.supabase.co";
const supabaseUrl = 'https://hlgsmaeylzradwppifkm.supabase.co';
// const supabaseKey =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtybGZ4em9nZnNyeGp1Y3FzaGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4MjI1NzksImV4cCI6MjAwOTM5ODU3OX0.xC2PA53p0RfViUTkex-oRSw_DW1zFg3-YGNEe-taPlM';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsZ3NtYWV5bHpyYWR3cHBpZmttIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU3NDI3MDUsImV4cCI6MjAxMTMxODcwNX0.gopBdinaT2OBra0MZTAdf74o3FolAJwfUaFv2Pe1F7o';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
