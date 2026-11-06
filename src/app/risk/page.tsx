export const dynamic = "force-dynamic";

import Link from "next/link";

export default function RiskPage() {
  return (
    <div className="max-w-3xl mx-auto section-padding">
      <nav className="mb-8">
        <Link
          href="/"
          className="text-sm text-blue-500 hover:underline flex items-center gap-1"
        >
          ← Back to home
        </Link>
      </nav>
      <h1 className="text-2xl font-bold text-navy-900 mb-6">Risk Disclosure</h1>
      <div className="card p-8 border border-navy-900/10">
        <h2 className="text-xl font-bold text-navy-900 mb-4">Important Risks</h2>
        <ul className="text-navy-900/70 leading-relaxed space-y-3 text-sm">
          <li className="flex gap-3">
            <span className="text-amber-600">⚠</span>
            <span className="font-medium">Unaudited smart contracts:</span> The escrow smart
            contract has not been audited. Bugs could result in loss of funds.
          </li>
          <li className="flex gap-3">
            <span className="text-amber-600">⚠</span>
            <span className="font-medium">Not insured:</span> Funds held in escrow are not insured.
          </li>
          <li className="flex gap-3">
            <span className="text-amber-600">⚠</span>
            <span className="font-medium">Not risk-free:</span> Escrow protection follows the
            smart-contract rules and does not protect against every possible dispute.
          </li>
          <li className="flex gap-3">
            <span className="text-amber-600">⚠</span>
            <span className="font-medium">Testnet only:</span> This prototype uses the Robinhood
            Chain testnet. Do not use with real funds.
          </li>
          <li className="flex gap-3">
            <span className="text-amber-600">⚠</span>
            <span className="font-medium">Wallet responsibility:</span> You control your wallet
            and private keys. Lost keys mean lost access to funds.
          </li>
        </ul>
        <p className="mt-6 text-xs text-navy-900/40">
          By using PACTORA, you acknowledge these risks and agree to use the platform at your own
          discretion.
        </p>
      </div>
    </div>
  );
}
