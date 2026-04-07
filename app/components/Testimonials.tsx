"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote:
      "TNC Track transformed how we manage our team. Attendance is seamless, task tracking is intuitive, and the training module helped us identify real skill gaps we didn't know existed.",
    author: "Anil Sharma",
    role: "Engineering Manager, TechVista Solutions",
    avatar: "A",
  },
  {
    quote:
      "The awards and points system has been a game-changer for engagement. Our team is more motivated than ever, and the leaderboard creates healthy competition that drives results.",
    author: "Priya Nair",
    role: "HR Director, InnovateTech",
    avatar: "P",
  },
  {
    quote:
      "We used to spend hours reconciling attendance and tasks. With TNC Track, everything is automated and visible on a single dashboard. It saves us at least 15 hours a week.",
    author: "Karthik Reddy",
    role: "Operations Head, CloudNine Digital",
    avatar: "K",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Loved by Teams{" "}
            <span className="gradient-text">Across Industries</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            See how organizations are using TNC Track to boost productivity and
            employee engagement.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <AnimatedSection key={t.author} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-8 shadow-md shadow-slate-200/60 transition-shadow hover:shadow-lg hover:shadow-slate-200/80"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="mb-6 flex-1 leading-relaxed text-slate-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 border-t border-slate-200 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-bg text-sm font-bold text-white">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      {t.author}
                    </div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
