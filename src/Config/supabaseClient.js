import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://zrepmgykgirgkcfpbxus.supabase.co'
const supbaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpyZXBtZ3lrZ2lyZ2tjZnBieHVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk2OTA2OTEsImV4cCI6MjA0NTI2NjY5MX0.RxmCfF1aJJOwBMWCmAlVeG9olObVa5C-RSWcJ7T92X4'

const supabase = createClient(supabaseUrl, supbaseKey)

export default supabase