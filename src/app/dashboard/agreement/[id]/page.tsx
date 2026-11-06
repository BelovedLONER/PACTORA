"use client";

export const dynamic = "force-dynamic";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Shield, CheckCircle2, Clock, XCircle, AlertTriangle, SendHorizontal, ArrowRight, ExternalLink } from "lucide-react";

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
  "In Progress": RefreshCwIcon,
  Completed: CheckCircle2,
  Cancelled: XCircle,
  Disputed: AlertTriangle,
};

function RefreshCwIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  );
}

const AGREEMENT = {
  id: "1001",
  title: "Freelance Website Design",
  buyer: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
  seller: "0x8ba1f609581be6dd2e0798e47e0e8f3b1f3e8a9c",
  token: "USDC",
  amount: "2,500.00",
  deadline: "Dec 15, 2026",
  status: "Funded",
  description: "Design and develop a responsive marketing website including 5 pages, SEO setup, and one revision round.",
  terms: "Delivery within 14 days. Buyer has 48 hours to inspect and approve. Funds released on buyer approval or automatic after 7 days if no dispute is opened.",
  created: "2 hours ago",
  funded: "45 minutes ago",
};

export default function AgreementDetailPage() {
  const params = useParams();
  const [showActions, setShowActions] = useState(true);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-navy-900">Agreement #{AGREEMENT.id}</h2>
          <p className="text-navy-900/60 text-sm mt-1">{AGREEMENT.title}</p>
        </div>
        <div className="flex gap-2">
          <Link
            href="/dashboard/my-agreements"
            className="px-4 py-2 rounded-xl border border-navy-900/20 text-sm text-navy-900 hover:bg-navy-900/5 transition-colors"
          >
            Back
          </Link>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-navy-900/20 text-sm text-blue-500 hover:bg-blue-50 transition-colors"
          >
            <ExternalLink className="w-3 h-3" /> Explorer
          </a>
        </div>
      </div>

      {/* Status header */}
      <div className="card">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className={`badge ${STATUS_COLORS[AGREEMENT.status]}`}>{AGREEMENT.status}</span>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-navy-900">{AGREEMENT.amount} {AGREEMENT.token}</p>
              <p className="text-xs text-navy-900/50">Escrow locked</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <Stat label="Buyer" value={AGREEMENT.buyer} icon={<Shield className="w-4 h-4" />} />
            <Stat label="Seller" value={AGREEMENT.seller} icon={<Shield className="w-4 h-4" />} />
            <Stat label="Deadline" value={AGREEMENT.deadline} icon={<Clock className="w-4 h-4" />} />
          </div>

          <div className="space-y-3 mb-6">
            <h4 className="text-sm font-bold text-navy-900 mb-2">Description</h4>
            <p className="text-sm text-navy-900/70 leading-relaxed bg-navy-900/5 p-4 rounded-xl">{AGREEMENT.description}</p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-navy-900 mb-2">Terms and Conditions</h4>
            <p className="text-sm text-navy-900/70 leading-relaxed bg-navy-900/5 p-4 rounded-xl">{AGREEMENT.terms}</p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="card">
        <div className="p-6">
          <h3 className="font-bold text-navy-900 mb-4 flex items-center gap-2">
            <Shield className="w-4 h-4 text-blue-500" /> Agreement Timeline
          </h3>
          <div className="relative">
            <div className="absolute left-3 top-4 bottom-4 w-px bg-navy-900/10" />
            {[
              { label: "Created", time: AGREEMENT.created, status: "completed", icon: Shield },
              { label: "Accepted", time: "1 hour ago", status: "completed", icon: CheckCircle2 },
              { label: "Funded", time: AGREEMENT.funded, status: "completed", icon: SendHorizontal },
              { label: "Delivery", time: "Pending", status: "pending", icon: Clock },
              { label: "Released", time: "Pending", status: "pending", icon: CheckCircle2 },
            ].map((step, i) => (
              <div key={step.label} className="relative pl-12 pb-8 last:pb-0">
                <div className="absolute left-0 top-2 w-5 h-5 rounded-full border-2 transition-all duration-300" />
                <div className={`absolute left-1 top-3 w-3 h-3 rounded-full ${
                  step.status === "completed" ? "bg-blue-500 border-blue-500" : "bg-white border-navy-900/20"
                }`} />
                <div className="absolute -left-[2px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500 hidden md:block" />
                <div className="text-sm">
                  <p className={`font-medium ${step.status === "completed" ? "text-blue-600" : "text-navy-900/50"}`}>{step.label}</p>
                  <p className="text-xs text-navy-900/40">{step.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Actions */}
      {showActions && (
        <div className="card p-6">
          <h3 className="font-bold text-navy-900 mb-4">Available Actions</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <button
              className="w-full py-3 rounded-xl border border-navy-900/20 text-sm text-navy-900 hover:bg-navy-900/5 transition-colors flex items-center justify-center gap-2"
            >
              <Clock className="w-4 h-4" /> Open Dispute
            </button>
            <button
              className="w-full py-3 rounded-xl bg-blue-500 text-white shadow-lg shadow-blue-500/30 text-sm hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
            >
              <ArrowRight className="w-4 h-4" /> Release Funds
            </button>
          </div>
          <p className="mt-4 text-xs text-navy-900/50">
            Actions are only available to the authorized party at the appropriate stage. Escrow
            protection follows the actual smart-contract rules.
          </p>
        </div>
      )}

      <div className="card p-6 border border-navy-900/10">
        <p className="text-sm text-navy-900/60 leading-relaxed">
          This is a demonstration record. In production, agreement data is read from the on-chain
          escrow contract and off-chain metadata. This prototype is unaudited — do not use with real
          funds.
        </p>
      </div>
    </div>
  );
}

function Stat({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="p-4 rounded-xl bg-navy-900/5 border border-navy-900/10">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <span className="text-xs text-navy-900/40 font-medium uppercase">{label}</span>
      </div>
      <p className="text-sm text-navy-900 font-mono truncate">{value}</p>
    </div>
  );
}
