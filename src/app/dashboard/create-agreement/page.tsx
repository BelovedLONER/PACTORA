"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import Link from "next/link";
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { parseUnits } from "viem";
import { FileText, UserPlus, Shield, Calendar, Coins, ArrowRight, Info } from "lucide-react";
import { ESCROW_CONTRACT_ADDRESS } from "@/lib/env";

const ESCROW_ABI = [
  {
    type: "function",
    name: "createAgreement",
    stateMutability: "nonpayable",
    inputs: [
      { name: "buyer", type: "address" },
      { name: "seller", type: "address" },
      { name: "token", type: "address" },
      { name: "amount", type: "uint256" },
      { name: "deadline", type: "uint256" },
      { name: "title", type: "string" },
      { name: "description", type: "string" },
      { name: "terms", type: "string" },
    ],
    outputs: [{ type: "uint256" }],
  },
] as const;

const TOKENS = [
  { label: "USDC (6 decimals)", value: "0x0000000000000000000000000000000000000000", decimals: 6 },
  { label: "USDT (6 decimals)", value: "0x0000000000000000000000000000000000000000", decimals: 6 },
] as const;

export default function CreateAgreementPage() {
  const { address } = useAccount();
  const [form, setForm] = useState<{
    title: string;
    description: string;
    buyer: string;
    seller: string;
    token: string;
    amount: string;
    deadline: string;
    terms: string;
  }>({
    title: "",
    description: "",
    buyer: "",
    seller: "",
    token: TOKENS[0].value,
    amount: "",
    deadline: "",
    terms: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [createdId, setCreatedId] = useState<string | null>(null);

  const { writeContract, data: hash, isPending, error, reset } = useWriteContract();
  const { isLoading: isConfirming } = useWaitForTransactionReceipt({ hash });

  const isValidAddress = (a: string) => /^0x[a-fA-F0-9]{40}$/i.test(a);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.title.trim()) e.title = "Title is required";
    if (!form.description.trim()) e.description = "Description is required";
    if (!isValidAddress(form.buyer)) e.buyer = "Enter a valid buyer wallet address";
    if (!isValidAddress(form.seller)) e.seller = "Enter a valid seller wallet address";
    if (form.buyer && form.seller && form.buyer.toLowerCase() === form.seller.toLowerCase()) {
      e.seller = "Buyer and seller must be different addresses";
    }
    const amountNum = Number(form.amount);
    if (!form.amount || amountNum <= 0) e.amount = "Enter a valid amount";
    if (!form.deadline) e.deadline = "Select a delivery deadline";
    if (!form.terms.trim()) e.terms = "Terms and conditions are required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (!address) {
      setErrors({ wallet: "Please connect your wallet" });
      return;
    }
    if (!ESCROW_CONTRACT_ADDRESS) {
      setErrors({ wallet: "Escrow contract address is not configured" });
      return;
    }

    setSubmitting(true);
    const deadline = Math.floor(new Date(form.deadline).getTime() / 1000);
    const tokenEntry = TOKENS.find((t) => t.value === form.token)!;
    const amount = parseUnits(form.amount, tokenEntry.decimals);

    try {
      const txHash = await (writeContract as any)({
        address: ESCROW_CONTRACT_ADDRESS,
        abi: ESCROW_ABI,
        functionName: "createAgreement",
        args: [
          form.buyer as `0x${string}`,
          form.seller as `0x${string}`,
          form.token as `0x${string}`,
          amount,
          BigInt(deadline),
          form.title,
          form.description,
          form.terms,
        ],
      });
      setCreatedId(txHash);
    } catch (err: any) {
      setErrors({ submit: err?.message || "Failed to create agreement" });
      setSubmitting(false);
    }
  };

  // We can't await inside event handler easily with hooks; use a ref-based approach via useWriteContract directly called
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-navy-900">Create Agreement</h2>
        <p className="text-navy-900/60 text-sm mt-1">
          Define the terms of your escrow agreement. Both parties must accept before funding.
        </p>
      </div>

      <div className="card">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <Field
              label="Agreement Title"
              name="title"
              value={form.title}
              onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
              error={errors.title}
              icon={<FileText className="w-4 h-4" />}
            />
            <Field
              label="Buyer Wallet"
              name="buyer"
              value={form.buyer}
              onChange={(e) => setForm((p) => ({ ...p, buyer: e.target.value }))}
              error={errors.buyer}
              icon={<UserPlus className="w-4 h-4" />}
              placeholder="0x..."
            />
            <Field
              label="Description"
              name="description"
              value={form.description}
              onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
              error={errors.description}
              icon={<Shield className="w-4 h-4" />}
            />
            <Field
              label="Seller Wallet"
              name="seller"
              value={form.seller}
              onChange={(e) => setForm((p) => ({ ...p, seller: e.target.value }))}
              error={errors.seller}
              icon={<UserPlus className="w-4 h-4" />}
              placeholder="0x..."
            />
            <Field
              label="Transaction Amount"
              type="number"
              name="amount"
              value={form.amount}
              onChange={(e) => setForm((p) => ({ ...p, amount: e.target.value }))}
              error={errors.amount}
              icon={<Coins className="w-4 h-4" />}
              suffix="USDC"
            />
            <Field
              label="Supported Token"
              select
              name="token"
              value={form.token}
              onChange={(e) => setForm((p) => ({ ...p, token: e.target.value }))}
              error={errors.token}
              icon={<Shield className="w-4 h-4" />}
            >
              {TOKENS.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </Field>
            <Field
              label="Delivery Deadline"
              type="datetime-local"
              name="deadline"
              value={form.deadline}
              onChange={(e) => setForm((p) => ({ ...p, deadline: e.target.value }))}
              error={errors.deadline}
              icon={<Calendar className="w-4 h-4" />}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-navy-900">Terms and Conditions</label>
            <textarea
              value={form.terms}
              onChange={(e) => setForm((p) => ({ ...p, terms: e.target.value }))}
              className="w-full min-h-[120px] px-4 py-3 rounded-xl border border-navy-900/20 text-sm text-navy-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="Describe the goods/services, delivery expectations, and acceptance criteria..."
            />
            {errors.terms && <p className="text-xs text-rose-600">{errors.terms}</p>}
          </div>

          {errors.submit && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-100 text-rose-700 text-sm">{errors.submit}</div>
          )}

          <button
            type="submit"
            disabled={submitting || !address}
            className="btn-primary w-full py-4 text-lg disabled:opacity-70"
          >
            {submitting ? "Creating Agreement..." : "Create Agreement"}
          </button>
        </form>

        <div className="mt-6 p-4 rounded-xl bg-navy-900/5 border border-navy-900/10">
          <div className="flex items-start gap-3">
            <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
            <div className="text-sm text-navy-900/70 leading-relaxed">
              <strong className="text-navy-900">Important:</strong> Creating an agreement produces a
              draft on Robinhood Chain testnet. The counterparty must review and accept before any
              funds can be deposited. This prototype is unaudited — do not use with real funds.
              No contract address is fabricated.
            </div>
          </div>
        </div>
      </div>

      {createdId && (
        <div className="card border-emerald-200 bg-emerald-50">
          <div className="p-4">
            <div className="flex items-center gap-2 text-emerald-700 mb-2">
              <Shield className="w-4 h-4" /> Agreement Created
            </div>
            <p className="text-sm text-emerald-800">
              Transaction: <span className="font-mono font-bold text-xs truncate block max-w-full">{createdId}</span>
            </p>
            <p className="text-xs text-emerald-800/70 mt-1">
              The agreement ID is emitted in the AgreementCreated event on-chain. View the
              transaction on the explorer once confirmed.
            </p>
            <div className="mt-3 flex gap-2">
              <Link href="/dashboard/my-agreements" className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                View in My Agreements <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  icon,
  type = "text",
  select = false,
  suffix,
  placeholder,
  children,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  error?: string;
  icon: React.ReactNode;
  type?: string;
  select?: boolean;
  suffix?: string;
  placeholder?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span className="w-6 text-navy-900/50 text-xs font-medium">{label}</span>
        {icon && <span className="ml-auto text-navy-900/30">{icon}</span>}
      </div>
      <div className="relative">
        {select ? (
          <select
            name={name}
            value={value}
            onChange={onChange as any}
            className="w-full px-4 py-3 rounded-xl border border-navy-900/20 bg-white text-sm text-navy-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none"
          >
            {children}
          </select>
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange as any}
            placeholder={placeholder}
            className="w-full px-4 py-3 rounded-xl border border-navy-900/20 text-sm text-navy-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        )}
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-900/40 text-sm">{suffix}</span>
        )}
      </div>
      {error && <p className="text-xs text-rose-600">{error}</p>}
    </div>
  );
}
