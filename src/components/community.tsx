import Link from "next/link";
import { ArrowRight, Share2, Users } from "lucide-react";

export function Community() {
  return (
    <section className="bg-white section-padding">
      <div className="container-px">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-6">
            <Users className="w-3 h-3" />
            Join the community
          </div>
          <h2 className="heading-secondary mb-4">Build the Future of Global Transactions With Us.</h2>
          <p className="text-lg text-navy-900/70 leading-relaxed mb-10">
            PACTORA is building a better way for people to transact globally. Join the community
            and follow the development journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://x.com/pactoraprotocol?s=11"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-4 text-lg flex items-center gap-2"
            >
              Follow PACTORA on X <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://t.me/Pactoraprotocol"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline px-8 py-4 text-lg flex items-center gap-2"
            >
              Join the Telegram Community
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
