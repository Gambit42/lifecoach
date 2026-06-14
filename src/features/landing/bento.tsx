"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { BTN } from "./constants";
import { reveal, revealLift } from "./reveal";

/**
 * The four surface treatments a bento tile can take. They all share one teal
 * hue family (see --green and its tints in globals.css) so any mix reads as
 * the same system:
 *   surface — white card with a hairline border (the default)
 *   feature — large light-teal tile with a topographic glow
 *   dark    — deep-ink card with a green corner glow
 *   accent  — solid green panel with a grid + corner brackets (for CTAs)
 *   bare    — no card chrome; a section heading that lives in the grid
 */
export type BentoTone = "surface" | "feature" | "dark" | "accent" | "bare";

export interface BentoTile {
  tone?: BentoTone;
  /** Small uppercase label above the content. */
  eyebrow?: string;
  /** Large display stat, e.g. "30 min". */
  figure?: string;
  title?: string;
  body?: ReactNode;
  /** Adds a button and turns the tile into a call-to-action. */
  cta?: { label: string; href: string; external?: boolean };
  /** Extra grid-placement utilities, e.g. "row-span-2", "col-start-2". */
  span?: string;
}

export interface BentoProps {
  tiles: BentoTile[];
  /** Grid layout utilities — columns / rows / gap. */
  className?: string;
}

const SHELL =
  "group relative flex flex-col overflow-hidden rounded-lg transition-[border-color,box-shadow] duration-300 ease-[var(--ease)]";

const TONE: Record<BentoTone, string> = {
  surface:
    "p-8 justify-start border border-line bg-[var(--surface)] text-ink hover:shadow-[var(--shadow)]",
  feature:
    "p-8 justify-center border border-mint text-ink [background:radial-gradient(130%_110%_at_0%_0%,var(--paper-3),transparent_58%),var(--mint-soft)]",
  dark:
    "p-[clamp(1.75rem,3vw,2.25rem)] justify-start border border-steel bg-ink text-paper hover:shadow-[var(--shadow)]",
  accent: "p-[clamp(2.75rem,4.5vw,4rem)] justify-center gap-1 bg-green text-white",
  bare: "justify-end pb-6 text-ink",
};

const EYEBROW: Record<BentoTone, string> = {
  surface: "text-green",
  feature: "text-green",
  dark: "text-[color-mix(in_srgb,var(--green)_70%,#ffffff)]",
  accent: "text-white/75",
  bare: "text-green",
};

const TITLE: Record<BentoTone, string> = {
  surface: "mb-3 mt-5 text-[1.55rem] leading-[1.05]",
  feature: "mb-3 mt-5 text-[clamp(1.6rem,2.6vw,2.1rem)] leading-[1.05]",
  dark: "mb-3 mt-2 text-[clamp(1.5rem,2.6vw,1.9rem)] leading-[1.1] text-white",
  accent: "mt-5 max-w-[11ch] text-[clamp(2.6rem,5vw,4rem)] leading-[0.98] text-white",
  bare: "max-w-[42rem] text-[clamp(2rem,4.6vw,3.6rem)] leading-none",
};

const BODY: Record<BentoTone, string> = {
  surface: "leading-[1.65] text-graphite",
  feature: "max-w-[34ch] leading-[1.65] text-graphite",
  dark: "mt-auto text-[0.96rem] leading-[1.6] text-[rgba(229,231,235,0.7)]",
  accent: "mt-5 max-w-[36ch] text-[1.02rem] leading-[1.65] text-white/82",
  bare: "mt-4 max-w-[42rem] leading-[1.65] text-graphite",
};

const EYEBROW_BASE = "font-sans text-[0.66rem] font-semibold uppercase tracking-[0.2em]";
const FIGURE = "mb-3 mt-2 font-display text-[clamp(1.6rem,3vw,2.2rem)] font-semibold leading-none tracking-[-0.035em]";
const GLOW =
  "pointer-events-none absolute -right-[20%] -top-[30%] aspect-square w-[70%] [background:radial-gradient(circle_at_center,rgba(82,125,129,0.4),transparent_65%)] opacity-70 transition-opacity duration-[400ms] ease-[var(--ease)] group-hover:opacity-100";

function Tile({ tile, index }: { tile: BentoTile; index: number }) {
  const tone = tile.tone ?? "surface";
  // Light cards lead with a growing rule; the others lead with an eyebrow.
  const showRule = (tone === "surface" || tone === "feature") && !tile.eyebrow;
  // Content sits above the decorative layer; plain/bare tiles have no layer.
  const z = tone === "surface" || tone === "bare" ? "" : "relative z-[1]";
  // Section headings (bare/accent) are h2; cards are h3.
  const Heading = tone === "accent" || tone === "bare" ? "h2" : "h3";
  // No hover lift on non-card tones.
  const motionProps = tone === "accent" || tone === "bare" ? reveal(index) : revealLift(index, -4);

  return (
    <motion.article className={`${SHELL} ${TONE[tone]} ${tile.span ?? ""}`} {...motionProps}>
      {tone === "feature" && <span className="fx-topo" aria-hidden="true" />}
      {tone === "dark" && <span className={GLOW} aria-hidden="true" />}
      {tone === "accent" && (
        <>
          <span className="fx-grid-cta" aria-hidden="true" />
          <span className="absolute left-[18px] top-[18px] z-[1] h-6 w-6 border-[1.5px] border-b-0 border-r-0 border-white/45" />
          <span className="absolute bottom-[18px] right-[18px] z-[1] h-6 w-6 border-[1.5px] border-l-0 border-t-0 border-white/45" />
        </>
      )}

      {showRule && (
        <span
          className={`block h-0.5 w-7 rounded-[2px] bg-green transition-[width] duration-[400ms] ease-[var(--ease)] group-hover:w-12 ${z}`}
          aria-hidden="true"
        />
      )}
      {tile.eyebrow && <span className={`${z} ${EYEBROW_BASE} ${EYEBROW[tone]}`}>{tile.eyebrow}</span>}
      {tile.figure && <strong className={`${z} ${FIGURE}`}>{tile.figure}</strong>}
      {tile.title && <Heading className={`${z} ${TITLE[tone]}`}>{tile.title}</Heading>}
      {tile.body && <p className={`${z} m-0 ${BODY[tone]}`}>{tile.body}</p>}
      {tile.cta && (
        <Button asChild variant="secondary" className={`${BTN} ${z} mt-2 self-start`}>
          <a
            href={tile.cta.href}
            {...(tile.cta.external ? { target: "_blank", rel: "noreferrer" } : {})}
          >
            {tile.cta.label} <span aria-hidden="true">↗</span>
          </a>
        </Button>
      )}
    </motion.article>
  );
}

/**
 * A bento grid. Pass the layout (columns / rows / gap) via `className` and a
 * list of `tiles`; each tile's `tone` decides its styling so every section
 * built this way stays visually uniform.
 */
export function Bento({ tiles, className = "" }: BentoProps) {
  return (
    <div className={`grid ${className}`}>
      {tiles.map((tile, i) => (
        <Tile key={tile.title ?? tile.figure ?? i} tile={tile} index={i} />
      ))}
    </div>
  );
}
