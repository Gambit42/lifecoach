"use client";

import { motion } from "motion/react";
import { testimonials } from "../data";
import { reveal, revealLift } from "../reveal";

export function Testimonials() {
  return (
    <section className="border-y border-line-faint bg-paper-2 py-24 max-[720px]:py-[4.25rem]">
      <div className="container">
        <motion.div className="mb-12 max-w-[54rem]" {...reveal()}>
          <h2 className="text-[clamp(2rem,4.6vw,3.6rem)] leading-none">
            What people say after a session.
          </h2>
          <p className="mt-4 max-w-[46rem] text-[1.02rem] leading-[1.65] text-graphite">
            Quotes are real, lightly edited for clarity. Names withheld for
            privacy until clients are ready to share publicly.
          </p>
        </motion.div>
        <div className="grid grid-cols-3 gap-5 max-[720px]:grid-cols-1">
          {testimonials.map((item, i) => (
            <motion.figure
              key={item.meta}
              className="m-0 flex flex-col rounded-lg border border-line bg-[var(--surface)] p-8 transition-shadow duration-300 ease-[var(--ease)] hover:shadow-[var(--shadow)]"
              {...revealLift(i, -3)}
            >
              <span
                className="mb-[0.85rem] block font-display text-[3rem] leading-[0.5] text-green opacity-40"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <span className="font-sans text-[0.7rem] font-bold uppercase tracking-[0.22em] text-green">
                {item.meta}
              </span>
              <blockquote className="mt-[0.7rem] font-display text-[clamp(1.05rem,1.6vw,1.18rem)] leading-[1.5] tracking-[-0.01em] text-ink">
                {item.quote}
              </blockquote>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
