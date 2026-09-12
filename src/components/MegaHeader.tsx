"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BOOK_A_CALL_HREF } from "@/lib/content";

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
          {/* Brand Logo - Pure Clean SaqrFlow without any AI badge */}
          <div className="flex items-center gap-8 xl:gap-10">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center w-8 h-8 rounded bg-white/5 border border-white/20 p-1 group-hover:border-white/40 transition-colors">
                <Image
                  src="/brand/saqrflow-mark.png"
                  alt="SaqrFlow Logo"
                  width={24}
                  height={24}
                  priority
                  className="w-auto h-auto max-h-6"
                />
              </div>
              <span className="text-[19px] font-bold tracking-tight text-white font-sans">
                SaqrFlow
              </span>
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
                  className={`px-3.5 py-2 text-[14px] font-medium transition-colors flex items-center gap-1.5 ${
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

              {/* The System */}
              <Link
                href="#system"
                className="px-3.5 py-2 text-[14px] font-medium text-neutral-300 hover:text-white transition-colors"
              >
                The System
              </Link>

              {/* Proof */}
              <Link
                href="#proof"
                className="px-3.5 py-2 text-[14px] font-medium text-neutral-300 hover:text-white transition-colors"
              >
                Proof
              </Link>

              {/* Industries Menu */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMenu("industries")}
              >
                <button
                  type="button"
                  className={`px-3.5 py-2 text-[14px] font-medium transition-colors flex items-center gap-1.5 ${
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

              {/* Pricing */}
              <Link
                href="#pricing"
                className="px-3.5 py-2 text-[14px] font-medium text-neutral-300 hover:text-white transition-colors"
              >
                Pricing
              </Link>

              {/* Company */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMenu("company")}
              >
                <button
                  type="button"
                  className={`px-3.5 py-2 text-[14px] font-medium transition-colors flex items-center gap-1.5 ${
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

            {/* Book a Call CTA */}
            <a
              href={BOOK_A_CALL_HREF}
              className="inline-flex items-center justify-center gap-1.5 h-10 px-5 text-[13.5px] font-semibold tracking-wide text-black bg-white rounded transition-all hover:bg-neutral-200 hover:shadow-lg hover:shadow-white/10"
            >
              <span>Book a Call</span>
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
            </a>

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
                    <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                      Architecture & Systems
                    </p>
                    <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                      Products & Systems
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                      A complete suite of applications, CRM workflows, and automated pipelines for agencies and enterprises.
                    </p>
                    <Link
                      href="#system"
                      onClick={() => setActiveMenu(null)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-neutral-300 transition-colors"
                    >
                      <span>Explore The 6-Step System Flow</span>
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
                          { title: "SaqrFlow Reliability", href: "#software" },
                          { title: "Production Scheduling", href: "#software" },
                          { title: "Demand Planning", href: "#software" },
                          { title: "WhatsApp Lead Qualifier", href: "#proof" },
                          { title: "CRM Lead Routing", href: "#system" },
                          { title: "All 40+ Applications", href: "#software" },
                        ].map((item, idx) => (
                          <li key={idx}>
                            <Link
                              href={item.href}
                              onClick={() => setActiveMenu(null)}
                              className="text-sm text-neutral-400 hover:text-white transition-colors block py-0.5"
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-300 mb-4 pb-2 border-b border-white/10">
                        Platform & Stack
                      </p>
                      <ul className="space-y-3">
                        {[
                          { title: "SaqrFlow Studio", desc: "Low-code application studio" },
                          { title: "SaqrFlow Code", desc: "Autonomous application builder" },
                          { title: "SaqrFlow Intelligence", desc: "Enterprise search & reasoning" },
                          { title: "Operating Platform", desc: "Unified enterprise runtime" },
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
                    <div className="rounded-xl border border-white/10 bg-[#0d1117] p-5 hover:border-white/20 transition-all">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-300 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                          Lead Qualification Proof
                        </span>
                        <span className="text-xs text-neutral-400">Live Demo</span>
                      </div>
                      <h4 className="text-sm font-semibold text-white mb-2">
                        Watch it handle a lead — including the moment it fails
                      </h4>
                      <p className="text-xs text-neutral-400 mb-4 leading-normal">
                        See our WhatsApp lead-qualification workflow with forced failure and graceful degradation directly in action.
                      </p>
                      <Link
                        href="#proof"
                        onClick={() => setActiveMenu(null)}
                        className="text-xs font-semibold text-white hover:text-neutral-300 inline-flex items-center gap-1"
                      >
                        <span>View Lead Qualifier Proof</span>
                        <span>›</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {activeMenu === "industries" && (
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-3 border-r border-white/10 pr-6">
                    <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                      Sectors
                    </p>
                    <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                      Industries
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                      Engineered for complex enterprise operating models and modern marketing agencies.
                    </p>
                    <Link
                      href="#industries"
                      onClick={() => setActiveMenu(null)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-neutral-300 transition-colors"
                    >
                      <span>View All Industries</span>
                      <span>→</span>
                    </Link>
                  </div>

                  <div className="col-span-5 px-4">
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { name: "Marketing & Lead Gen Agencies", href: "#fit" },
                        { name: "Defense & Intelligence", href: "#industries" },
                        { name: "Maritime & Naval", href: "#industries" },
                        { name: "Manufacturing & Industrial", href: "#industries" },
                        { name: "Federal & Public Sector", href: "#industries" },
                        { name: "Oil & Gas Operations", href: "#industries" },
                        { name: "Power & Utilities", href: "#industries" },
                        { name: "Healthcare & Life Sciences", href: "#industries" },
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
                        <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-300 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                          Partner Network
                        </span>
                        <span className="text-xs text-neutral-500">UK Agencies</span>
                      </div>
                      <h4 className="text-sm font-semibold text-white mb-2 leading-snug">
                        White-Label Delivery For Agencies
                      </h4>
                      <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
                        Full-service technical fulfilment delivered under your agency brand. We handle CRM, automations, and dashboards.
                      </p>
                      <Link
                        href="#fit"
                        onClick={() => setActiveMenu(null)}
                        className="text-xs font-semibold text-white hover:text-neutral-300 inline-flex items-center gap-1"
                      >
                        <span>Check Fit Criteria</span>
                        <span>↗</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {activeMenu === "company" && (
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-3 border-r border-white/10 pr-6">
                    <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                      Enterprise Profile
                    </p>
                    <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                      Company & Fit
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                      Transparent pricing, clear operational scope, and battle-tested execution.
                    </p>
                  </div>

                  <div className="col-span-5 px-4">
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-300 mb-4 pb-2 border-b border-white/10">
                      Engage SaqrFlow
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { title: "Who This Is For", href: "#fit" },
                        { title: "How An Engagement Runs", href: "#fit" },
                        { title: "Pricing & Founding Access", href: "#pricing" },
                        { title: "Customer Case Studies", href: "#stories" },
                        { title: "The 6-Step System", href: "#system" },
                        { title: "Book a Strategy Call", href: BOOK_A_CALL_HREF },
                      ].map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => setActiveMenu(null)}
                          className="text-sm text-neutral-400 hover:text-white transition-colors block py-1"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="col-span-4 pl-6 border-l border-white/10">
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-300 mb-4 pb-2 border-b border-white/10">
                      Pricing & Availability
                    </p>
                    <div className="p-4 rounded-xl border border-white/15 bg-white/[0.03] text-xs text-neutral-300 space-y-2">
                      <p className="text-white font-semibold text-sm">
                        Founding Access Available
                      </p>
                      <p className="text-neutral-400 leading-relaxed">
                        Reserved for early partners with 6–12 months of locked price protection at £1,000/mo.
                      </p>
                      <Link
                        href="#pricing"
                        onClick={() => setActiveMenu(null)}
                        className="inline-block text-white font-semibold hover:text-neutral-300 pt-1 underline underline-offset-4"
                      >
                        View 4 Pricing Tiers →
                      </Link>
                    </div>
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
              <div className="mb-4">
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

              {/* Direct Quick Nav Links */}
              <div className="grid grid-cols-2 gap-2 pb-4 border-b border-white/10">
                <Link
                  href="#system"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded bg-white/5 text-center text-sm font-medium text-neutral-200"
                >
                  The System
                </Link>
                <Link
                  href="#proof"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded bg-white/5 text-center text-sm font-medium text-neutral-200"
                >
                  Proof
                </Link>
                <Link
                  href="#pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded bg-white/5 text-center text-sm font-medium text-white"
                >
                  Pricing
                </Link>
                <Link
                  href="#fit"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded bg-white/5 text-center text-sm font-medium text-neutral-200"
                >
                  Who It&apos;s For
                </Link>
              </div>

              {/* Accordion Sections */}
              {[
                {
                  id: "products",
                  title: "Products & Software",
                  items: [
                    { label: "The 6-Step System", href: "#system" },
                    { label: "WhatsApp Qualifier Proof", href: "#proof" },
                    { label: "Operating Platform", href: "#software" },
                    { label: "SaqrFlow Studio", href: "#software" },
                    { label: "SaqrFlow Code", href: "#software" },
                    { label: "Enterprise Applications", href: "#software" },
                  ],
                },
                {
                  id: "industries",
                  title: "Industries & Sectors",
                  items: [
                    { label: "Marketing & Lead Gen Agencies", href: "#fit" },
                    { label: "Defense & Intelligence", href: "#industries" },
                    { label: "Maritime", href: "#industries" },
                    { label: "Manufacturing", href: "#industries" },
                    { label: "Oil & Gas", href: "#industries" },
                    { label: "Utilities", href: "#industries" },
                  ],
                },
                {
                  id: "company",
                  title: "Company & Pricing",
                  items: [
                    { label: "Four Ways To Work Together (Pricing)", href: "#pricing" },
                    { label: "Who This Is For (Fit Criteria)", href: "#fit" },
                    { label: "Customer Stories", href: "#stories" },
                    { label: "Book a Call", href: BOOK_A_CALL_HREF },
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
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-sm text-neutral-400 hover:text-white block py-0.5"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-8 pb-6 border-t border-white/10">
              <a
                href={BOOK_A_CALL_HREF}
                className="w-full flex items-center justify-center gap-2 h-12 rounded bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors"
              >
                <span>Book a Call</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
