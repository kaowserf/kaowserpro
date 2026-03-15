"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectInquiry from "@/components/ProjectInquiry";
import { motion } from "framer-motion";
import { useState } from "react";
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

const CALENDLY_URL = "https://calendly.com/kaowserpro/30min";
const FIVERR_URL = "https://www.fiverr.com/kaowserpro";

const features = [
  {
    icon: "🎨",
    title: "100% Custom Design",
    desc: "No WordPress, no templates, no page builders. Every pixel is hand-crafted to match your med spa's luxury brand.",
  },
  {
    icon: "📱",
    title: "Mobile-First Design",
    desc: "Looks stunning on every device. Most clients browse on mobile — your site will be optimized for that first.",
  },
  {
    icon: "📅",
    title: "Online Booking Integration",
    desc: "Seamless integration with Vagaro, Mindbody, Acuity, or any booking platform you use.",
  },
  {
    icon: "📸",
    title: "Before & After Gallery",
    desc: "Showcase your results with a beautiful, interactive before & after photo gallery that builds trust.",
  },
  {
    icon: "💉",
    title: "Services & Treatments Pages",
    desc: "Dedicated pages for each treatment — Botox, fillers, laser, IV therapy — with pricing and details.",
  },
  {
    icon: "⚡",
    title: "Lightning Fast Speed",
    desc: "Custom code loads 3x faster than WordPress. No bloated plugins — just clean, optimized code.",
  },
  {
    icon: "🔍",
    title: "SEO-Ready Structure",
    desc: "Built with semantic HTML and proper meta tags so your med spa ranks higher on Google.",
  },
  {
    icon: "📝",
    title: "Contact & Inquiry Forms",
    desc: "Custom contact forms and consultation request forms that capture leads directly to your inbox.",
  },
  {
    icon: "🔒",
    title: "Security & No Maintenance",
    desc: "No plugins to hack or break. No monthly fees. Custom code is inherently more secure and stable.",
  },
  {
    icon: "🏥",
    title: "HIPAA-Friendly Design",
    desc: "Design considerations for medical compliance — no patient data stored on the website.",
  },
  {
    icon: "⭐",
    title: "Reviews & Testimonials",
    desc: "Showcase client reviews and ratings to build social proof and trust with potential clients.",
  },
  {
    icon: "📦",
    title: "Full Source Code Delivered",
    desc: "You own everything. Complete source code handed over — host it anywhere, no vendor lock-in.",
  },
];

const perfectFor = [
  { emoji: "💉", label: "Medical Spas" },
  { emoji: "✨", label: "Aesthetic Clinics" },
  { emoji: "💆", label: "Botox & Filler Studios" },
  { emoji: "🔬", label: "Laser Clinics" },
  { emoji: "💧", label: "IV Therapy Centers" },
  { emoji: "🧖", label: "Dermatology Practices" },
  { emoji: "🌿", label: "Wellness Centers" },
];

const whyCustomCode = [
  {
    metric: "3x",
    label: "Faster Load Speed",
    desc: "Custom code eliminates WordPress bloat. Your site loads in under 2 seconds.",
  },
  {
    metric: "0",
    label: "Plugins to Break",
    desc: "No plugin updates, no compatibility issues, no security vulnerabilities.",
  },
  {
    metric: "100%",
    label: "Unique Design",
    desc: "Not a recycled template — a one-of-a-kind design that sets you apart from competitors.",
  },
  {
    metric: "$0",
    label: "Monthly Fees",
    desc: "No WordPress hosting fees, no premium plugin subscriptions. Built to last.",
  },
];

