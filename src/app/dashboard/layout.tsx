"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { WalletConnectMini } from "@/components/wallet-connect";
import {
  LayoutDashboard,
  FilePlus,
  List,
  CreditCard,
  AlertTriangle,
  History,
  Settings,
  Link as LinkIcon,
  LogOut,
  Shield,
  ArrowRight,
} from "lucide-react";

const NAV_ITEMS = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Create Agreement", href: "/dashboard/create-agreement", icon: FilePlus },
  { name: "My Agreements", href: "/dashboard/my-agreements", icon: List },
  { name: "Active Escrows", href: "/dashboard/active-escrows", icon: CreditCard },
  { name: "Disputes", href: "/dashboard/disputes", icon: AlertTriangle },
  { name: "Transaction History", href: "/dashboard/transactions", icon: History },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-full w-full bg-bg-light">
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 bottom-0 w-20 md:relative md:w-64 bg-white border-r border-navy-900/10 z-40 transition-width duration-300 ${
          collapsed ? "md:w-20" : ""
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="h-16 md:h-20 flex items-center justify-center px-4 gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-navy-900 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <span className="text-white font-bold text-xs tracking-tighter">P</span>
            </div>
            {!collapsed && <span className="font-bold text-xl tracking-tight text-navy-900">PACTORA</span>}
          </div>

          <nav className="flex-1 space-y-1 p-3">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
                    active
                      ? "bg-blue-50 text-blue-600 shadow-sm"
                      : "text-navy-900/60 hover:bg-navy-900/5 hover:text-blue-500"
                  }`}
                >
                  <Icon className={`w-5 h-5 shrink-0 ${active ? "text-blue-600" : "text-navy-900/40"}`} />
                  {!collapsed && <span className="text-sm font-medium">{item.name}</span>}
                </Link>
              );
            })}
          </nav>

          <div className="p-3 border-t border-navy-900/10">
            <WalletConnectMini />
            <div className="mt-3">
              <Link
                href="/"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-navy-900/60 hover:bg-navy-900/5 transition-colors text-sm font-medium"
              >
                <LogOut className="w-4 h-4 shrink-0 text-navy-900/40" />
                <ArrowRight className="w-3 h-3 shrink-0 text-navy-900/40" />
                <span>Back to site</span>
              </Link>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main
        className={`flex-1 overflow-y-auto p-6 md:p-8 transition-margin duration-300 ${collapsed ? "md:pl-20" : "md:pl-64"}`}
      >
        {children}
      </main>
    </div>
  );
}
