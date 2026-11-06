"use client";

export const dynamic = "force-dynamic";

import Link from "next/link";
import { Shield, Clock, CheckCircle2, XCircle, RefreshCw, AlertTriangle, SendHorizontal, ArrowRight } from "lucide-react";
import { useState } from "react";

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

const ESCROWS = [
  {
    id: "1001",
    title: "Freelance Website Design",
    buyer: "0x742d...f44e",
    seller: "0x8ba1...8a9c",
    amount: "2,500.00 USDC",
    status: "Funded",
    stage: "Awaiting delivery confirmation",
    action: "Confirm Delivery",
    actionDisabled: false,
    role: "Seller",
  },
  {
    id: "1002",
    title: "Digital Marketing Consulting",
    buyer: "0x742d...f44e",
    seller: "0x9c2a...a8b9",
    amount: "1,200.00 USDC",
    status: "Funded",
    stage: "Awaiting buyer release",
    action: "Release Funds",
    actionDisabled: false,
    role: "Buyer",
  },
  {
    id: "1003",
    title: "B2B Software License",
    buyer: "0x1a2b...9a0b",
    seller: "0x742d...f44e",
    amount: "15,000.00 USDT",
    status: "Completed",
    stage: "Funds released",
    action: "View on Explorer",
    actionDisabled: false,
    role: "Seller",
  },
] as const;

export default function ActiveEscrowsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-navy-900">Active Escrows</h2>
        <p className="text-navy-900/60 text-sm mt-1">Track funds currently held in escrow.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {ESCROWS.map((escrow) => (
          <div key={escrow.id} className="card">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-navy-900">{escrow.title}</h3>
                  <p className="text-xs text-navy-900/50">Agreement #{escrow.id} • {escrow.role}</p>
                </div>
                <span className={`badge ${STATUS_COLORS[escrow.status]}`}>{escrow.status}</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-navy-900/60">
                  <SendHorizontal className="w-3 h-3 shrink-0" />
                  <span>{escrow.amount}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-navy-900/60">
                  <Clock className="w-3 h-3 shrink-0" />
                  <span>{escrow.stage}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-navy-900/60">
                  <Shield className="w-3 h-3 shrink-0" />
                  <span>Escrow locked on-chain</span>
                </div>
              </div>

              <div className="pt-4 border-t border-navy-900/10">
                {escrow.status === "Completed" ? (
                  <Link
                    href="#"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-navy-900/20 text-sm text-navy-900 hover:bg-navy-900/5 transition-colors"
                  >
                    <ArrowRight className="w-3 h-3" /> View on Explorer
                  </Link>
                ) : (
                  <button
                    disabled={escrow.actionDisabled}
                    className={`w-full py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      escrow.actionDisabled
                        ? "bg-navy-900/10 text-navy-900/40 border border-navy-900/10"
                        : "bg-blue-500 text-white shadow-lg shadow-blue-500/30 hover:bg-blue-600"
                    }`}
                  >
                    {escrow.action}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card p-6 border border-navy-900/10">
        <p className="text-sm text-navy-900/60 leading-relaxed">
          Escrow statuses reflect the on-chain smart-contract state. Actions are only available to
          the authorized party (buyer or seller) at the appropriate stage. This prototype is
          unaudited — do not use with real funds.
        </p>
      </div>
    </div>
  );
}
