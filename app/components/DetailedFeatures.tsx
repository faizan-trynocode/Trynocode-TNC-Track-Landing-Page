"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const detailedFeatures = [
  {
    title: "Team Operations Hub",
    subtitle: "Everything in one place",
    description:
      "Manage your entire team's day-to-day operations from one place — from attendance to tasks and project execution. Track check-ins, work hours, leaves, and task progress in real time while ensuring clear ownership and accountability across projects.",
    highlights: [
      "Real-time check-in & work-hour tracking",
      "Leave management & approval workflows",
      "Task ownership & progress visibility",
      "Project-level accountability reports",
    ],
    visual: <AttendanceVisual />,
  },
  {
    title: "Performance & Resource Intelligence",
    subtitle: "Build a high-performing team",
    description:
      "Build a high-performing team with complete visibility into skills and workload. Monitor training progress, identify skill gaps, and track employee bandwidth to balance work effectively and improve overall productivity.",
    highlights: [
      "Skill gap analysis & training tracking",
      "Employee bandwidth monitoring",
      "Workload balancing across teams",
      "Productivity trends & insights",
    ],
    visual: <TrainingVisual />,
    reversed: true,
  },
  {
    title: "AI Automation & Insights",
    subtitle: "Let AI do the heavy lifting",
    description:
      "Simplify everything with AI — from generating reports and insights to managing organisational structure and documentation. Ask questions, get real-time updates, automate emails, and handle tasks like employee records and experience letters effortlessly.",
    highlights: [
      "Ask anything, get instant answers",
      "Auto-generate reports & documents",
      "Automated emails & notifications",
      "Employee records & experience letters",
    ],
    visual: <TaskBoardVisual />,
  },
];

export default function DetailedFeatures() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 lg:space-y-36">
        {detailedFeatures.map((feature) => {
          const textBlock = (
            <AnimatedSection
              key={`${feature.title}-text`}
              direction={feature.reversed ? "right" : "left"}
            >
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                {feature.subtitle}
              </span>
              <h3 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                {feature.title}
              </h3>
              <p className="mt-4 text-muted leading-relaxed text-lg">
                {feature.description}
              </p>
              <ul className="mt-6 space-y-3">
                {feature.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          );

          const visualBlock = (
            <AnimatedSection
              key={`${feature.title}-visual`}
              direction={feature.reversed ? "left" : "right"}
              delay={0.15}
            >
              {feature.visual}
            </AnimatedSection>
          );

          return (
            <div
              key={feature.title}
              className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              {feature.reversed ? (
                <>
                  {visualBlock}
                  {textBlock}
                </>
              ) : (
                <>
                  {textBlock}
                  {visualBlock}
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function AttendanceVisual() {
  const employees = [
    { name: "Sarah J.", time: "08:58 AM", status: "On Time", avatar: "S" },
    { name: "Mike R.", time: "09:05 AM", status: "On Time", avatar: "M" },
    { name: "Lisa P.", time: "09:22 AM", status: "Late", avatar: "L" },
    { name: "Tom W.", time: "09:01 AM", status: "On Time", avatar: "T" },
  ];

  return (
    <div className="relative rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xl shadow-slate-200/70">
      <div className="mb-5 flex items-center justify-between">
        <h4 className="font-bold text-slate-900">Today&apos;s Attendance</h4>
        <span className="text-xs bg-emerald-50 text-emerald-600 font-medium px-3 py-1 rounded-full">
          Live
        </span>
      </div>
      <div className="space-y-3">
        {employees.map((emp, i) => (
          <motion.div
            key={emp.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className="flex items-center justify-between rounded-xl bg-slate-50 p-3 transition-colors hover:bg-slate-100"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full gradient-bg text-sm font-bold text-white">
                {emp.avatar}
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">{emp.name}</div>
                <div className="text-xs text-slate-500">{emp.time}</div>
              </div>
            </div>
            <span
              className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                emp.status === "On Time"
                  ? "bg-emerald-50 text-emerald-600"
                  : "bg-amber-50 text-amber-600"
              }`}
            >
              {emp.status}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function TaskBoardVisual() {
  const tasks = [
    { title: "API Integration", priority: "High", progress: 85, color: "bg-red-500" },
    { title: "UI Review", priority: "Medium", progress: 60, color: "bg-amber-500" },
    { title: "Documentation", priority: "Low", progress: 30, color: "bg-blue-500" },
  ];

  return (
    <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xl shadow-slate-200/70">
      <div className="mb-5 flex items-center justify-between">
        <h4 className="font-bold text-slate-900">Today&apos;s Tasks</h4>
        <span className="text-xs font-medium text-slate-500">3 of 5 done</span>
      </div>
      <div className="space-y-4">
        {tasks.map((task, i) => (
          <motion.div
            key={task.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3 + i * 0.12 }}
            className="rounded-xl border border-slate-200 p-4 transition-colors hover:border-primary/40"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-900">{task.title}</span>
              <span
                className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                  task.priority === "High"
                    ? "bg-red-50 text-red-600"
                    : task.priority === "Medium"
                    ? "bg-amber-50 text-amber-600"
                    : "bg-blue-50 text-blue-600"
                }`}
              >
                {task.priority}
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${task.progress}%` }}
                viewport={{ once: false }}
                transition={{ duration: 1, delay: 0.5 + i * 0.15 }}
                className={`h-full rounded-full ${task.color}`}
              />
            </div>
            <div className="mt-1.5 text-right text-xs text-slate-500">{task.progress}%</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function TrainingVisual() {
  const skills = [
    { name: "React", level: 92, color: "from-cyan-400 to-blue-500" },
    { name: "Node.js", level: 78, color: "from-green-400 to-emerald-500" },
    { name: "TypeScript", level: 85, color: "from-blue-400 to-indigo-500" },
    { name: "AWS", level: 64, color: "from-orange-400 to-amber-500" },
  ];

  return (
    <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xl shadow-slate-200/70">
      <div className="mb-5 flex items-center justify-between">
        <h4 className="font-bold text-slate-900">Skill Assessment</h4>
        <span className="text-xs bg-violet-50 text-violet-600 font-medium px-3 py-1 rounded-full">
          Updated
        </span>
      </div>
      <div className="space-y-5">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            <div className="mb-2 flex justify-between text-sm">
              <span className="font-medium text-slate-900">{skill.name}</span>
              <span className="font-medium text-slate-500">{skill.level}%</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-slate-100">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: false }}
                transition={{ duration: 1.2, delay: 0.4 + i * 0.15, ease: "easeOut" }}
                className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