const plans = [
  {
    name: "Basic",
    tagline: "Starter",
    price: 150,
    delivery: "2-day",
    revisions: "2",
    badge: null,
    color: "from-gray-500/20 to-gray-600/10",
    borderHover: "hover:border-gray-400/40",
    accentColor: "text-gray-300",
    buttonClass:
      "border border-white/20 hover:border-white/40 text-white hover:bg-white/5",
    features: [
      { text: "1-page custom coded website", included: true },
      { text: "Contact form", included: true },
      { text: "Mobile responsive", included: true },
      { text: "Source code included", included: true },
      { text: "2 revisions", included: true },
      { text: "Booking integration", included: false },
      { text: "Before & after gallery", included: false },
      { text: "Services pages", included: false },
      { text: "SEO optimization", included: false },
      { text: "Blog setup", included: false },
      { text: "Analytics integration", included: false },
      { text: "30-day support", included: false },
    ],
  },
  {
    name: "Standard",
    tagline: "Professional",
    price: 350,
    delivery: "7-day",
    revisions: "3",
    badge: "Most Popular",
    color: "from-orange-500/20 to-amber-500/10",
    borderHover: "border-orange-500/50 hover:border-orange-400/70",
    accentColor: "text-orange-400",
    buttonClass:
      "bg-orange-500 hover:bg-orange-400 text-white hover:shadow-[0_0_28px_rgba(249,115,22,0.45)]",
    features: [
      { text: "5-page custom coded website", included: true },
      { text: "Contact & inquiry forms", included: true },
      { text: "Mobile responsive", included: true },
      { text: "Source code included", included: true },
      { text: "3 revisions", included: true },
      { text: "Booking integration", included: true },
      { text: "Before & after gallery", included: true },
      { text: "Services pages", included: true },
      { text: "SEO optimization", included: true },
      { text: "Blog setup", included: false },
      { text: "Analytics integration", included: false },
      { text: "30-day support", included: false },
    ],
  },
  {
    name: "Premium",
    tagline: "Elite",
    price: 650,
    delivery: "14-day",
    revisions: "5",
    badge: "Best Value",
    color: "from-amber-500/20 to-orange-600/10",
    borderHover: "hover:border-amber-400/50",
    accentColor: "text-amber-400",
    buttonClass:
      "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white hover:shadow-[0_0_28px_rgba(245,158,11,0.45)]",
    features: [
      { text: "10-page custom coded website", included: true },
      { text: "Contact & inquiry forms", included: true },
      { text: "Mobile responsive", included: true },
      { text: "Source code included", included: true },
      { text: "5 revisions", included: true },
      { text: "Booking integration", included: true },
      { text: "Before & after gallery", included: true },
      { text: "Services pages", included: true },
      { text: "SEO optimization", included: true },
      { text: "Blog setup", included: true },
      { text: "Analytics integration", included: true },
      { text: "30-day support", included: true },
      { text: "Content upload", included: true },
      { text: "Speed optimization", included: true },
    ],
  },
];

const faqs = [
  {
    q: "Why custom code instead of WordPress?",
    a: "Custom coded sites are 3x faster, more secure (no plugins to hack), and completely unique. WordPress sites use recycled templates and require constant maintenance. Custom code is built to last without monthly fees.",
  },
  {
    q: "What platforms do you integrate for booking?",
    a: "I integrate with Vagaro, Mindbody, Acuity Scheduling, Calendly, and any other booking platform you use. The booking button is seamlessly embedded into your website design.",
  },
  {
    q: "Will my site be mobile-friendly?",
    a: "Absolutely. Every site is designed mobile-first and tested across all devices — phones, tablets, and desktops. Most of your clients will browse on mobile, so this is always a top priority.",
  },
  {
    q: "Do I own the source code?",
    a: "Yes, 100%. You get the complete source code delivered. Host it anywhere you want — no vendor lock-in, no recurring platform fees.",
  },
  {
    q: "Can you add a before & after photo gallery?",
    a: "Yes! I build interactive before & after galleries that showcase your results beautifully. This is one of the most effective features for converting visitors into clients.",
  },
  {
    q: "How long does it take?",
    a: "Basic (1 page) delivers in 2 days, Standard (5 pages) in 7 days, and Premium (10 pages) in 14 days. I also offer expedited delivery if you have an urgent deadline — just message me.",
  },
];

