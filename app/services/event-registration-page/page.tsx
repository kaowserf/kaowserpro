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
const FIVERR_URL =
  "https://www.fiverr.com/kaowserpro";

const features = [
  {
    icon: "🎨",
    title: "Custom Design (Not a Template)",
    desc: "Every page is designed from scratch to match your event branding — no cookie-cutter templates.",
  },
  {
    icon: "📱",
    title: "Fully Responsive",
    desc: "Looks perfect on mobile, tablet & desktop. Most registrations happen on mobile — this is always a priority.",
  },
  {
    icon: "📝",
    title: "Registration Form Integration",
    desc: "Mailchimp, Eventbrite, Google Forms, Typeform, ConvertKit, ActiveCampaign, or custom forms.",
  },
  {
    icon: "⏰",
    title: "Countdown Timer",
    desc: "Create urgency with a live countdown to your event date that drives faster signups.",
  },
  {
    icon: "📅",
    title: "Event Schedule / Agenda",
    desc: "Clear, organized agenda section so attendees know exactly what to expect.",
  },
  {
    icon: "🎤",
    title: "Speaker / Host Profiles",
    desc: "Dedicated section showcasing your speakers or hosts with photos, bios, and topics.",
  },
  {
    icon: "⭐",
    title: "Testimonials / Social Proof",
    desc: "Build trust with testimonials from past attendees or endorsements from industry figures.",
  },
  {
    icon: "🎯",
    title: "Clear CTA Buttons",
    desc: "Strategically placed call-to-action buttons designed to maximize registration conversions.",
  },
  {
    icon: "⚡",
    title: "Fast Loading Speed",
    desc: "Optimized, clean code ensures your page loads in under 2 seconds — no lost visitors.",
  },
  {
    icon: "🔍",
    title: "SEO-Friendly Structure",
    desc: "Built with semantic HTML and proper meta tags so your event gets found on Google.",
  },
  {
    icon: "✉️",
    title: "Email Autoresponder",
    desc: "Automatic confirmation emails sent to registrants — professional and hands-free. (Premium)",
  },
  {
    icon: "✅",
    title: "Thank You / Confirmation Page",
    desc: "Custom post-registration page that confirms the signup and sets expectations. (Premium)",
  },
];

const perfectFor = [
  { emoji: "💻", label: "Webinars & Online Workshops" },
  { emoji: "🏢", label: "Conferences & Summits" },
  { emoji: "🚀", label: "Corporate Events & Product Launches" },
  { emoji: "🎵", label: "Music Concerts & Festivals" },
  { emoji: "❤️", label: "Charity & Fundraising Events" },
  { emoji: "🤝", label: "Networking Events & Meetups" },
  { emoji: "📚", label: "Training & Certification Programs" },
];

