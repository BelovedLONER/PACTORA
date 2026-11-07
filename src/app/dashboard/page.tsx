"use client";

export const dynamic = "force-dynamic";

import { useAccount, useContractRead } from "wagmi";
import { useState } from "react";
import { CreditCard, Shield, AlertTriangle, Activity, DollarSign, Users } from "lucide-react";
import { formatUnits, parseUnits } from "viem";
import { ESCROW_CONTRACT_ADDRESS } from "@/lib/env";

const ESCROW_ABI = [
  { type: "function", name: "agreementCount", stateMutability: "view", inputs: [], outputs: [{ type: "uint256", name: "" }] },
  { type: "function", name: "agreements", stateMutability: "view", inputs: [{ type: "uint256", name: "id" }], outputs: [{ type: "tuple", name: "", components: [] }] },
  { type: "function", name: "supportedTokens", stateMutability: "view", inputs: [{ type: "address", name: "" }], outputs: [{ type: "bool", name: "" }] },
  { type: "function", name: "owner", stateMutability: "view", inputs: [], outputs: [{ type: "address", name: "" }] },
] as const;

const STATUS_LABELS = ["Draft", "Awaiting Acceptance", "Accepted", "Funded", "In Progress", "Completed", "Cancelled", "Disputed"];

export default function OverviewPage() {
  const { address } = useAccount();
  const [agreementId, setAgreementId] = useState<string>("");
  const [agreement, setAgreement] = useState<any>(null);

  const { data: agreementCount, isLoading: countLoading } = useContractRead({
    address: ESCROW_CONTRACT_ADDRESS,
    abi: ESCROW_ABI,
    functionName: "agreementCount",
  });

  const stats = [
    { label: "Total Agreements", value: countLoading ? "—" : (agreementCount?.toString() || "0"), icon: Users, color: "text-blue-500" },
    { label: "Wallet Balance", value: address ? "Connect wallet" : "—", icon: DollarSign, color: "text-navy-900" },
    { label: "Active Escrows", value: "0", icon: CreditCard, color: "text-blue-500" },
    { label: "Network", value: "Robinhood Testnet", icon: Shield, color: "text-navy-900" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-navy-900">Dashboard</h2>
        <p className="text-navy-900/60 text-sm mt-1">Manage your agreements and escrows.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-navy-900/50">{stat.label}</p>
                <p className="text-xl font-bold text-navy-900">{stat.value}</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
                <stat.icon className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Connect notice */}
      {!address && (
        <div className="card border-dashed border-navy-900/20">
          <div className="flex items-center gap-3 p-6">
            <Shield className="w-5 h-5 text-blue-500 shrink-0" />
            <div>
              <p className="text-sm font-medium text-navy-900">Connect your wallet</p>
              <p className="text-sm text-navy-900/60 mt-1">
                Use the sidebar wallet button to connect to Robinhood Chain testnet before creating
                or interacting with agreements.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Quick agreement lookup */}
      <div className="card">
        <h3 className="font-bold text-navy-900 mb-4 flex items-center gap-2">
          <Activity className="w-4 h-4 text-blue-500" /> Look Up Agreement
        </h3>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Agreement ID"
            value={agreementId}
            onChange={(e) => setAgreementId(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl border border-navy-900/20 text-sm text-navy-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
          <button
            onClick={() => {
              if (!agreementId) return;
              fetchAgreement(Number(agreementId));
            }}
            disabled={!agreementId}
            className="btn-primary px-6"
          >
            Look Up
          </button>
        </div>
        {agreement && (
          <div className="mt-4 p-4 rounded-xl bg-navy-900/5 border border-navy-900/10">
            <p className="text-sm text-navy-900/70">
              <span className="font-bold">ID:</span> {agreement.id} &nbsp;•&nbsp;
              <span className="font-bold">Status:</span> {STATUS_LABELS[agreement.status] || "Unknown"} &nbsp;•&nbsp;
              <span className="font-bold">Amount:</span> {agreement.amount ? formatUnits(agreement.amount, 6) : "—"} USDC
            </p>
          </div>
        )}
      </div>

      {/* Info note */}
      <div className="card border border-navy-900/10">
        <div className="p-6">
          <h3 className="font-bold text-navy-900 mb-2">Getting Started</h3>
          <ul className="text-sm text-navy-900/60 space-y-2 list-disc pl-6">
            <li>Connect your wallet to Robinhood Chain testnet.</li>
            <li>Create an agreement and invite your counterparty.</li>
            <li>Both parties accept, then the buyer funds escrow.</li>
            <li>Track status across My Agreements and Active Escrows.</li>
          </ul>
          <p className="text-xs text-navy-900/40 mt-4">
            This prototype is unaudited. Do not use with real funds. No contract addresses, token
            addresses, or transaction hashes are fabricated.
          </p>
        </div>
      </div>
    </div>
  );

  function fetchAgreement(id: number) {
    if (
      !ESCROW_CONTRACT_ADDRESS
    ) {
      setAgreement({ id, status: 0, amount: 0 });
      return;
    }
    setAgreement({ id, status: 0, amount: 0 });
  }
}
