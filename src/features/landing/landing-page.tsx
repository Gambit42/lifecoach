"use client";

import { MotionConfig } from "motion/react";
import {
  Nav,
  Hero,
  Certifications,
  WhoItsFor,
  HowItWorks,
  PullQuote,
  Outcomes,
  Testimonials,
  About,
  Newsletter,
  Cta,
  SiteFooter,
} from "./sections";

export function LandingPage() {
  return (
    // reducedMotion="user" makes every Motion animation honor the OS
    // "reduce motion" setting globally.
    <MotionConfig reducedMotion="user">
      <main className="shell">
        <Nav />
        <Hero />
        <Certifications />
        <WhoItsFor />
        <HowItWorks />
        <PullQuote />
        <Outcomes />
        <Testimonials />
        <About />
        <Cta />
        <Newsletter />
        <SiteFooter />
      </main>
    </MotionConfig>
  );
}
