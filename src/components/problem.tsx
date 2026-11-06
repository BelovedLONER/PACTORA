import { ShieldAlert, HandCoins, Globe, Lock } from "lucide-react";

const stats = [
  {
    icon: HandCoins,
    title: "Payment uncertainty",
    text: "Buyers don't want to pay without confidence that delivery will happen.",
  },
  {
    icon: ShieldAlert,
    title: "Delivery risk",
    text: "Sellers don't want to deliver without confidence that payment will arrive.",
  },
  {
    icon: Globe,
    title: "Cross-border friction",
    text: "International transactions can involve uncertainty and limited trust.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="bg-bg-light section-padding">
      <div className="container-px">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="heading-secondary mb-4">Who Goes First?</h2>
          <p className="text-lg text-navy-900/70 leading-relaxed max-w-xl mx-auto">
            In a direct transaction, both sides take a risk. One party must act first — and trust
            that the other will follow through.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((item) => (
            <div key={item.title} className="card">
              <div className="w-12 h-12 rounded-xl bg-navy-900/5 flex items-center justify-center mb-6 text-navy-900">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-3">{item.title}</h3>
              <p className="text-navy-900/60 leading-relaxed text-sm">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto mt-16 pt-12 border-t border-navy-900/10 text-center">
          <p className="text-xl font-semibold text-navy-900 leading-tight">
            Transactions need more than promises. They need protection.
          </p>
        </div>
      </div>
    </section>
  );
}
