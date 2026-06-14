"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Award, Compass, Target } from "lucide-react";
import { reveal } from "../reveal";
import portraitImage from "../../../../public/portrait.png";

// Horizontal fact row — each item is an icon, a bold label, and a quiet
// line of supporting detail underneath.
const facts = [
  { icon: Award, label: "Certified coach", detail: "Transformation Academy" },
  { icon: Target, label: "Strengths-based", detail: "Gallup methodology" },
  { icon: Compass, label: "Late-20s focus", detail: "Get unstuck, find fulfillment" },
];

export function About() {
  return (
    <section id="about" className="py-24 max-[720px]:py-[4.25rem]">
      <div className="container grid grid-cols-[minmax(0,0.78fr)_1.22fr] items-center gap-16 max-[1000px]:grid-cols-1 max-[1000px]:gap-12">
        <motion.div
          className="mx-auto w-full max-w-[23rem] max-[1000px]:max-w-[20rem]"
          {...reveal(0)}
        >
          <figure className="group relative m-0 overflow-hidden rounded-[1.25rem] bg-ink shadow-[var(--shadow)]">
            <Image
              src={portraitImage}
              alt="David Estillore"
              sizes="(max-width: 1000px) 20rem, 23rem"
              className="block aspect-[4/5] w-full object-cover [filter:saturate(1.03)_contrast(1.04)] transition-transform duration-[900ms] ease-[var(--ease)] group-hover:scale-[1.03]"
            />
          </figure>
        </motion.div>

        <motion.div {...reveal(1)}>
          <h2 className="mb-6 text-[clamp(1.9rem,4vw,3rem)] leading-[1.04]">
            I&apos;m David.
            <br />
            A Professional Coach.
          </h2>
          <p className="mb-4 max-w-[38rem] leading-[1.7] text-graphite">
            I&apos;m a Gallup-Certified Strengths Coach. I help professionals in their late
            20s get unstuck — and find fulfillment in their lives.
          </p>
          <p className="mb-4 max-w-[38rem] leading-[1.7] text-graphite">
            In my mid-20s, I tried building different businesses and failed at them. It
            wasn&apos;t until I learned to leverage my own strengths that I was able to build
            something sustainable — in under a month.
          </p>
          <p className="mb-4 max-w-[38rem] leading-[1.7] text-graphite">
            I was like you. I felt very stuck with my life. I still do. But I&apos;m here to
            journey with you — we figure it out together, through coaching.
          </p>

          <div className="mt-9 grid grid-cols-3 gap-x-8 gap-y-6 border-t border-line pt-7 max-[560px]:grid-cols-1 max-[560px]:gap-y-4">
            {facts.map(({ icon: Icon, label, detail }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.6}
                  className="mt-[0.1rem] h-[1.3rem] w-[1.3rem] shrink-0 text-green"
                />
                <div>
                  <strong className="block font-medium leading-tight">{label}</strong>
                  <span className="mt-1 block font-sans text-[0.72rem] leading-snug text-slate">
                    {detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
