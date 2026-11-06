"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export function WalletConnect() {
  return (
    <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-navy-900/20 bg-white text-navy-900 text-sm font-medium hover:bg-navy-900/5 transition-colors">
      <ConnectButton />
    </div>
  );
}

export function WalletConnectMini() {
  return (
    <div className="px-3 py-1.5 text-xs font-medium">
      <ConnectButton />
    </div>
  );
}
