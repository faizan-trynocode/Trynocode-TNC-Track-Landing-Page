"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-bg-subtle" />
      <div className="absolute inset-0 pattern-dots opacity-70" />
      <div className="hero-glow top-20 -left-40 bg-primary animate-pulse-glow" />
      <div className="hero-glow bottom-20 -right-40 bg-accent animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 shadow-sm"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
              <span className="text-sm font-medium text-primary">
                Manage People. Track Work. Grow Faster.
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground">
              Empower Your Workforce With{" "}
              <span className="gradient-text">Smart Tracking</span>
            </h1>

            <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl">
              TNC Track brings together everything you need to run your team efficiently - attendance, projects, tasks, bandwidth, performance, <br/>and training — all in one place.
            </p>
          </motion.div>

          {/* Right Column — Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="animate-float">
              <DashboardMockup />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="relative">
      {/* Main Dashboard Card */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xl shadow-slate-200/80">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-warning" />
            <div className="w-3 h-3 rounded-full bg-success" />
          </div>
          <div className="text-xs font-mono text-slate-400">TNC Track Dashboard</div>
        </div>

        {/* Attendance Row */}
        <div className="flex gap-3 mb-4">
          <div className="flex-1 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-4">
            <div className="text-xs text-emerald-600 font-medium">Present Today</div>
            <div className="text-2xl font-bold text-emerald-700 mt-1">47</div>
            <div className="text-xs text-emerald-500 mt-1">/ 52 total</div>
          </div>
          <div className="flex-1 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
            <div className="text-xs text-blue-600 font-medium">Tasks Done</div>
            <div className="text-2xl font-bold text-blue-700 mt-1">183</div>
            <div className="text-xs text-blue-500 mt-1">+12% this week</div>
          </div>
          <div className="flex-1 bg-gradient-to-br from-violet-50 to-violet-100 rounded-xl p-4">
            <div className="text-xs text-violet-600 font-medium">Avg Score</div>
            <div className="text-2xl font-bold text-violet-700 mt-1">8.4</div>
            <div className="text-xs text-violet-500 mt-1">Training</div>
          </div>
        </div>

        {/* Activity bars */}
        <div className="space-y-3">
          {[
            { name: "Rahul S.", progress: 92, color: "bg-primary" },
            { name: "Priya M.", progress: 87, color: "bg-accent" },
            { name: "Amit K.", progress: 78, color: "bg-secondary" },
          ].map((user) => (
            <div key={user.name} className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full gradient-bg flex items-center justify-center text-[10px] font-bold text-white">
                {user.name.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium text-slate-900">{user.name}</span>
                  <span className="text-slate-500">{user.progress}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${user.progress}%` }}
                    transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                    className={`h-full rounded-full ${user.color}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Award Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        className="absolute -top-4 -right-4 rounded-xl border border-slate-200 bg-white p-3 shadow-lg shadow-slate-200/80"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">Top Performer</div>
            <div className="text-[10px] text-slate-500">Rahul S. — 520 pts</div>
          </div>
        </div>
      </motion.div>

      {/* Floating Check-in Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
        className="absolute -bottom-3 -left-4 rounded-xl border border-slate-200 bg-white p-3 shadow-lg shadow-slate-200/80"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">Checked In</div>
            <div className="text-[10px] text-slate-500">09:02 AM today</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
