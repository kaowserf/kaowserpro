"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

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

const plans = [
  {
    name: "Starter",
    tagline: "Perfect for launching fast",
    price: { usd: 600 },
    badge: null,
    color: "from-gray-500/20 to-gray-600/10",
    borderHover: "hover:border-gray-400/40",
    accentColor: "text-gray-300",
    buttonClass:
      "border border-white/20 hover:border-white/40 text-white hover:bg-white/5",
    features: [
      { text: "Up to 5 pages", included: true },
      { text: "Responsive design (mobile + desktop)", included: true },
      { text: "Modern UI with animations", included: true },
      { text: "Basic SEO setup", included: true },
      { text: "Contact form integration", included: true },
      { text: "WhatsApp / social links", included: true },
      { text: "2 rounds of revisions", included: true },
      { text: "14-day delivery", included: true },
      { text: "1 month post-launch support", included: true },
      { text: "CMS / Blog integration", included: false },
      { text: "Custom backend / API", included: false },
      { text: "Mobile app", included: false },
      { text: "Authentication system", included: false },
      { text: "Database setup", included: false },
    ],
  },
  {
    name: "Growth",
    tagline: "Scale your digital presence",
    price: { usd: 1400 },
    badge: "Most Popular",
    color: "from-orange-500/20 to-amber-500/10",
    borderHover: "border-orange-500/50 hover:border-orange-400/70",
    accentColor: "text-orange-400",
    buttonClass:
      "bg-orange-500 hover:bg-orange-400 text-white hover:shadow-[0_0_28px_rgba(249,115,22,0.45)]",
    features: [
      { text: "Up to 15 pages", included: true },
      { text: "Responsive design (mobile + desktop)", included: true },
      { text: "Advanced animations & micro-interactions", included: true },
      { text: "Full SEO optimization", included: true },
      { text: "Contact form + email notifications", included: true },
      { text: "WhatsApp / social links", included: true },
      { text: "4 rounds of revisions", included: true },
      { text: "21-day delivery", included: true },
      { text: "3 months post-launch support", included: true },
      { text: "CMS / Blog integration", included: true },
      { text: "Custom backend / API", included: false },
      { text: "Mobile app", included: false },
      { text: "Authentication system", included: false },
      { text: "Database setup", included: false },
    ],
  },
  {
    name: "Premium",
    tagline: "Full-stack. No compromises.",
    price: { usd: 2800 },
    badge: "Best Value",
    color: "from-amber-500/20 to-orange-600/10",
    borderHover: "hover:border-amber-400/50",
    accentColor: "text-amber-400",
    buttonClass:
      "border border-amber-500/50 hover:border-amber-400 text-amber-400 hover:text-amber-300 hover:bg-amber-500/10",
    features: [
      { text: "Unlimited pages", included: true },
      { text: "Responsive design (mobile + desktop)", included: true },
      { text: "Advanced animations & micro-interactions", included: true },
      { text: "Full SEO optimization + analytics", included: true },
      { text: "Contact form + email notifications", included: true },
      { text: "WhatsApp / social links", included: true },
      { text: "Unlimited revisions", included: true },
      { text: "Custom delivery timeline", included: true },
      { text: "6 months post-launch support", included: true },
      { text: "CMS / Blog integration", included: true },
      { text: "Custom backend / API", included: true },
      { text: "Mobile app (iOS + Android)", included: true },
      { text: "Authentication system", included: true },
      { text: "Database setup & optimization", included: true },
    ],
  },
];

const memberBenefits = [
  {
    icon: "⚡",
    title: "Fast Delivery",
    desc: "Every project ships on schedule. No ghosting, no endless delays — just consistent, on-time delivery.",
  },
  {
    icon: "💬",
    title: "Direct Communication",
    desc: "You work directly with me — not a team of middlemen. WhatsApp, email, or Calendly anytime.",
  },
  {
    icon: "📦",
    title: "Full Source Code Ownership",
    desc: "When the project is done, the code is yours. No lock-in, no recurring platform fees.",
  },
  {
    icon: "🔒",
    title: "NDA & Confidentiality",
    desc: "Your ideas stay private. Happy to sign an NDA before we start — no questions asked.",
  },
  {
    icon: "🎯",
    title: "Goal-Focused Builds",
    desc: "Every design and engineering decision is tied back to your actual business goal, not just aesthetics.",
  },
  {
    icon: "🔄",
    title: "Post-Launch Support",
    desc: "You won't be left on your own after go-live. Every plan includes dedicated post-launch support.",
  },
  {
    icon: "📈",
    title: "Performance Optimized",
    desc: "All builds target 90+ Lighthouse scores. Fast sites rank better and convert better.",
  },
  {
    icon: "🤝",
    title: "Satisfaction Guarantee",
    desc: "If you're not happy with the final result, I will work with you until you are — no exceptions.",
  },
];

