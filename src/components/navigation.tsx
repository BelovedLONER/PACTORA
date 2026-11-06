"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X as XIcon, Mail, Twitter, Share2 } from "lucide-react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Use Cases", href: "#use-cases" },
  { name: "Security", href: "#security" },
  { name: "Developers", href: "#developers" },
  { name: "FAQ", href: "#faq" },
  { name: "Launch App", href: "/dashboard" },
];

const SOCIALS = [
  { name: "X", href: "https://x.com/pactoraprotocol?s=11", icon: Twitter },
  { name: "Telegram", href: "https://t.me/Pactoraprotocol", icon: Share2 },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-background duration-300">
      <div className="border-b border-navy-900/5 bg-white/80 backdrop-blur-md">
        <div className="container-px flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo.svg"
              alt="PACTORA logo"
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <span className="font-bold text-xl tracking-tight text-navy-900">PACTORA</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href ? "text-blue-500" : "text-navy-900/70 hover:text-blue-500"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-navy-900/70 hover:text-blue-500 hover:bg-navy-900/5 transition-colors"
                  title={`Follow PACTORA on ${social.name}`}
                >
                  <social.icon className="w-4 h-4" aria-label={social.name} />
                </a>
              ))}
            </div>
            <Link
              href="/dashboard"
              className="btn-primary whitespace-nowrap"
            >
              Create Agreement
            </Link>
          </div>

          {/* Mobile: wallet + menu + create */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-navy-900/70 hover:bg-navy-900/5 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            <ConnectButton />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-navy-900/5 bg-white/95 backdrop-blur-md">
          <div className="container-px space-y-4 py-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-navy-900/80 hover:bg-blue-500/5 hover:text-blue-500 rounded-xl transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex items-center gap-3 border-t border-navy-900/10 pt-6">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-navy-900/70 hover:text-blue-500 hover:bg-navy-900/5 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <Link
              href="/dashboard"
              className="w-full btn-primary whitespace-nowrap"
              onClick={() => setMobileMenuOpen(false)}
            >
              Create Agreement
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
