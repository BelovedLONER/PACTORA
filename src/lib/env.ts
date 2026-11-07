// Validated access to public environment variables.
// Values that are not valid (e.g. leftover "@secret" placeholders) are ignored
// so the app falls back to safe defaults instead of crashing at build/runtime.

function validUrl(value: string | undefined): string | undefined {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:" ? value : undefined;
  } catch {
    return undefined;
  }
}

function validAddress(value: string | undefined): `0x${string}` | undefined {
  return value && /^0x[a-fA-F0-9]{40}$/.test(value) ? (value as `0x${string}`) : undefined;
}

export const SITE_URL =
  validUrl(process.env.NEXT_PUBLIC_SITE_URL) ||
  validUrl(process.env.URL) ||
  "http://localhost:3000";

export const RPC_URL =
  validUrl(process.env.NEXT_PUBLIC_ROBINHOOD_TESTNET_RPC_URL) || "https://testnet.rpc.robinhood.com";

export const BLOCK_EXPLORER_URL =
  validUrl(process.env.NEXT_PUBLIC_BLOCK_EXPLORER_URL) || "https://testnet.explorer.robinhood.com";

export const ESCROW_CONTRACT_ADDRESS = validAddress(process.env.NEXT_PUBLIC_ESCROW_CONTRACT_ADDRESS);

export const SUPABASE_URL = validUrl(process.env.NEXT_PUBLIC_SUPABASE_URL);

const rawAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
export const SUPABASE_ANON_KEY = rawAnonKey && !rawAnonKey.startsWith("@") ? rawAnonKey : undefined;
