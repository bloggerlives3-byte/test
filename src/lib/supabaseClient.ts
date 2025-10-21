import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let browserClient: SupabaseClient | null = null;

export const getSupabaseClient = (): SupabaseClient | null => {
  if (browserClient) {
    return browserClient;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  browserClient = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
    },
  });

  return browserClient;
};

export type SupabaseSmoothie = {
  id: string;
  name: string;
  ingredients: string[];
  boosters: string[];
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  created_at?: string;
};

export type SupabaseFavoriteRecipe = {
  recipe_id: string;
  created_at?: string;
};
