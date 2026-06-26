import { experience } from "@/lib/content";
import { ArrowIcon } from "./Icons";

export function Experience() {
  return (
    <section id="experience" className="border-t border-line bg-paper-deep/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">
              Experience
            </p>
            <h2 className="mt-4 font-serif text-3xl font-extrabold leading-[1.1] tracking-[-0.02em] text-ink md:text-4xl">
              Where I've worked
            </h2>
            <p className="mt-4 max-w-xs text-base leading-relaxed text-muted">
              Health tech, insurance, fintech, and AI. Different industries,
              same obsession with products that actually work.
            </p>
            <a
              href="https://www.linkedin.com/in/jesutoni-omiye/"
              target="_blank"
              rel="noreferrer"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink"
            >
              See the full timeline on LinkedIn
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="md:col-span-8">
            <ol className="space-y-3">
              {experience.map((job) => {
                const Tag = job.href ? "a" : "div";
                const props = job.href
                  ? { href: job.href, target: "_blank", rel: "noreferrer" }
                  : {};
                return (
                  <li key={job.company}>
                    <Tag
                      {...props}
                      className="group block rounded-2xl border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/20 md:p-7"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-3">
                            <h3 className="text-lg font-bold text-ink">
                              {job.company}
                            </h3>
                            {job.tag && (
                              <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                                {job.tag}
                              </span>
                            )}
                          </div>
                          <p className="mt-1 text-sm font-semibold text-accent-soft">
                            {job.role}
                          </p>
                        </div>
                        {job.href && (
                          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-ink transition-all duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                            <ArrowIcon className="h-4 w-4" />
                          </span>
                        )}
                      </div>
                      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-soft">
                        {job.note}
                      </p>
                    </Tag>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
