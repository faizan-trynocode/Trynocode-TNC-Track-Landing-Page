"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const detailedFeatures = [
  {
    title: "Real-Time Attendance & Checkout",
    subtitle: "Know who's in, who's out — instantly",
    description:
      "One-tap check-in and check-out with timestamps, geolocation, and automatic work-hour calculations. Get real-time headcounts, track late arrivals, early departures, and generate accurate attendance reports effortlessly.",
    highlights: [
      "Geolocation-based check-in verification",
      "Automatic work-hour calculation",
      "Late arrival & early departure alerts",
      "Export-ready attendance reports",
    ],
    visual: <AttendanceVisual />,
  },
  {
    title: "Personalized Daily Task Boards",
    subtitle: "Every team member, every task, tracked",
    description:
      "Assign and manage daily tasks with priorities, deadlines, and status tracking. Each individual sees their personalized task board, making it easy to stay focused and accountable throughout the day.",
    highlights: [
      "Drag-and-drop task management",
      "Priority levels & deadlines",
      "Real-time progress tracking",
      "Daily completion summaries",
    ],
    visual: <TaskBoardVisual />,
    reversed: true,
  },
  {
    title: "TNC Training & Skill Assessment",
    subtitle: "Measure what your team truly knows",
    description:
      "Interactive training modules let you assess each team member's knowledge of your tech stack. Track skill levels, identify knowledge gaps, and plan targeted upskilling programs with data-backed insights.",
    highlights: [
      "Custom training modules by tech stack",
      "Quiz-based skill assessments",
      "Individual skill-level tracking",
      "Knowledge gap analysis & reports",
    ],
    visual: <TrainingVisual />,
  },
  {
    title: "Awards, Points & Leaderboards",
    subtitle: "Recognize, reward, and retain top talent",
    description:
      "Gamify workplace performance with a points system. Employees earn points for attendance streaks, task completions, and training scores. Highlight top performers on leaderboards and celebrate achievements with badges.",
    highlights: [
      "Points for attendance, tasks & training",
      "Real-time leaderboards",
      "Custom badges & achievements",
      "Monthly & quarterly award cycles",
    ],
    visual: <AwardsVisual />,
    reversed: true,
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

function AwardsVisual() {
  const leaderboard = [
    { rank: 1, name: "Rahul S.", points: 2450, badge: "gold" },
    { rank: 2, name: "Priya M.", points: 2180, badge: "silver" },
    { rank: 3, name: "Amit K.", points: 1920, badge: "bronze" },
  ];

  const badgeColors: Record<string, string> = {
    gold: "from-amber-400 to-yellow-500",
    silver: "from-gray-300 to-gray-400",
    bronze: "from-orange-300 to-orange-500",
  };

  return (
    <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xl shadow-slate-200/70">
      <div className="mb-5 flex items-center justify-between">
        <h4 className="font-bold text-slate-900">Leaderboard</h4>
        <span className="text-xs font-medium text-slate-500">This Month</span>
      </div>
      <div className="space-y-3">
        {leaderboard.map((person, i) => (
          <motion.div
            key={person.name}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3 + i * 0.12 }}
            className={`flex items-center justify-between rounded-xl p-4 ${
              person.rank === 1
                ? "border border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50"
                : "bg-slate-50"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${badgeColors[person.badge]} text-sm font-bold text-white`}
              >
                #{person.rank}
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">{person.name}</div>
                <div className="text-xs text-slate-500">{person.points.toLocaleString()} points</div>
              </div>
            </div>
            {person.rank === 1 && (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-amber-500">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
              </svg>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
