"use client";

import { useState } from "react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    industry: "Defense & Intelligence",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after brief acknowledgment
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2000);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-2xl border border-white/20 bg-[#0d1117] p-8 shadow-2xl text-white">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2" strokeLinecap="round" />
            <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {submitted ? (
          <div className="py-12 text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-cyan-950/80 border border-cyan-500/50 flex items-center justify-center text-cyan-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold font-sans text-white mb-2">
              Request Received
            </h3>
            <p className="text-sm text-neutral-400 max-w-sm mx-auto">
              Our enterprise architecture team will contact you within 4 hours to coordinate your technical briefing.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                ENTERPRISE ARCHITECTURAL BRIEFING
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
                Request a Demo
              </h2>
              <p className="text-sm text-neutral-400 mt-1">
                See how SaqrFlow’s Agentic AI Platform scales across your enterprise data topology.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-3.5 py-2.5 rounded bg-black/60 border border-white/15 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jane@enterprise.com"
                    className="w-full px-3.5 py-2.5 rounded bg-black/60 border border-white/15 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                    Organization / Company *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Enterprise Corp"
                    className="w-full px-3.5 py-2.5 rounded bg-black/60 border border-white/15 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                    Industry Sector *
                  </label>
                  <select
                    value={form.industry}
                    onChange={(e) => setForm({ ...form, industry: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-black/60 border border-white/15 text-sm text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Defense & Intelligence">Defense & Intelligence</option>
                    <option value="Maritime">Maritime</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Federal">Federal</option>
                    <option value="Oil & Gas">Oil & Gas</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Healthcare & Life Sciences">Healthcare & Life Sciences</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                  Operational Focus & Requirements
                </label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="E.g., Predictive maintenance for 200+ turbines, sovereign on-prem deployment..."
                  className="w-full px-3.5 py-2.5 rounded bg-black/60 border border-white/15 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 h-12 rounded bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors shadow-lg"
                >
                  <span>Submit Technical Request</span>
                  <span>↗</span>
                </button>
              </div>

              <p className="text-[11px] text-neutral-500 text-center font-mono">
                Sovereign data protocols strictly observed. Zero third-party telemetry.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
