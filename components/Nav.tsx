import { profile } from "@/lib/content";

const items = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Writing", href: "#writing" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/60 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#top"
          className="font-serif text-base font-extrabold tracking-tight text-ink"
        >
          Jesutoni Omiye&apos;s Portfolio
        </a>
        <nav className="hidden items-center gap-9 text-sm text-muted md:flex">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="transition-colors hover:text-ink">
              {it.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-ink px-5 py-2 text-sm font-medium text-paper transition-colors hover:bg-accent"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
