import type { Transition } from "motion/react";

// Shared scroll-reveal config. Replaces the old IntersectionObserver hook
// (use-reveal.ts) + [data-reveal] CSS + nth-child stagger — Motion's
// whileInView does the same thing declaratively, per element.
const EASE = [0.22, 1, 0.36, 1] as const;

const VIEWPORT = { once: true, amount: 0.2 } as const;

function ease(delay = 0): Transition {
  return { duration: 0.7, ease: EASE, delay };
}

/**
 * Fade + rise into view on scroll. Spread onto any `motion.*` element.
 * `i` / `step` stagger items within a list (delay = i * step).
 */
export function reveal(i = 0, step = 0.08) {
  return {
    initial: { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: VIEWPORT,
    transition: ease(i * step),
  };
}

/**
 * reveal() plus a hover lift. The lift lives in Motion (not CSS `:hover`)
 * because Motion owns the element's inline transform once it animates `y`,
 * which would otherwise override a CSS `:hover { transform }`.
 */
export function revealLift(i = 0, y = -3, step = 0.08) {
  return {
    ...reveal(i, step),
    whileHover: { y, transition: { duration: 0.35, ease: EASE } },
  };
}
