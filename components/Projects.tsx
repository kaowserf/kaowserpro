"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface Project {
  name: string;
  tagline: string;
  description: string;
  details: string;
  stack: string[];
  features: string[];
  url?: string;
  github?: string;
  year: string;
  status: "Live" | "In Progress" | "Shipped";
  thumbnail: {
    bg: string;
    accent: string;
    icon: string;
  };
}

const projects: Project[] = [
  {
    name: "Kaowser Pro",
    tagline: "Personal portfolio built to convert",
    description:
      "Personal portfolio website built with Next.js and Framer Motion. Clean, dark, and fast — designed to convert visitors into clients.",
    details:
      "A fully custom portfolio site designed from scratch using modern web technologies. Features smooth scroll animations, mouse-following glow effects, an embedded Calendly scheduler, animated hero section with floating tech labels, and a fully responsive layout optimized for performance.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Animated hero with mouse-tracking glow effect",
      "Embedded Calendly for direct booking",
      "Testimonials section",
      "Skills with real tech icons",
      "Fully responsive dark theme",
    ],
    url: "https://kaowser.pro",
    year: "2025",
    status: "Live",
    thumbnail: {
      bg: "from-orange-600/30 to-amber-600/10",
      accent: "bg-orange-400",
      icon: "⚡",
    },
  },
  {
    name: "Vibe App",
    tagline: "Cross-platform mobile experience",
    description:
      "A cross-platform mobile application built with React Native and Expo. Fast onboarding, clean UX, and real-time features.",
    details:
      "A mobile-first product built with React Native and Expo targeting both iOS and Android from a single codebase. Includes real-time data sync via Supabase, push notifications, smooth gesture-based navigation, and a clean onboarding flow. Built for speed and scalability.",
    stack: ["React Native", "Expo", "Supabase", "TypeScript"],
    features: [
      "iOS & Android from one codebase",
      "Real-time data with Supabase",
      "Push notifications",
      "Gesture-based navigation",
      "Fast onboarding flow",
    ],
    year: "2025",
    status: "Shipped",
    thumbnail: {
      bg: "from-cyan-600/25 to-blue-600/10",
      accent: "bg-cyan-400",
      icon: "📱",
    },
  },
  {
    name: "Launch Kit",
    tagline: "SaaS starter kit for indie founders",
    description:
      "A starter kit for indie developers and founders to spin up full-stack SaaS apps quickly with auth, payments, and a dashboard.",
    details:
      "An opinionated full-stack SaaS boilerplate that removes all the setup overhead. Comes pre-wired with authentication (magic link + OAuth), Stripe billing with subscription tiers, a protected dashboard, and a landing page template. Deploy to production in under an hour.",
    stack: ["Next.js", "Supabase", "Stripe", "Tailwind CSS"],
    features: [
      "Auth: magic link + OAuth (Google, GitHub)",
      "Stripe subscriptions + billing portal",
      "Protected dashboard",
      "Landing page template included",
      "One-click Vercel deploy",
    ],
    year: "2025",
    status: "In Progress",
    thumbnail: {
      bg: "from-emerald-600/25 to-teal-600/10",
      accent: "bg-emerald-400",
      icon: "🚀",
    },
  },
  {
    name: "Quick Commerce UI",
    tagline: "Conversion-focused e-commerce storefront",
    description:
      "Modern e-commerce storefront with blazing-fast performance, smooth animations, and a conversion-focused design.",
    details:
      "A high-performance storefront UI built for conversion. Features product filtering, animated cart interactions, a content-managed product catalog via Sanity CMS, and a checkout flow optimized to reduce drop-off. Achieves 95+ Lighthouse performance scores.",
    stack: ["Next.js", "Framer Motion", "Tailwind CSS", "Sanity CMS"],
    features: [
      "95+ Lighthouse performance score",
      "Sanity CMS for product management",
      "Animated cart & checkout flow",
      "Dynamic product filtering",
      "Mobile-first responsive layout",
    ],
    year: "2024",
    status: "Shipped",
    thumbnail: {
      bg: "from-purple-600/25 to-pink-600/10",
      accent: "bg-purple-400",
      icon: "🛍️",
    },
  },
];

