"use client";

import { useState } from "react";
import MegaHeader from "@/components/MegaHeader";
import HeroBanner from "@/components/HeroBanner";
import LogoMarquee from "@/components/LogoMarquee";
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
      {/* C3.ai Style Enterprise Navigation & Mega Dropdowns */}
      <MegaHeader
        onOpenDemo={() => setDemoOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
      />

      <main id="main-content">
        {/* C3.ai Style Hero Banner with Animated Targeting Telemetry */}
        <HeroBanner onOpenDemo={() => setDemoOpen(true)} />

        {/* Organizations That Run on SaqrFlow - Infinite Marquee */}
        <LogoMarquee />

        {/* Executive AI Accelerator Banner */}
        <AcceleratorPromo onOpenDemo={() => setDemoOpen(true)} />

        {/* CORE DATA: The 6-Step Connected System (Capture, CRM, Routing, Follow-up, Integration, Reporting) */}
        <SystemFlow />

        {/* CORE DATA: Watch it handle a lead — Proof with graceful degradation & human hand-off */}
        <Proof />

        {/* Built for Your Industry - Interactive Tabbed Carousel */}
        <IndustryCarousel onOpenDemo={() => setDemoOpen(true)} />

        {/* Our Software - High Contrast Enterprise Platform & Applications Suite */}
        <SoftwareSuite onOpenDemo={() => setDemoOpen(true)} />

        {/* Customer Stories - Expandable High-Impact Case Studies (Dow, Holcim, Baker Hughes, Defense) */}
        <CustomerStories onOpenDemo={() => setDemoOpen(true)} />

        {/* CORE DATA: Who This Is For (Good fit vs Not a fit) */}
        <WhoThisIsFor />

        {/* CORE DATA: How An Engagement Runs (5 Steps) */}
        <HowItRuns />

        {/* CORE DATA: Pricing — Four Ways To Work Together & Founding Access */}
        <Pricing />

        {/* CORE DATA: Closing CTA */}
        <ClosingCta />
      </main>

      {/* Comprehensive Global Enterprise Footer */}
      <EnterpriseFooter onOpenDemo={() => setDemoOpen(true)} />

      {/* Interactive Modals */}
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
