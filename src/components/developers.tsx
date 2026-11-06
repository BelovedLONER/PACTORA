import Link from "next/link";
import { Code, Terminal, Link as LinkIcon, Shield, ArrowRight } from "lucide-react";

export function Developers() {
  return (
    <section id="developers" className="section-padding bg-white">
      <div className="container-px">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">For Developers</h2>
          <p className="text-lg text-navy-900/70 leading-relaxed max-w-2xl mx-auto">
            PACTORA's smart-contract infrastructure and integration roadmap. Implemented features
            are clearly distinguished from planned integrations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="card">
            <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
              <Code className="w-5 h-5 text-blue-500" /> Smart-Contract Architecture
            </h3>
            <p className="text-navy-900/60 leading-relaxed text-sm mb-6">
              The PACTORA escrow contract manages the full agreement lifecycle: creation, mutual
              acceptance, buyer funding, delivery confirmation, fund release, mutual cancellation,
              and dispute handling. All state and rules are enforced on-chain.
            </p>
            <ul className="space-y-3 text-sm text-navy-900/60">
              <li className="flex items-start gap-2">
                <Code className="w-4 h-4 shrink-0 mt-[0.1rem] text-blue-500" />
                Agreement lifecycle state machine (Draft → Accepted → Funded → In Progress → Completed)
              </li>
              <li className="flex items-start gap-2">
                <Code className="w-4 h-4 shrink-0 mt-[0.1rem] text-blue-500" />
                ERC-20 stablecoin escrow with transferFrom / transfer
              </li>
              <li className="flex items-start gap-2">
                <Code className="w-4 h-4 shrink-0 mt-[0.1rem] text-blue-500" />
                Role-based access: buyer, seller, owner (dispute resolution only)
              </li>
              <li className="flex items-start gap-2">
                <Code className="w-4 h-4 shrink-0 mt-[0.1rem] text-blue-500" />
                Events for frontend indexing and explorer verification
              </li>
            </ul>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-blue-500" /> Escrow Workflow
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50/20 flex items-center justify-center text-blue-600 font-bold text-xs">
                  1
                </div>
                <div>
                  <p className="text-navy-900/70 leading-relaxed">Create agreement (Draft)</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50/20 flex items-center justify-center text-blue-600 font-bold text-xs">
                  2
                </div>
                <div>
                  <p className="text-navy-900/70 leading-relaxed">Both parties accept (Accepted)</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50/20 flex items-center justify-center text-blue-600 font-bold text-xs">
                  3
                </div>
                <div>
                  <p className="text-navy-900/70 leading-relaxed">Buyer funds escrow (Funded)</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50/20 flex items-center justify-center text-blue-600 font-bold text-xs">
                  4
                </div>
                <div>
                  <p className="text-navy-900/70 leading-relaxed">Seller confirms delivery → release (Completed)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="card">
            <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
              <LinkIcon className="w-5 h-5 text-blue-500" /> Developer Documentation
            </h3>
            <p className="text-navy-900/60 leading-relaxed text-sm mb-6">
              Integration guides, ABI reference, contract addresses (once deployed to testnet), and
              example wagmi/viem calls for creating and funding agreements.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-navy-900/5 border border-navy-900/10">
                <Terminal className="w-4 h-4 text-blue-500 shrink-0" />
                <span className="text-sm text-navy-900/70">Contract ABI &amp; addresses</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-navy-900/5 border border-navy-900/10">
                <FileIcon className="w-4 h-4 text-blue-500 shrink-0" />
                <span className="text-sm text-navy-900/70">wagmi + viem integration guide</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-navy-900/5 border border-navy-900/10">
                <Shield className="w-4 h-4 text-blue-500 shrink-0" />
                <span className="text-sm text-navy-900/70">Security &amp; risk disclosure</span>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
              <ArrowRight className="w-5 h-5 text-blue-500" /> API Integration Roadmap
            </h3>
            <p className="text-navy-900/60 leading-relaxed text-sm mb-6">
              Planned integrations are not yet implemented. The table below distinguishes what is
              live from what is planned.
            </p>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-navy-900/10">
                  <th className="text-left pb-3 text-navy-900/60 font-semibold">Feature</th>
                  <th className="text-left pb-3 text-navy-900/60 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-900/5">
                <tr>
                  <td className="pt-4 text-navy-900/70">On-chain escrow contract</td>
                  <td className="pt-4"><span className="badge badge-completed">Implemented</span></td>
                </tr>
                <tr>
                  <td className="pt-4 text-navy-900/70">Agreement metadata (Supabase)</td>
                  <td className="pt-4"><span className="badge badge-completed">Implemented</span></td>
                </tr>
                <tr>
                  <td className="pt-4 text-navy-900/70">REST API for agreements</td>
                  <td className="pt-4"><span className="badge badge-draft">Planned</span></td>
                </tr>
                <tr>
                  <td className="pt-4 text-navy-900/70">Webhooks for status updates</td>
                  <td className="pt-4"><span className="badge badge-draft">Planned</span></td>
                </tr>
                <tr>
                  <td className="pt-4 text-navy-900/70">SDK (JavaScript/TypeScript)</td>
                  <td className="pt-4"><span className="badge badge-draft">Planned</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5 text-blue-500" /> Blockchain Explorer Access
          </h3>
          <p className="text-navy-900/60 leading-relaxed text-sm mb-6">
            Verify agreement and escrow activity directly on the Robinhood Chain testnet explorer
            using the deployed contract address and agreement ID. No contract address or
            transaction hash is fabricated in this prototype.
          </p>
          <div className="flex gap-3">
            <Link
              href="#"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-navy-900/5 text-navy-900 text-sm font-medium border border-navy-900/10 hover:bg-navy-900/10 transition-colors"
            >
              <LinkIcon className="w-4 h-4" />
              Open Explorer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Local icon helpers (avoid extra imports)
function FileIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  );
}

function Globe({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z" />
    </svg>
  );
}
