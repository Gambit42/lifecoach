"use client";

import { Bento, type BentoTile } from "../bento";
import { CAL_URL } from "../constants";

const tiles: BentoTile[] = [
  {
    tone: "dark",
    eyebrow: "The call",
    figure: "30 min",
    body: "Free, and genuinely no-pressure. We talk about where you are and whether coaching fits.",
  },
  {
    tone: "dark",
    eyebrow: "The work",
    figure: "6 sessions",
    body: "Over 2–3 months. I take on a small handful of clients at a time.",
  },
  {
    tone: "accent",
    span: "col-start-2 row-span-2 row-start-1 max-[720px]:col-auto max-[720px]:row-auto",
    eyebrow: "Ready when you are",
    title: "No pitch, no pressure.",
    body: "If anything here resonated, that's reason enough to talk.",
    cta: { label: "Book the call", href: CAL_URL, external: true },
  },
];

export function Cta() {
  return (
    <section id="book" className="py-24 pb-28 max-[720px]:py-[4.25rem]">
      <div className="container">
        <Bento
          className="grid-cols-[0.75fr_1.25fr] grid-rows-2 gap-4 max-[720px]:grid-cols-1 max-[720px]:grid-rows-none"
          tiles={tiles}
        />
      </div>
    </section>
  );
}
