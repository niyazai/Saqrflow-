import Image from "next/image";
import { BOOK_A_CALL_HREF } from "@/lib/content";

const NAV_LINKS = [
  { href: "#system", label: "The system" },
  { href: "#proof", label: "Proof" },
  { href: "#fit", label: "Who it's for" },
  { href: "#pricing", label: "Pricing" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2">
          <Image
            src="/brand/saqrflow-mark.png"
            alt="SaqrFlow"
            width={28}
            height={28}
            priority
            className="h-7 w-7 rounded-md"
          />
          <span className="text-[15px] font-semibold tracking-tight text-text">
            SaqrFlow
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] text-text-muted transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={BOOK_A_CALL_HREF}
          className="inline-flex h-9 items-center rounded-full bg-amber px-4 text-[13.5px] font-medium text-ink transition-colors hover:bg-amber-bright"
        >
          Book a call
        </a>
      </div>
    </header>
  );
}
