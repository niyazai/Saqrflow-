"use client";

import { useState } from "react";
import MegaHeader from "@/components/MegaHeader";
import HeroBanner from "@/components/HeroBanner";
import LogoMarquee from "@/components/LogoMarquee";
import AcceleratorPromo from "@/components/AcceleratorPromo";
import IndustryCarousel from "@/components/IndustryCarousel";
import SoftwareSuite from "@/components/SoftwareSuite";
import CustomerStories from "@/components/CustomerStories";
import EnterpriseFooter from "@/components/EnterpriseFooter";
import DemoModal from "@/components/DemoModal";
import SearchModal from "@/components/SearchModal";

export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-white">
      {/* C3.ai Style Enterprise Navigation */}
      <MegaHeader
        onOpenDemo={() => setDemoOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
      />

      <main id="main-content">
        {/* Hero Banner with Animated Targeting Telemetry */}
        <HeroBanner onOpenDemo={() => setDemoOpen(true)} />

        {/* Organizations That Run on SaqrFlow - Infinite Marquee */}
        <LogoMarquee />

        {/* Sticky Executive AI Accelerator Banner */}
        <AcceleratorPromo onOpenDemo={() => setDemoOpen(true)} />

        {/* Built for Your Industry - Interactive Tabbed Carousel */}
        <IndustryCarousel onOpenDemo={() => setDemoOpen(true)} />

        {/* Our Software - High Contrast Enterprise Platform Suite */}
        <SoftwareSuite onOpenDemo={() => setDemoOpen(true)} />

        {/* Customer Stories - Expandable High-Impact Case Studies */}
        <CustomerStories onOpenDemo={() => setDemoOpen(true)} />
      </main>

      {/* Global Enterprise Footer */}
      <EnterpriseFooter onOpenDemo={() => setDemoOpen(true)} />

      {/* Interactive Modals */}
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
