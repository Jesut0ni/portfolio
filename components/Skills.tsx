import { skillGroups } from "@/lib/content";

export function Skills() {
  return (
    <section id="skills" className="border-y border-line bg-paper-deep/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">
            Skills
          </p>
          <h2 className="mt-4 font-serif text-3xl font-extrabold leading-[1.1] tracking-[-0.02em] text-ink md:text-4xl">
            Building with AI, shipping like a product manager
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Most of my recent work lives in AI: agent infrastructure, document
            understanding, and putting models to work on problems people
            actually have.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.12em] text-ink">
                <span className="h-2 w-2 rounded-full bg-accent" />
                {group.title}
              </h3>
              <ul className="mt-5 space-y-1">
                {group.items.map((s) => (
                  <li
                    key={s.name}
                    className="rounded-lg px-4 py-3.5 transition-colors hover:bg-paper"
                  >
                    <h4 className="font-medium text-ink">{s.name}</h4>
                    <p className="mt-0.5 text-sm leading-snug text-muted">
                      {s.note}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
