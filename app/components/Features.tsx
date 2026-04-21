"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const features = [
  {
    title: "Attendance Tracking",
    description:
      "Mark attendance with a single tap and track check-in/check-out in real time. Monitor late arrivals, absences, and daily work hours effortlessly.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M9 16l2 2 4-4" />
      </svg>
    ),
    gradient: "from-emerald-500 to-green-600",
    bgLight: "from-emerald-50 to-green-50",
  },
  {
    title: "Task Management",
    description:"Assign and manage tasks across projects with real-time tracking and clear ownership. Employees can start, update, and complete tasks seamlessly with defined deadlines.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="4" width="5" height="16" rx="1" />
        <rect x="9.5" y="4" width="5" height="11" rx="1" />
        <rect x="16" y="4" width="5" height="14" rx="1" />
      </svg>
    ),
    gradient: "from-violet-500 to-purple-600",
    bgLight: "from-violet-50 to-purple-50",
  },
  {
    title: "Training & Analysis",
    description:
      "Help your team grow while they work with structured training and clear progress tracking. Assign learning paths, monitor completion, and give easy access to training resources.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M4 19V5" />
        <path d="M4 12h4l3 8 4-16 3 8h4" />
      </svg>
    ),
    gradient: "from-orange-500 to-amber-600",
    bgLight: "from-orange-50 to-amber-50",
  },
  {
    title: "AI Chatbot",
    description:"Track everything easily using the AI chatbot. Generate reports, charts, and get real-time updates on attendance, projects, and team performance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
        <path d="M9.5 10h.01" />
        <path d="M12 10h.01" />
        <path d="M14.5 10h.01" />
      </svg>
    ),
    gradient: "from-amber-500 to-yellow-500",
    bgLight: "from-amber-50 to-yellow-50",
  },
  {
    title: "Bandwidth Tracker",
    description:"Monitor employee workload across projects and identify who is over or under-utilized. Easily allocate resources and balance work across your team.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <line x1="6" y1="20" x2="6" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="18" y1="20" x2="18" y2="14" />
      </svg>
    ),
    gradient: "from-pink-500 to-rose-600",
    bgLight: "from-pink-50 to-rose-50",
  },
  {
    title: "Invoice Generator",
    description:"Generate accurate invoices based on project data and tracked work. Simplify billing with quick, automated invoice creation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
        <path d="M10 9H8" />
      </svg>
    ),
    gradient: "from-blue-500 to-cyan-600",
    bgLight: "from-blue-50 to-cyan-50",
  }
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
             Powerful modules designed to give you complete visibility into
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
