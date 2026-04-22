"use client";

import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

export default function BuiltForYourTeam() {
  return (
    <section className="relative overflow-hidden pt-24 pb-12 lg:pt-32 lg:pb-16">
      <div className="absolute inset-0 gradient-bg-subtle" />
      <div className="absolute inset-0 pattern-dots opacity-70" />
      <div className="hero-glow top-10 -left-40 bg-primary animate-pulse-glow" />
      <div className="hero-glow bottom-10 -right-40 bg-accent animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <AnimatedSection direction="up">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Built &amp; Customized{" "}
            <span className="text-primary">for Your Team</span>
          </h2>
          <p className="mt-6 text-muted text-lg leading-relaxed max-w-3xl mx-auto">
            We understand no two teams are the same, that&apos;s why we tailor
            TNC Track to fit your workflows, structure, and daily needs. We
            continuously iterate and support you at every step to ensure it
            works exactly the way your team does.
          </p>
          <p className="mt-4 text-foreground font-medium text-lg">
            Get a setup that feels purpose-built for your team.
          </p>
          <div className="mt-10">
            <Link
              href="https://calendly.com/trynocode/projectdiscussion?back=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl gradient-bg px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-opacity hover:opacity-90 active:scale-[.98]"
            >
              Book a Call
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
