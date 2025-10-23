import { createClient } from '@supabase/supabase-js'
import { Database } from './database.types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://bbuzbfysmjaelqggwdvr.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJidXpiZnlzbWphZWxxZ2d3ZHZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1NDMyNjgsImV4cCI6MjA3NjExOTI2OH0.z24Zj_EO7_YNcLvU7xL-6WMIj-FAY4GERkEVZwq0FaI'

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)
