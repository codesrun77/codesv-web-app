/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string
  readonly VITE_SUPABASE_ANON_KEY: string
  readonly VITE_PUBLIC_SUPABASE_ANON_KEY: string
  readonly VITE_STRIPE_PUBLISHABLE_KEY: string
  readonly VITE_STRIPE_SECRET_KEY: string
  readonly VITE_MAILERSEND_API_TOKEN: string
  readonly VITE_ZOHO_CLIENT_ID: string
  readonly VITE_ZOHO_CLIENT_SECRET: string
  readonly VITE_ZOHO_REFRESH_TOKEN: string
  readonly VITE_OPENAI_API_KEY: string
  readonly VITE_APP_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}