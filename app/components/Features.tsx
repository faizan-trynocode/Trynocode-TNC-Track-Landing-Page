"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const features = [
  {
    title: "Attendance Tracking",
    description:
      "Mark attendance with a single tap. Track check-in/check-out times, late arrivals, and absences in real time with geolocation support.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M8 14l2 2 4-4" />
      </svg>
    ),
    gradient: "from-emerald-500 to-green-600",
    bgLight: "from-emerald-50 to-green-50",
  },
  {
    title: "Smart Checkout",
    description:
      "End-of-day checkout captures work summaries automatically. Know exactly when your team wraps up and review daily work logs instantly.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    gradient: "from-blue-500 to-cyan-600",
    bgLight: "from-blue-50 to-cyan-50",
  },
  {
    title: "Daily Task Management",
    description:
      "Each team member gets a personalized task board. Assign, track, and review daily tasks with progress indicators and priority levels.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    gradient: "from-violet-500 to-purple-600",
    bgLight: "from-violet-50 to-purple-50",
  },
  {
    title: "TNC Training",
    description:
      "Assess and grow your team's tech stack knowledge. Interactive training modules with quizzes, scores, and skill-level tracking.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
    gradient: "from-orange-500 to-amber-600",
    bgLight: "from-orange-50 to-amber-50",
  },
  {
    title: "Awards & Points",
    description:
      "Gamify performance with points, badges, and leaderboards. Recognize high performers and motivate your entire team to excel.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    gradient: "from-amber-500 to-yellow-500",
    bgLight: "from-amber-50 to-yellow-50",
  },
  {
    title: "Employee History",
    description:
      "Complete timeline of every employee's journey — attendance records, task completions, training scores, awards, and milestones.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 10" />
        <path d="M7.5 3.5L6 2" />
        <path d="M16.5 3.5L18 2" />
      </svg>
    ),
    gradient: "from-pink-500 to-rose-600",
    bgLight: "from-pink-50 to-rose-50",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Features() {
  return (
    <section id="features" className="relative pt-16 pb-10 lg:pt-20 lg:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Powerful Features
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Everything You Need to{" "}
            <span className="gradient-text">Manage Your Team</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            Six powerful modules designed to give you complete visibility into
            workforce productivity, skill development, and performance.
          </p>
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="group card-hover relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-lg shadow-slate-200/50 lg:p-8"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgLight} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              <div className="relative">
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} text-white`}
                >
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-slate-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
