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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-200 ${
          scrolled
            ? "bg-[#000000]/95 backdrop-blur-md border-b border-white/10 shadow-2xl"
            : "bg-[#000000] border-b border-white/10"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-6 lg:px-12">
          {/* Brand Logo */}
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
              <Link
                href="/#system"
                className="px-3.5 py-2 text-[14px] font-medium text-neutral-300 hover:text-white transition-colors"
              >
                The System
              </Link>

              <Link
                href="/#proof"
                className="px-3.5 py-2 text-[14px] font-medium text-neutral-300 hover:text-white transition-colors"
              >
                Proof
              </Link>

              <Link
                href="/#fit"
                className="px-3.5 py-2 text-[14px] font-medium text-neutral-300 hover:text-white transition-colors"
              >
                Who This Is For
              </Link>

              <Link
                href="/#how-it-runs"
                className="px-3.5 py-2 text-[14px] font-medium text-neutral-300 hover:text-white transition-colors"
              >
                How It Runs
              </Link>

              <Link
                href="/#pricing"
                className="px-3.5 py-2 text-[14px] font-medium text-neutral-300 hover:text-white transition-colors"
              >
                Pricing
              </Link>

              <Link
                href="/team"
                className="px-3.5 py-2 text-[14px] font-medium text-neutral-300 hover:text-white transition-colors"
              >
                Team & Portfolios
              </Link>
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
              className="inline-flex items-center justify-center gap-1.5 h-10 px-5 text-[13.5px] font-semibold tracking-wide text-black bg-white rounded-md transition-all hover:bg-neutral-200 hover:shadow-lg hover:shadow-white/10"
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

              {/* Direct Clean Navigation Links */}
              <nav className="flex flex-col space-y-1">
                {[
                  { label: "The System", href: "/#system" },
                  { label: "Proof (WhatsApp Qualifier)", href: "/#proof" },
                  { label: "Who This Is For", href: "/#fit" },
                  { label: "How It Runs", href: "/#how-it-runs" },
                  { label: "Pricing Tiers", href: "/#pricing" },
                  { label: "Team & Portfolios", href: "/team" },
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-3 px-3 rounded-lg text-base font-medium text-neutral-200 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <span>{item.label}</span>
                    <span className="text-neutral-500 font-mono">→</span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Mobile Drawer Bottom CTA */}
            <div className="pt-8 pb-6 border-t border-white/10 mt-8">
              <a
                href={BOOK_A_CALL_HREF}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 h-12 rounded-md bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors shadow-lg"
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
