import Link from "next/link";
import { Twitter, Mail, Globe, Shield, ArrowRight, Share2 } from "lucide-react";

const SOCIALS = [
  { name: "X", href: "https://x.com/pactoraprotocol?s=11", icon: Twitter },
  { name: "Telegram", href: "https://t.me/Pactoraprotocol", icon: Share2 },
];

const FOOTER_LINKS = [
  { name: "Home", href: "/" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Use Cases", href: "#use-cases" },
  { name: "Security", href: "#security" },
  { name: "Developers", href: "#developers" },
  { name: "FAQ", href: "#faq" },
];

const LEGAL_LINKS = [
  { name: "Terms of Service", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Risk Disclosure", href: "/risk" },
];

export function Footer() {
  return (
    <footer className="border-t border-navy-900/10 bg-navy-900 text-silver-200">
      <div className="container-px py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12 lg:mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.svg" alt="PACTORA logo" className="w-7 h-7" />
              <span className="font-bold text-lg tracking-tight text-white">PACTORA</span>
            </div>
            <p className="text-sm text-silver-200/70 leading-relaxed max-w-xs">
              Global on-chain escrow infrastructure. Secure transactions with anyone, anywhere.
            </p>
            <div className="flex items-center gap-4 mt-8">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-silver-200/30 flex items-center justify-center text-silver-200 hover:text-blue-500 hover:border-blue-500 hover:bg-blue-500/10 transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Platform</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-silver-200/70 hover:text-blue-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Community</h3>
            <ul className="space-y-3">
              {SOCIALS.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-silver-200/70 hover:text-blue-500 transition-colors"
                  >
                    <social.icon className="w-4 h-4 shrink-0" />
                    <span>{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Legal</h3>
            <ul className="space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-silver-200/70 hover:text-blue-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://x.com/pactoraprotocol?s=11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-silver-200/70 hover:text-blue-500 transition-colors"
                >
                  <Twitter className="w-4 h-4 shrink-0" />
                  Follow on X
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-900/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-silver-200/50">
          <p>
            PACTORA.{" "}
            <span className="font-semibold text-white">AGREEMENTS THAT SETTLE.</span>
          </p>
          <p>
            This prototype is unaudited. Do not use with real funds. No contract addresses, token
            addresses, or transaction hashes are fabricated.
          </p>
          <p>
            &copy; {new Date().getFullYear()} PACTORA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
