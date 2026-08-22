import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

console.log('Testing Supabase Connection...');
console.log('Supabase URL:', supabaseUrl);
console.log('Key prefix:', supabaseAnonKey ? supabaseAnonKey.substring(0, 15) + '...' : 'NONE');

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function checkConnection() {
  try {
    // Attempt to query any public endpoint or auth settings
    const { data, error } = await supabase.auth.getSession();
    
    if (error) {
      console.error('❌ Supabase Connection error:', error.message);
    } else {
      console.log('✅ Supabase Connection Successful! Project endpoint reachable and responsive.');
      console.log('Session response:', data);
    }
  } catch (err) {
    console.error('❌ Connection exception:', err);
  }
}

checkConnection();
