"use client";

import { useState } from "react";
import Link from "next/link";
import MegaHeader from "@/components/MegaHeader";
import EnterpriseFooter from "@/components/EnterpriseFooter";
import DemoModal from "@/components/DemoModal";
import SearchModal from "@/components/SearchModal";
import { TEAM_MEMBERS, TeamMember } from "@/lib/teamData";
import { BOOK_A_CALL_HREF } from "@/lib/content";

export default function TeamPage() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedDept, setSelectedDept] = useState<string>("All");

  const departments = ["All", "Leadership", "Automations", "Engineering"];

  const filteredMembers =
    selectedDept === "All"
      ? TEAM_MEMBERS
      : TEAM_MEMBERS.filter((m) => m.department === selectedDept);

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white/20 selection:text-white">
      {/* Enterprise Navigation */}
      <MegaHeader
        onOpenDemo={() => setDemoOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
      />

      <main id="main-content">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-white/10 bg-[#090b0e] overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          
          <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono text-neutral-300">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                SYSTEMS ARCHITECTS & ENGINEERS
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Engineering Team & Portfolios
              </h1>
              <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-2xl mb-8">
                The builders behind SaqrFlow’s CRM pipelines, lead engines, and multi-tenant architectures. Explore individual backgrounds, technical specializations, and verified portfolio systems.
              </p>

              {/* Department Filter Tabs */}
              <div className="flex flex-wrap gap-2 pt-2">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setSelectedDept(dept)}
                    className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-md transition-all ${
                      selectedDept === dept
                        ? "bg-white text-black font-semibold shadow-md"
                        : "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/10"
                    }`}
                  >
                    {dept} {dept === "All" ? `(${TEAM_MEMBERS.length})` : ""}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Members & Portfolios Grid */}
        <section className="py-20 lg:py-24 bg-[#0d1015]">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
            <div className="space-y-16">
              {filteredMembers.map((member: TeamMember) => (
                <div
                  key={member.id}
                  id={member.id}
                  className="rounded-2xl border border-white/10 bg-[#12161f] overflow-hidden shadow-2xl transition-all duration-300 hover:border-white/20"
                >
                  {/* Member Profile Header */}
                  <div className="p-8 lg:p-10 border-b border-white/10 bg-[#161b26]/50">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                      <div className="flex items-start sm:items-center gap-5">
                        {/* Avatar / Initials */}
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-2xl font-bold text-white tracking-wider flex-shrink-0">
                          {member.name.slice(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-3 mb-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                              {member.name}
                            </h2>
                            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider bg-white/10 text-neutral-300 border border-white/15">
                              {member.department}
                            </span>
                            {member.location && (
                              <span className="text-xs text-neutral-400 flex items-center gap-1 font-mono">
                                📍 {member.location}
                              </span>
                            )}
                          </div>
                          <p className="text-sm font-mono text-neutral-300 mb-2">
                            {member.role}
                          </p>
                          <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
                            {member.bio}
                          </p>
                        </div>
                      </div>

                      {/* Social & Portfolio Links */}
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 flex-shrink-0">
                        {member.socialLinks.portfolio && (
                          <a
                            href={member.socialLinks.portfolio}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/20 bg-white/5 text-xs text-neutral-200 hover:text-white hover:bg-white/10 transition-colors"
                          >
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10" />
                              <line x1="2" y1="12" x2="22" y2="12" />
                              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            </svg>
                            <span>Portfolio</span>
                            <span>↗</span>
                          </a>
                        )}
                        {member.socialLinks.github && (
                          <a
                            href={member.socialLinks.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/20 bg-white/5 text-xs text-neutral-200 hover:text-white hover:bg-white/10 transition-colors"
                          >
                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                            <span>GitHub</span>
                            <span>↗</span>
                          </a>
                        )}
                        {member.socialLinks.linkedin && (
                          <a
                            href={member.socialLinks.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/20 bg-white/5 text-xs text-neutral-200 hover:text-white hover:bg-white/10 transition-colors"
                          >
                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                            <span>LinkedIn</span>
                            <span>↗</span>
                          </a>
                        )}
                        {member.socialLinks.email && (
                          <a
                            href={`mailto:${member.socialLinks.email}`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/20 bg-white/5 text-xs text-neutral-200 hover:text-white hover:bg-white/10 transition-colors"
                          >
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                              <polyline points="22,6 12,13 2,6" />
                            </svg>
                            <span>Email</span>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Skill Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {member.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 text-xs font-mono bg-white/[0.04] text-neutral-300 rounded border border-white/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Portfolio Projects Section */}
                  <div className="p-8 lg:p-10">
                    <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-white" />
                        <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-300">
                          Selected Portfolio Projects & Architecture
                        </h3>
                      </div>
                      <span className="text-xs font-mono text-neutral-500">
                        {member.portfolios.length} Systems Documented
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {member.portfolios.map((project, pIdx) => (
                        <div
                          key={pIdx}
                          className="group flex flex-col justify-between rounded-xl border border-white/10 bg-[#0d1017] p-6 hover:border-white/30 hover:bg-[#111622] transition-all"
                        >
                          <div>
                            {project.impact && (
                              <div className="mb-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[11px] font-mono text-neutral-200">
                                <span>⚡</span>
                                <span>{project.impact}</span>
                              </div>
                            )}
                            <h4 className="text-base font-semibold text-white mb-2.5 group-hover:text-neutral-100 transition-colors">
                              {project.title}
                            </h4>
                            <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                              {project.description}
                            </p>
                          </div>

                          <div>
                            {/* Tech Stack Chips */}
                            <div className="flex flex-wrap gap-1.5 mb-5">
                              {project.tags.map((tag, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="text-[10px] font-mono text-neutral-400 bg-white/[0.03] px-2 py-0.5 rounded border border-white/5"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* Links */}
                            <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                              {project.liveUrl && (
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-xs font-semibold text-white hover:text-neutral-300 inline-flex items-center gap-1"
                                >
                                  <span>View Case Study</span>
                                  <span>→</span>
                                </a>
                              )}
                              {project.repoUrl && (
                                <a
                                  href={project.repoUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-xs font-mono text-neutral-400 hover:text-white inline-flex items-center gap-1"
                                >
                                  <span>Source Code</span>
                                  <span>↗</span>
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHITE SECTION: How to Add Your Portfolio & Join The Network */}
        <section className="py-20 lg:py-24 bg-white text-neutral-900 border-t border-neutral-200">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-3 block">
                  TEAM COLLABORATION & EXPANSION
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 mb-6">
                  Want to showcase your work or build on SaqrFlow?
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  SaqrFlow operates both as an elite core delivery team and a technical partner network for agency operators. Each engineer on our roster maintains direct ownership over the pipelines they architect.
                </p>
                <div className="space-y-3 font-mono text-xs text-neutral-600 mb-8">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                    <span>Easily add team members and portfolio cards via <code>src/lib/teamData.ts</code></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                    <span>Direct links to personal portfolio sites, GitHub repositories, and live client proof</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                    <span>Verified delivery badges for CRM, automation, and lead qualification projects</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={BOOK_A_CALL_HREF}
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold tracking-wide text-white bg-black rounded-md hover:bg-neutral-800 transition-colors shadow-md"
                  >
                    Contact Team Leadership →
                  </a>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold tracking-wide text-neutral-800 bg-neutral-100 rounded-md hover:bg-neutral-200 transition-colors border border-neutral-300"
                  >
                    Explore SaqrFlow Architecture
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-200 text-xs font-mono text-neutral-500">
                    <span>teamData.ts</span>
                    <span>JSON / TypeScript Registry</span>
                  </div>
                  <pre className="text-xs font-mono text-neutral-800 bg-neutral-100 p-4 rounded-xl overflow-x-auto leading-relaxed border border-neutral-200">
{`// To add your portfolio:
export const TEAM_MEMBERS = [
  {
    name: "Your Name",
    role: "Your Title",
    department: "Engineering",
    socialLinks: {
      portfolio: "https://yourportfolio.com",
      github: "https://github.com/...",
      linkedin: "https://linkedin.com/..."
    },
    portfolios: [
      {
        title: "Your Project",
        description: "What you built...",
        impact: "Key metric achieved",
        tags: ["Next.js", "n8n", "PostgreSQL"],
        liveUrl: "https://..."
      }
    ]
  }
];`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Enterprise Footer */}
      <EnterpriseFooter onOpenDemo={() => setDemoOpen(true)} />

      {/* Interactive Modals */}
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
