"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface Screenshot {
  src: string;
  alt: string;
  phone?: boolean;
}

const categories = ["Web Platform", "Business Website", "Landing Page", "Mobile App"] as const;
type Category = (typeof categories)[number];

interface Project {
  name: string;
  tagline: string;
  category: Category;
  description: string;
  details: string;
  stack: string[];
  features: string[];
  url?: string;
  github?: string;
  year: string;
  status: "Live" | "In Progress" | "Shipped";
  // Real screenshot used on the card and modal header; falls back to the mock UI
  cover?: string;
  gallery?: Screenshot[];
  thumbnail: {
    bg: string;
    accent: string;
    icon: string;
  };
}

const projects: Project[] = [
  {
    name: "Health & Wealth Legacy — NEMT Platform",
    tagline: "Website, booking, dispatch and two mobile apps for a medical transport company",
    category: "Web Platform",
    description:
      "A complete platform for a non-emergency medical transportation company in Kansas City: public website with online booking, an admin and dispatch panel, and rider and driver apps — all on one live backend.",
    details:
      "Health & Wealth Legacy drives patients to dialysis, therapy and medical appointments. We built everything they run the business on. Riders book online or in the HWL User app and get an instant fare estimate. Requests land in the dispatch panel in real time, where staff assign drivers and vans, track the fleet on a live map and handle recurring dialysis schedules. Drivers work from the HWL Driver app with GPS tracking, and riders follow their van on a private tracking link. Automated emails, invoices, reports and role-based staff access are built in.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Flutter", "Google Maps", "Firebase"],
    features: [
      "Public website with online ride booking and fare estimator",
      "Admin & dispatch panel: rides, drivers, vehicles, patients, billing",
      "Live fleet map and rider tracking link over Supabase Realtime",
      "HWL User app (Flutter): book, repeat rides, saved places, alerts",
      "HWL Driver app (Flutter): trips, GPS, chat with dispatch",
      "Automatic pricing, invoices, PDF/CSV reports and ride emails",
    ],
    url: "https://www.hwlegacynemt.com",
    year: "2026",
    status: "Live",
    cover: "/projects/nemt/home.webp",
    gallery: [
      { src: "/projects/nemt/home.webp", alt: "HWL home page" },
      { src: "/projects/nemt/services.webp", alt: "HWL services page" },
      { src: "/projects/nemt/pricing.webp", alt: "HWL pricing page" },
      { src: "/projects/nemt/coverage.webp", alt: "HWL coverage page" },
      { src: "/projects/nemt/app-welcome.webp", alt: "HWL User app welcome screen", phone: true },
      { src: "/projects/nemt/app-home.webp", alt: "HWL User app home screen", phone: true },
    ],
    thumbnail: {
      bg: "from-lime-600/30 to-green-700/10",
      accent: "bg-lime-400",
      icon: "🚐",
    },
  },
  {
    name: "NEMTFlow — NEMT Software",
    tagline: "White-label booking, dispatch and driver software for transport owners",
    category: "Web Platform",
    description:
      "Our own SaaS product: a complete, white-label NEMT system — booking website, admin and dispatch panel, driver app and rider app — that transportation owners launch under their own brand in about a week.",
    details:
      "NEMTFlow packages everything we learned building real medical transportation software into a product other owners can launch fast. Riders book online or in the app, dispatch assigns drivers from a live board, drivers run trips from their phone, and billing closes the loop. This marketing site explains the product, walks owners through a live demo, compares pricing and captures demo requests.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Flutter"],
    features: [
      "Booking website, admin panel, driver app and rider app in one system",
      "White-label: launches under the owner's brand",
      "Live demo of dispatch dashboard and driver app",
      "Four-step flow: book → dispatch → drive → get paid",
      "Pricing, broker and FAQ sections built to convert owners",
    ],
    url: "https://nemtflowllc.vercel.app",
    year: "2026",
    status: "Live",
    cover: "/projects/shots/nemtflow.webp",
    gallery: [
      { src: "/projects/shots/nemtflow.webp", alt: "NEMTFlow hero" },
      { src: "/projects/shots/nemtflow-0.webp", alt: "NEMTFlow product parts" },
      { src: "/projects/shots/nemtflow-1.webp", alt: "NEMTFlow four-step flow" },
    ],
    thumbnail: { bg: "from-orange-600/30 to-amber-600/10", accent: "bg-orange-400", icon: "🚐" },
  },
  {
    name: "KwikFastHurry",
    tagline: "Multi-vendor delivery marketplace — food, grocery, parcel & pharmacy",
    category: "Web Platform",
    description:
      "Customer website for a multi-vendor delivery platform: search by location, order from local restaurants and stores, with separate Customer, Vendor and Rider apps behind it.",
    details:
      "KwikFastHurry is an all-in-one delivery business covering food, grocery, parcel, pharmacy and e-commerce. We built the customer-facing website with location search, store discovery, cart and checkout, dark mode and multi-language support, plus vendor and rider sign-up funnels with app download links. Google Maps powers address search and delivery tracking.",
    stack: ["Next.js", "React", "Material UI", "Redux Toolkit", "Firebase", "Google Maps", "i18next"],
    features: [
      "Location-based search for nearby restaurants and stores",
      "Food, grocery, parcel, pharmacy and shopping in one platform",
      "Vendor and delivery-rider recruitment funnels",
      "Dark mode and multi-language support",
      "Customer, Vendor and Rider app download with QR codes",
    ],
    url: "https://kwikfasthurry.com",
    year: "2026",
    status: "Live",
    cover: "/projects/shots/kwikfasthurry.webp",
    gallery: [
      { src: "/projects/shots/kwikfasthurry.webp", alt: "KwikFastHurry home" },
      { src: "/projects/shots/kwikfasthurry-0.webp", alt: "KwikFastHurry apps and clients" },
      { src: "/projects/shots/kwikfasthurry-1.webp", alt: "KwikFastHurry vendor and rider sign-up" },
    ],
    thumbnail: { bg: "from-orange-600/30 to-red-600/10", accent: "bg-orange-400", icon: "🛵" },
  },
  {
    name: "KwikFastHurry Legal Center",
    tagline: "Searchable policy hub for the Customer, Vendor and Rider apps",
    category: "Web Platform",
    description:
      "A dedicated legal site holding 19 versioned policies — terms, privacy, refunds, account deletion — for every KwikFastHurry app, written in plain language and fully searchable.",
    details:
      "App stores and payment providers require clear, reachable policies for every app. We built a fast static legal center where each policy is a Markdown file: the navigation, search index, table of contents and reading time all update automatically when a document changes. Policies are grouped by Platform, Customer App, Vendor App and Rider App, with revision dates on every page.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Markdown"],
    features: [
      "19 policies grouped by app, in one place",
      "Instant search across all documents (⌘K)",
      "Versioned and dated so users know what they agreed to",
      "Markdown content — editing a file updates the whole site",
      "Static export: hosts anywhere, loads instantly",
    ],
    url: "https://legalkwikfasthurry.vercel.app",
    year: "2026",
    status: "Live",
    cover: "/projects/shots/kwik-legal.webp",
    thumbnail: { bg: "from-orange-600/25 to-stone-700/10", accent: "bg-orange-400", icon: "📜" },
  },
  {
    name: "BetterMan Masterclass",
    tagline: "High-converting webinar registration page with live seat counter",
    category: "Landing Page",
    description:
      "Mobile-first registration landing page for the live BetterMan masterclass, with a real-time seat counter, UTM tracking, a thank-you page and an admin panel for registrations.",
    details:
      "Built to fill a 600-seat live masterclass. The page leads with a strong NEED → POWER story, shows event date, time in two time zones, format and price at a glance, and keeps a live “spots claimed” counter that reads real registrations from Supabase. Every sign-up records its UTM source so the client knows which ads work, and an /admin panel lists and exports registrations.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "React PDF"],
    features: [
      "Live seat counter backed by real registrations",
      "UTM attribution captured on every sign-up",
      "Admin panel to view and export registrations",
      "Thank-you page with next steps",
      "Mobile-first, story-driven layout",
    ],
    url: "https://better-man-blue.vercel.app",
    year: "2026",
    status: "Live",
    cover: "/projects/shots/betterman.webp",
    gallery: [
      { src: "/projects/shots/betterman.webp", alt: "BetterMan hero" },
      { src: "/projects/shots/betterman-0.webp", alt: "BetterMan registration form" },
      { src: "/projects/shots/betterman-1.webp", alt: "BetterMan story section" },
    ],
    thumbnail: { bg: "from-yellow-500/25 to-stone-800/10", accent: "bg-yellow-400", icon: "🎟️" },
  },
  {
    name: "Celio Arc Design Studio",
    tagline: "3D-first website for an interior design & build studio in Dhaka",
    category: "Business Website",
    description:
      "A premium, 3D-first website for an interior design studio: photo-real renders drive the hero, projects and gallery, with an explore-in-3D experience and a budget estimator.",
    details:
      "Celio Arc designs and builds homes and offices, and every project starts as a photo-real 3D render. The site puts those renders front and centre: a room-by-room hero slider (living, bedroom, kitchen, dining, office), project and gallery pages, a step-by-step process, an online estimate tool and meeting booking. Smooth scrolling and motion make it feel like walking through the space.",
    stack: ["Next.js", "Tailwind CSS", "React Three Fiber", "GSAP", "Lenis", "React Hook Form", "Zod"],
    features: [
      "Room-by-room hero slider built from 28 real renders",
      "Explore-in-3D experience with Three.js",
      "Online budget estimator",
      "Book-a-meeting flow with validated forms",
      "Smooth scroll and editorial typography",
    ],
    url: "https://celiobd.vercel.app",
    year: "2026",
    status: "Live",
    cover: "/projects/shots/celio.webp",
    gallery: [
      { src: "/projects/shots/celio.webp", alt: "Celio Arc hero" },
      { src: "/projects/shots/celio-1.webp", alt: "Celio Arc services" },
    ],
    thumbnail: { bg: "from-stone-500/25 to-amber-700/10", accent: "bg-amber-300", icon: "🛋️" },
  },
  {
    name: "HWL Estate Planning Seminar",
    tagline: "Event registration page for a complimentary wills & trusts seminar",
    category: "Landing Page",
    description:
      "Registration landing page for Health & Wealth Legacy's estate planning seminars in Gladstone, MO — event details, video content and a validated sign-up form.",
    details:
      "Health & Wealth Legacy runs free educational seminars on wills and living trusts. The page makes the offer clear in seconds (dates, location, complimentary), explains why estate planning matters, embeds explainer videos from their attorney partner, and takes registrations through a validated form, with a call-to-reserve option for older visitors who prefer the phone.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React Hook Form", "Zod"],
    features: [
      "Clear event details: dates, venue, complimentary seat",
      "Validated registration form",
      "Embedded explainer videos",
      "Reserve-by-phone option",
      "Fast, accessible, mobile-friendly",
    ],
    url: "https://health-lyart-nine.vercel.app",
    year: "2026",
    status: "Live",
    cover: "/projects/shots/estate.webp",
    gallery: [
      { src: "/projects/shots/estate.webp", alt: "Estate seminar hero" },
      { src: "/projects/shots/estate-0.webp", alt: "Estate seminar benefits" },
      { src: "/projects/shots/estate-1.webp", alt: "Estate seminar videos" },
    ],
    thumbnail: { bg: "from-green-600/25 to-lime-600/10", accent: "bg-green-400", icon: "📋" },
  },
  {
    name: "The BurgerDudes",
    tagline: "Restaurant website with full menu and online ordering — Fort Worth, TX",
    category: "Business Website",
    description:
      "Bold restaurant website for a Fort Worth burger brand: full categorised menu with prices, deals, delivery info and order-now links to delivery partners.",
    details:
      "The BurgerDudes needed a site that sells the food as hard as the photos do. We built a bold, fast one-page experience: hero with order-now and view-menu actions, a tabbed menu (signature burgers, Philly cheesesteaks, hot link sandwiches, fried chicken, sides, drinks) with badges like Most Popular and Bestseller, deals, and links to Uber Eats, DoorDash and Grubhub.",
    stack: ["Next.js", "TypeScript", "CSS"],
    features: [
      "Tabbed menu with prices and best-seller badges",
      "Order-now links to delivery platforms",
      "Deals and contact sections",
      "Bold brand typography and food photography",
      "Lightweight and fast on mobile",
    ],
    url: "https://the-burger-dudes.vercel.app",
    year: "2026",
    status: "Live",
    cover: "/projects/shots/burgerdudes.webp",
    gallery: [
      { src: "/projects/shots/burgerdudes.webp", alt: "BurgerDudes hero" },
      { src: "/projects/shots/burgerdudes-1.webp", alt: "BurgerDudes menu" },
    ],
    thumbnail: { bg: "from-red-600/30 to-stone-800/10", accent: "bg-red-400", icon: "🍔" },
  },
  {
    name: "Reelo — AI Video Creator",
    tagline: "AI video tools for TikToks, Reels & Shorts",
    category: "Web Platform",
    description:
      "Landing site and studio for an AI video product: turn photos, ideas and scripts into short-form videos — talking photos, dancing photos, AI avatars and more.",
    details:
      "Reelo helps creators and small businesses make short-form video without editing skills. The site demos the studio right in the hero (upload a photo, pick a move), then presents each tool — AI avatars, talking photos, dancing photos, AI voices, commercials — and the creation and growth workflows. 3D effects and post-processing give it a premium, product-led feel.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React Three Fiber", "FFmpeg"],
    features: [
      "Interactive studio demo in the hero",
      "Feature grid for each AI video tool",
      "3D visuals with post-processing",
      "Social-platform trust strip (TikTok, YouTube, Instagram…)",
      "Clear free-start call to action",
    ],
    url: "https://reloapp-nine.vercel.app",
    year: "2026",
    status: "Live",
    cover: "/projects/shots/reelo.webp",
    gallery: [
      { src: "/projects/shots/reelo.webp", alt: "Reelo hero" },
      { src: "/projects/shots/reelo-0.webp", alt: "Reelo tools" },
      { src: "/projects/shots/reelo-1.webp", alt: "Reelo features" },
    ],
    thumbnail: { bg: "from-red-600/30 to-rose-900/10", accent: "bg-red-400", icon: "🎬" },
  },
  {
    name: "UrbaTrade",
    tagline: "AI-powered intraday trading platform with subscriptions",
    category: "Web Platform",
    description:
      "Full-stack trading SaaS: AI stock scores, live buy/sell signals, intraday setups and a scanner, with accounts and Stripe subscription plans.",
    details:
      "UrbaTrade combines technical, fundamental and sentiment analysis into a single AI score per stock, and turns it into clear signals and intraday setups with entry, stop and target. Users sign up, pick a plan through Stripe and get a dashboard with charts, a stock picker, scanners and strategy tools. Data lives in PostgreSQL through Prisma, with Auth.js handling login.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Auth.js", "Stripe", "Recharts"],
    features: [
      "AI score combining technical, fundamental and sentiment data",
      "Live signals and intraday trade setups",
      "Stripe subscription plans",
      "Secure accounts with Auth.js",
      "Charts and scanners in the dashboard",
    ],
    url: "https://urba-trade.vercel.app",
    year: "2026",
    status: "Live",
    cover: "/projects/shots/urbatrade.webp",
    gallery: [
      { src: "/projects/shots/urbatrade.webp", alt: "UrbaTrade hero" },
      { src: "/projects/shots/urbatrade-0.webp", alt: "UrbaTrade features" },
      { src: "/projects/shots/urbatrade-1.webp", alt: "UrbaTrade how it works" },
    ],
    thumbnail: { bg: "from-emerald-600/25 to-teal-600/10", accent: "bg-emerald-400", icon: "📈" },
  },
  {
    name: "Urban Health",
    tagline: "AI healthcare portal prototype with doctor and patient roles",
    category: "Web Platform",
    description:
      "Prototype for an AI-driven clinic: patient health portal, live biometric data, AI insights, doctors and membership plans, with an AI assistant built in.",
    details:
      "Urban Health imagines a clinic that anticipates patients' needs from wearable data. The prototype includes a gateway into doctor and patient roles, a health portal with live vitals, AI insights powered by Google Gemini, service and doctor directories, tiered membership pricing and an always-available AI chat assistant. Data is stored in Supabase.",
    stack: ["React", "Vite", "TypeScript", "Supabase", "Gemini AI", "Recharts"],
    features: [
      "Doctor and patient role gateway",
      "Health portal with live biometric charts",
      "AI insights and chat assistant (Gemini)",
      "Membership plans and doctor directory",
      "Clean, clinical design system",
    ],
    url: "https://urbanhealthclinic.vercel.app",
    year: "2026",
    status: "Live",
    cover: "/projects/shots/urbanhealth.webp",
    gallery: [
      { src: "/projects/shots/urbanhealth.webp", alt: "Urban Health hero" },
      { src: "/projects/shots/urbanhealth-0.webp", alt: "Urban Health services" },
      { src: "/projects/shots/urbanhealth-1.webp", alt: "Urban Health pricing" },
    ],
    thumbnail: { bg: "from-blue-600/25 to-indigo-600/10", accent: "bg-blue-400", icon: "🩺" },
  },
  {
    name: "Invoice System",
    tagline: "Self-hosted invoicing: create, email, get paid, track",
    category: "Web Platform",
    description:
      "A self-hosted invoicing app: create invoices, email them with a PDF attached, record payments and see what's outstanding at a glance.",
    details:
      "Built for freelancers and small businesses who want their invoicing in their own hands. It covers the full cycle: clients, line items with drag-and-drop ordering, tax and payment terms, PDF generation, sending by email through Resend or SMTP, recording payments, and dashboards of billed, paid and outstanding amounts. Login is protected with rate limiting and tested end to end.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Auth.js", "React PDF", "Resend"],
    features: [
      "Invoices with PDF export and email delivery",
      "Payments and outstanding balance tracking",
      "Client management with archive and totals",
      "Business branding, tax and numbering settings",
      "Tested with Vitest and Playwright",
    ],
    year: "2026",
    status: "Shipped",
    thumbnail: { bg: "from-sky-600/25 to-blue-700/10", accent: "bg-sky-400", icon: "🧾" },
  },
  {
    name: "DateWise AI",
    tagline: "AI dating coach app for web, Android and iOS",
    category: "Mobile App",
    description:
      "A premium AI dating coach built in Flutter: threaded AI chat with streamed replies, a photo coach and a three-tier subscription model.",
    details:
      "DateWise AI gives users a personal coach for dating conversations and profiles. It runs on web, Android and iOS from one Flutter codebase, with a conversion-focused landing funnel, three subscription tiers (Spark, Flame, Magnet) that unlock deeper features, threaded chats you can rename and delete, real-time streamed AI replies, and a photo coach that reviews profile pictures.",
    stack: ["Flutter", "Dart", "Gemini AI", "Provider"],
    features: [
      "Threaded AI chat with streamed replies",
      "AI photo coach for profile pictures",
      "Three subscription tiers",
      "One codebase for web, Android and iOS",
      "Landing funnel with pricing and testimonials",
    ],
    year: "2026",
    status: "Shipped",
    thumbnail: { bg: "from-pink-600/25 to-rose-600/10", accent: "bg-pink-400", icon: "💗" },
  },
  {
    name: "Drape — AI Style App",
    tagline: "AI fashion closet and outfit styling app",
    category: "Mobile App",
    description:
      "An AI-powered closet and styling app in Flutter: digitise your wardrobe, build outfits, try them on and discover your style DNA.",
    details:
      "Drape (StyleMuse) turns a phone into a personal stylist. Users photograph their clothes into a digital closet, put together outfits, preview them with virtual try-on and get a style DNA profile. The app is built design-first with clean architecture, so the Supabase and AI backend plug in behind repository interfaces without touching the screens.",
    stack: ["Flutter", "Dart", "Riverpod", "GoRouter"],
    features: [
      "Digital closet from photos",
      "Outfit builder and virtual try-on",
      "Style DNA profile",
      "Polished onboarding",
      "Clean architecture, backend-ready",
    ],
    year: "2026",
    status: "In Progress",
    thumbnail: { bg: "from-purple-600/25 to-fuchsia-600/10", accent: "bg-purple-400", icon: "👗" },
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
          {project.cover ? (
            <div className="absolute inset-0 top-7">
              <Image
                src={project.cover}
                alt={project.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
          ) : (
            <div className="absolute inset-0 top-7 flex items-center justify-center text-6xl opacity-30">
              {project.thumbnail.icon}
            </div>
          )}
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

          {/* Screenshots */}
          {project.gallery && (
            <div className="mb-6">
              <h3 className="text-xs font-semibold text-orange-400 tracking-widest uppercase mb-3">
                Screenshots
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {project.gallery.filter((s) => !s.phone).map((shot) => (
                  <a
                    key={shot.src}
                    href={shot.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative aspect-[16/10] rounded-lg overflow-hidden border border-white/10 hover:border-orange-500/40 transition-colors"
                  >
                    <Image src={shot.src} alt={shot.alt} fill className="object-cover object-top" sizes="320px" />
                  </a>
                ))}
              </div>
              {project.gallery.some((s) => s.phone) && (
                <div className="flex justify-center gap-4 mt-4">
                  {project.gallery.filter((s) => s.phone).map((shot) => (
                    <a
                      key={shot.src}
                      href={shot.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-32 sm:w-40 aspect-[1272/2772] rounded-2xl overflow-hidden border-4 border-white/10 hover:border-orange-500/40 transition-colors"
                    >
                      <Image src={shot.src} alt={shot.alt} fill className="object-cover" sizes="160px" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}

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
      transition={{ duration: 0.65, delay: (index % 3) * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
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

        {project.cover ? (
          <div className="absolute inset-0 top-7">
            <Image
              src={project.cover}
              alt={project.name}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        ) : (
        /* Mock UI content */
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
        )}

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
          <div>
            <p className="text-[11px] font-medium tracking-widest uppercase text-orange-400/80 mb-1">
              {project.category} · {project.year}
            </p>
            <h3 className="text-base font-semibold text-white group-hover:text-orange-200 transition-colors">
              {project.name}
            </h3>
          </div>
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
  const [filter, setFilter] = useState<Category | "All">("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

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
          <p className="text-gray-500 mb-8 max-w-xl">
            Real products for real clients — from a full medical transportation
            platform to delivery marketplaces, SaaS tools, landing pages and
            mobile apps.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {(["All", ...categories] as const).map((c) => {
            const count = c === "All" ? projects.length : projects.filter((p) => p.category === c).length;
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                  filter === c
                    ? "bg-orange-500 border-orange-500 text-white"
                    : "border-white/10 text-gray-400 hover:border-orange-500/40 hover:text-white"
                }`}
              >
                {c} <span className="opacity-60">({count})</span>
              </button>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((project, i) => (
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