export default function MedicalSpaWebsitePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-orange-500/10 blur-[120px]" />
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div>
            <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-5">
              <a
                href="/services"
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
              >
                Services
              </a>
              <span className="text-gray-600">/</span>
              <span className="text-orange-400 text-sm font-medium">
                Medical Spa Website
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight"
            >
              Custom{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Medical Spa
              </span>{" "}
              Website Design
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="text-gray-400 text-lg leading-relaxed mb-8"
            >
              I design 100% custom coded medical spa websites — no WordPress, no
              templates, no page builders. Hand-built for maximum speed, security,
              and a luxury look that matches your brand.
            </motion.p>

            <motion.div
              {...fadeUp(0.3)}
              className="flex flex-col sm:flex-row items-start gap-4 flex-wrap"
            >
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-orange-500 hover:bg-orange-400 text-white font-semibold text-sm transition-all duration-200 hover:shadow-[0_0_28px_rgba(249,115,22,0.45)]"
              >
                Book a Free Call
              </a>
              <a
                href={FIVERR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full border border-green-500/50 hover:border-green-400 text-green-400 hover:text-green-300 font-semibold text-sm transition-all duration-200"
              >
                Order on Fiverr
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              {...fadeUp(0.4)}
              className="flex items-center gap-6 mt-8 pt-8 border-t border-white/8"
            >
              <div>
                <div className="text-2xl font-bold text-white">$150</div>
                <div className="text-xs text-gray-500">Starting from</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="text-2xl font-bold text-white">2</div>
                <div className="text-xs text-gray-500">Day delivery</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-gray-500">Custom code</div>
              </div>
            </motion.div>
          </div>

          {/* Right — Cover Image */}
          <motion.div {...fadeUp(0.2)} className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-orange-500/15 to-amber-500/10 blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-orange-900/10">
              <Image
                src="/Medical Spa website design  Kaowserpro.png"
                alt="Medical Spa Website Design Service"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3">
              Everything Included
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What You{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Get
              </span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto text-sm leading-relaxed">
              Every feature your med spa needs to attract and convert clients online.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                {...fadeUp(0.05 + i * 0.04)}
                className="group p-6 rounded-2xl border border-white/8 bg-white/[0.02] hover:border-orange-500/20 hover:bg-orange-500/[0.03] transition-all duration-300"
              >
                <div className="text-2xl mb-3">{feature.icon}</div>
                <h3 className="text-white font-semibold mb-1.5 text-sm group-hover:text-orange-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Custom Code */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3">
              The Advantage
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Custom Code{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Beats WordPress
              </span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyCustomCode.map((item, i) => (
              <motion.div
                key={item.label}
                {...fadeUp(0.1 + i * 0.1)}
                className="text-center p-6 rounded-2xl border border-white/8 bg-white/[0.02] hover:border-orange-500/20 hover:bg-orange-500/[0.03] transition-all duration-300"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-2">
                  {item.metric}
                </div>
                <div className="text-white font-semibold text-sm mb-2">
                  {item.label}
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3">
              Ideal Clients
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Perfect{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                For
              </span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {perfectFor.map((item, i) => (
              <motion.div
                key={item.label}
                {...fadeUp(0.05 + i * 0.06)}
                className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-white/8 bg-white/[0.02] hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-200"
              >
                <span className="text-lg">{item.emoji}</span>
                <span className="text-sm text-gray-300 font-medium">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3">
              Transparent Pricing
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Package
              </span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto text-sm leading-relaxed">
              Fixed pricing, no surprises. Every package includes full source code ownership.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                {...fadeUp(0.1 + i * 0.1)}
                className={`relative group rounded-3xl border bg-gradient-to-b ${plan.color} ${plan.borderHover} transition-all duration-300 overflow-hidden flex flex-col`}
              >
                {plan.badge && (
                  <div className="absolute top-0 left-0 right-0 flex justify-center">
                    <span className="px-4 py-1 text-[10px] font-bold rounded-b-xl bg-orange-500 text-white uppercase tracking-wider">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-6 mt-2">
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-medium mb-1">
                      {plan.tagline}
                    </p>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-1.5 mb-1">
                      <span className="text-4xl font-bold text-white">
                        ${plan.price}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span>{plan.delivery} delivery</span>
                      <span className="w-1 h-1 rounded-full bg-gray-600" />
                      <span>{plan.revisions} revisions</span>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-2.5 flex-1 mb-6">
                    {plan.features.map((f) => (
                      <li key={f.text} className="flex items-start gap-2.5">
                        {f.included ? (
                          <span className="mt-0.5 w-4 h-4 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center flex-shrink-0">
                            <span className="text-[10px] text-orange-400">
                              ✓
                            </span>
                          </span>
                        ) : (
                          <span className="mt-0.5 w-4 h-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-[10px] text-gray-600">
                              —
                            </span>
                          </span>
                        )}
                        <span
                          className={`text-sm ${
                            f.included ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={FIVERR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-xl text-center text-sm font-semibold transition-all duration-200 block ${plan.buttonClass}`}
                  >
                    Order — ${plan.price}
                  </a>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3">
              Common Questions
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              FAQ
            </h2>
          </motion.div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.05 + i * 0.05)}
                className="rounded-2xl border border-white/8 bg-white/[0.02] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-white text-sm font-medium pr-4">
                    {faq.q}
                  </span>
                  <span
                    className={`text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                      openFaq === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <motion.div
          {...fadeUp(0.2)}
          className="max-w-3xl mx-auto text-center bg-gradient-to-b from-orange-500/10 to-transparent border border-orange-500/20 rounded-3xl p-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to Elevate Your Med Spa Online?
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8 max-w-md mx-auto">
            I offer a free review of your current site. Let&apos;s discuss how a
            custom website can grow your bookings.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-orange-500 hover:bg-orange-400 text-white font-semibold text-sm transition-all duration-200 hover:shadow-[0_0_28px_rgba(249,115,22,0.45)]"
            >
              Get a Free Site Review
            </a>
            <a
              href={FIVERR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full border border-green-500/50 hover:border-green-400 text-green-400 hover:text-green-300 font-semibold text-sm transition-all duration-200"
            >
              Order on Fiverr
            </a>
          </div>
        </motion.div>
      </section>

      <ProjectInquiry />

      <Footer />
    </div>
  );
}
