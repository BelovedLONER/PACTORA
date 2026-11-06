export const dynamic = "force-dynamic";

import Link from "next/link";

export default function PrivacyPage() {
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
      <h1 className="text-2xl font-bold text-navy-900 mb-6">Privacy Policy</h1>
      <div className="prose-sm text-navy-900/70 leading-relaxed space-y-4">
        <p>
          PACTORA respects your privacy. This policy describes how we handle information in
          connection with the platform.
        </p>
        <h2 className="text-xl font-bold text-navy-900 mt-6 mb-2">1. Wallet Addresses</h2>
        <p>
          Wallet addresses used to create or interact with agreements are visible on the public
          blockchain. PACTORA does not control this on-chain visibility.
        </p>
        <h2 className="text-xl font-bold text-navy-900 mt-6 mb-2">2. Off-Chain Metadata</h2>
        <p>
          Agreement metadata (titles, descriptions, terms) may be stored off-chain via Supabase to
          support the application interface. This data is associated with on-chain agreement IDs.
        </p>
        <h2 className="text-xl font-bold text-navy-900 mt-6 mb-2">3. No Personal Data Required</h2>
        <p>
          PACTORA does not require names, email addresses, or KYC information to create agreements.
          Interaction is wallet-based.
        </p>
        <h2 className="text-xl font-bold text-navy-900 mt-6 mb-2">4. Third Parties</h2>
        <p>
          We do not sell your data. Blockchain explorers and RPC providers may independently process
          data as part of the network infrastructure.
        </p>
      </div>
    </div>
  );
}