const comparisonRows = [
  { feature: "Responsive design", starter: true, growth: true, premium: true },
  { feature: "Modern UI & animations", starter: true, growth: true, premium: true },
  { feature: "SEO setup", starter: "Basic", growth: "Full", premium: "Full + Analytics" },
  { feature: "Contact form", starter: true, growth: true, premium: true },
  { feature: "Number of pages", starter: "Up to 5", growth: "Up to 15", premium: "Unlimited" },
  { feature: "Revision rounds", starter: "2", growth: "4", premium: "Unlimited" },
  { feature: "Delivery time", starter: "14 days", growth: "21 days", premium: "Custom" },
  { feature: "Post-launch support", starter: "1 month", growth: "3 months", premium: "6 months" },
  { feature: "CMS / Blog", starter: false, growth: true, premium: true },
  { feature: "Custom backend / API", starter: false, growth: false, premium: true },
  { feature: "Authentication system", starter: false, growth: false, premium: true },
  { feature: "Database setup", starter: false, growth: false, premium: true },
  { feature: "Mobile app (iOS + Android)", starter: false, growth: false, premium: true },
  { feature: "50% upfront payment", starter: false, growth: true, premium: true },
  { feature: "Source code ownership", starter: true, growth: true, premium: true },
  { feature: "NDA available", starter: true, growth: true, premium: true },
];

