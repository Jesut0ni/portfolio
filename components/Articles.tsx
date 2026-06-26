import { articles } from "@/lib/content";
import { ArrowIcon } from "./Icons";

export function Articles() {
  return (
    <section id="writing" className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">
            Press & Writing
          </p>
          <h2 className="mt-4 font-serif text-3xl font-extrabold leading-[1.1] tracking-[-0.02em] text-ink md:text-4xl">
            Where my work has been featured
          </h2>
        </div>

        <div className="md:col-span-8">
          <ul className="space-y-3">
            {articles.map((a) => {
              const Tag = a.href ? "a" : "div";
              const props = a.href
                ? { href: a.href, target: "_blank", rel: "noreferrer" }
                : {};
              return (
                <li key={a.outlet}>
                  <Tag
                    {...props}
                    className="group flex items-center justify-between gap-6 rounded-2xl border border-line bg-paper-deep/30 p-6 transition-all duration-300 hover:border-ink/20 hover:bg-paper-deep/60"
                  >
                    <div>
                      <p className="text-sm font-medium text-accent-soft">
                        {a.outlet}
                      </p>
                      <p className="mt-1 text-lg leading-snug text-ink">
                        {a.title}
                      </p>
                    </div>
                    {a.href && (
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-ink transition-all duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                        <ArrowIcon className="h-4 w-4" />
                      </span>
                    )}
                  </Tag>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
