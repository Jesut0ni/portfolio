import Image from "next/image";
import { profile, stats } from "@/lib/content";
import {
  ArrowIcon,
  DownloadIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  WhatsAppIcon,
  XIcon,
} from "./Icons";

const socials = [
  { href: profile.links.github, label: "GitHub", Icon: GitHubIcon },
  { href: profile.links.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: profile.links.twitter, label: "X", Icon: XIcon },
  { href: profile.links.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: profile.whatsapp, label: "WhatsApp", Icon: WhatsAppIcon },
];

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-36 pb-20 text-center md:pt-44 md:pb-28"
    >
      <div className="rise relative">
        <div className="overflow-hidden rounded-full ring-1 ring-line shadow-xl shadow-ink/5">
          <Image
            src={profile.photo}
            alt={profile.name}
            width={132}
            height={132}
            priority
            className="h-32 w-32 object-cover object-top md:h-36 md:w-36"
          />
        </div>
        <span className="absolute bottom-2 right-2 inline-flex items-center gap-1.5 rounded-full bg-paper px-2.5 py-1 text-xs font-medium text-ink shadow-md ring-1 ring-line">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Available
        </span>
      </div>

      <p
        className="rise mt-7 text-lg font-medium text-ink-soft"
        style={{ animationDelay: "0.05s" }}
      >
        {profile.greeting.split("Jesutoni")[0]}
        <span className="font-semibold text-accent">Jesutoni</span> 👋
      </p>

      <h1
        className="rise mt-5 max-w-3xl font-serif text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl md:text-6xl"
        style={{ animationDelay: "0.12s" }}
      >
        {profile.headline.split("simple").map((part, i) =>
          i === 0 ? (
            part
          ) : (
            <span key={i}>
              <span className="text-accent">simple</span>
              {part}
            </span>
          )
        )}
      </h1>

      <p
        className="rise mt-7 max-w-xl text-lg leading-relaxed text-ink-soft"
        style={{ animationDelay: "0.2s" }}
      >
        {profile.intro}
      </p>

      <div
        className="rise mt-9 flex flex-wrap items-center justify-center gap-3"
        style={{ animationDelay: "0.28s" }}
      >
        <a
          href="#work"
          className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-accent"
        >
          View my work
          <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <a
          href={profile.cvUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink"
        >
          <DownloadIcon className="h-4 w-4" />
          Download CV
        </a>
      </div>

      <div
        className="rise mt-7 flex items-center justify-center gap-1.5"
        style={{ animationDelay: "0.34s" }}
      >
        {socials.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="grid h-11 w-11 place-items-center rounded-full text-muted transition-colors hover:bg-paper-deep hover:text-ink"
          >
            <Icon className="h-[19px] w-[19px]" />
          </a>
        ))}
      </div>

      <dl
        className="rise mt-16 grid w-full max-w-xl grid-cols-3 divide-x divide-line rounded-2xl border border-line bg-paper-deep/40 py-6"
        style={{ animationDelay: "0.42s" }}
      >
        {stats.map((s) => (
          <div key={s.label} className="px-2 sm:px-3">
            <dt className="font-serif text-xl font-extrabold tracking-tight text-ink sm:text-3xl md:text-4xl">
              {s.value}
            </dt>
            <dd className="mt-1 text-xs leading-snug text-muted sm:text-sm">
              {s.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
