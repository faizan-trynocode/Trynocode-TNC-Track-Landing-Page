"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const features = [
  {
    title: "Attendance Tracking",
    description:
      "Mark attendance with a single tap and track check-in/check-out in real time. Monitor late arrivals, absences, and daily work hours effortlessly.",
    icon: "/icons/attendance-tracking.svg",
    gradient: "from-emerald-500 to-green-600",
    bgLight: "from-emerald-50 to-green-50",
  },
  {
    title: "Task Management",
    description: "Assign and manage tasks across projects with real-time tracking and clear ownership. Employees can start, update, and complete tasks seamlessly with defined deadlines.",
    icon: "/icons/task-management.svg",
    gradient: "from-violet-500 to-purple-600",
    bgLight: "from-violet-50 to-purple-50",
  },
  {
    title: "Training & Analysis",
    description:
      "Help your team grow while they work with structured training and clear progress tracking. Assign learning paths, monitor completion, and give easy access to training resources.",
    icon: "/icons/training-analysis.svg",
    gradient: "from-orange-500 to-amber-600",
    bgLight: "from-orange-50 to-amber-50",
  },
  {
    title: "AI Chatbot",
    description: "Track everything easily using the AI chatbot. Generate reports, charts, and get real-time updates on attendance, projects, and team performance.",
    icon: "/icons/ai-chatbot.svg",
    gradient: "from-amber-500 to-yellow-500",
    bgLight: "from-amber-50 to-yellow-50",
  },
  {
    title: "Bandwidth Tracker",
    description: "Monitor employee workload across projects and identify who is over or under-utilized. Easily allocate resources and balance work across your team.",
    icon: "/icons/bandwidth-tracker.svg",
    gradient: "from-pink-500 to-rose-600",
    bgLight: "from-pink-50 to-rose-50",
  },
  {
    title: "Invoice Generator",
    description: "Generate accurate invoices based on project data and tracked work. Simplify billing with quick, automated invoice creation.",
    icon: "/icons/invoice-generator.svg",
    gradient: "from-blue-500 to-cyan-600",
    bgLight: "from-blue-50 to-cyan-50",
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
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient}`}
                >
                  <Image src={feature.icon} alt={feature.title} width={24} height={24} />
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
