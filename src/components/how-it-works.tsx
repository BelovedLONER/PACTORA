import Link from "next/link";
import { FileText, UserPlus, Check, SendHorizontal, ShieldCheck, X as XIcon } from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Create an agreement",
    icon: FileText,
    description:
      "One party drafts the agreement: title, description, counterparty wallet, amount, token, delivery deadline, and terms.",
  },
  {
    step: 2,
    title: "Invite the other party",
    icon: UserPlus,
    description:
      "The agreement is sent to the counterparty, who reviews the terms before anything is funded.",
  },
  {
    step: 3,
    title: "Both parties accept the terms",
    icon: Check,
    description:
      "Buyer and seller each accept on-chain. The agreement moves to Accepted — no funds have moved yet.",
  },
  {
    step: 4,
    title: "Buyer deposits funds into escrow",
    icon: SendHorizontal,
    description:
      "The buyer deposits the supported stablecoin into the escrow smart contract. Funds are now locked on-chain.",
  },
  {
    step: 5,
    title: "Seller completes delivery",
    icon: ShieldCheck,
    description:
      "The seller delivers and confirms on-chain. The agreement moves to In Progress.",
  },
  {
    step: 6,
    title: "Buyer approves release",
    icon: Check,
    description:
      "The buyer approves release and the smart contract transfers funds to the seller.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-bg-light section-padding">
      <div className="container-px">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">How It Works</h2>
          <p className="text-lg text-navy-900/70 leading-relaxed max-w-2xl mx-auto">
            A clear, agreement-based escrow process — from draft to settlement — all recorded
            on-chain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.title} className="card">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-blue-600 font-bold text-sm">
                {step.step}
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-3">{step.title}</h3>
              <p className="text-navy-900/60 leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl border border-navy-900/10 p-8 sm:p-12">
          <h3 className="text-xl font-bold text-navy-900 mb-6">Cancellation &amp; Refund Conditions</h3>
          <div className="space-y-5">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-navy-900/10 flex items-center justify-center text-navy-900 text-sm font-bold">
                1
              </div>
              <div>
                <h4 className="font-bold text-navy-900">Before funding</h4>
                <p className="text-navy-900/60 text-sm leading-relaxed">
                  Either party may cancel while the agreement is in Draft or Accepted status. No
                  funds have been deposited, so there is nothing to refund.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-navy-900/10 flex items-center justify-center text-navy-900 text-sm font-bold">
                2
              </div>
              <div>
                <h4 className="font-bold text-navy-900">After funding</h4>
                <p className="text-navy-900/60 text-sm leading-relaxed">
                  Cancellation requires both parties to sign. Funds are returned to the buyer from
                  the escrow contract.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-navy-900/10 flex items-center justify-center text-navy-900 text-sm font-bold">
                3
              </div>
              <div>
                <h4 className="font-bold text-navy-900">Disputes</h4>
                <p className="text-navy-900/60 text-sm leading-relaxed">
                  Either party can open a dispute after funding. Funds stay locked in escrow until
                  resolved. Escrow protection follows the actual smart-contract rules — it does not
                  automatically protect against every possible dispute.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 rounded-xl bg-amber-50 border border-amber-100">
            <p className="text-sm text-amber-800 flex items-start gap-2">
              <XIcon className="w-4 h-4 shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                This prototype is unaudited. Escrow protection is limited to the smart-contract
                rules described above. Do not use with real funds.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
