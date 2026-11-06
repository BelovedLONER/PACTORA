const useCases = [
  {
    title: "Freelance Payments",
    icon: "F",
    description:
      "Clients and freelancers agree on scope and payment up front. Funds are released when the work is delivered and approved.",
    details: ["Clear scope and deadline", "Milestone-based release", "Dispute path if work is rejected"],
  },
  {
    title: "Digital Services",
    icon: "D",
    description:
      "Software, design, and digital goods transactions where delivery can be verified and conditions are set in advance.",
    details: ["Defined deliverables", "On-chain acceptance", "Automated release on approval"],
  },
  {
    title: "Business Transactions",
    icon: "B",
    description:
      "B2B agreements between companies that want structured, verifiable payment terms for goods and services.",
    details: ["Counterparty verification", "Funding and release conditions", "Transaction history"],
  },
  {
    title: "Peer-to-Peer Deals",
    icon: "P",
    description:
      "Individuals transacting directly who want a neutral third-party mechanism to hold funds until both sides are satisfied.",
    details: ["Neutral escrow holder", "Mutual acceptance required", "Refund on mutual cancellation"],
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="section-padding bg-white">
      <div className="container-px">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">Built for Every Kind of Agreement</h2>
          <p className="text-lg text-navy-900/70 leading-relaxed max-w-2xl mx-auto">
            Escrow helps buyers and sellers establish clearer transaction conditions, no matter the
            deal size or location.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="card">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 text-blue-600 font-bold text-xl">
                {useCase.icon}
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-3">{useCase.title}</h3>
              <p className="text-navy-900/60 leading-relaxed text-sm mb-6">{useCase.description}</p>
              <ul className="space-y-2">
                {useCase.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2 text-xs text-navy-900/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/40 mt-[0.15rem] shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
