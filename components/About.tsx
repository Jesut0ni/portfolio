import Image from "next/image";
import { about, profile } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="mx-auto max-w-sm overflow-hidden rounded-3xl ring-1 ring-line shadow-2xl shadow-ink/10">
            <Image
              src={profile.photoAbout}
              alt={profile.name}
              width={1050}
              height={1400}
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">
            About me
          </p>
          <h2 className="mt-4 font-serif text-3xl font-extrabold leading-[1.1] tracking-[-0.02em] text-ink md:text-[2.6rem]">
            Great products solve real problems. I make sure they do.
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft">
            {about.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
