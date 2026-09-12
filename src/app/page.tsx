"use client";

import { useState } from "react";
import MegaHeader from "@/components/MegaHeader";
import HeroBanner from "@/components/HeroBanner";
import SystemFlow from "@/components/SystemFlow";
import Proof from "@/components/Proof";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import HowItRuns from "@/components/HowItRuns";
import Pricing from "@/components/Pricing";
import ClosingCta from "@/components/ClosingCta";
import EnterpriseFooter from "@/components/EnterpriseFooter";
import DemoModal from "@/components/DemoModal";
import SearchModal from "@/components/SearchModal";

export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white/20 selection:text-white">
      {/* Enterprise Header & Mega Navigation */}
      <MegaHeader
        onOpenDemo={() => setDemoOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
      />

      <main id="main-content">
        {/* Hero Banner: Simple, Authentic, Agency Value Proposition */}
        <HeroBanner onOpenDemo={() => setDemoOpen(true)} />

        {/* WHITE SECTION: The 6-Step Connected System */}
        <SystemFlow />

        {/* LIGHT SECTION: WhatsApp Lead Qualification Proof */}
        <Proof />

        {/* WHITE SECTION: Who This Is For (Good fit vs Not a fit) */}
        <WhoThisIsFor />

        {/* LIGHT SECTION: How An Engagement Runs (5 Steps) */}
        <HowItRuns />

        {/* WHITE SECTION: Pricing — Four Ways To Work Together */}
        <Pricing />

        {/* DARK SECTION: Closing CTA */}
        <ClosingCta />
      </main>

      {/* Global Enterprise Footer */}
      <EnterpriseFooter onOpenDemo={() => setDemoOpen(true)} />

      {/* Interactive Modals */}
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
