import Link from "next/link";
import { Shield, Globe, ArrowRight, Network, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-navy-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        {/* Abstract global network glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-[120px] animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/15 blur-[120px] animate-blob" style={{ animationDelay: "-2s" }} />
      </div>

      <div className="relative z-10 container-px px-4 py-20 lg:py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-8">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          Live on Robinhood Chain Testnet
        </div>

        <h1 className="heading-primary mb-6 text-balance">
          Every Agreement Deserves Protection.
        </h1>

        <p className="subheading mx-auto mb-10 lg:mb-12">
          Secure transactions with anyone, anywhere. PACTORA brings agreements, escrow, and payment
          releases together through on-chain infrastructure built on Robinhood Chain.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/dashboard" className="btn-primary text-lg px-8 py-4">
            Create an Agreement <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          <Link href="#how-it-works" className="btn-outline text-lg px-8 py-4">
            Explore How It Works
          </Link>
        </div>

        {/* Visual: glowing shield + network elements */}
        <div className="mt-16 relative h-[500px] w-full max-w-5xl mx-auto opacity-90">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Shield className="w-full h-full text-blue-400 drop-shadow-[0_0_30px_rgba(67,139,255,0.6)] animate-pulse-glow" />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-500 to-transparent opacity-40 blur-xl animate-pulse" />
            </div>
          </div>

          <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full border border-blue-500/30 animate-spin-reverse" />
          <div className="absolute bottom-1/6 right-1/6 w-32 h-32 rounded-full border border-blue-500/20 animate-spin" />

          <div className="grid grid-cols-3 gap-4 absolute inset-0 pointer-events-none">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div
                key={i}
                className="rounded-full bg-blue-500/10 animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
