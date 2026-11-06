import React from "react";
import { ChevronDown, ChevronUp, Shield, HelpCircle, FileText, RefreshCw, Globe } from "lucide-react";

const faqs = [
  {
    q: "What is PACTORA?",
    icon: Shield,
    a: "PACTORA is a global on-chain escrow platform built on Robinhood Chain. It lets people establish agreements, secure funds through on-chain escrow, and release payments according to agreed conditions.",
  },
  {
    q: "What is on-chain escrow?",
    icon: LockIconPlaceholder,
    a: "On-chain escrow means funds are held by a smart contract on the blockchain rather than by a central party. The contract only releases funds when the agreed conditions are met.",
  },
  {
    q: "How does an escrow agreement work?",
    icon: FileText,
    a: "One party creates an agreement with terms, amount, token, and deadline. Both parties accept, the buyer funds the escrow, the seller delivers, and the buyer approves release — or funds are returned on cancellation.",
  },
  {
    q: "Who can create an agreement?",
    icon: HelpCircle,
    a: "Anyone with a compatible wallet can create an agreement and invite a counterparty. Both parties must review and accept before funding.",
  },
  {
    q: "How are funds released?",
    icon: RefreshCw,
    a: "Funds are released to the seller only after delivery is confirmed and the buyer approves the release. The smart contract executes the transfer automatically.",
  },
  {
    q: "What happens if a transaction is cancelled?",
    icon: RefreshCw,
    a: "Before funding, either party can cancel. After funding, cancellation requires both parties to sign, and funds are returned to the buyer.",
  },
  {
    q: "What happens if a dispute occurs?",
    icon: Shield,
    a: "Either party can open a dispute after funding. Funds remain locked in escrow until the dispute is resolved. Escrow protection follows the actual smart-contract rules.",
  },
  {
    q: "Which blockchain does PACTORA use?",
    icon: Globe,
    a: "PACTORA is built on Robinhood Chain's EVM environment, initially using the Robinhood Chain testnet for development and testing.",
  },
];

// Placeholder icon component to avoid a missing import
function LockIconPlaceholder({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  );
}

export function FAQ() {
  const [open, setOpen] = React.useState<Set<number>>(new Set([0]));

  const toggle = (index: number) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <section id="faq" className="bg-bg-light section-padding">
      <div className="container-px">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-navy-900/70 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about using PACTORA.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((item, index) => {
            const isOpen = open.has(index);
            return (
              <div key={item.q} className="card">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-blue-500 shrink-0" />
                    <h3 className="text-base font-bold text-navy-900">{item.q}</h3>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-navy-900/40 transition-transform" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-navy-900/40 transition-transform" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 border-t border-navy-900/5">
                    <p className="text-navy-900/60 leading-relaxed text-sm">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
