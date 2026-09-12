"use client";

import Image from "next/image";
import Link from "next/link";

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
              <span className="text-[10px] font-mono tracking-widest text-cyan-400 font-semibold px-1.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/50">
                AI
              </span>
            </Link>

            <p className="text-sm text-neutral-400 leading-relaxed mb-8 max-w-sm">
              SaqrFlow is the enterprise artificial intelligence software company delivering the agentic operating system for real-time decision making and autonomous execution at scale.
            </p>

            <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] max-w-sm">
              <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                Enterprise Briefing
              </p>
              <p className="text-xs text-neutral-300 mb-3">
                Experience an architectural walkthrough customized to your enterprise data topology.
              </p>
              <button
                type="button"
                onClick={onOpenDemo}
                className="text-xs font-semibold text-white hover:text-cyan-300 inline-flex items-center gap-1.5"
              >
                <span>Request Executive Briefing</span>
                <span>↗</span>
              </button>
            </div>
          </div>

          {/* Column 2: Applications */}
          <div className="lg:col-span-2">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-200 mb-4 pb-2 border-b border-white/10">
              Applications
            </p>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              {[
                "SaqrFlow Reliability",
                "Production Schedule Optimization",
                "SaqrFlow Demand Planning",
                "Process Optimization",
                "Inventory Optimization",
                "Sourcing Optimization",
                "All 40+ Applications",
              ].map((item, i) => (
                <li key={i}>
                  <Link href="#software" className="hover:text-white transition-colors block py-0.5">
                    {item}
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
                "SaqrFlow Generative AI",
                "Agentic AI Platform",
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
                "Defense & Intelligence",
                "Maritime",
                "Manufacturing",
                "Federal",
                "Oil & Gas",
                "Utilities",
                "Healthcare & Life Sciences",
              ].map((item, i) => (
                <li key={i}>
                  <Link href="#industries" className="hover:text-white transition-colors block py-0.5">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="lg:col-span-2">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-200 mb-4 pb-2 border-b border-white/10">
              Resources
            </p>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              {[
                "Case Studies",
                "Analyst Reports",
                "Events & Summits",
                "Engineering Blog",
                "SaqrFlow Academy",
                "Documentation",
                "What Is Enterprise AI?",
                "What Is Machine Learning?",
                "Glossary",
              ].map((item, i) => (
                <li key={i}>
                  <Link href="#stories" className="hover:text-white transition-colors block py-0.5">
                    {item}
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
                "Leadership",
                "Newsroom",
                "Customers",
                "Testimonials",
                "Partners",
                "Investor Relations",
                "Careers",
                "SaqrFlow Fellows",
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
