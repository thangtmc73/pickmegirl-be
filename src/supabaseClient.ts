import { createClient } from "@supabase/supabase-js"
import { config } from "dotenv"
config()
console.log(
  "process.env.SUPABASE_PROJECT_URL",
  process.env.SUPABASE_PROJECT_URL
)
const supabase = createClient<Database>(
  process.env.SUPABASE_PROJECT_URL as string,
  process.env.SUPABASE_ANON_KEY as string
)

export default supabase

type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

interface Database {
  public: {
    Tables: {
      session: {
        Row: {
          created_at: string
          id: string
        }
        Insert: {
          created_at: string
          id?: string
        }
      }
      session_user: {
        Row: {
          session_id: string
          created_at: string
          id: string
          name: string
        }
        Insert: {
          session_id: string
          created_at: string
          id?: string
          name: string
        }
      }
      user_conversation: {
        Row: {
          conversation_id: string | null
          id: string
          user_id: string | null
        }
        Insert: {
          conversation_id?: string | null
          id?: string
          user_id?: string | null
        }
        Update: {
          conversation_id?: string | null
          id?: string
          user_id?: string | null
        }
      }
      message: {
        Row: {
          created_at: string
          id: string
          session_id: string
          sender_id: string
          value: number
        }
        Insert: {
          created_at: string
          id?: string
          session_id: string
          sender_id: string
          value: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
