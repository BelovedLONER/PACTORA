export const dynamic = "force-dynamic";

import Link from "next/link";
import { ArrowRight, Shield, Globe, CheckCircle2, RefreshCw, Users, FileText } from "lucide-react";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Solution } from "@/components/solution";
import { HowItWorks } from "@/components/how-it-works";
import { UseCases } from "@/components/use-cases";
import { Security } from "@/components/security";
import { Community } from "@/components/community";
import { FAQ } from "@/components/faq";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <UseCases />
      <Security />
      <Community />
      <FAQ />
    </div>
  );
}
