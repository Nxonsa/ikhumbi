// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ykmhtteefcqqqoaksaqd.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlrbWh0dGVlZmNxcXFvYWtzYXFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM0ODM0NDAsImV4cCI6MjA0OTA1OTQ0MH0.Y-VTsXol-_KFNEEQR3Tc-if3G3MpSkPse3sgaYrH538";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);