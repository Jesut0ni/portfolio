import { projects } from "@/lib/content";
import { ArrowIcon } from "./Icons";

export function Work() {
  const [featured, ...rest] = projects;

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <div className="mb-12 max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">
          Selected work
        </p>
        <h2 className="mt-4 font-serif text-3xl font-extrabold leading-[1.1] tracking-[-0.02em] text-ink md:text-4xl">
          Things I've built and shipped
        </h2>
      </div>

      <FeaturedCard project={featured} />

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
        {rest.map((p) => (
          <ProjectCard key={p.index} project={p} />
        ))}
      </div>
    </section>
  );
}

function Shell({
  href,
  className,
  children,
}: {
  href?: string;
  className: string;
  children: React.ReactNode;
}) {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return <div className={className}>{children}</div>;
}

function FeaturedCard({ project: p }: { project: (typeof projects)[number] }) {
  return (
    <Shell
      href={p.href}
      className="group relative grid grid-cols-1 overflow-hidden rounded-3xl border border-line bg-ink text-paper transition-all duration-300 hover:-translate-y-1 md:grid-cols-2"
    >
      <span className="pointer-events-none absolute -right-8 -top-12 select-none font-serif text-[10rem] font-extrabold leading-none text-paper/[0.06]">
        {p.index}
      </span>
      <div className="relative z-10 flex flex-col p-8 md:p-12">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-soft">
          Featured · {p.role}
        </span>
        <h3 className="mt-4 font-serif text-4xl font-extrabold tracking-[-0.02em] md:text-5xl">
          {p.name}
        </h3>
        <p className="mt-2 text-lg text-paper/70">{p.tagline}</p>
        <p className="mt-6 max-w-md leading-relaxed text-paper/80">{p.blurb}</p>
        <div className="mt-auto pt-8">
          {p.href && (
            <span className="inline-flex items-center gap-2 rounded-full bg-paper px-5 py-2.5 text-sm font-semibold text-ink transition-colors group-hover:bg-accent-soft group-hover:text-paper">
              {p.hrefLabel}
              <ArrowIcon className="h-4 w-4" />
            </span>
          )}
        </div>
      </div>
      <div className="relative z-10 flex flex-wrap content-end gap-2 p-8 md:justify-end md:p-12">
        {p.stack.map((s) => (
          <span
            key={s}
            className="h-fit rounded-full border border-paper/15 px-3 py-1 text-xs text-paper/70"
          >
            {s}
          </span>
        ))}
      </div>
    </Shell>
  );
}

function ProjectCard({ project: p }: { project: (typeof projects)[number] }) {
  return (
    <Shell
      href={p.href}
      className="group flex flex-col rounded-2xl border border-line bg-paper-deep/30 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ink/20 hover:bg-paper-deep/60"
    >
      <div className="flex items-start justify-between">
        <span className="font-serif text-sm font-bold text-muted">{p.index}</span>
        {p.href && (
          <span className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink transition-all duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
            <ArrowIcon className="h-4 w-4" />
          </span>
        )}
      </div>
      <h3 className="mt-4 font-serif text-2xl font-bold tracking-[-0.01em] text-ink">
        {p.name}
      </h3>
      <p className="mt-1 text-sm text-accent-soft">{p.tagline}</p>
      <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
        {p.blurb}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span
            key={s}
            className="rounded-full bg-paper px-2.5 py-1 text-xs text-muted ring-1 ring-line"
          >
            {s}
          </span>
        ))}
      </div>
    </Shell>
  );
}
