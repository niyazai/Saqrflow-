"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface MegaHeaderProps {
  onOpenDemo?: () => void;
  onOpenSearch?: () => void;
}

export default function MegaHeader({ onOpenDemo, onOpenSearch }: MegaHeaderProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileSection = (section: string) => {
    setMobileExpandedSection(mobileExpandedSection === section ? null : section);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-200 ${
          scrolled
            ? "bg-[#000000]/95 backdrop-blur-md border-b border-white/10 shadow-2xl"
            : "bg-[#000000] border-b border-white/10"
        }`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-6 lg:px-12">
          {/* Brand Logo */}
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center w-8 h-8 rounded bg-white/5 border border-white/20 p-1 group-hover:border-cyan-400/50 transition-colors">
                <Image
                  src="/brand/saqrflow-mark.png"
                  alt="SaqrFlow Logo"
                  width={24}
                  height={24}
                  priority
                  className="w-auto h-auto max-h-6"
                />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-[19px] font-bold tracking-tight text-white font-sans">
                  SaqrFlow
                </span>
                <span className="text-[10px] font-mono tracking-widest text-cyan-400 font-semibold px-1.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/50">
                  AI
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Products Menu */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMenu("products")}
              >
                <button
                  type="button"
                  className={`px-4 py-2 text-[14px] font-medium transition-colors flex items-center gap-1.5 ${
                    activeMenu === "products"
                      ? "text-white"
                      : "text-neutral-300 hover:text-white"
                  }`}
                >
                  Products
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 text-neutral-400 ${
                      activeMenu === "products" ? "rotate-180 text-white" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
              </div>

              {/* Industries Menu */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMenu("industries")}
              >
                <button
                  type="button"
                  className={`px-4 py-2 text-[14px] font-medium transition-colors flex items-center gap-1.5 ${
                    activeMenu === "industries"
                      ? "text-white"
                      : "text-neutral-300 hover:text-white"
                  }`}
                >
                  Industries
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 text-neutral-400 ${
                      activeMenu === "industries" ? "rotate-180 text-white" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
              </div>

              {/* Resources Menu */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMenu("resources")}
              >
                <button
                  type="button"
                  className={`px-4 py-2 text-[14px] font-medium transition-colors flex items-center gap-1.5 ${
                    activeMenu === "resources"
                      ? "text-white"
                      : "text-neutral-300 hover:text-white"
                  }`}
                >
                  Resources
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 text-neutral-400 ${
                      activeMenu === "resources" ? "rotate-180 text-white" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
              </div>

              {/* Company Menu */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMenu("company")}
              >
                <button
                  type="button"
                  className={`px-4 py-2 text-[14px] font-medium transition-colors flex items-center gap-1.5 ${
                    activeMenu === "company"
                      ? "text-white"
                      : "text-neutral-300 hover:text-white"
                  }`}
                >
                  Company
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 text-neutral-400 ${
                      activeMenu === "company" ? "rotate-180 text-white" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
              </div>
            </nav>
          </div>

          {/* Right Action Icons & CTA */}
          <div className="flex items-center gap-4">
            {/* Search Trigger */}
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label="Search"
              className="flex items-center gap-2 px-3 py-1.5 text-xs text-neutral-400 hover:text-white rounded border border-white/10 hover:border-white/30 transition-colors"
            >
              <svg
                className="w-4 h-4 text-neutral-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span className="hidden md:inline font-mono">Search</span>
              <kbd className="hidden md:inline text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-neutral-400">
                ⌘K
              </kbd>
            </button>

            {/* Request a Demo CTA */}
            <button
              type="button"
              onClick={onOpenDemo}
              className="inline-flex items-center justify-center gap-1.5 h-10 px-5 text-[13.5px] font-semibold tracking-wide text-black bg-white rounded transition-all hover:bg-neutral-200 hover:shadow-lg hover:shadow-white/10"
            >
              <span>Contact Us</span>
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Mega Dropdowns */}
        {activeMenu && (
          <div
            className="hidden lg:block absolute left-0 top-[72px] w-full bg-[#080a0e] border-b border-white/15 shadow-2xl transition-all animate-in fade-in slide-in-from-top-1 duration-200"
            onMouseEnter={() => setActiveMenu(activeMenu)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="mx-auto max-w-[1440px] px-12 py-10">
              {activeMenu === "products" && (
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-3 border-r border-white/10 pr-6">
                    <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
                      Software Architecture
                    </p>
                    <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                      Products
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                      A full stack of enterprise artificial intelligence applications built on a unified semantic ontology.
                    </p>
                    <Link
                      href="#software"
                      onClick={() => setActiveMenu(null)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-cyan-300 transition-colors"
                    >
                      <span>Explore Product Portfolio</span>
                      <span>→</span>
                    </Link>
                  </div>

                  <div className="col-span-5 grid grid-cols-2 gap-8 px-4">
                    <div>
                      <p className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-300 mb-4 pb-2 border-b border-white/10">
                        Applications
                      </p>
                      <ul className="space-y-3">
                        {[
                          "SaqrFlow Reliability",
                          "Production Schedule Optimization",
                          "SaqrFlow Demand Planning",
                          "Process Optimization",
                          "Inventory Optimization",
                          "Sourcing Optimization",
                          "All 40+ Applications",
                        ].map((item, idx) => (
                          <li key={idx}>
                            <Link
                              href="#software"
                              onClick={() => setActiveMenu(null)}
                              className="text-sm text-neutral-400 hover:text-white transition-colors block py-0.5"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-300 mb-4 pb-2 border-b border-white/10">
                        Platform
                      </p>
                      <ul className="space-y-3">
                        {[
                          { title: "SaqrFlow Studio", desc: "Low-code application studio" },
                          { title: "SaqrFlow Code", desc: "Autonomous agentic coding" },
                          { title: "SaqrFlow Generative AI", desc: "Enterprise RAG & search" },
                          { title: "Agentic AI Platform", desc: "Multi-agent runtime" },
                        ].map((item, idx) => (
                          <li key={idx} className="group">
                            <Link
                              href="#software"
                              onClick={() => setActiveMenu(null)}
                              className="block"
                            >
                              <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors block">
                                {item.title}
                              </span>
                              <span className="text-xs text-neutral-500 block">
                                {item.desc}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="col-span-4 pl-6 border-l border-white/10">
                    <div className="rounded-xl border border-white/10 bg-[#0d1117] p-5 hover:border-cyan-500/30 transition-all">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                          Overview
                        </span>
                        <span className="text-xs text-neutral-400">Enterprise AI</span>
                      </div>
                      <div className="h-28 rounded bg-gradient-to-br from-neutral-900 via-cyan-950/30 to-neutral-900 border border-white/5 flex items-center justify-center p-4 mb-4 relative overflow-hidden">
                        <div className="absolute inset-0 c3-grid-pattern opacity-40" />
                        <div className="relative text-center">
                          <p className="text-xs font-mono text-cyan-300">ONTOLOGY • AGENTS • APPS</p>
                          <p className="text-xs text-neutral-400 mt-1">Layered Enterprise Product Stack</p>
                        </div>
                      </div>
                      <h4 className="text-sm font-semibold text-white mb-1">
                        Explore the Full Product Portfolio
                      </h4>
                      <p className="text-xs text-neutral-400 mb-4 leading-normal">
                        Pre-built enterprise solutions running at petabyte scale across defense, manufacturing, and energy.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveMenu(null);
                          onOpenDemo?.();
                        }}
                        className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
                      >
                        <span>Schedule Architectural Tour</span>
                        <span>↗</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeMenu === "industries" && (
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-3 border-r border-white/10 pr-6">
                    <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
                      Sectors
                    </p>
                    <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                      Industries
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                      Engineered for the physical world and complex enterprise operating models.
                    </p>
                    <Link
                      href="#industries"
                      onClick={() => setActiveMenu(null)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-cyan-300 transition-colors"
                    >
                      <span>View All Industries</span>
                      <span>→</span>
                    </Link>
                  </div>

                  <div className="col-span-5 px-4">
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { name: "Defense & Intelligence", href: "#industries" },
                        { name: "Maritime & Naval", href: "#industries" },
                        { name: "Manufacturing & Industrial", href: "#industries" },
                        { name: "Federal & Public Sector", href: "#industries" },
                        { name: "Oil & Gas Operations", href: "#industries" },
                        { name: "Power & Utilities", href: "#industries" },
                        { name: "Healthcare & Life Sciences", href: "#industries" },
                        { name: "Financial Services", href: "#industries" },
                      ].map((ind, i) => (
                        <Link
                          key={i}
                          href={ind.href}
                          onClick={() => setActiveMenu(null)}
                          className="p-3 rounded-lg border border-white/5 hover:border-white/20 hover:bg-white/[0.02] transition-colors block"
                        >
                          <p className="text-sm font-medium text-neutral-200 hover:text-white">
                            {ind.name}
                          </p>
                          <span className="text-xs text-neutral-500">
                            Purpose-built applications ›
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="col-span-4 pl-6 border-l border-white/10">
                    <div className="rounded-xl border border-white/10 bg-[#0d1117] p-5">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                          Latest Release
                        </span>
                        <span className="text-xs text-neutral-500">2026.1</span>
                      </div>
                      <h4 className="text-sm font-semibold text-white mb-2 leading-snug">
                        Introducing SaqrFlow Agentic Process Automation
                      </h4>
                      <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
                        Autonomous multi-agent workflows designed to inspect, orchestrate, and reconcile mission-critical supply lines and industrial assets.
                      </p>
                      <Link
                        href="#industries"
                        onClick={() => setActiveMenu(null)}
                        className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
                      >
                        <span>Read Case Studies</span>
                        <span>↗</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {activeMenu === "resources" && (
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-3 border-r border-white/10 pr-6">
                    <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
                      Intelligence & Research
                    </p>
                    <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                      Resources
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                      Case studies, architectural whitepapers, and operational blueprints.
                    </p>
                  </div>

                  <div className="col-span-4 px-4">
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-300 mb-4 pb-2 border-b border-white/10">
                      Insights & Evidence
                    </p>
                    <ul className="space-y-3">
                      {[
                        { title: "Case Studies", desc: "Dow, Holcim, US Defense validation" },
                        { title: "Analyst Reports", desc: "Enterprise AI market leadership" },
                        { title: "Live Events & Summits", desc: "Global executive conferences" },
                        { title: "Engineering Blog", desc: "Ontology architecture and benchmarks" },
                      ].map((item, idx) => (
                        <li key={idx}>
                          <Link
                            href="#stories"
                            onClick={() => setActiveMenu(null)}
                            className="block group"
                          >
                            <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors block">
                              {item.title}
                            </span>
                            <span className="text-xs text-neutral-500">
                              {item.desc}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="col-span-5 pl-6 border-l border-white/10">
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-300 mb-4 pb-2 border-b border-white/10">
                      Academy & Fundamentals
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { title: "Documentation", desc: "API specs & SDKs" },
                        { title: "SaqrFlow Academy", desc: "Certifications" },
                        { title: "What is Enterprise AI?", desc: "Foundational guide" },
                        { title: "Glossary", desc: "Ontology & agent terms" },
                      ].map((item, idx) => (
                        <Link
                          key={idx}
                          href="#software"
                          onClick={() => setActiveMenu(null)}
                          className="p-3 rounded-lg border border-white/5 hover:border-white/20 hover:bg-white/[0.02] block"
                        >
                          <span className="text-sm font-medium text-neutral-200 block">
                            {item.title}
                          </span>
                          <span className="text-xs text-neutral-500 block">
                            {item.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeMenu === "company" && (
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-3 border-r border-white/10 pr-6">
                    <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
                      Enterprise Profile
                    </p>
                    <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                      Company
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                      Leading the global transition to agentic enterprise software.
                    </p>
                  </div>

                  <div className="col-span-5 px-4">
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-300 mb-4 pb-2 border-b border-white/10">
                      About SaqrFlow
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        "Company Overview",
                        "Executive Leadership",
                        "Newsroom & Press",
                        "Customers & Partners",
                        "Global Testimonials",
                        "Strategic Alliances",
                      ].map((item, idx) => (
                        <Link
                          key={idx}
                          href="#stories"
                          onClick={() => setActiveMenu(null)}
                          className="text-sm text-neutral-400 hover:text-white transition-colors block py-1"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="col-span-4 pl-6 border-l border-white/10">
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-300 mb-4 pb-2 border-b border-white/10">
                      Connect & Careers
                    </p>
                    <ul className="space-y-3">
                      {[
                        { title: "Investor Relations", tag: "Financial Reports" },
                        { title: "Careers at SaqrFlow", tag: "We're Hiring" },
                        { title: "SaqrFlow Fellows", tag: "AI Research Program" },
                        { title: "Global Offices", tag: "EMEA, NA, APAC" },
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center justify-between">
                          <Link
                            href="#footer"
                            onClick={() => setActiveMenu(null)}
                            className="text-sm text-neutral-300 hover:text-white"
                          >
                            {item.title}
                          </Link>
                          <span className="text-[10px] font-mono text-neutral-500 border border-white/10 px-2 py-0.5 rounded">
                            {item.tag}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 bg-[#080a0e] border-t border-white/10 p-6 overflow-y-auto z-50 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Search Bar Mobile */}
              <div className="mb-6">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSearch?.();
                  }}
                  className="w-full flex items-center justify-between px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-neutral-400"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="11" cy="11" r="8" strokeWidth="2" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" />
                    </svg>
                    Search SaqrFlow...
                  </span>
                  <span className="text-xs font-mono bg-white/10 px-2 py-0.5 rounded">⌘K</span>
                </button>
              </div>

              {/* Accordion Sections */}
              {[
                {
                  id: "products",
                  title: "Products",
                  items: [
                    "SaqrFlow Reliability",
                    "Production Schedule Optimization",
                    "SaqrFlow Demand Planning",
                    "Process Optimization",
                    "SaqrFlow Studio",
                    "SaqrFlow Code",
                    "SaqrFlow Generative AI",
                    "Agentic AI Platform",
                  ],
                },
                {
                  id: "industries",
                  title: "Industries",
                  items: [
                    "Defense & Intelligence",
                    "Maritime",
                    "Manufacturing",
                    "Federal",
                    "Oil & Gas",
                    "Utilities",
                    "Healthcare & Life Sciences",
                  ],
                },
                {
                  id: "resources",
                  title: "Resources",
                  items: [
                    "Case Studies",
                    "Analyst Reports",
                    "Events",
                    "Documentation",
                    "Blog",
                    "SaqrFlow Academy",
                  ],
                },
                {
                  id: "company",
                  title: "Company",
                  items: [
                    "About",
                    "Leadership",
                    "Newsroom",
                    "Customers",
                    "Careers",
                    "Investor Relations",
                  ],
                },
              ].map((section) => (
                <div key={section.id} className="border-b border-white/10 pb-3">
                  <button
                    type="button"
                    onClick={() => toggleMobileSection(section.id)}
                    className="flex w-full items-center justify-between py-2 text-base font-medium text-white"
                  >
                    <span>{section.title}</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        mobileExpandedSection === section.id ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="6 9 12 15 18 9" strokeWidth="2" />
                    </svg>
                  </button>
                  {mobileExpandedSection === section.id && (
                    <ul className="mt-2 space-y-2.5 pl-4 pb-2">
                      {section.items.map((item, idx) => (
                        <li key={idx}>
                          <Link
                            href="#software"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-sm text-neutral-400 hover:text-white"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-8 pb-6 border-t border-white/10">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo?.();
                }}
                className="w-full flex items-center justify-center gap-2 h-12 rounded bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors"
              >
                <span>Request a Demo</span>
                <span>↗</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
