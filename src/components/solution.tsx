import { CheckCircle2, Shield, RefreshCw } from "lucide-react";

const stages = [
  {
    step: "1",
    title: "AGREE",
    icon: RefreshCw,
    description:
      "Both parties establish and accept the transaction terms. Nothing moves until everyone is aligned.",
  },
  {
    step: "2",
    title: "SECURE",
    icon: Shield,
    description:
      "The buyer funds the escrow smart contract. Funds are locked on-chain until conditions are met.",
  },
  {
    step: "3",
    title: "SETTLE",
    icon: CheckCircle2,
    description:
      "Funds are released to the seller according to the agreed conditions, or returned if cancelled.",
  },
];

export function Solution() {
  return (
    <section id="solution" className="section-padding bg-white">
      <div className="container-px">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-secondary mb-4">A Better Way to Transact.</h2>
          <p className="text-lg text-navy-900/70 leading-relaxed">
            PACTORA provides an agreement-based escrow process that protects both buyers and sellers
            at every step.
          </p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-8 items-start">
          {stages.map((stage) => (
            <div
              key={stage.title}
              className="relative card group mb-8 md:mb-0"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/40 z-10">
                <span className="text-white font-bold text-sm">{stage.step}</span>
              </div>

              <div className="relative z-0">
                <div className="w-14 h-14 rounded-2xl bg-blue-50/10 flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <stage.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{stage.title}</h3>
                <p className="text-navy-900/60 leading-relaxed text-sm">{stage.description}</p>
              </div>
            </div>
          ))}

          {/* Connector lines */}
          <div className="hidden md:block absolute left-1/2 top-12 bottom-12 w-px bg-navy-900/10 z-0" />
        </div>
      </div>
    </section>
  );
}
