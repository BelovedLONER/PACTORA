import Link from "next/link";
import { Shield, Lock, Globe, FileCode, Link as LinkIcon } from "lucide-react";

const points = [
  {
    title: "Smart-contract-based escrow",
    icon: Shield,
    text: "Funds are held by a smart contract on Robinhood Chain, not by a central custodian. The contract enforces funding, delivery, and release rules.",
  },
  {
    title: "Transparent transaction records",
    icon: FileCode,
    text: "Every agreement creation, acceptance, funding, and release is recorded on-chain and visible to both parties.",
  },
  {
    title: "Clear funding and release conditions",
    icon: Lock,
    text: "Funds only move when the defined conditions are met — buyer deposit, seller delivery confirmation, and buyer release approval.",
  },
  {
    title: "Wallet-based transaction authorization",
    icon: Globe,
    text: "All on-chain actions require wallet authorization. PACTORA never holds your private keys or initiates transactions on your behalf.",
  },
  {
    title: "On-chain verification",
    icon: LinkIcon,
    text: "Agreements and escrow activity can be verified through the blockchain explorer using the contract address and agreement ID.",
  },
];

export function Security() {
  return (
    <section id="security" className="bg-navy-900 text-white section-padding">
      <div className="container-px">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">Your Agreement. Your Terms. On-Chain.</h2>
          <p className="text-lg text-blue-100/80 leading-relaxed max-w-2xl mx-auto">
            PACTORA's escrow infrastructure is designed for transparency. Understand exactly how
            funds move — and when they don't.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {points.map((point) => (
            <div key={point.title} className="card bg-navy-800/40 border-navy-900/30 text-white">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400">
                <point.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{point.title}</h3>
              <p className="text-blue-100/60 leading-relaxed text-sm">{point.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-navy-800/40 bg-navy-900/30 rounded-2xl p-8 sm:p-12">
          <p className="text-sm text-blue-100/50 font-medium mb-2 uppercase tracking-wider">
            Important security notice
          </p>
          <p className="text-blue-100/70 leading-relaxed text-sm">
            This prototype is unaudited. PACTORA does not claim that the platform is audited,
            insured, risk-free, or fully decentralized unless those capabilities have been
            implemented and verified. Do not use with real funds. Review the smart-contract rules
            before transacting.
          </p>
        </div>
      </div>
    </section>
  );
}
