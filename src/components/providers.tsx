"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, createConfig, http, cookieStorage, createStorage } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";

const robinhoodTestnet = {
  id: 9999,
  name: "Robinhood Chain Testnet",
  network: "robinhood-testnet",
  nativeCurrency: { name: "Robinhood", symbol: "ROB", decimals: 18 },
  rpcUrls: {
    default: {
      http: [process.env.NEXT_PUBLIC_ROBINHOOD_TESTNET_RPC_URL || "https://testnet.rpc.robinhood.com"],
    },
    public: {
      http: [process.env.NEXT_PUBLIC_ROBINHOOD_TESTNET_RPC_URL || "https://testnet.rpc.robinhood.com"],
    },
  },
  blockExplorers: {
    default: {
      name: "Explorer",
      url: process.env.NEXT_PUBLIC_BLOCK_EXPLORER_URL || "https://testnet.explorer.robinhood.com",
    },
  },
} as const;

const config = createConfig({
  chains: [robinhoodTestnet],
  transports: {
    [robinhoodTestnet.id]: http(process.env.NEXT_PUBLIC_ROBINHOOD_TESTNET_RPC_URL),
  },
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10_000,
      gcTime: 1000 * 60 * 60 * 24,
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        {mounted ? (
          <RainbowKitProvider>{children}</RainbowKitProvider>
        ) : (
          children
        )}
      </WagmiProvider>
    </QueryClientProvider>
  );
}
