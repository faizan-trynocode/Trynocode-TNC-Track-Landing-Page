"use client";

import AnimatedSection from "./AnimatedSection";

const stepIconGradient = {
  backgroundImage:
    "linear-gradient(135deg, rgb(124, 58, 237) 0%, rgb(91, 33, 182) 100%)",
} as const;

const steps = [
  {
    step: "01",
    title: "Sign Up & Set Up Your Team",
    description:
      "Create your organization, invite team members, and configure attendance rules, task categories, and training modules in minutes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 shrink-0">
        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <line x1="20" y1="8" x2="20" y2="14" />
        <line x1="23" y1="11" x2="17" y2="11" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Track & Monitor Daily Activity",
    description:
      "Team members check in, update daily tasks, and complete training assessments. Everything is captured automatically in real time.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 shrink-0">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Analyze & Reward Performance",
    description:
      "Review dashboards with attendance trends, task completion rates, and training scores. Award points and recognize top performers.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 shrink-0">
        <path d="M18 20V10" />
        <path d="M12 20V4" />
        <path d="M6 20v-6" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="pt-16 pb-12 lg:pt-20 lg:pb-16 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Up and Running in{" "}
            <span className="gradient-text">Three Simple Steps</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            Get started with TNC Track quickly — no complex setup, no lengthy onboarding.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary via-accent to-secondary opacity-20" />

          {steps.map((step, index) => (
            <AnimatedSection key={step.step} delay={index * 0.15}>
              <div className="relative text-center group">
                {/* Plain div + inline gradient: avoids Tailwind @property gradient + motion.div paint bugs in some browsers */}
                <div
                  style={stepIconGradient}
                  className="relative z-0 mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-2xl shadow-lg shadow-primary/25 ring-1 ring-black/5 transition-transform duration-300 ease-out group-hover:scale-105"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {step.icon}
                  </span>
                  <div className="absolute -top-2 -right-2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-border">
                    <span className="text-xs font-bold text-primary">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
