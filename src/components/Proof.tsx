import Reveal from "./Reveal";

type Message = {
  from: "lead" | "bot";
  text: string;
  failure?: boolean;
};

const CONVERSATION: Message[] = [
  { from: "lead", text: "Hi, I saw your ad for the free audit — how does it work?" },
  {
    from: "bot",
    text: "Happy to walk you through it. Quick one first — what's the business, and roughly how many leads come in a month?",
  },
  { from: "lead", text: "We're a roofing company, maybe 40-60 leads a month" },
  {
    from: "bot",
    text: "Got it — logging that now. One more: is there already a CRM in place, or are leads landing in inboxes/spreadsheets?",
  },
  { from: "lead", text: "asdkfj can you just call me" },
  {
    from: "bot",
    text: "That message didn't parse as an answer — rather than guess, I'm flagging this thread for a human to pick up directly. You'll hear from someone shortly.",
    failure: true,
  },
];

export default function Proof() {
  return (
    <section id="proof" className="border-b border-border/60 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="text-[13px] font-medium uppercase tracking-wider text-amber">
            Proof
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Watch it handle a lead — including the moment it fails.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-text-muted">
            This is a WhatsApp lead-qualification workflow we built, shown
            with synthetic data rather than a real customer&apos;s
            conversation. We&apos;d rather show you a system working honestly
            than a quote we could have written ourselves.
          </p>
          <ul className="mt-6 space-y-3 text-[14.5px] text-text-muted">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
              Qualifies a lead automatically, in the channel they messaged in.
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
              Includes a forced failure — an unrecognised reply — so you can
              see it degrade gracefully instead of breaking.
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
              Hands off to a human the moment it&apos;s unsure, rather than
              guessing.
            </li>
          </ul>
        </Reveal>

        <Reveal delayMs={120}>
          <div className="mx-auto w-full max-w-sm rounded-[28px] border border-border-strong bg-ink-card p-3 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
            <div className="flex items-center gap-3 border-b border-border px-3 pb-3 pt-1">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-dim text-[13px] font-semibold text-amber">
                SF
              </div>
              <div>
                <p className="text-[13.5px] font-medium text-text">
                  SaqrFlow — Lead Qualifier
                </p>
                <p className="text-[12px] text-text-faint">
                  Demo data, not a real conversation
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 px-1 py-4">
              {CONVERSATION.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.from === "lead" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13.5px] leading-snug ${
                      msg.from === "lead"
                        ? "rounded-tr-sm bg-amber text-ink"
                        : msg.failure
                          ? "rounded-tl-sm border border-amber/40 bg-ink-raised text-text"
                          : "rounded-tl-sm bg-ink-raised text-text"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
