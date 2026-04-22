"use client";

import { useState } from "react";
import Logo from "./Logo";

const regions: Record<string, { phone: string; address: string }> = {
  UAE: {
    phone: "+971 50439 0258",
    address: "167, Technohub 1, Dubai Silicon Oasis Near Axiom HQ and RIT University – Dubai",
  },
  India: {
    phone: "+91 97119 42575",
    address: "Dwarka",
  },
  UK: {
    phone: "+44 79702 33518",
    address: "27 Old Gloucester St, London WC1N 3AF, United Kingdom",
  },
  USA: {
    phone: "+1 917 267 7727",
    address: "1309 Coffeen Avenue STE 1200 Sheridan, Wyoming 82801 USA",
  },
};

const reviews = [
  {
    platform: "Clutch",
    rating: "4.7",
    label: "CLUTCH RATING",
    stars: 5,
    filledStars: 4,
    halfStar: true,
  },
  {
    platform: "Google",
    rating: "4.8",
    label: "GOOGLE RATING",
    stars: 5,
    filledStars: 4,
    halfStar: true,
  },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/trynocodecom/",
    label: "LinkedIn",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://x.com/trynocode",
    label: "X (Twitter)",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/@trynocode",
    label: "YouTube",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/trynocode",
    label: "Instagram",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [region, setRegion] = useState("UAE");
  const regionData = regions[region];

  return (
    <footer className="border-t border-border bg-surface text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Tagline */}
        <p className="text-center text-lg font-semibold text-foreground mb-12">
          Building tech that scales with you!
        </p>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">

          {/* Left: Brand + Region info */}
          <div className="lg:col-span-2 space-y-6">
        
            {/* Region selector */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                Region
              </label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-44 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition"
              >
                {Object.keys(regions).map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>

            {/* Address block */}
            <div className="space-y-1">
              <p className="text-sm font-semibold text-slate-800">{region}</p>
              <p className="text-sm text-slate-600">{regionData.phone}</p>
              <p className="text-sm text-slate-600 max-w-sm">{regionData.address}</p>
            </div>

            {/* Email */}
            <a
              href="mailto:care@trynocode.com"
              className="text-sm text-slate-600 hover:text-primary transition-colors"
            >
              care@trynocode.com
            </a>
          </div>

          {/* Right: Review badges */}
          <div className="flex flex-col justify-center gap-4">
            {reviews.map((r) => (
              <div
                key={r.platform}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                  Reviewed on
                </p>
                <p className="text-base font-bold text-slate-900">{r.platform}</p>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <span className="text-xl font-bold text-slate-900">{r.rating}</span>
                  <div className="flex text-amber-400">
                    {[1, 2, 3, 4].map((i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <defs>
                        <linearGradient id={`half-${r.platform}`}>
                          <stop offset="50%" stopColor="currentColor" />
                          <stop offset="50%" stopColor="#e5e7eb" />
                        </linearGradient>
                      </defs>
                      <path fill={`url(#half-${r.platform})`} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <p className="text-xs font-semibold tracking-widest text-slate-400 mt-1">
                  {r.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-border" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <a href="#" className="inline-flex items-center">
            <Logo size="sm" variant="footer" />
          </a>

          <div className="text-xs text-slate-500 text-center space-y-1">
            <p>
              &copy; 2007–{new Date().getFullYear()} Trynocode. All Rights Reserved.{" "}
              <a href="/privacy-policy" className="underline hover:text-primary transition-colors">Privacy Policy</a>
              {", "}
              <a href="/cookie-consent" className="underline hover:text-primary transition-colors">Cookie Consent</a>
            </p>
            <p>DSO TECHNOHUB -1-167, Building A5, Dubai Silicon Oasis, Dubai, UAE</p>
          </div>

          <div className="flex gap-2">
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
