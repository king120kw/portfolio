import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gnvyrpcfdqhkpgbfzfwo.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdudnlycGNmZHFoa3BnYmZ6ZndvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYwNjg0MjcsImV4cCI6MjA4MTY0NDQyN30.BospxsqgjMvMTC86SFziXVSWLwtWjgpUiVWJlROnetc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
