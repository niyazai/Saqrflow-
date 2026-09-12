"use client";

const ENTERPRISE_ORGS = [
  { name: "Dow", symbol: "DOW CHEMICAL", icon: "⯁ DOW" },
  { name: "Koch", symbol: "KOCH INDUSTRIES", icon: "KOCH" },
  { name: "Nucor", symbol: "NUCOR STEEL", icon: "NUCOR" },
  { name: "Holcim", symbol: "HOLCIM", icon: "HOLCIM" },
  { name: "Baker Hughes", symbol: "BAKER HUGHES", icon: "BAKER HUGHES" },
  { name: "GSK", symbol: "GLAXOSMITHKLINE", icon: "GSK" },
  { name: "Con Edison", symbol: "CON EDISON", icon: "CON EDISON" },
  { name: "Duke Energy", symbol: "DUKE ENERGY", icon: "DUKE ENERGY" },
  { name: "HII", symbol: "HUNTINGTON INGALLS", icon: "HII" },
  { name: "U.S. Army", symbol: "US ARMY DEFENSE", icon: "U.S. ARMY" },
  { name: "NATO", symbol: "NATO OTAN", icon: "NATO" },
  { name: "Royal Navy", symbol: "ROYAL NAVY", icon: "ROYAL NAVY" },
  { name: "U.S. Air Force", symbol: "US AIR FORCE", icon: "USAF" },
  { name: "Qemetica", symbol: "QEMETICA", icon: "QEMETICA" },
  { name: "U.S. Steel", symbol: "US STEEL CORP", icon: "USS" },
  { name: "Seaspan", symbol: "SEASPAN MARINE", icon: "SEASPAN" },
];

export default function LogoMarquee() {
  return (
    <section className="relative w-full border-y border-white/10 bg-[#07090d] py-10 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 mb-6">
        <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">
          Organizations That Run on SaqrFlow
        </p>
      </div>

      {/* Ticker Container with edge gradient masks */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex items-center gap-12 sm:gap-16 py-2">
          {/* First set */}
          {ENTERPRISE_ORGS.map((org, index) => (
            <div
              key={`org-1-${index}`}
              className="flex items-center gap-2.5 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default select-none grayscale"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/50" />
              <span className="text-base sm:text-lg font-bold tracking-tight text-white font-sans whitespace-nowrap">
                {org.icon}
              </span>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider hidden sm:inline">
                [{org.name}]
              </span>
            </div>
          ))}

          {/* Second set for infinite loop */}
          {ENTERPRISE_ORGS.map((org, index) => (
            <div
              key={`org-2-${index}`}
              className="flex items-center gap-2.5 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default select-none grayscale"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/50" />
              <span className="text-base sm:text-lg font-bold tracking-tight text-white font-sans whitespace-nowrap">
                {org.icon}
              </span>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider hidden sm:inline">
                [{org.name}]
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
