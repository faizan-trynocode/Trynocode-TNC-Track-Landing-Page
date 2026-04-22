"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const contactDetails = [
  {
    label: "EMAIL",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    lines: ["care@trynocode.com"],
  },
  {
    label: "PHONE",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    lines: ["+91 97119 42575", "+44 79702 33518", "+971 50439 0258"],
  },
];

export default function ScheduleDemo() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="schedule-demo" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <AnimatedSection direction="up" className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Schedule a Demo
          </h2>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            See TNC Track in action. Book a live walkthrough with our team and
            discover how it can transform the way you manage your workforce.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <AnimatedSection
            direction="left"
            className="lg:col-span-2 rounded-2xl border border-slate-200 bg-slate-50 p-8 flex flex-col gap-8"
          >
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Contact Information
              </h3>
              <p className="text-sm text-slate-500">
                Reach out directly or fill in the form and we&apos;ll get back
                to you within one business day.
              </p>
            </div>

            <div className="space-y-6">
              {contactDetails.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-primary">{item.icon}</span>
                    <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
                      {item.label}
                    </span>
                  </div>
                  {item.lines.map((line) => (
                    <p key={line} className="text-sm font-medium text-slate-800 ml-6">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Decorative gradient blob */}
            <div className="mt-auto pt-6">
              <div className="h-1.5 w-full rounded-full bg-gradient-to-r from-primary via-violet-400 to-primary/40" />
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection direction="right" delay={0.15} className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm h-full">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full gap-5 py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full gradient-bg">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">
                    Request Received!
                  </h4>
                  <p className="text-slate-500 max-w-xs">
                    Thanks for reaching out. Our team will contact you within
                    one business day to confirm your demo slot.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", message: "" }); }}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">
                    Book your free demo
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Company / Organisation
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your team size, challenges, or anything you'd like to cover in the demo…"
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl gradient-bg px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-opacity hover:opacity-90 active:scale-[.98]"
                  >
                    Schedule My Demo →
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
