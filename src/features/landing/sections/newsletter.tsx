"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { BTN } from "../constants";
import { reveal } from "../reveal";

export function Newsletter() {
  return (
    <section className="border-y border-line-faint bg-paper-2 py-24 max-[720px]:py-[4.25rem]">
      <div className="container grid grid-cols-[1fr_0.9fr] items-center gap-12 max-[1000px]:grid-cols-1">
        <motion.div {...reveal(0)}>
          <h2 className="mb-4 text-[clamp(1.9rem,4vw,3rem)] leading-[1.05]">
            Subscribe for notes on getting unstuck and building a life that fits.
          </h2>
          <p className="m-0 leading-[1.7] text-graphite">
            If you want to hear more stories about the journey of getting unstuck and building
            your dream life — this is for you. One email a week. Unsubscribe anytime.
          </p>
        </motion.div>
        <motion.form
          className="overflow-hidden rounded-lg border border-line-2 bg-[var(--surface-2)] shadow-[var(--shadow)]"
          {...reveal(1)}
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="mt-[1.1rem] grid gap-2 px-5">
            <span className="font-sans text-[0.66rem] uppercase tracking-[0.14em] text-slate">
              First name
            </span>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              autoComplete="given-name"
              className="min-h-12 w-full rounded-lg border border-line bg-paper px-4 py-[0.8rem] transition-[border-color] duration-200 placeholder:text-slate focus:border-ink focus:outline-none"
            />
          </label>
          <label className="mt-[1.1rem] grid gap-2 px-5">
            <span className="font-sans text-[0.66rem] uppercase tracking-[0.14em] text-slate">
              Email
            </span>
            <input
              type="email"
              name="email"
              placeholder="you@email.com"
              autoComplete="email"
              className="min-h-12 w-full rounded-lg border border-line bg-paper px-4 py-[0.8rem] transition-[border-color] duration-200 placeholder:text-slate focus:border-ink focus:outline-none"
            />
          </label>
          <Button type="submit" className={`${BTN} mx-5 mb-3 mt-5 w-[calc(100%-2.5rem)]`}>
            Subscribe <span aria-hidden="true">↗</span>
          </Button>
          <p className="mx-5 mb-5 mt-0 font-sans text-[0.66rem] tracking-[0.06em] text-slate">
            One email a week. Unsubscribe any time.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
