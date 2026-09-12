"use client";

import { useState } from "react";

interface CustomerStoriesProps {
  onOpenDemo?: () => void;
}

const STORIES = [
  {
    id: "dow",
    company: "Dow",
    headline: "Maximize Performance for Every Asset",
    body: "Detect early signals and keep operations at peak efficiency — see how AI-powered predictive maintenance drives value for Dow.",
    name: "Debra Bauler",
    role: "Chief Information & Digital Officer, Dow",
    badge: "GLOBAL CHEMICAL LEADER",
    stats: [
      { value: "50+", label: "steam cracker furnaces monitored" },
      { value: "13K+", label: "sensors streaming live data" },
      { value: "500+", label: "AI models in production" },
    ],
    ctaText: "Watch Dow’s Webinar",
    accentColor: "from-red-950/40",
  },
  {
    id: "holcim",
    company: "Holcim",
    headline: "Holcim Accelerates Its Net-Zero Future",
    body: "Across its global network of cement plants, Holcim is using Enterprise AI to increase production, predict equipment failures, and drive the digital transformation of building materials manufacturing at scale.",
    name: "Marjan Milošević",
    role: "Head of Smart Operations, Holcim",
    badge: "BUILDING MATERIALS",
    stats: [
      { value: "3,100+", label: "AI models in production" },
      { value: "85+", label: "cement plants with AI deployed globally" },
      { value: "1,100+", label: "critical assets monitored with predictive maintenance" },
    ],
    ctaText: "Watch the Holcim Session",
    accentColor: "from-blue-950/40",
  },
  {
    id: "baker-hughes",
    company: "Baker Hughes",
    headline: "Transforming Energy with Industrial-Grade AI",
    body: "Deploying predictive maintenance across global energy turbomachinery and deepwater assets, achieving unprecedented reliability and reducing unplanned flaring.",
    name: "Lorenzo Simonelli",
    role: "Chairman & CEO, Baker Hughes",
    badge: "ENERGY TECHNOLOGY",
    stats: [
      { value: "$1B+", label: "in documented enterprise economic value" },
      { value: "99.4%", label: "fleet turbomachinery uptime maintained" },
      { value: "170+", label: "global operational facilities synchronized" },
    ],
    ctaText: "Read Baker Hughes Case Study",
    accentColor: "from-emerald-950/40",
  },
  {
    id: "defense",
    company: "U.S. Defense & Allies",
    headline: "Decision Advantage Across Land, Sea, and Air",
    body: "Transforming fleet availability and operational readiness with predictive maintenance models deployed on sovereign, air-gapped infrastructure.",
    name: "Joint Sustainment Command",
    role: "Operational Readiness Command",
    badge: "DEFENSE & INTELLIGENCE",
    stats: [
      { value: "30%", label: "reduction in unscheduled fleet downtime" },
      { value: "2,000+", label: "mission-critical aircraft & vessels tracked" },
      { value: "100%", label: "air-gapped sovereign compliance" },
    ],
    ctaText: "Explore Defense Architecture",
    accentColor: "from-neutral-900/60",
  },
];

export default function CustomerStories({ onOpenDemo }: CustomerStoriesProps) {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const toggleStory = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section id="stories" className="relative w-full bg-[#11141a] text-white pt-24 pb-28">
      {/* Curved top connector matching C3 AI's top transition */}
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Title row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start pb-14 border-b border-white/10">
          <div className="lg:col-span-8">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
              Field-Tested At Scale
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-sans">
              Customer Stories
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
              Proven in the world’s most demanding environments.
            </p>
            <div>
              <button
                type="button"
                onClick={onOpenDemo}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded border border-white/20 bg-transparent text-white font-semibold text-sm hover:bg-white hover:text-black transition-all"
              >
                <span>See All Customer Stories</span>
                <svg
                  className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
            </div>
          </div>
        </div>

        {/* Customer Accordions */}
        <div className="divide-y divide-white/10 mt-6">
          {STORIES.map((story, index) => {
            const isOpen = expandedIndex === index;
            return (
              <div key={story.id} className="py-6 transition-colors">
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  onClick={() => toggleStory(index)}
                  className="flex w-full items-center justify-between text-left py-4 group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-neutral-500">
                      [0{index + 1}]
                    </span>
                    <span className="text-2xl sm:text-4xl font-bold tracking-tight text-white group-hover:text-neutral-300 transition-colors font-sans">
                      {story.company}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="hidden sm:inline text-xs font-mono text-neutral-400 uppercase tracking-wider">
                      {story.badge}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-neutral-300 group-hover:border-white transition-colors">
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Expanded Story Panel */}
                {isOpen && (
                  <div className="pt-6 pb-10 animate-in fade-in duration-300">
                    <div
                      className={`relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br ${story.accentColor} to-[#090b10] p-8 sm:p-12`}
                    >
                      {/* Subtle Grid Background */}
                      <div className="absolute inset-0 c3-grid-pattern opacity-20 pointer-events-none" />

                      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                        {/* Executive Portrait / Profile */}
                        <div className="lg:col-span-4 flex flex-col items-start gap-4">
                          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-neutral-800/80 border border-white/15 overflow-hidden flex items-center justify-center p-4">
                            <div className="text-center">
                              <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
                                {story.company.slice(0, 3).toUpperCase()}
                              </span>
                              <span className="block text-[10px] font-mono text-neutral-400 mt-1">
                                VERIFIED LEADER
                              </span>
                            </div>
                          </div>
                          <div>
                            <p className="text-base font-bold text-white font-sans">
                              {story.name}
                            </p>
                            <p className="text-xs text-neutral-400 mt-0.5 leading-normal">
                              {story.role}
                            </p>
                          </div>
                        </div>

                        {/* Story Text & Headline */}
                        <div className="lg:col-span-8 flex flex-col justify-between">
                          <div>
                            <h4 className="text-2xl sm:text-3xl font-bold text-white font-sans mb-4 leading-snug">
                              {story.headline}
                            </h4>
                            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal mb-8">
                              {story.body}
                            </p>
                          </div>

                          {/* Live Impact Stats Grid */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10 mb-8">
                            {story.stats.map((st, sIdx) => (
                              <div key={sIdx} className="space-y-1">
                                <p className="text-3xl sm:text-4xl font-bold text-white font-sans tracking-tight">
                                  {st.value}
                                </p>
                                <p className="text-xs text-neutral-400 leading-normal">
                                  {st.label}
                                </p>
                              </div>
                            ))}
                          </div>

                          <div>
                            <button
                              type="button"
                              onClick={onOpenDemo}
                              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-md bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all shadow-lg"
                            >
                              <span>{story.ctaText}</span>
                              <svg
                                className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                viewBox="0 0 13 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5"
                                  stroke="currentColor"
                                  strokeWidth="1.75"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
