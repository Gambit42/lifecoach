"use client";

import { motion } from "motion/react";
import { reveal } from "../reveal";

export function PullQuote() {
  return (
    <section className="relative overflow-hidden bg-ink py-[clamp(5rem,10vw,8rem)] text-paper">
      <span className="fx-grid-quote" aria-hidden="true" />
      <span
        className="pointer-events-none absolute -top-[30%] left-1/2 h-[80%] w-[60%] -translate-x-1/2 [background:radial-gradient(circle,rgba(82,125,129,0.28),transparent_70%)]"
        aria-hidden="true"
      />
      <div className="container">
        <motion.figure
          className="relative z-[1] mx-auto max-w-[52rem] px-[clamp(1rem,3vw,3rem)] py-[clamp(1.25rem,3vw,2.5rem)] text-center"
          {...reveal()}
        >
          <span
            className="absolute left-0 top-0 z-[1] h-[22px] w-[22px] border-[1.5px] border-b-0 border-r-0 border-white/35"
            aria-hidden="true"
          />
          <span
            className="absolute bottom-0 right-0 z-[1] h-[22px] w-[22px] border-[1.5px] border-l-0 border-t-0 border-white/35"
            aria-hidden="true"
          />
          <span className="mb-7 inline-flex items-center gap-[0.6rem] font-sans text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[color-mix(in_srgb,var(--green)_65%,#ffffff)] before:h-px before:w-[1.4rem] before:bg-white/25 before:content-[''] after:h-px after:w-[1.4rem] after:bg-white/25 after:content-['']">
            A note on what to expect
          </span>
          <blockquote className="m-0 text-balance font-display text-[clamp(1.6rem,3.6vw,2.6rem)] leading-[1.26] tracking-[-0.03em] text-white">
            Coaching isn&apos;t advice. It&apos;s the rare hour where someone listens with
            full attention and asks the questions that finally let you{" "}
            <em className="italic text-[color-mix(in_srgb,var(--green)_55%,#ffffff)]">
              answer yourself.
            </em>
          </blockquote>
          <figcaption className="mt-9 inline-flex flex-col gap-[0.3rem] border-t border-white/15 pt-6">
            <span className="font-display text-[1.05rem] font-semibold tracking-[-0.01em] text-white">
              David Estillore
            </span>
            <span className="font-sans text-[0.68rem] uppercase tracking-[0.12em] text-[rgba(229,231,235,0.6)]">
              Your coach, in your corner
            </span>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
