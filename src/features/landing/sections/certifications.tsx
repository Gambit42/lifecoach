"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { certifications } from "../data";
import { reveal } from "../reveal";

export function Certifications() {
  return (
    <section className="bg-paper py-9" aria-label="Certifications">
      <div className="container">
        <motion.div
          className="mx-auto flex w-fit max-w-full flex-wrap items-center justify-center gap-[clamp(1rem,3vw,1.75rem)] rounded-full border border-line bg-[var(--surface)] px-[clamp(1.25rem,3vw,1.75rem)] py-[0.85rem] shadow-[0_14px_40px_-32px_rgba(17,24,39,0.5)]"
          {...reveal()}
        >
          <span className="whitespace-nowrap font-sans text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-slate">
            Certified by
          </span>
          <span className="min-h-6 w-px self-stretch bg-line-2" aria-hidden="true" />
          <ul className="m-0 flex list-none flex-wrap items-center justify-center gap-[clamp(1rem,3vw,1.75rem)] p-0">
            {certifications.map((cert, i) => {
              return (
                <li
                  className="inline-flex items-center gap-[clamp(1rem,3vw,1.75rem)]"
                  key={cert.label}
                >
                  {i > 0 && (
                    <span className="h-1 w-1 flex-none rounded-full bg-line-2" aria-hidden="true" />
                  )}
                  <Image
                    className={[
                      "block w-auto object-contain mix-blend-multiply transition-transform duration-500 ease-[var(--ease)] hover:-translate-y-px",
                      cert.isWide ? "h-[52px] max-w-[240px]" : "h-[72px] max-w-[72px]",
                    ].join(" ")}
                    src={cert.src}
                    alt={cert.label}
                    sizes={cert.isWide ? "240px" : "72px"}
                  />
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
