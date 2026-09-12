"use client";

import Image from "next/image";
import Link from "next/link";
import { BOOK_A_CALL_HREF } from "@/lib/content";

interface EnterpriseFooterProps {
  onOpenDemo?: () => void;
}

export default function EnterpriseFooter({ onOpenDemo }: EnterpriseFooterProps) {
  return (
    <footer id="footer" className="relative w-full bg-[#05070a] text-white border-t border-white/10 pt-20 pb-16">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Logo & Enterprise Brief */}
          <div className="lg:col-span-4 pr-6">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-8 h-8 rounded bg-white/5 border border-white/20 p-1">
                <Image
                  src="/brand/saqrflow-mark.png"
                  alt="SaqrFlow"
                  width={24}
                  height={24}
                  className="w-auto h-auto max-h-6"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-sans">
                SaqrFlow
              </span>
            </Link>

            <p className="text-sm text-neutral-400 leading-relaxed mb-8 max-w-sm">
              SaqrFlow builds the CRM, automation, and lead-flow systems that agencies deliver to their own clients — under your brand, never ours.
            </p>

            <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] max-w-sm">
              <p className="text-xs font-mono text-neutral-300 uppercase tracking-wider mb-1">
                Agency & Enterprise Briefing
              </p>
              <p className="text-xs text-neutral-400 mb-3">
                Experience an architectural walkthrough customized to your workflows and client delivery.
              </p>
              <a
                href={BOOK_A_CALL_HREF}
                className="text-xs font-semibold text-white hover:text-neutral-300 inline-flex items-center gap-1.5"
              >
                <span>Book a Technical Strategy Call</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Column 2: The System */}
          <div className="lg:col-span-2">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-200 mb-4 pb-2 border-b border-white/10">
              The System
            </p>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              {[
                { name: "Step 01: Capture", href: "#system" },
                { name: "Step 02: CRM", href: "#system" },
                { name: "Step 03: Routing", href: "#system" },
                { name: "Step 04: Follow-up", href: "#system" },
                { name: "Step 05: Integration", href: "#system" },
                { name: "Step 06: Reporting", href: "#system" },
                { name: "Lead Qualification Proof", href: "#proof" },
              ].map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="hover:text-white transition-colors block py-0.5">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Platform & Industries */}
          <div className="lg:col-span-2">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-200 mb-4 pb-2 border-b border-white/10">
              Platform
            </p>
            <ul className="space-y-2.5 text-sm text-neutral-400 mb-8">
              {[
                "SaqrFlow Studio",
                "SaqrFlow Code",
                "Connected Pipelines",
                "Operating Runtime",
              ].map((item, i) => (
                <li key={i}>
                  <Link href="#software" className="hover:text-white transition-colors block py-0.5">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-200 mb-4 pb-2 border-b border-white/10">
              Industries
            </p>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              {[
                "Marketing Agencies",
                "Defense & Intelligence",
                "Maritime",
                "Manufacturing",
                "Oil & Gas",
                "Utilities",
                "Healthcare",
              ].map((item, i) => (
                <li key={i}>
                  <Link href="#industries" className="hover:text-white transition-colors block py-0.5">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Pricing & Fit */}
          <div className="lg:col-span-2">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-200 mb-4 pb-2 border-b border-white/10">
              Pricing & Fit
            </p>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              {[
                { name: "Paid Proof (£300)", href: "#pricing" },
                { name: "Founding Access (£1,000/mo)", href: "#pricing" },
                { name: "Standard (£1,500/mo)", href: "#pricing" },
                { name: "Advanced (£2,500/mo)", href: "#pricing" },
                { name: "Good Fit vs Not a Fit", href: "#fit" },
                { name: "How It Runs (5 Steps)", href: "#fit" },
                { name: "Customer Stories", href: "#stories" },
              ].map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="hover:text-white transition-colors block py-0.5">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Company */}
          <div className="lg:col-span-2">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-200 mb-4 pb-2 border-b border-white/10">
              Company
            </p>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              {[
                "About SaqrFlow",
                "Agency Partner Network",
                "Security & Compliance",
                "Contact",
                "Careers",
              ].map((item, i) => (
                <li key={i}>
                  <Link href="#stories" className="hover:text-white transition-colors block py-0.5">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Social & Legal Row */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-400">
          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="X"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link href="/legal" className="hover:text-white transition-colors">
              Legal
            </Link>
            <Link href="/security" className="hover:text-white transition-colors">
              Security & Compliance
            </Link>
            <Link href="/privacy#california" className="hover:text-white transition-colors">
              California Privacy
            </Link>
          </div>

          {/* Copyright */}
          <div>
            <p className="font-mono">© 2026 SaqrFlow, Inc. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
