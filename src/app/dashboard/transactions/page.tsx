export const dynamic = "force-dynamic";

import Link from "next/link";
import { Activity, ArrowRight, Shield, SendHorizontal, CheckCircle2 } from "lucide-react";

const TRANSACTIONS = [
  {
    id: "0x742d...f44e",
    type: "Agreement Created",
    status: "Confirmed",
    amount: "—",
    time: "2 hours ago",
    explorer: true,
  },
  {
    id: "0x8ba1...8a9c",
    type: "Agreement Accepted",
    status: "Confirmed",
    amount: "—",
    time: "1 hour ago",
    explorer: true,
  },
  {
    id: "0x9c2a...a8b9",
    type: "Escrow Funded",
    status: "Confirmed",
    amount: "2,500.00 USDC",
    time: "45 min ago",
    explorer: true,
  },
  {
    id: "0x1a2b...9a0b",
    type: "Funds Released",
    status: "Confirmed",
    amount: "15,000.00 USDT",
    time: "3 days ago",
    explorer: true,
  },
] as const;

export default function TransactionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-navy-900">Transaction History</h2>
        <p className="text-navy-900/60 text-sm mt-1">On-chain activity across your agreements.</p>
      </div>

      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-navy-900/10 bg-navy-900/5">
                <th className="px-6 py-4 text-xs font-bold text-navy-900/50 uppercase">Tx Hash</th>
                <th className="px-6 py-4 text-xs font-bold text-navy-900/50 uppercase">Type</th>
                <th className="px-6 py-4 text-xs font-bold text-navy-900/50 uppercase">Amount</th>
                <th className="px-6 py-4 text-xs font-bold text-navy-900/50 uppercase">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-navy-900/50 uppercase">Time</th>
                <th className="px-6 py-4 text-xs font-bold text-navy-900/50 uppercase">Explorer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-900/5">
              {TRANSACTIONS.map((tx) => (
                <tr key={tx.id} className="hover:bg-navy-900/3 transition-colors">
                  <td className="px-6 py-4 text-sm text-navy-900 font-mono">{tx.id}</td>
                  <td className="px-6 py-4 text-sm text-navy-900">{tx.type}</td>
                  <td className="px-6 py-4 text-sm text-navy-900">{tx.amount}</td>
                  <td className="px-6 py-4">
                    <span className="badge badge-completed">{tx.status}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-navy-900/50">{tx.time}</td>
                  <td className="px-6 py-4">
                    {tx.explorer ? (
                      <Link
                        href="#"
                        className="flex items-center gap-2 text-sm text-blue-500 hover:underline"
                      >
                        View <ArrowRight className="w-3 h-3" />
                      </Link>
                    ) : (
                      <span className="text-sm text-navy-900/40">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card p-6 border border-navy-900/10">
        <p className="text-sm text-navy-900/60 leading-relaxed">
          Transaction hashes are shortened for display. Click "View" to open the full transaction
          on the Robinhood Chain testnet blockchain explorer. This prototype does not fabricate
          transaction hashes or blockchain activity.
        </p>
      </div>
    </div>
  );
}
