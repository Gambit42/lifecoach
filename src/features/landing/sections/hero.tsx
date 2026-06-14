"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { BTN, CAL_URL } from "../constants";
import { reveal } from "../reveal";
import chairsImage from "../../../../public/chairs_vertical.png";

export function Hero() {
  return (
    <header
      id="top"
      className="relative flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center overflow-hidden py-12 max-[1000px]:py-16"
    >
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <span className="fx-grid-hero" />
      </div>
      <div className="container relative z-[1] flex items-center gap-[clamp(2rem,5vw,4.5rem)] max-[1000px]:flex-col max-[1000px]:items-center max-[1000px]:text-center">
        <div className="flex-1 max-[1000px]:max-w-[42rem]">
          <motion.h1
            className="w-fit whitespace-nowrap text-[clamp(2.5rem,6vw,4.75rem)] font-bold leading-[0.98] max-[1000px]:mx-auto"
            {...reveal(0)}
          >
            <span className="block">Are you feeling</span>
            <span className="block text-green">stuck in life?</span>
          </motion.h1>
          <motion.p
            className="mt-7 max-w-[34rem] text-pretty text-[1.0625rem] leading-[1.65] text-graphite max-[1000px]:mx-auto"
            {...reveal(1)}
          >
            I&apos;m David, a Gallup-Certified Strengths Coach. I help professionals in
            their late 20s discover themselves and understand their strengths — so they can
            build the life they want.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap gap-[0.9rem] max-[1000px]:justify-center"
            {...reveal(2)}
          >
            <Button asChild className={BTN}>
              <a href={CAL_URL} target="_blank" rel="noreferrer">
                Book a free 30-minute call
                <span aria-hidden="true">↗</span>
              </a>
            </Button>
            <Button asChild variant="outline" className={BTN}>
              <a href="#process">
                See how coaching works
                <span aria-hidden="true">↓</span>
              </a>
            </Button>
          </motion.div>
        </div>
        <motion.figure
          className="relative min-w-0 flex-[1.2] max-w-[34rem] overflow-hidden rounded-[20px] border border-line shadow-[var(--shadow)] max-[1000px]:mt-12 max-[1000px]:max-w-[24rem]"
          {...reveal(3)}
        >
          <Image
            src={chairsImage}
            alt="A calm, sunlit coaching space with two chairs set for conversation"
            priority
            sizes="(max-width: 1000px) 24rem, 34rem"
            className="block h-[45vh] w-full object-cover md:h-[60vh] lg:h-[68vh]"
          />
        </motion.figure>
      </div>
    </header>
  );
}
