"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SEARCH_ITEMS = [
  { title: "SaqrFlow Reliability", category: "Application", href: "#software" },
  { title: "SaqrFlow Agentic AI Platform", category: "Platform", href: "#software" },
  { title: "Production Schedule Optimization", category: "Application", href: "#software" },
  { title: "SaqrFlow Demand Planning", category: "Application", href: "#software" },
  { title: "Defense & Intelligence Sector", category: "Industry", href: "#industries" },
  { title: "Maritime & Naval Operations", category: "Industry", href: "#industries" },
  { title: "Manufacturing Process Optimization", category: "Industry", href: "#industries" },
  { title: "Dow Enterprise Case Study", category: "Customer Story", href: "#stories" },
  { title: "Holcim Global Net-Zero Case Study", category: "Customer Story", href: "#stories" },
  { title: "Baker Hughes Turbomachinery Telemetry", category: "Customer Story", href: "#stories" },
  { title: "SaqrFlow Code Autonomous Synthesis", category: "Platform", href: "#software" },
  { title: "Enterprise RAG & Grounded Reasoning", category: "Platform", href: "#software" },
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = query.trim()
    ? SEARCH_ITEMS.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      )
    : SEARCH_ITEMS.slice(0, 6);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl rounded-2xl border border-white/20 bg-[#0d1117] p-6 shadow-2xl text-white">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 pb-4 border-b border-white/10">
          <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" strokeWidth="2" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, industries, case studies, or documentation..."
            className="w-full bg-transparent text-base text-white placeholder-neutral-500 focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-mono bg-white/10 px-2 py-1 rounded text-neutral-400 hover:text-white"
          >
            ESC
          </button>
        </div>

        {/* Results */}
        <div className="mt-4 max-h-80 overflow-y-auto space-y-1">
          <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 px-3 py-1">
            {query.trim() ? `Search Results (${filtered.length})` : "Quick Suggestions"}
          </p>

          {filtered.length === 0 ? (
            <p className="p-4 text-sm text-neutral-500 text-center">
              No matching enterprise resources found.
            </p>
          ) : (
            filtered.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-cyan-400 font-mono text-sm">›</span>
                  <span className="text-sm font-medium text-neutral-200 group-hover:text-white">
                    {item.title}
                  </span>
                </div>
                <span className="text-xs font-mono text-neutral-500 border border-white/10 px-2 py-0.5 rounded group-hover:border-cyan-500/40 group-hover:text-cyan-300">
                  {item.category}
                </span>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