const statusColors: Record<Project["status"], string> = {
  Live: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  Shipped: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  "In Progress": "bg-amber-500/15 text-amber-400 border-amber-500/30",
};

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0d0d14] border border-white/10 rounded-3xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Thumbnail header */}
        <div
          className={`relative h-48 bg-gradient-to-br ${project.thumbnail.bg} overflow-hidden rounded-t-3xl flex-shrink-0`}
        >
          {/* Mock browser bar */}
          <div className="absolute top-0 inset-x-0 h-7 bg-black/30 backdrop-blur-sm flex items-center px-3 gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-400/70" />
            <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
            <span className="w-2 h-2 rounded-full bg-green-400/70" />
            {project.url && (
              <div className="ml-3 flex-1 h-3 rounded-sm bg-white/10 flex items-center px-2">
                <span className="text-[8px] text-white/40 font-mono truncate">
                  {project.url}
                </span>
              </div>
            )}
          </div>
          {/* Large icon */}
          <div className="absolute inset-0 top-7 flex items-center justify-center text-6xl opacity-30">
            {project.thumbnail.icon}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-10 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200 text-sm"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-2">
            <div>
              <h2 className="text-2xl font-bold text-white">{project.name}</h2>
              <p className="text-gray-500 text-sm mt-0.5">{project.tagline}</p>
            </div>
            <span
              className={`flex-shrink-0 px-2.5 py-0.5 rounded-full text-xs font-medium border mt-1 ${statusColors[project.status]}`}
            >
              {project.status}
            </span>
          </div>

          {/* Year */}
          <p className="text-gray-600 text-xs mb-5">Year: {project.year}</p>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            {project.details}
          </p>

          {/* Features */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-orange-400 tracking-widest uppercase mb-3">
              Key Features
            </h3>
            <ul className="flex flex-col gap-2">
              {project.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
                  <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-[9px] text-orange-400 font-bold">
                    ✓
                  </span>
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Stack */}
          <div className="mb-8">
            <h3 className="text-xs font-semibold text-orange-400 tracking-widest uppercase mb-3">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-mono text-gray-400 bg-white/5 border border-white/8"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-6 border-t border-white/8">
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-orange-500 hover:bg-orange-400 text-white font-semibold text-sm transition-all duration-200 hover:shadow-[0_0_24px_rgba(249,115,22,0.4)]"
              >
                View Live Project ↗
              </a>
            ) : (
              <span className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-500 text-sm font-semibold cursor-default">
                🔒 URL Coming Soon
              </span>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/15 hover:border-orange-500/40 text-gray-300 hover:text-white font-semibold text-sm transition-all duration-200"
              >
                GitHub ↗
              </a>
            )}
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full border border-white/10 hover:border-white/20 text-gray-500 hover:text-gray-300 font-semibold text-sm transition-all duration-200 ml-auto"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
      className="group rounded-2xl border border-white/5 bg-white/[0.02] hover:border-orange-500/20 overflow-hidden transition-all duration-300 flex flex-col"
    >
      {/* Thumbnail */}
      <div
        className={`relative h-44 bg-gradient-to-br ${project.thumbnail.bg} overflow-hidden`}
      >
        {/* Mock browser bar */}
        <div className="absolute top-0 inset-x-0 h-7 bg-black/30 backdrop-blur-sm flex items-center px-3 gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-400/70" />
          <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
          <span className="w-2 h-2 rounded-full bg-green-400/70" />
          <div className="ml-3 flex-1 h-3 rounded-sm bg-white/10" />
        </div>

        {/* Mock UI content */}
        <div className="absolute inset-0 top-7 p-4 flex flex-col gap-2">
          <div className="flex items-center gap-3 mb-1">
            <div className={`w-8 h-8 rounded-lg ${project.thumbnail.accent}/20 flex items-center justify-center text-base`}>
              {project.thumbnail.icon}
            </div>
            <div className="space-y-1">
              <div className="h-2 w-20 rounded-full bg-white/20" />
              <div className="h-1.5 w-14 rounded-full bg-white/10" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-1">
            {[70, 45, 85].map((w, i) => (
              <div key={i} className="h-14 rounded-lg bg-white/5 border border-white/5 p-2 flex flex-col justify-end gap-1">
                <div className={`h-1.5 rounded-full ${project.thumbnail.accent}/40`} style={{ width: `${w}%` }} />
                <div className="h-1 w-full rounded-full bg-white/10" />
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <div className="h-2 w-full rounded-full bg-white/10" />
            <div className="h-2 w-2/3 rounded-full bg-white/5" />
          </div>
        </div>

        {/* Hover overlay with "View Details" prompt */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="px-4 py-2 rounded-full bg-orange-500 text-white text-xs font-semibold shadow-lg">
            View Details
          </span>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 to-transparent" />
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-base font-semibold text-white group-hover:text-orange-200 transition-colors">
            {project.name}
          </h3>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusColors[project.status]}`}>
              {project.status}
            </span>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-gray-500 hover:text-orange-400 transition-colors"
                aria-label={`Open ${project.name}`}
              >
                ↗
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
          {project.stack.map((tech) => (
            <span key={tech} className="px-2.5 py-0.5 rounded-md text-xs font-mono text-gray-500 bg-white/5">
              {tech}
            </span>
          ))}
        </div>

        {/* View Details button */}
        <button
          onClick={onOpen}
          className="w-full mt-1 py-2.5 rounded-xl border border-white/8 hover:border-orange-500/40 hover:bg-orange-500/5 text-gray-400 hover:text-orange-300 text-sm font-medium transition-all duration-200"
        >
          View Full Details →
        </button>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What I&apos;ve Built
          </h2>
          <p className="text-gray-500 mb-12 max-w-xl">
            A selection of projects that showcase my range across web, mobile,
            and full-stack development.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={i}
              onOpen={() => setActiveProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
