"use client";

import { useState } from "react";
import MegaHeader from "@/components/MegaHeader";
import HeroBanner from "@/components/HeroBanner";
import AcceleratorPromo from "@/components/AcceleratorPromo";
import SystemFlow from "@/components/SystemFlow";
import Proof from "@/components/Proof";
import IndustryCarousel from "@/components/IndustryCarousel";
import SoftwareSuite from "@/components/SoftwareSuite";
import CustomerStories from "@/components/CustomerStories";
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
        {/* Hero Banner with Authentic Non-AI Infrastructure Photo */}
        <HeroBanner onOpenDemo={() => setDemoOpen(true)} />

        {/* Executive Workflow Immersion Banner */}
        <AcceleratorPromo onOpenDemo={() => setDemoOpen(true)} />

        {/* WHITE SECTION: The 6-Step Connected System */}
        <SystemFlow />

        {/* LIGHT SECTION: WhatsApp Lead Qualification Proof */}
        <Proof />

        {/* DARK SECTION: Built for Your Industry Carousel */}
        <IndustryCarousel onOpenDemo={() => setDemoOpen(true)} />

        {/* WHITE SECTION: Our Software Suite */}
        <SoftwareSuite onOpenDemo={() => setDemoOpen(true)} />

        {/* DARK SECTION: Customer Stories */}
        <CustomerStories onOpenDemo={() => setDemoOpen(true)} />

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
