"use client";

import Lottie from "lottie-react";
import botAnimation from "@/public/lottie.json";
import AnimatedSection from "./AnimatedSection";

const highlights = [
  "Instantly generate reports and visual insights",
  "Identify trends, gaps, and opportunities in seconds",
  "Make faster decisions with real-time data access",
  "Ask anything about projects, team, performance or policy",
];

export default function AIInsights() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text block */}
          <AnimatedSection direction="left">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Your data, just one question away
            </span>
            <h3 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              AI-Powered Insights,{" "}
              <span className="text-primary">On Demand</span>
            </h3>
            <p className="mt-4 text-muted leading-relaxed text-lg">
              Get instant answers and generate detailed reports just by asking
              questions. No manual tracking or complex dashboards — your team
              data is always one question away.
            </p>
            <ul className="mt-6 space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-foreground">{h}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Bot Lottie */}
          <AnimatedSection direction="right" delay={0.15} className="flex items-center justify-center">
            <div className="w-full max-w-xs sm:max-w-sm mx-auto">
              <Lottie animationData={botAnimation} loop autoplay />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
