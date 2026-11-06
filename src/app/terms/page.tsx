export const dynamic = "force-dynamic";

import Link from "next/link";

export default function TermsPage() {
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
      <h1 className="text-2xl font-bold text-navy-900 mb-6">Terms of Service</h1>
      <div className="prose-sm text-navy-900/70 leading-relaxed space-y-4">
        <p>
          Welcome to PACTORA. These Terms of Service govern your use of the PACTORA website and
          application. By using PACTORA, you agree to these terms.
        </p>
        <h2 className="text-xl font-bold text-navy-900 mt-6 mb-2">1. No Custody of Funds</h2>
        <p>
          PACTORA does not take custody of your funds. Funds are held by an on-chain smart contract
          on Robinhood Chain. You are responsible for your wallet and private keys.
        </p>
        <h2 className="text-xl font-bold text-navy-900 mt-6 mb-2">2. Unaudited Prototype</h2>
        <p>
          This platform is an unaudited prototype. PACTORA does not claim that the smart contracts,
          platform, or services are audited, insured, risk-free, or fully decentralized. Do not use
          with real funds.
        </p>
        <h2 className="text-xl font-bold text-navy-900 mt-6 mb-2">3. Smart-Contract Rules</h2>
        <p>
          Escrow protection is limited to the rules enforced by the smart contract. PACTORA does not
          guarantee that funds are protected from every possible dispute. Review the contract rules
          before transacting.
        </p>
        <h2 className="text-xl font-bold text-navy-900 mt-6 mb-2">4. No Fabricated Data</h2>
        <p>
          No contract addresses, token addresses, or transaction hashes are fabricated in this
          prototype. All blockchain activity shown is for demonstration purposes only.
        </p>
        <h2 className="text-xl font-bold text-navy-900 mt-6 mb-2">5. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, PACTORA is not liable for any losses arising from
          your use of the platform, including losses from smart-contract bugs, lost keys, or
          disputes.
        </p>
      </div>
    </div>
  );
}