const faqs = [
  {
    q: "Do you offer payment in installments?",
    a: "Yes! For Growth and Premium plans, we split payments: 50% upfront to start, 50% on delivery. For Starter, full payment is required upfront.",
  },
  {
    q: "What if I need something between plans?",
    a: "No problem — reach out and we'll build a custom quote tailored to exactly what you need. Nothing is one-size-fits-all.",
  },
  {
    q: "What technologies do you use?",
    a: "We build with Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Node.js, and more. Mobile apps use React Native / Expo.",
  },
  {
    q: "How do revisions work?",
    a: "After each delivery milestone you can request changes. A 'revision round' covers any changes submitted together in one batch.",
  },
  {
    q: "Do you offer ongoing maintenance?",
    a: "Yes — after the support period ends, we offer monthly retainer packages. Book a call to discuss.",
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-orange-500/10 blur-[120px]" />
        </div>

        <motion.p
          {...fadeUp(0)}
          className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3"
        >
          Transparent Pricing
        </motion.p>
        <motion.h1
          {...fadeUp(0.1)}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight"
        >
          Simple Plans,{" "}
          <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
            Real Results
          </span>
        </motion.h1>
        <motion.p
          {...fadeUp(0.2)}
          className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed"
        >
          No hidden fees. No surprises. Pick the plan that fits your project
          and let&apos;s start building.
        </motion.p>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              {...fadeUp(0.1 + i * 0.12)}
              className={`relative group rounded-3xl border bg-gradient-to-b ${plan.color} ${
                plan.badge === "Most Popular"
                  ? `border-orange-500/50 ${plan.borderHover}`
                  : `border-white/8 ${plan.borderHover}`
              } transition-all duration-300 overflow-hidden`}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute top-0 left-0 right-0 flex justify-center">
                  <span
                    className={`px-4 py-1 text-xs font-semibold rounded-b-xl ${
                      plan.badge === "Most Popular"
                        ? "bg-orange-500 text-white"
                        : "bg-amber-500/20 border border-amber-500/30 text-amber-400"
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="p-8 pt-10">
                {/* Plan name */}
                <p className={`text-xs font-semibold tracking-widest uppercase mb-1 ${plan.accentColor}`}>
                  {plan.name} Plan
                </p>
                <p className="text-gray-400 text-sm mb-6">{plan.tagline}</p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-end gap-1">
                    <span className="text-gray-400 text-lg font-medium">$</span>
                    <span className="text-5xl font-bold text-white leading-none">
                      {plan.price.usd.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs mt-1">USD · one-time project</p>
                </div>

                {/* CTA */}
                <a
                  href="https://calendly.com/kaowserpro/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-full py-3 rounded-full text-sm font-semibold transition-all duration-200 mb-8 ${plan.buttonClass}`}
                >
                  Get Started →
                </a>

                {/* Divider */}
                <div className="h-px bg-white/8 mb-6" />

                {/* Features */}
                <ul className="flex flex-col gap-3">
                  {plan.features.map((feat, fi) => (
                    <li key={fi} className="flex items-start gap-3">
                      {feat.included ? (
                        <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-[10px] text-orange-400 font-bold">
                          ✓
                        </span>
                      ) : (
                        <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] text-gray-600 font-bold">
                          ✕
                        </span>
                      )}
                      <span
                        className={`text-sm leading-snug ${
                          feat.included ? "text-gray-300" : "text-gray-600 line-through"
                        }`}
                      >
                        {feat.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom glow on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3">
              Every Client Gets
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Membership{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Benefits
              </span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto text-sm leading-relaxed">
              Regardless of which plan you choose, these are the standards
              I hold every single project to.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {memberBenefits.map((b, i) => (
              <motion.div
                key={b.title}
                {...fadeUp(0.05 + i * 0.07)}
                className="group p-6 rounded-2xl border border-white/8 bg-white/[0.02] hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="text-white font-semibold text-sm mb-2">
                  {b.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3">
              Side by Side
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Plan Comparison
            </h2>
          </motion.div>

          <motion.div
            {...fadeUp(0.1)}
            className="rounded-2xl border border-white/8 overflow-hidden"
          >
            {/* Table header */}
            <div className="grid grid-cols-4 bg-white/[0.03] border-b border-white/8">
              <div className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Feature
              </div>
              {["Starter", "Growth", "Premium"].map((name, i) => (
                <div
                  key={name}
                  className={`p-4 text-center text-xs font-bold uppercase tracking-wider ${
                    name === "Growth" ? "text-orange-400 bg-orange-500/5" : "text-gray-400"
                  }`}
                >
                  {name}
                  {name === "Growth" && (
                    <span className="ml-1.5 px-1.5 py-0.5 rounded-full bg-orange-500 text-white text-[9px] font-semibold">
                      ★
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Rows */}
            {comparisonRows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-4 border-b border-white/5 last:border-0 hover:bg-white/[0.015] transition-colors ${
                  i % 2 === 0 ? "" : "bg-white/[0.01]"
                }`}
              >
                <div className="p-4 text-sm text-gray-400">{row.feature}</div>
                {(["starter", "growth", "premium"] as const).map((plan) => {
                  const val = row[plan];
                  return (
                    <div
                      key={plan}
                      className={`p-4 flex items-center justify-center text-xs font-medium ${
                        plan === "growth" ? "bg-orange-500/[0.03]" : ""
                      }`}
                    >
                      {val === true ? (
                        <span className="w-5 h-5 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-[10px] text-orange-400 font-bold">
                          ✓
                        </span>
                      ) : val === false ? (
                        <span className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] text-gray-600">
                          —
                        </span>
                      ) : (
                        <span className="text-gray-300 text-center leading-tight">
                          {val}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Custom quote banner */}
      <section className="pb-24 px-6">
        <motion.div
          {...fadeUp(0.2)}
          className="max-w-3xl mx-auto text-center bg-gradient-to-b from-orange-500/10 to-transparent border border-orange-500/20 rounded-3xl p-12"
        >
          <div className="text-4xl mb-4">💬</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Need a Custom Quote?
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8 max-w-md mx-auto">
            Have something unique in mind? Enterprise project, specific tech stack,
            or tight deadline? Let&apos;s talk and build a plan just for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendly.com/kaowserpro/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-orange-500 hover:bg-orange-400 text-white font-semibold text-sm transition-all duration-200 hover:shadow-[0_0_28px_rgba(249,115,22,0.45)]"
            >
              📅 Book a Free Call
            </a>
            <a
              href="mailto:kaowserpro@gmail.com"
              className="px-8 py-3.5 rounded-full border border-white/15 hover:border-orange-500/40 text-gray-300 hover:text-white font-semibold text-sm transition-all duration-200"
            >
              kaowserpro@gmail.com
            </a>
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3">
              FAQ
            </p>
            <h2 className="text-3xl font-bold text-white">
              Common Questions
            </h2>
          </motion.div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.05 + i * 0.07)}
                className="border border-white/8 rounded-2xl overflow-hidden bg-white/[0.02]"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-sm font-medium text-white pr-4">
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 text-orange-400 transition-transform duration-200 ${
                      openFaq === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
