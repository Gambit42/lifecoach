"use client";

import { Bento, type BentoTile } from "../bento";
import { outcomes } from "../data";

const tiles: BentoTile[] = [
  // Section heading lives in the grid as a full-width bare tile.
  {
    tone: "bare",
    span: "col-span-2 max-[720px]:col-auto",
    title: "Not a five-year plan. Three things, in your own language.",
  },
  // Same two-tone scheme as the booking section: the first outcome is the
  // green accent highlight, the rest are deep-ink dark cards.
  {
    tone: "accent",
    span: "row-span-2 max-[720px]:row-auto",
    eyebrow: "What you walk away with",
    title: outcomes[0].title,
    body: outcomes[0].body,
  },
  ...outcomes.slice(1).map<BentoTile>((item) => ({
    tone: "dark",
    title: item.title,
    body: item.body,
  })),
];

export function Outcomes() {
  return (
    <section className="py-24 max-[720px]:py-[4.25rem]">
      <div className="container">
        <Bento className="grid-cols-[1.15fr_1fr] gap-5 max-[720px]:grid-cols-1" tiles={tiles} />
      </div>
    </section>
  );
}