const plans = [
  {
    name: "Basic",
    tagline: "Starter Event Page",
    price: 80,
    delivery: "3-day",
    revisions: "2",
    badge: null,
    color: "from-gray-500/20 to-gray-600/10",
    borderHover: "hover:border-gray-400/40",
    accentColor: "text-gray-300",
    buttonClass:
      "border border-white/20 hover:border-white/40 text-white hover:bg-white/5",
    features: [
      { text: "1-page responsive design", included: true },
      { text: "Registration form integration", included: true },
      { text: "Mobile, tablet & desktop optimized", included: true },
      { text: "Clean HTML/CSS or WordPress", included: true },
      { text: "SEO-friendly structure", included: true },
      { text: "2 revisions", included: true },
      { text: "Countdown timer", included: false },
      { text: "Speaker & agenda section", included: false },
      { text: "Testimonials section", included: false },
      { text: "Thank you / confirmation page", included: false },
      { text: "Email autoresponder", included: false },
    ],
  },
  {
    name: "Standard",
    tagline: "Professional Event Page",
    price: 200,
    delivery: "4-day",
    revisions: "3",
    badge: "Most Popular",
    color: "from-orange-500/20 to-amber-500/10",
    borderHover: "border-orange-500/50 hover:border-orange-400/70",
    accentColor: "text-orange-400",
    buttonClass:
      "bg-orange-500 hover:bg-orange-400 text-white hover:shadow-[0_0_28px_rgba(249,115,22,0.45)]",
    features: [
      { text: "1-page responsive design", included: true },
      { text: "Registration form integration", included: true },
      { text: "Mobile, tablet & desktop optimized", included: true },
      { text: "Clean HTML/CSS or WordPress", included: true },
      { text: "SEO-friendly structure", included: true },
      { text: "3 revisions", included: true },
      { text: "Countdown timer", included: true },
      { text: "Speaker & agenda section", included: true },
      { text: "Testimonials section", included: true },
      { text: "Thank you / confirmation page", included: false },
      { text: "Email autoresponder", included: false },
    ],
  },
  {
    name: "Premium",
    tagline: "Complete Event Package",
    price: 450,
    delivery: "5-day",
    revisions: "4",
    badge: "Best Value",
    color: "from-amber-500/20 to-orange-600/10",
    borderHover: "hover:border-amber-400/50",
    accentColor: "text-amber-400",
    buttonClass:
      "border border-amber-500/50 hover:border-amber-400 text-amber-400 hover:text-amber-300 hover:bg-amber-500/10",
    features: [
      { text: "1-page responsive design", included: true },
      { text: "Registration form integration", included: true },
      { text: "Mobile, tablet & desktop optimized", included: true },
      { text: "Clean HTML/CSS or WordPress", included: true },
      { text: "SEO-friendly structure", included: true },
      { text: "4 revisions", included: true },
      { text: "Countdown timer", included: true },
      { text: "Speaker & agenda section", included: true },
      { text: "Testimonials section", included: true },
      { text: "Thank you / confirmation page", included: true },
      { text: "Email autoresponder", included: true },
    ],
  },
];

const faqs = [
  {
    q: "What platforms can you build the page on?",
    a: "I can build your event registration page using clean HTML/CSS (hosted anywhere), WordPress with Elementor, custom code, or Webflow. Just let me know your preference when ordering.",
  },
  {
    q: "Which registration form tools do you support?",
    a: "I can integrate Mailchimp, Eventbrite, Google Forms, Typeform, ConvertKit, ActiveCampaign, and custom HTML forms. If you use a different tool, message me first and I'll confirm compatibility.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Your event name, date, time & location, a brief description, speaker details (if any), your logo and brand colors, and any reference designs you like. Send these after placing the order and I'll start right away.",
  },
  {
    q: "Will the page look good on mobile phones?",
    a: "Absolutely. Every page is fully responsive and tested across all screen sizes. Most event registrations happen on mobile, so this is always a top priority.",
  },
  {
    q: "Can I request changes after delivery?",
    a: "Yes. Basic includes 2 revisions, Standard includes 3 revisions, and Premium includes 4 revisions. I want you to love the final result.",
  },
  {
    q: "How fast can you deliver?",
    a: "Standard delivery is 3 to 5 days depending on the package. If you have an urgent deadline, I offer a 1-day fast delivery add-on for $20. Message me before ordering for urgent requests.",
  },
];

