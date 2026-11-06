"use client";

export const dynamic = "force-dynamic";

import Link from "next/link";
import { useState } from "react";
import { Shield, Clock, CheckCircle2, XCircle, RefreshCw, AlertTriangle } from "lucide-react";

const STATUS_COLORS: Record<string, string> = {
  Draft: "badge-draft",
  "Awaiting Acceptance": "badge-awaiting",
  Accepted: "badge-accepted",
  Funded: "badge-funded",
  "In Progress": "badge-inprogress",
  Completed: "badge-completed",
  Cancelled: "badge-cancelled",
  Disputed: "badge-disputed",
};

const STATUS_ICONS: Record<string, any> = {
  Draft: Shield,
  "Awaiting Acceptance": Clock,
  Accepted: Shield,
  Funded: CheckCircle2,
  "In Progress": RefreshCw,
  Completed: CheckCircle2,
  Cancelled: XCircle,
  Disputed: AlertTriangle,
};

const MOCK_AGREEMENTS = [
  {
    id: "1001",
    title: "Freelance Website Design",
    buyer: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    seller: "0x8ba1f609581be6dd2e0798e47e0e8f3b1f3e8a9c",
    amount: "2,500.00",
    token: "USDC",
    status: "Funded",
    created: "2 hours ago",
  },
  {
    id: "1002",
    title: "Digital Marketing Consulting",
    buyer: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    seller: "0x9c2ab1e4d3f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9",
    amount: "1,200.00",
    token: "USDC",
    status: "Awaiting Acceptance",
    created: "1 day ago",
  },
  {
    id: "1003",
    title: "B2B Software License",
    buyer: "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b",
    seller: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    amount: "15,000.00",
    token: "USDT",
    status: "Completed",
    created: "3 days ago",
  },
  {
    id: "1004",
    title: "P2P Laptop Sale",
    buyer: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    seller: "0x0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b",
    amount: "850.00",
    token: "USDC",
    status: "Cancelled",
    created: "1 week ago",
  },
] as const;

export default function MyAgreementsPage() {
  const [statusFilter, setStatusFilter] = useState<string>("All");

  const statuses = ["All", "Draft", "Awaiting Acceptance", "Accepted", "Funded", "In Progress", "Completed", "Cancelled", "Disputed"];

  const filtered = MOCK_AGREEMENTS.filter((a) => statusFilter === "All" || a.status === statusFilter);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-navy-900">My Agreements</h2>
          <p className="text-navy-900/60 text-sm mt-1">All agreements you are involved in.</p>
        </div>
        <div className="flex gap-2">
          {statuses.map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                statusFilter === s
                  ? "bg-blue-50 border-blue-200 text-blue-600"
                  : "border-navy-900/20 text-navy-900/60 hover:bg-navy-900/5"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-navy-900/10 bg-navy-900/5">
                <th className="px-6 py-4 text-xs font-bold text-navy-900/50 uppercase">ID</th>
                <th className="px-6 py-4 text-xs font-bold text-navy-900/50 uppercase">Title</th>
                <th className="px-6 py-4 text-xs font-bold text-navy-900/50 uppercase">Amount</th>
                <th className="px-6 py-4 text-xs font-bold text-navy-900/50 uppercase">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-navy-900/50 uppercase">Created</th>
                <th className="px-6 py-4 text-xs font-bold text-navy-900/50 uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-900/5">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-navy-900/40">
                    No agreements found.
                  </td>
                </tr>
              ) : (
                filtered.map((agreement) => (
                  <tr key={agreement.id} className="hover:bg-navy-900/3 transition-colors">
                    <td className="px-6 py-4 text-sm text-navy-900 font-mono">#{agreement.id}</td>
                    <td className="px-6 py-4 text-sm text-navy-900">{agreement.title}</td>
                    <td className="px-6 py-4 text-sm text-navy-900">{agreement.amount} {agreement.token}</td>
                    <td className="px-6 py-4">
                      <span className={`badge ${STATUS_COLORS[agreement.status]}`}>
                        {agreement.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-navy-900/50">{agreement.created}</td>
                    <td className="px-6 py-4">
                      <Link
                        href={`/dashboard/agreement/${agreement.id}`}
                        className="text-sm text-blue-500 hover:underline font-medium"
                      >
                        View details
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card p-6">
        <h3 className="font-bold text-navy-900 mb-3 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-500" /> Status Glossary
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-navy-900/60">
          {Object.entries(STATUS_COLORS).map(([status, color]) => {
            const Icon = STATUS_ICONS[status];
            return (
              <div key={status} className="flex items-center gap-2">
                <Icon className="w-3 h-3" />
                <span className={`font-medium ${color.replace("badge-", "text-")}`}>{status}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="card p-6 border border-navy-900/10">
        <p className="text-sm text-navy-900/60 leading-relaxed">
          These are example records for demonstration. In production, agreements are loaded from
          the on-chain escrow contract and off-chain metadata via Supabase. This prototype is
          unaudited — do not use with real funds.
        </p>
      </div>
    </div>
  );
}
