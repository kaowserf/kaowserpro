"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.6,
      delay,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  };
}

const services = [
  "Web Development",
  "Mobile App Development",
  "Website to App Conversion",
  "Event Registration Landing Page",
  "Medical Spa Website",
  "UI/UX Design",
  "Full-Stack Application",
  "Other",
];

const budgets = [
  "Under $500",
  "$500 – $1,000",
  "$1,000 – $3,000",
  "$3,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
];

export default function ProjectInquiry() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    service: "",
    budget: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-28 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-orange-500/8 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-amber-500/5 blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
          {/* Left — Info */}
          <motion.div {...fadeUp(0)}>
            <p className="text-orange-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Start a Project
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
              Have a project idea in mind?{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Let&apos;s get started.
              </span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              We&apos;ll schedule a call to discuss your idea. After discovery
              sessions, I&apos;ll send a proposal, and upon approval, we&apos;ll
              get started building.
            </p>

            {/* Profile */}
            <div className="flex items-center gap-4 p-5 rounded-2xl border border-white/8 bg-white/[0.02] mb-6">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-orange-500/30 flex-shrink-0">
                <Image
                  src="/developer.jpg"
                  alt="Kaowser Ahmed"
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">
                  Kaowser Ahmed
                </p>
                <p className="text-gray-500 text-xs">
                  App & Web Developer
                </p>
              </div>
            </div>

            {/* Quick info */}
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  ),
                  label: "Response within 24 hours",
                },
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  ),
                  label: "Free 30-min discovery call",
                },
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  ),
                  label: "NDA available on request",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="text-orange-400">{item.icon}</span>
                  <span className="text-gray-400 text-sm">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Alt CTA */}
            <div className="mt-8 pt-6 border-t border-white/8">
              <p className="text-gray-600 text-xs mb-3">
                Not interested to submit the form?
              </p>
              <a
                href="https://calendly.com/kaowserpro/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Book a Call Directly →
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div {...fadeUp(0.15)}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-orange-500/10 to-amber-500/5 blur-2xl pointer-events-none" />
              <div className="relative rounded-3xl border border-white/[0.08] bg-[#0c0c14]/80 backdrop-blur-xl p-8 sm:p-10">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Row: Name + Company */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-gray-400 text-xs font-medium mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          placeholder="Jane Cooper"
                          required
                          value={form.name}
                          onChange={(e) => update("name", e.target.value)}
                          className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-gray-600 focus:border-orange-500/40 focus:bg-white/[0.05] focus:outline-none focus:ring-1 focus:ring-orange-500/20 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-400 text-xs font-medium mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          placeholder="Ex. Tesla Inc"
                          value={form.company}
                          onChange={(e) => update("company", e.target.value)}
                          className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-gray-600 focus:border-orange-500/40 focus:bg-white/[0.05] focus:outline-none focus:ring-1 focus:ring-orange-500/20 transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-gray-400 text-xs font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        required
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-gray-600 focus:border-orange-500/40 focus:bg-white/[0.05] focus:outline-none focus:ring-1 focus:ring-orange-500/20 transition-all duration-300"
                      />
                    </div>

                    {/* Row: Service + Budget */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-gray-400 text-xs font-medium mb-2">
                          Service Required *
                        </label>
                        <div className="relative">
                          <select
                            required
                            value={form.service}
                            onChange={(e) => update("service", e.target.value)}
                            className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm focus:border-orange-500/40 focus:outline-none focus:ring-1 focus:ring-orange-500/20 transition-all duration-300 appearance-none cursor-pointer"
                          >
                            <option value="" disabled className="bg-[#0c0c14] text-gray-500">
                              Select Your Service
                            </option>
                            {services.map((s) => (
                              <option key={s} value={s} className="bg-[#0c0c14]">
                                {s}
                              </option>
                            ))}
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-400 text-xs font-medium mb-2">
                          Project Budget *
                        </label>
                        <div className="relative">
                          <select
                            required
                            value={form.budget}
                            onChange={(e) => update("budget", e.target.value)}
                            className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm focus:border-orange-500/40 focus:outline-none focus:ring-1 focus:ring-orange-500/20 transition-all duration-300 appearance-none cursor-pointer"
                          >
                            <option value="" disabled className="bg-[#0c0c14] text-gray-500">
                              Select Your Range
                            </option>
                            {budgets.map((b) => (
                              <option key={b} value={b} className="bg-[#0c0c14]">
                                {b}
                              </option>
                            ))}
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div>
                      <label className="block text-gray-400 text-xs font-medium mb-2">
                        Project Details *
                      </label>
                      <textarea
                        placeholder="Tell me about your project — goals, features, timeline, or anything you'd like to share..."
                        required
                        rows={5}
                        value={form.details}
                        onChange={(e) => update("details", e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-gray-600 focus:border-orange-500/40 focus:bg-white/[0.05] focus:outline-none focus:ring-1 focus:ring-orange-500/20 transition-all duration-300 resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.35)] mt-1 relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Send Project Request
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                      </span>
                    </motion.button>

                    <p className="text-center text-gray-600 text-xs">
                      I&apos;ll get back to you within 24 hours. No spam, ever.
                    </p>
                  </form>
                ) : (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/30 flex items-center justify-center mx-auto mb-6"
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Thank you!
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto">
                      Your project request has been received. I&apos;ll review
                      your details and get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
