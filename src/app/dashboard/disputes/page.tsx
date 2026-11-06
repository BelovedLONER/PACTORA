export const dynamic = "force-dynamic";

import Link from "next/link";
import { AlertTriangle, Shield, Clock, ArrowRight } from "lucide-react";

export default function DisputesPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-navy-900">Disputes</h2>
        <p className="text-navy-900/60 text-sm mt-1">
          Open, track, and resolve disputes on funded agreements.
        </p>
      </div>

      <div className="card">
        <div className="p-6">
          <h3 className="font-bold text-navy-900 mb-2 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-500" /> No open disputes
          </h3>
          <p className="text-sm text-navy-900/60 mb-4">
            There are no disputes currently open on your agreements.
          </p>
          <Link
            href="/dashboard/my-agreements"
            className="text-sm text-blue-500 hover:underline font-medium"
          >
            View all agreements <ArrowRight className="w-3 h-3 ml-1" />
          </Link>
        </div>
      </div>

      <div className="card p-6 border border-navy-900/10">
        <h3 className="font-bold text-navy-900 mb-3 flex items-center gap-2">
          <Shield className="w-4 h-4 text-blue-500" /> How Disputes Work
        </h3>
        <div className="space-y-4 text-sm text-navy-900/70">
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-50/20 flex items-center justify-center text-amber-600 font-bold text-xs">
              1
            </div>
            <div>
              <p className="font-bold text-navy-900">Open a dispute</p>
              <p className="text-navy-900/60 mt-1">
                Either party can open a dispute after the buyer has funded the escrow.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-50/20 flex items-center justify-center text-amber-600 font-bold text-xs">
              2
            </div>
            <div>
              <p className="font-bold text-navy-900">Funds stay locked</p>
              <p className="text-navy-900/60 mt-1">
                The escrowed funds remain locked in the smart contract until the dispute is resolved.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-50/20 flex items-center justify-center text-amber-600 font-bold text-xs">
              3
            </div>
            <div>
              <p className="font-bold text-navy-900">Resolution</p>
              <p className="text-navy-900/60 mt-1">
                A designated resolver can release funds to the seller or return them to the buyer
                based on the outcome.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card border border-navy-900/10 p-6">
        <p className="text-sm text-navy-900/60 leading-relaxed">
          Escrow protection follows the actual smart-contract rules — it does not automatically
          protect against every possible dispute. This prototype is unaudited; do not use with real
          funds.
        </p>
      </div>
    </div>
  );
}
