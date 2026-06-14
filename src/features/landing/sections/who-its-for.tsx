"use client";

import { motion } from "motion/react";
import { whoItIsFor } from "../data";
import { reveal, revealLift } from "../reveal";

// Hand-built outlined glyphs — the codebase draws its own marks rather than
// pulling an icon font, so these stay inline. One per "who it's for" card.
const icons = [
  // anchored / stuck
  <>
    <circle cx="12" cy="5" r="2.4" />
    <line x1="12" y1="7.4" x2="12" y2="21" />
    <path d="M5 12a7 7 0 0 0 14 0" />
    <line x1="2.5" y1="12" x2="6" y2="12" />
    <line x1="18" y1="12" x2="21.5" y2="12" />
  </>,
  // capable, but running low
  <>
    <rect x="2.5" y="8" width="16" height="8" rx="2" />
    <line x1="21.5" y1="11" x2="21.5" y2="13" />
    <line x1="6.5" y1="12" x2="11" y2="12" />
  </>,
  // a way out / clarity
  <>
    <circle cx="12" cy="12" r="9" />
    <polygon points="15.6 8.4 10.8 10.8 8.4 15.6 13.2 13.2" />
  </>,
  // depth, not surface
  <>
    <polygon points="12 3 21 8 12 13 3 8" />
    <polyline points="3.5 12.5 12 17 20.5 12.5" />
  </>,
];

export function WhoItsFor() {
  return (
    <section id="who" className="py-24 max-[720px]:py-[4.25rem]">
      <div className="container">
        <motion.div className="pb-7" {...reveal()}>
          <h2 className="max-w-[22ch] text-[clamp(2rem,4.6vw,3.6rem)] leading-none">
            If any of this sounds uncomfortably familiar, you&apos;re in the
            right place.
          </h2>
        </motion.div>
        <div className="mt-5 columns-2 [column-gap:1.25rem] max-[720px]:columns-1">
          {whoItIsFor.map((item, i) => (
            <motion.article
              key={item.title}
              className="relative mb-5 flex break-inside-avoid flex-col overflow-hidden rounded-xl border border-line bg-gradient-to-b from-white to-paper-2 p-8 transition-shadow duration-300 ease-[var(--ease)] hover:shadow-[var(--shadow)]"
              {...revealLift(i, -3, 0.06)}
            >
              {/* faint green dot field, faded up from the bottom-right corner */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(rgba(82,125,129,0.16)_1px,transparent_1.5px)] bg-[length:13px_13px] [mask-image:radial-gradient(78%_74%_at_100%_100%,#000_0%,transparent_64%)] [-webkit-mask-image:radial-gradient(78%_74%_at_100%_100%,#000_0%,transparent_64%)]"
              />
              <span
                className="relative z-[1] mb-6 inline-flex h-11 w-11 items-center justify-center rounded-[0.7rem] border border-line-2 bg-white text-green-ink"
                aria-hidden="true"
              >
                <svg
                  className="h-[1.35rem] w-[1.35rem]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {icons[i]}
                </svg>
              </span>
              <h3 className="relative z-[1] mb-[0.7rem] text-[1.5rem] leading-[1.08]">{item.title}</h3>
              <p className="relative z-[1] m-0 leading-[1.65] text-graphite">{item.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
