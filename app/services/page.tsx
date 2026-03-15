"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectInquiry from "@/components/ProjectInquiry";
import { motion } from "framer-motion";

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

const services = [
  {
    icon: "🌐",
    title: "Web Development",
    tagline: "Modern, fast, and responsive websites",
    description:
      "I build high-performance websites and web apps using Next.js, React, and TypeScript. From landing pages to full-featured platforms — every site is responsive, SEO-optimized, and built with clean code.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "Lightning-fast page loads",
      "Mobile-first responsive design",
      "SEO & Core Web Vitals optimized",
      "Smooth animations & micro-interactions",
    ],
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    tagline: "Cross-platform apps for iOS & Android",
    description:
      "I build native-quality mobile applications using React Native and Expo. One codebase, two platforms — delivering polished experiences on both iOS and Android without compromise.",
    stack: ["React Native", "Expo", "TypeScript", "iOS", "Android"],
    highlights: [
      "Single codebase for iOS & Android",
      "Native performance & feel",
      "Push notifications & deep linking",
      "App Store & Play Store deployment",
    ],
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    tagline: "Interfaces that look great and convert",
    description:
      "Design isn't just how it looks — it's how it works. I create clean, modern interfaces in Figma with a focus on user experience, accessibility, and conversion. Every pixel serves a purpose.",
    stack: ["Figma", "Prototyping", "Design Systems", "Responsive Design"],
    highlights: [
      "Clean, minimal aesthetic",
      "User-centered design approach",
      "Interactive prototypes",
      "Consistent design systems",
    ],
  },
  {
    icon: "⚙️",
    title: "Backend & API Development",
    tagline: "Solid foundations for your applications",
    description:
      "I architect and build robust backends with Node.js, Express, and PostgreSQL. Whether it's RESTful APIs, authentication systems, or database design — your app gets a reliable, scalable foundation.",
    stack: ["Node.js", "Express", "PostgreSQL", "Supabase"],
    highlights: [
      "RESTful API design",
      "Authentication & authorization",
      "Database design & optimization",
      "Third-party integrations",
    ],
  },
  {
    icon: "🚀",
    title: "Full-Stack Applications",
    tagline: "End-to-end digital products",
    description:
      "From idea to production — I handle the entire stack. Frontend, backend, database, deployment. You get a complete, production-ready product with full source code ownership.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Supabase", "Vercel"],
    highlights: [
      "Complete product development",
      "CI/CD & automated deployments",
      "Performance monitoring",
      "Full source code ownership",
    ],
  },
  {
    icon: "⚡",
    title: "Vibe Coding & Rapid Prototyping",
    tagline: "From concept to prototype in record time",
    description:
      "My signature workflow — AI-augmented, flow-state development that turns ideas into working prototypes fast. Perfect for MVPs, proof-of-concepts, and startup launches where speed matters.",
    stack: ["AI-Augmented Dev", "Rapid Prototyping", "MVP Development"],
    highlights: [
      "Idea to prototype in days, not weeks",
      "AI-powered development workflow",
      "Quick iteration cycles",
      "Ship fast without sacrificing quality",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We hop on a call to understand your goals, target audience, and project scope. No fluff — just clarity.",
  },
  {
    step: "02",
    title: "Planning & Design",
    description:
      "I map out the architecture, create wireframes, and design the UI. You review and approve before any code is written.",
  },
  {
    step: "03",
    title: "Development",
    description:
      "I build your project using modern tech, with regular updates so you always know where things stand.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "We go live together. After launch, I provide dedicated support to make sure everything runs smoothly.",
  },
];

