import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2">
          <Image
            src="/brand/saqrflow-mark.png"
            alt="SaqrFlow"
            width={20}
            height={20}
            className="h-5 w-5 rounded-md"
          />
          <span className="text-[13.5px] text-text-muted">
            SaqrFlow — white-label technical fulfilment for UK agencies
          </span>
        </div>
        <a
          href="mailto:mouaaz@saqrflow.com"
          className="text-[13.5px] text-text-muted transition-colors hover:text-text"
        >
          mouaaz@saqrflow.com
        </a>
      </div>
    </footer>
  );
}
