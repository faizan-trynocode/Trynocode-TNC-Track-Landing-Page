"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    question: "What is TNC Track?",
    answer:
      "TNC Track is an all-in-one workforce management platform that combines attendance tracking, daily task management, skill-based training modules, a performance awards system, and complete employee history tracking — all in a single, easy-to-use dashboard.",
  },
  {
    question: "How does attendance tracking work?",
    answer:
      "Team members can check in and check out with a single tap. The system records timestamps, verification and automatically calculates work hours. Managers get real-time headcounts and can track late arrivals, early departures, and absences.",
  },
  {
    question: "How does the awards and points system work?",
    answer:
      "Employees earn points based on attendance consistency, task completion rates, and training scores. Points are displayed on real-time leaderboards, and you can award custom badges and achievements. This gamification drives engagement and recognizes high performers.",
  },
  {
    question: "Can I view an employee's complete history?",
    answer:
      "Yes. The History section provides a complete timeline of each employee — from attendance records and task completions to training scores and awards earned. It's your single source of truth for performance reviews and progress tracking.",
  },
  {
    question: "Is TNC Track secure?",
    answer:
      "Absolutely. We use enterprise-grade encryption for all data at rest and in transit. Role-based access controls ensure team members only see what they're authorized to. We follow industry best practices for data security and privacy compliance.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="border border-border rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 lg:p-6 text-left hover:bg-surface-alt/50 transition-colors"
      >
        <span className="font-semibold text-foreground pr-4">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"
        >
          <svg
            className="w-4 h-4 text-primary"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 lg:px-6 pb-5 lg:pb-6 text-muted leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="pt-12 pb-24 lg:pt-16 lg:pb-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            Everything you need to know about TNC Track. Can&apos;t find an answer?
            Reach out to our team.
          </p>
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.question} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
