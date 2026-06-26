import { profile } from "@/lib/content";
import {
  DownloadIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
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

export function Contact() {
  return (
    <footer id="contact" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent-soft">
          Contact
        </p>
        <h2 className="mt-6 max-w-3xl font-serif text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl md:text-6xl">
          Have a product worth building? Let's talk.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="space-y-5">
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-4"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full border border-paper/20 text-paper transition-colors group-hover:bg-paper group-hover:text-ink">
                <MailIcon className="h-5 w-5" />
              </span>
              <span className="text-lg text-paper/90 group-hover:text-paper">
                {profile.email}
              </span>
            </a>
            <a
              href={profile.phoneHref}
              className="group flex items-center gap-4"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full border border-paper/20 text-paper transition-colors group-hover:bg-paper group-hover:text-ink">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <span className="text-lg text-paper/90 group-hover:text-paper">
                {profile.phone}
              </span>
            </a>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full border border-paper/20 text-paper transition-colors group-hover:bg-paper group-hover:text-ink">
                <WhatsAppIcon className="h-5 w-5" />
              </span>
              <span className="text-lg text-paper/90 group-hover:text-paper">
                Chat on WhatsApp
              </span>
            </a>
          </div>

          <div className="flex flex-col gap-6 md:items-end">
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-accent-soft hover:text-paper"
            >
              <DownloadIcon className="h-4 w-4" />
              Download CV
            </a>
            <div className="flex items-center gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-paper/20 text-paper/80 transition-colors hover:bg-paper hover:text-ink"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-2 border-t border-paper/15 pt-8 text-sm text-paper/40 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Jesutoni Omiye</span>
          <span>{profile.location}</span>
        </div>
      </div>
    </footer>
  );
}
