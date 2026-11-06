export const dynamic = "force-dynamic";

import Link from "next/link";
import { Shield, User, Bell, CreditCard, LogOut, ExternalLink } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-navy-900">Settings</h2>
        <p className="text-navy-900/60 text-sm mt-1">Manage your account and platform preferences.</p>
      </div>

      <div className="card">
        <div className="p-6">
          <h3 className="font-bold text-navy-900 mb-6">Wallet</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl border border-navy-900/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 font-bold">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-navy-900">Connected Wallet</p>
                  <p className="text-xs text-navy-900/50 font-mono">0x742d...f44e</p>
                </div>
              </div>
              <Link
                href="#"
                className="text-sm text-blue-500 hover:underline flex items-center gap-1"
              >
                Change <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="p-6">
          <h3 className="font-bold text-navy-900 mb-6">Network</h3>
          <div className="flex items-center justify-between p-4 rounded-xl border border-navy-900/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-navy-900/5 flex items-center justify-center text-navy-900">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-navy-900">Robinhood Chain Testnet</p>
                <p className="text-xs text-navy-900/50">EVM-compatible test network</p>
              </div>
            </div>
            <span className="badge badge-awaiting">Testnet</span>
          </div>
        </div>
      </div>

      <div className="card border border-navy-900/10">
        <div className="p-6">
          <h3 className="font-bold text-navy-900 mb-6">Legal &amp; Safety</h3>
          <ul className="space-y-4 text-sm text-navy-900/60">
            <li className="flex items-start gap-2">
              <Shield className="w-4 h-4 shrink-0 mt-[0.1rem] text-navy-900/30" />
              <span>This prototype is unaudited. Do not use with real funds.</span>
            </li>
            <li className="flex items-start gap-2">
              <Shield className="w-4 h-4 shrink-0 mt-[0.1rem] text-navy-900/30" />
              <span>No contract addresses, token addresses, or transaction hashes are fabricated.</span>
            </li>
            <li className="flex items-start gap-2">
              <Link
                href="/risk"
                className="text-blue-500 hover:underline flex items-center gap-1"
              >
                Risk Disclosure <ExternalLink className="w-3 h-3" />
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <Link
                href="/terms"
                className="text-blue-500 hover:underline flex items-center gap-1"
              >
                Terms of Service <ExternalLink className="w-3 h-3" />
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <Link
                href="/privacy"
                className="text-blue-500 hover:underline flex items-center gap-1"
              >
                Privacy Policy <ExternalLink className="w-3 h-3" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="card p-6 border border-navy-900/10">
        <button
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-rose-200 text-rose-600 font-medium hover:bg-rose-50 transition-colors"
        >
          <LogOut className="w-4 h-4" /> Disconnect Wallet
        </button>
      </div>
    </div>
  );
}
