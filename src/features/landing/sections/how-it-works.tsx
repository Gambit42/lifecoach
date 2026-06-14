"use client";

import { motion } from "motion/react";
import { processSteps } from "../data";
import { reveal, revealLift } from "../reveal";

const MOCK =
  "flex w-[72%] flex-col rounded-[0.6rem] border border-line bg-[var(--surface)] shadow-[0_14px_30px_-22px_rgba(17,24,39,0.5)]";

export function HowItWorks() {
  return (
    <section
      id="process"
      className="border-y border-line-faint bg-paper-2 py-24 max-[720px]:py-[4.25rem]"
    >
      <div className="container">
        <motion.div className="mx-auto mb-12 max-w-[54rem] text-center" {...reveal()}>
          <h2 className="text-[clamp(2rem,4.6vw,3.6rem)] leading-none">How it works.</h2>
          <p className="mx-auto mt-4 max-w-[46rem] text-[1.02rem] leading-[1.65] text-graphite">
            Three steps from stuck to a direction that&apos;s actually yours.
          </p>
        </motion.div>
        <ol className="m-0 grid list-none grid-cols-3 gap-5 p-0 max-[720px]:grid-cols-1">
          {processSteps.map((item, i) => (
            <motion.li
              key={item.phase}
              className="flex flex-col rounded-lg border border-line bg-[var(--surface)] p-8 transition-shadow duration-300 ease-[var(--ease)] hover:shadow-[var(--shadow)]"
              {...revealLift(i, -3)}
            >
              <div
                className="mb-6 flex aspect-[16/10] items-center justify-center overflow-hidden rounded-[0.9rem] border border-line [background:radial-gradient(120%_120%_at_50%_0%,var(--paper-3),transparent_70%),var(--paper-2)]"
                aria-hidden="true"
              >
                {i === 0 && (
                  <div className={`${MOCK} gap-[0.6rem] px-4 py-[0.95rem]`}>
                    <span className="h-[7px] w-[70%] rounded-full bg-line-2" />
                    <span className="flex flex-col gap-[0.4rem]">
                      <span className="h-2 rounded-full bg-[linear-gradient(90deg,var(--green),var(--mint))]" style={{ width: "82%" }} />
                      <span className="h-2 rounded-full bg-[linear-gradient(90deg,var(--green),var(--mint))]" style={{ width: "64%" }} />
                      <span className="h-2 rounded-full bg-[linear-gradient(90deg,var(--green),var(--mint))]" style={{ width: "48%" }} />
                    </span>
                    <span className="mt-[0.15rem] self-start rounded-full border border-mint bg-mint-soft px-[0.6rem] py-[0.28rem] text-[0.68rem] font-semibold tracking-[0.01em] text-green-ink">
                      Top 5 strengths
                    </span>
                  </div>
                )}
                {i === 1 && (
                  <div className={`${MOCK} gap-[0.6rem] px-4 py-[0.95rem]`}>
                    <span className="flex items-center gap-[0.55rem]">
                      <span className="h-[14px] w-[14px] flex-none rounded-[5px] bg-green" />
                      <span className="h-[7px] w-[60%] rounded-full bg-line-2" />
                    </span>
                    <span className="flex items-center gap-[0.55rem]">
                      <span className="h-[14px] w-[14px] flex-none rounded-[5px] bg-line-2" />
                      <span className="h-[7px] w-[80%] rounded-full bg-line-2" />
                    </span>
                    <span className="flex items-center gap-[0.55rem]">
                      <span className="h-[14px] w-[14px] flex-none rounded-[5px] bg-green" />
                      <span className="h-[7px] w-1/2 rounded-full bg-line-2" />
                    </span>
                  </div>
                )}
                {i === 2 && (
                  <div className={`${MOCK} items-center gap-[0.85rem] px-4 py-5`}>
                    <span className="h-14 w-14 rounded-full [background:radial-gradient(circle,var(--green)_0_18%,transparent_19%),radial-gradient(circle,transparent_0_36%,var(--mint)_37%_46%,transparent_47%),radial-gradient(circle,transparent_0_62%,var(--mint-soft)_63%_74%,transparent_75%)]" />
                    <span className="mt-[0.15rem] self-start rounded-full border border-mint bg-mint-soft px-[0.6rem] py-[0.28rem] text-[0.68rem] font-semibold tracking-[0.01em] text-green-ink">
                      Your next move
                    </span>
                  </div>
                )}
              </div>
              <span className="font-sans text-[0.7rem] font-bold uppercase tracking-[0.22em] text-green">
                Step {i + 1}
              </span>
              <h3 className="mb-[0.6rem] mt-[0.7rem] text-[clamp(1.35rem,2.4vw,1.7rem)] leading-[1.12] tracking-[-0.01em]">
                {item.title}
              </h3>
              <p className="m-0 text-[0.96rem] leading-[1.65] text-graphite">{item.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