export default function EventRegistrationPageService() {
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
                Event Registration Page
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight"
            >
              Professional{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Event Registration
              </span>{" "}
              Landing Page
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="text-gray-400 text-lg leading-relaxed mb-8"
            >
              I design stunning, mobile-friendly event registration landing pages
              that turn visitors into confirmed attendees — fast. Custom design,
              not a template.
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
              <a
                href="/demo/event-registration"
                className="px-8 py-3.5 rounded-full border border-purple-500/50 hover:border-purple-400 text-purple-400 hover:text-purple-300 font-semibold text-sm transition-all duration-200 flex items-center gap-2"
              >
                <span>👁</span> View Live Demo
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              {...fadeUp(0.4)}
              className="flex items-center gap-6 mt-8 pt-8 border-t border-white/8"
            >
              <div>
                <div className="text-2xl font-bold text-white">$80</div>
                <div className="text-xs text-gray-500">Starting from</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="text-2xl font-bold text-white">3</div>
                <div className="text-xs text-gray-500">Day delivery</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-gray-500">Custom design</div>
              </div>
            </motion.div>
          </div>

          {/* Right — Cover Image */}
          <motion.div {...fadeUp(0.2)} className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-orange-500/15 to-purple-500/10 blur-2xl" />
            <a
              href="/demo/event-registration"
              className="relative block group"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-orange-900/10">
                <Image
                  src="/event registratuon cover.png"
                  alt="Event Registration Landing Page Service"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  priority
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-6 py-3 rounded-full bg-white text-black text-sm font-semibold">
                    View Live Demo →
                  </span>
                </div>
              </div>
            </a>
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
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                {...fadeUp(0.05 + i * 0.04)}
                className="group p-6 rounded-2xl border border-white/8 bg-white/[0.02] hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300"
              >
                <div className="text-2xl mb-3">{feat.icon}</div>
                <h3 className="text-white font-semibold text-sm mb-1.5 group-hover:text-orange-400 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3">
              Ideal For
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Perfect For{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Any Event
              </span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {perfectFor.map((item, i) => (
              <motion.div
                key={item.label}
                {...fadeUp(0.05 + i * 0.06)}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-white/8 bg-white/[0.02] hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300"
              >
                <span className="text-xl">{item.emoji}</span>
                <span className="text-sm font-medium text-gray-300">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
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
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
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
                  <p className={`text-xs font-semibold tracking-widest uppercase mb-1 ${plan.accentColor}`}>
                    {plan.name}
                  </p>
                  <p className="text-gray-400 text-sm mb-6">{plan.tagline}</p>

                  <div className="mb-4">
                    <div className="flex items-end gap-1">
                      <span className="text-gray-400 text-lg font-medium">$</span>
                      <span className="text-5xl font-bold text-white leading-none">
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs mt-1">
                      USD &middot; {plan.delivery} delivery
                    </p>
                  </div>

                  <div className="flex items-center gap-3 mb-6 text-xs text-gray-500">
                    <span>{plan.revisions} revisions</span>
                    <span className="w-1 h-1 rounded-full bg-gray-600" />
                    <span>{plan.delivery} delivery</span>
                  </div>

                  <a
                    href={FIVERR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-full py-3 rounded-full text-sm font-semibold transition-all duration-200 mb-8 ${plan.buttonClass}`}
                  >
                    Get Started →
                  </a>

                  <div className="h-px bg-white/8 mb-6" />

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

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo CTA */}
      <section className="py-24 px-6">
        <motion.div
          {...fadeUp(0.1)}
          className="max-w-4xl mx-auto relative rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-600/10 to-blue-600/5 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] -z-10" />
          <div className="p-12 flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">👁</span>
                <h3 className="text-xl font-bold text-white">
                  See It In Action
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-lg">
                Check out the live demo of a fully functional event registration
                page — complete with countdown timer, speaker profiles, agenda,
                testimonials, and a working registration form.
              </p>
            </div>
            <a
              href="/demo/event-registration"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 text-white font-semibold text-sm transition-all duration-200 hover:shadow-[0_0_28px_rgba(168,85,247,0.4)] whitespace-nowrap"
            >
              View Live Demo →
            </a>
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-white/[0.01]">
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

      {/* Final CTA */}
      <section className="py-24 px-6">
        <motion.div
          {...fadeUp(0.2)}
          className="max-w-3xl mx-auto text-center bg-gradient-to-b from-orange-500/10 to-transparent border border-orange-500/20 rounded-3xl p-12"
        >
          <div className="text-4xl mb-4">🎟️</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to Get More Registrations?
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8 max-w-md mx-auto">
            Let me design a landing page that fills your event. Custom,
            responsive, and built to convert.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={FIVERR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-orange-500 hover:bg-orange-400 text-white font-semibold text-sm transition-all duration-200 hover:shadow-[0_0_28px_rgba(249,115,22,0.45)]"
            >
              Order on Fiverr
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full border border-white/15 hover:border-orange-500/40 text-gray-300 hover:text-white font-semibold text-sm transition-all duration-200"
            >
              Book a Free Call
            </a>
          </div>
        </motion.div>
      </section>

      <ProjectInquiry />

      <Footer />
    </div>
  );
}
