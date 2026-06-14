"use client";

import { useEffect, useState } from "react";
import { CAL_URL } from "../constants";

export function Nav() {
  // Two scroll states, mirroring the portfolio_v3 pattern:
  //   - scrolled: solid white surface + border once the user leaves the top.
  //               At the very top the bar is transparent and borderless.
  //   - hidden:   slide the bar away on scroll-down, reveal it on scroll-up.
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      if (y < 8) {
        setHidden(false);
      } else if (y > lastY + 4) {
        setHidden(true);
      } else if (y < lastY - 4) {
        setHidden(false);
      }
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={[
        "sticky top-0 z-40 flex w-full items-center justify-between gap-4",
        "py-[0.85rem] px-[max(1.5rem,calc((100%-1200px)/2))] max-[420px]:px-4",
        "border-b border-transparent transition-[background,border-color,box-shadow,transform] duration-300 ease-[var(--ease)]",
        scrolled &&
          "border-b-line bg-[color-mix(in_srgb,var(--paper)_78%,transparent)] backdrop-blur-[14px] backdrop-saturate-[1.1]",
        hidden && "-translate-y-full",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <a
        href="#top"
        className="group inline-flex items-baseline gap-[0.3rem]"
        aria-label="David Estillore — home"
      >
        <span className="text-[1.1rem] font-semibold italic leading-none tracking-[-0.02em] text-ink">
          David
        </span>
        <span className="text-[1.1rem] font-medium leading-none tracking-[-0.02em] text-graphite transition-colors duration-200 group-hover:text-ink">
          Estillore
        </span>
      </a>
      <div className="flex items-center gap-1 font-sans text-[0.74rem] uppercase tracking-[0.1em] max-[1000px]:hidden">
        {[
          { href: "#who", label: "Who it's for" },
          { href: "#process", label: "How it works" },
          { href: "#about", label: "About" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="inline-flex items-center gap-[0.45rem] rounded-lg px-[0.85rem] py-2 text-graphite transition-colors duration-200 hover:bg-[var(--surface-2)] hover:text-ink"
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <a
          href={CAL_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-[0.4rem] rounded-lg bg-green px-4 py-[0.6rem] font-sans text-[0.72rem] tracking-[0.08em] text-white transition-[transform,background] duration-200 ease-[var(--ease)] hover:-translate-y-px hover:bg-green-ink"
        >
          Book a call <span aria-hidden="true">↗</span>
        </a>
      </div>
    </nav>
  );
}
