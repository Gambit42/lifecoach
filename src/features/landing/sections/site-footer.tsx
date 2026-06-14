import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function YouTubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function MailIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

const links = [
  { href: "#who", label: "Who it's for" },
  { href: "#process", label: "How it works" },
  { href: "#about", label: "About" },
];

const socials = [
  {
    href: "https://www.youtube.com/@dabsyori",
    label: "YouTube",
    Icon: YouTubeIcon,
    external: true,
  },
  {
    href: "mailto:dcestillore@gmail.com",
    label: "Email",
    Icon: MailIcon,
    external: false,
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper-2 pb-10 pt-14">
      <div className="container">
        {/* Brand + short description on the left, socials list on the right */}
        <div className="flex flex-wrap items-start justify-between gap-10 max-[560px]:flex-col max-[560px]:items-start">
          <div className="max-w-[24rem]">
            <a href="#top" className="inline-flex items-baseline gap-[0.32rem]">
              <span className="text-[1.45rem] font-semibold italic leading-none tracking-[-0.02em] text-ink">
                David
              </span>
              <span className="text-[1.45rem] font-medium leading-none tracking-[-0.02em] text-graphite">
                Estillore
              </span>
            </a>
            <p className="mt-3 text-[0.92rem] leading-relaxed text-graphite">
              Strengths-based coaching for the quietly stuck. Together we get clear on how
              you&apos;re wired, then turn that into work that actually fits — chosen on
              purpose, in your own voice.
            </p>
          </div>

          <div className="flex gap-16 max-[400px]:gap-10">
            <div>
              <h3 className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink">
                Links
              </h3>
              <div className="mt-4 flex flex-col gap-3">
                {links.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className="text-[0.9rem] text-graphite transition-colors duration-200 hover:text-ink"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink">
                Connect
              </h3>
              <div className="mt-4 flex flex-col gap-3">
                {socials.map(({ href, label, Icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="group inline-flex items-center gap-2.5 text-[0.9rem] text-graphite transition-colors duration-200 hover:text-ink"
                  >
                    <Icon className="h-[1.05rem] w-[1.05rem] text-slate transition-colors duration-200 group-hover:text-green" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-10 border-t border-line pt-6">
          <p className="m-0 text-[0.82rem] text-slate">
            © {new Date().getFullYear()} David Estillore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