export default function ServicesPage() {
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
          What I Do
        </motion.p>
        <motion.h1
          {...fadeUp(0.1)}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight"
        >
          Services That{" "}
          <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
            Deliver
          </span>
        </motion.h1>
        <motion.p
          {...fadeUp(0.2)}
          className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed"
        >
          From web and mobile apps to full-stack products — I build fast,
          modern digital experiences that help your business grow.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              {...fadeUp(0.05 + i * 0.08)}
              className="group relative rounded-3xl border border-white/8 bg-white/[0.02] hover:border-orange-500/30 hover:bg-orange-500/[0.04] transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                {/* Icon */}
                <div className="text-4xl mb-5">{service.icon}</div>

                {/* Title & tagline */}
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-orange-400/70 text-sm font-medium mb-4">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Highlights */}
                <ul className="flex flex-col gap-2.5 mb-6">
                  {service.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-2">
                  {service.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/8 text-xs text-gray-400 group-hover:border-orange-500/20 group-hover:text-gray-300 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom glow */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Gigs */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3">
              Featured
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Specific{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Gigs
              </span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto text-sm leading-relaxed">
              Ready-to-order services with fixed pricing and fast delivery.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.a
              href="/services/convert-web-to-app"
              {...fadeUp(0.1)}
              className="group relative rounded-3xl border border-white/8 bg-white/[0.02] hover:border-orange-500/30 hover:bg-orange-500/[0.04] transition-all duration-300 overflow-hidden block"
            >
              <div className="relative h-48 overflow-hidden rounded-t-3xl">
                <img
                  src="/convert website into Mobile App.png"
                  alt="Convert Website to App"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-semibold">
                  From $100
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
                  Convert Website to App
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  Turn any website into a superfast Android &amp; iOS app with
                  push notifications, ads integration &amp; more.
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>7-day delivery</span>
                  <span className="w-1 h-1 rounded-full bg-gray-600" />
                  <span>Unlimited revisions</span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-orange-400 text-sm font-medium group-hover:gap-3 transition-all">
                  View Details
                  <span>→</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            {/* Event Registration Page */}
            <motion.a
              href="/services/event-registration-page"
              {...fadeUp(0.18)}
              className="group relative rounded-3xl border border-white/8 bg-white/[0.02] hover:border-orange-500/30 hover:bg-orange-500/[0.04] transition-all duration-300 overflow-hidden block"
            >
              <div className="relative h-48 overflow-hidden rounded-t-3xl">
                <img
                  src="/event registratuon cover.png"
                  alt="Event Registration Landing Page"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-semibold">
                  From $80
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
                  Event Registration Landing Page
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  Stunning, mobile-friendly landing pages that turn visitors into
                  confirmed attendees — with forms, countdown &amp; more.
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>3-day delivery</span>
                  <span className="w-1 h-1 rounded-full bg-gray-600" />
                  <span>3 packages</span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-orange-400 text-sm font-medium group-hover:gap-3 transition-all">
                  View Details
                  <span>→</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            {/* Medical Spa Website */}
            <motion.a
              href="/services/medical-spa-website"
              {...fadeUp(0.26)}
              className="group relative rounded-3xl border border-white/8 bg-white/[0.02] hover:border-orange-500/30 hover:bg-orange-500/[0.04] transition-all duration-300 overflow-hidden block"
            >
              <div className="relative h-48 overflow-hidden rounded-t-3xl">
                <img
                  src="/Medical Spa website design  Kaowserpro.png"
                  alt="Medical Spa Website Design"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-semibold">
                  From $150
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
                  Medical Spa Website Design
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  100% custom coded med spa websites — no WordPress, no templates.
                  Booking integration, gallery &amp; luxury design.
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>2-day delivery</span>
                  <span className="w-1 h-1 rounded-full bg-gray-600" />
                  <span>3 packages</span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-orange-400 text-sm font-medium group-hover:gap-3 transition-all">
                  View Details
                  <span>→</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3">
              How I Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              My{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto text-sm leading-relaxed">
              A clear, transparent workflow from start to finish. No
              surprises, no black boxes.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                {...fadeUp(0.1 + i * 0.1)}
                className="relative group p-6 rounded-2xl border border-white/8 bg-white/[0.02] hover:border-orange-500/20 hover:bg-orange-500/5 transition-all duration-300"
              >
                <span className="text-5xl font-black text-white/[0.04] absolute top-4 right-5 group-hover:text-orange-500/10 transition-colors">
                  {step.step}
                </span>
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 text-sm font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-white font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 px-6">
        <motion.div
          {...fadeUp(0.2)}
          className="max-w-3xl mx-auto text-center bg-gradient-to-b from-orange-500/10 to-transparent border border-orange-500/20 rounded-3xl p-12"
        >
          <div className="text-4xl mb-4">🚀</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to Build Something Great?
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8 max-w-md mx-auto">
            Let&apos;s discuss your project. Book a free 30-minute call and
            we&apos;ll figure out the best path forward — together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-orange-500 hover:bg-orange-400 text-white font-semibold text-sm transition-all duration-200 hover:shadow-[0_0_28px_rgba(249,115,22,0.45)]"
            >
              Book a Free Call
            </a>
            <a
              href="/pricing"
              className="px-8 py-3.5 rounded-full border border-white/15 hover:border-orange-500/40 text-gray-300 hover:text-white font-semibold text-sm transition-all duration-200"
            >
              View Pricing
            </a>
          </div>
        </motion.div>
      </section>

      <ProjectInquiry />

      <Footer />
    </div>
  );
}
