"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useState, useEffect, useRef, type MouseEvent as ReactMouseEvent } from "react";
import Image from "next/image";

/* ── scroll-aware fade-up (triggers on scroll into view) ── */
const scrollFadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

const scrollFadeLeft = (delay: number = 0) => ({
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

const scrollFadeRight = (delay: number = 0) => ({
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

const scrollScaleIn = (delay: number = 0) => ({
  initial: { opacity: 0, scale: 0.85 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

const scrollRotateIn = (delay: number = 0) => ({
  initial: { opacity: 0, rotate: -5, y: 40 },
  whileInView: { opacity: 1, rotate: 0, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

/* ── 3D tilt card ─────────────────────────────── */
function TiltCard({
  children,
  className = "",
  glareColor = "rgba(168,85,247,0.15)",
}: {
  children: React.ReactNode;
  className?: string;
  glareColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });
  const glareX = useTransform(x, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(y, [-0.5, 0.5], [0, 100]);

  function handleMouse(e: ReactMouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative ${className}`}
    >
      {children}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit] z-10"
        style={{
          background: useTransform(
            [glareX, glareY],
            ([gx, gy]) =>
              `radial-gradient(circle at ${gx}% ${gy}%, ${glareColor}, transparent 60%)`
          ),
        }}
      />
    </motion.div>
  );
}

/* ── floating particles ──────────────────────── */
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-purple-400/20"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{ y: [0, -30, 0], opacity: [0, 0.6, 0] }}
          transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 5, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

/* ── parallax hero background ────────────────── */
function ParallaxHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <motion.div ref={ref} className="absolute inset-0 z-0" style={{ opacity }}>
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Image
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
          alt="Conference background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060609]/70 via-[#060609]/85 to-[#060609]" />
        {/* Purple tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/15" />
      </motion.div>

      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <FloatingParticles />
    </motion.div>
  );
}

/* ── sticky scroll progress bar ──────────────── */
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 z-50 origin-left"
      style={{ scaleX }}
    />
  );
}

/* ── data ─────────────────────────────────────── */
const EVENT_DATE = new Date("2026-05-15T09:00:00");

const speakers = [
  {
    name: "Sarah Chen",
    role: "CEO, TechFlow",
    topic: "The Future of AI in Business",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Marcus Rivera",
    role: "CTO, CloudScale",
    topic: "Building Scalable Systems",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Aisha Patel",
    role: "VP Design, Nexus",
    topic: "Design Systems at Scale",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "James Okonkwo",
    role: "Founder, DevHive",
    topic: "From Startup to Unicorn",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
  },
];

const schedule = [
  { time: "9:00 AM", title: "Registration & Networking Coffee", type: "break", duration: "30 min" },
  { time: "9:30 AM", title: "Opening Keynote — The Future of AI in Business", type: "keynote", duration: "60 min", speaker: "Sarah Chen" },
  { time: "10:30 AM", title: "Building Scalable Systems Workshop", type: "workshop", duration: "60 min", speaker: "Marcus Rivera" },
  { time: "11:30 AM", title: "Coffee Break & Networking", type: "break", duration: "30 min" },
  { time: "12:00 PM", title: "Design Systems at Scale", type: "talk", duration: "60 min", speaker: "Aisha Patel" },
  { time: "1:00 PM", title: "Lunch Break & Exhibition", type: "break", duration: "60 min" },
  { time: "2:00 PM", title: "Panel: From Startup to Unicorn", type: "panel", duration: "60 min", speaker: "James Okonkwo" },
  { time: "3:00 PM", title: "Interactive Q&A + Lightning Talks", type: "talk", duration: "30 min" },
  { time: "3:30 PM", title: "Closing Remarks & After-Party", type: "break", duration: "Open" },
];

const testimonials = [
  {
    text: "Best tech conference I've attended this decade. The speakers were world-class and the networking opportunities were absolutely invaluable.",
    name: "Emily Watson",
    role: "Product Manager, Stripe",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    rating: 5,
  },
  {
    text: "Incredibly well organized. Every session delivered real, actionable insights I could apply to my work immediately. Worth every penny.",
    name: "David Kim",
    role: "Staff Engineer, Google",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    rating: 5,
  },
  {
    text: "The workshops alone were worth the ticket price. I left with a completely new perspective on building scalable systems. Can't wait for next year!",
    name: "Lisa Nguyen",
    role: "Founder, LaunchPad",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
    rating: 5,
  },
];

const sponsors = ["TechFlow", "CloudScale", "Nexus", "DevHive", "DataPulse", "CyberEdge"];

const ticketTiers = [
  {
    name: "General",
    price: "Free",
    color: "from-gray-500/20 to-gray-600/10",
    border: "border-white/8 hover:border-white/20",
    features: ["All keynotes & talks", "Networking access", "Lunch included", "Event swag bag"],
  },
  {
    name: "VIP",
    price: "$99",
    color: "from-purple-500/20 to-blue-500/10",
    border: "border-purple-500/30 hover:border-purple-400/50",
    badge: "Popular",
    features: ["Everything in General", "Front row seating", "Speaker meet & greet", "Exclusive VIP lounge", "Priority Q&A access"],
  },
  {
    name: "Workshop",
    price: "$149",
    color: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/30 hover:border-blue-400/50",
    badge: "Best Value",
    features: ["Everything in VIP", "Hands-on workshop access", "Workshop materials", "Certificate of completion", "1-on-1 mentoring slot"],
  },
];

/* ── countdown timer ─────────────────────────── */
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = EVENT_DATE.getTime() - Date.now();
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };
    setTimeLeft(calc());
    const interval = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-3 sm:gap-4">
      {[
        { val: timeLeft.days, label: "Days" },
        { val: timeLeft.hours, label: "Hours" },
        { val: timeLeft.minutes, label: "Min" },
        { val: timeLeft.seconds, label: "Sec" },
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <TiltCard className="rounded-2xl" glareColor="rgba(168,85,247,0.2)">
            <div className="w-16 sm:w-[76px] h-16 sm:h-[76px] rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 flex items-center justify-center backdrop-blur-md">
              <motion.span
                key={item.val}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-2xl sm:text-3xl font-bold text-white tabular-nums"
              >
                {String(item.val).padStart(2, "0")}
              </motion.span>
            </div>
          </TiltCard>
          <span className="text-[10px] sm:text-xs text-gray-500 mt-2.5 uppercase tracking-wider font-medium">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ── counter animation (numbers count up on scroll) ── */
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!ref.current || hasAnimated) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

/* ══════════════════════════════════════════════════
   MAIN PAGE
   ══════════════════════════════════════════════════ */
export default function EventRegistrationDemo() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", ticket: "general" });
  const [submitted, setSubmitted] = useState(false);
  const [navSolid, setNavSolid] = useState(false);

  // Track scroll for nav background
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setNavSolid(latest > 100);
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#060609] text-white overflow-hidden">
      <ScrollProgressBar />

      {/* Demo Banner — slides down */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 text-white text-center py-2.5 text-sm font-medium transition-all duration-500 ${
          navSolid
            ? "bg-[#060609]/90 backdrop-blur-xl border-b border-white/[0.04]"
            : "bg-gradient-to-r from-purple-600 to-blue-600"
        }`}
      >
        This is a demo event page —{" "}
        <a href="/services/event-registration-page" className="underline font-bold hover:text-white/80 transition-colors">
          Get yours built by Kaowser Pro
        </a>
      </motion.div>

      {/* ─── HERO with parallax background image ─── */}
      <section className="pt-24 pb-20 px-6 relative min-h-[100vh] flex items-center">
        <ParallaxHero />

        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          {/* Left column — slides in from left */}
          <div>
            <motion.div {...scrollFadeLeft(0)} className="flex items-center gap-3 mb-6">
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="px-4 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/25 text-purple-300 text-xs font-semibold tracking-wide backdrop-blur-sm"
              >
                May 15, 2026
              </motion.span>
              <span className="px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-gray-300 text-xs font-medium backdrop-blur-sm">
                San Francisco, CA
              </span>
            </motion.div>

            <motion.h1
              {...scrollFadeLeft(0.15)}
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-[1.05] tracking-tight"
            >
              TechVision{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Summit
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{ transformOrigin: "left" }}
                />
              </span>
              <br />
              <span className="text-white/90">2026</span>
            </motion.h1>

            <motion.p {...scrollFadeLeft(0.25)} className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg">
              Join 500+ innovators, founders, and tech leaders for a full day of
              keynotes, workshops, and networking that will shape the future of technology.
            </motion.p>

            <motion.div {...scrollFadeUp(0.35)}>
              <CountdownTimer />
            </motion.div>

            {/* Social proof */}
            <motion.div {...scrollFadeUp(0.45)} className="flex items-center gap-5 mt-10">
              <div className="flex -space-x-3">
                {speakers.map((s, i) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 200 }}
                    className="w-10 h-10 rounded-full border-[2.5px] border-[#060609] overflow-hidden relative"
                    style={{ zIndex: 4 - i }}
                  >
                    <Image src={s.image} alt={s.name} fill className="object-cover" sizes="40px" />
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, type: "spring", stiffness: 200 }}
                  className="w-10 h-10 rounded-full border-[2.5px] border-[#060609] bg-gradient-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center text-[10px] font-bold text-purple-300 backdrop-blur-sm"
                  style={{ zIndex: 0 }}
                >
                  +343
                </motion.div>
              </div>
              <div>
                <p className="text-sm text-white font-semibold">347+ registered</p>
                <p className="text-xs text-gray-500">Join the community</p>
              </div>
            </motion.div>
          </div>

          {/* Right — Registration Form (slides in from right) */}
          <motion.div {...scrollFadeRight(0.2)} className="perspective-[1200px]">
            <TiltCard className="rounded-3xl" glareColor="rgba(168,85,247,0.12)">
              <div className="relative rounded-3xl border border-white/[0.08] bg-[#0c0c14]/80 backdrop-blur-xl p-8 sm:p-10 shadow-2xl shadow-purple-900/10">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-600/15 rounded-full blur-[60px] pointer-events-none" />

                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-xl font-bold text-white">Reserve Your Spot</h3>
                  <motion.span
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-green-400"
                  />
                </div>
                <p className="text-gray-500 text-sm mb-7">Limited to 500 seats — secure yours now</p>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {[
                      { type: "text", placeholder: "Full Name", key: "name" as const, required: true },
                      { type: "email", placeholder: "Email Address", key: "email" as const, required: true },
                      { type: "text", placeholder: "Company (optional)", key: "company" as const, required: false },
                    ].map((field, fi) => (
                      <motion.div
                        key={field.key}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + fi * 0.1, ease: [0.25, 0.1, 0.25, 1] as const }}
                      >
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          required={field.required}
                          value={formData[field.key]}
                          onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                          className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-gray-600 focus:border-purple-500/40 focus:bg-white/[0.05] focus:outline-none focus:ring-1 focus:ring-purple-500/20 transition-all duration-300"
                        />
                      </motion.div>
                    ))}

                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
                    >
                      <select
                        value={formData.ticket}
                        onChange={(e) => setFormData({ ...formData, ticket: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm focus:border-purple-500/40 focus:outline-none focus:ring-1 focus:ring-purple-500/20 transition-all duration-300 appearance-none cursor-pointer"
                      >
                        <option value="general" className="bg-[#0c0c14]">General Admission — Free</option>
                        <option value="vip" className="bg-[#0c0c14]">VIP Pass — $99</option>
                        <option value="workshop" className="bg-[#0c0c14]">Workshop Bundle — $149</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </motion.div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.35)] mt-2 relative overflow-hidden group"
                    >
                      <span className="relative z-10">Register Now</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>

                    <p className="text-center text-gray-600 text-xs mt-1">
                      By registering you agree to our terms. No spam, ever.
                    </p>
                  </form>
                ) : (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-10"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center mx-auto mb-5"
                    >
                      <span className="text-4xl">🎉</span>
                    </motion.div>
                    <h4 className="text-2xl font-bold text-white mb-2">You&apos;re In!</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Check your email for confirmation.<br />See you at TechVision Summit 2026!
                    </p>
                  </motion.div>
                )}
              </div>
            </TiltCard>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/15 flex items-start justify-center p-1.5 backdrop-blur-sm">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-purple-400"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* ─── STATS BAR (counter animation on scroll) ─── */}
      <section className="py-16 px-6 border-y border-white/[0.04] bg-white/[0.01] relative">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: 500, suffix: "+", label: "Attendees Expected", icon: "👥" },
            { value: 12, suffix: "", label: "World-Class Speakers", icon: "🎤" },
            { value: 8, suffix: "", label: "Hands-On Workshops", icon: "🛠️" },
            { value: 1, suffix: "", label: "Unforgettable Day", icon: "⚡" },
          ].map((stat, i) => (
            <motion.div key={stat.label} {...scrollScaleIn(0.1 + i * 0.12)} className="text-center">
              <motion.div
                whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="text-2xl mb-2"
              >
                {stat.icon}
              </motion.div>
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── SPEAKERS (staggered scroll reveal) ─── */}
      <section className="py-28 px-6 relative">
        <FloatingParticles />
        <div className="max-w-6xl mx-auto relative">
          <motion.div {...scrollFadeUp(0)} className="text-center mb-16">
            <motion.p {...scrollScaleIn(0)} className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Learn From The Best
            </motion.p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Featured{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Speakers
              </span>
            </h2>
            <motion.div
              {...scrollFadeUp(0.2)}
              className="w-20 h-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4"
            />
            <motion.p {...scrollFadeUp(0.25)} className="text-gray-500 max-w-md mx-auto text-sm mt-4">
              Industry leaders sharing cutting-edge insights and real-world experience.
            </motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {speakers.map((speaker, i) => (
              <motion.div key={speaker.name} {...scrollRotateIn(0.1 + i * 0.12)}>
                <TiltCard className="rounded-2xl" glareColor="rgba(168,85,247,0.1)">
                  <div className="group p-7 rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent hover:border-purple-500/25 transition-all duration-500 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-600/0 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-[1]">
                      <div className="relative mx-auto mb-5 w-28 h-28">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-md" />
                        <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-purple-500/40 transition-colors duration-500">
                          <Image
                            src={speaker.image}
                            alt={speaker.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                            sizes="112px"
                          />
                        </div>
                      </div>

                      <h3 className="text-white font-bold text-lg mb-0.5 group-hover:text-purple-300 transition-colors duration-300">
                        {speaker.name}
                      </h3>
                      <p className="text-purple-400/80 text-xs font-semibold mb-3 tracking-wide">
                        {speaker.role}
                      </p>
                      <p className="text-gray-500 text-sm leading-relaxed">{speaker.topic}</p>

                      <div className="flex items-center justify-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <span className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/30 transition-all cursor-pointer text-xs">
                          𝕏
                        </span>
                        <span className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/30 transition-all cursor-pointer text-xs">
                          in
                        </span>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TICKET TIERS (scale-in on scroll) ─── */}
      <section className="py-28 px-6 bg-white/[0.01] relative">
        <div className="max-w-5xl mx-auto">
          <motion.div {...scrollFadeUp(0)} className="text-center mb-16">
            <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Get Your Ticket
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <motion.div
              {...scrollFadeUp(0.2)}
              className="w-20 h-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4"
            />
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {ticketTiers.map((tier, i) => (
              <motion.div key={tier.name} {...scrollScaleIn(0.1 + i * 0.15)}>
                <TiltCard className="rounded-3xl h-full" glareColor="rgba(168,85,247,0.08)">
                  <div
                    className={`relative group rounded-3xl border bg-gradient-to-b ${tier.color} ${tier.border} transition-all duration-300 overflow-hidden p-8 h-full flex flex-col`}
                  >
                    {tier.badge && (
                      <div className="absolute top-0 left-0 right-0 flex justify-center">
                        <span className="px-4 py-1 text-[10px] font-bold rounded-b-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white uppercase tracking-wider">
                          {tier.badge}
                        </span>
                      </div>
                    )}

                    <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1 mt-2">
                      {tier.name}
                    </p>
                    <div className="text-4xl font-bold text-white mb-6">{tier.price}</div>

                    <ul className="flex flex-col gap-3 mb-8 flex-1">
                      {tier.features.map((feat, fi) => (
                        <motion.li
                          key={feat}
                          {...scrollFadeLeft(0.2 + fi * 0.06)}
                          className="flex items-start gap-2.5"
                        >
                          <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-[10px] text-purple-400 font-bold">
                            ✓
                          </span>
                          <span className="text-sm text-gray-300">{feat}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      className={`w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                        tier.badge === "Popular"
                          ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 text-white hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                          : "border border-white/10 hover:border-purple-500/30 text-white hover:bg-white/[0.03]"
                      }`}
                    >
                      Select {tier.name}
                    </motion.button>

                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SCHEDULE (stagger from left) ─── */}
      <section className="py-28 px-6 relative">
        <div className="max-w-3xl mx-auto">
          <motion.div {...scrollFadeUp(0)} className="text-center mb-16">
            <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Event Day
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Schedule &{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Agenda
              </span>
            </h2>
            <motion.div
              {...scrollFadeUp(0.2)}
              className="w-20 h-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4"
            />
          </motion.div>

          <div className="relative">
            {/* Animated timeline line */}
            <motion.div
              className="absolute left-[39px] top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/30 via-blue-500/20 to-transparent hidden sm:block origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
            />

            <div className="flex flex-col gap-4">
              {schedule.map((item, i) => (
                <motion.div key={i} {...scrollFadeLeft(0.05 + i * 0.06)}>
                  <TiltCard
                    className="rounded-2xl"
                    glareColor={item.type === "break" ? "rgba(255,255,255,0.03)" : "rgba(168,85,247,0.08)"}
                  >
                    <div
                      className={`flex items-center gap-5 p-5 sm:pl-6 rounded-2xl border transition-all duration-300 ${
                        item.type === "break"
                          ? "border-white/[0.04] bg-white/[0.01]"
                          : "border-white/[0.06] bg-white/[0.02] hover:border-purple-500/25 hover:bg-purple-500/[0.03]"
                      }`}
                    >
                      <div className="hidden sm:flex flex-shrink-0 w-5 h-5 items-center justify-center">
                        <motion.div
                          className={`w-2.5 h-2.5 rounded-full ${
                            item.type === "break" ? "bg-gray-600" : "bg-gradient-to-br from-purple-400 to-blue-400"
                          }`}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + i * 0.06, type: "spring", stiffness: 300 }}
                        />
                      </div>

                      <div className="text-sm font-mono text-gray-500 w-20 flex-shrink-0 font-medium">
                        {item.time}
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium ${item.type === "break" ? "text-gray-500" : "text-white"}`}>
                          {item.title}
                        </p>
                        {"speaker" in item && item.speaker && (
                          <p className="text-xs text-purple-400/60 mt-0.5">{item.speaker}</p>
                        )}
                      </div>

                      <div className="flex items-center gap-3 flex-shrink-0">
                        <span className="text-[10px] text-gray-600 hidden sm:inline">{item.duration}</span>
                        {item.type !== "break" && (
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                              item.type === "keynote"
                                ? "bg-purple-500/15 text-purple-300 border border-purple-500/25"
                                : item.type === "workshop"
                                ? "bg-blue-500/15 text-blue-300 border border-blue-500/25"
                                : item.type === "panel"
                                ? "bg-amber-500/15 text-amber-300 border border-amber-500/25"
                                : "bg-white/5 text-gray-400 border border-white/10"
                            }`}
                          >
                            {item.type}
                          </span>
                        )}
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS (rotate-in on scroll) ─── */}
      <section className="py-28 px-6 bg-white/[0.01] relative">
        <FloatingParticles />
        <div className="max-w-5xl mx-auto relative">
          <motion.div {...scrollFadeUp(0)} className="text-center mb-16">
            <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Past Attendees
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              What People{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Say
              </span>
            </h2>
            <motion.div
              {...scrollFadeUp(0.2)}
              className="w-20 h-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4"
            />
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-7">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} {...scrollRotateIn(0.1 + i * 0.12)}>
                <TiltCard className="rounded-2xl h-full" glareColor="rgba(168,85,247,0.08)">
                  <div className="p-7 rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent h-full flex flex-col relative overflow-hidden group hover:border-purple-500/20 transition-all duration-500">
                    <span className="text-5xl font-serif bg-gradient-to-r from-purple-400/30 to-blue-400/30 bg-clip-text text-transparent leading-none mb-3">
                      &ldquo;
                    </span>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">{t.text}</p>
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: t.rating }).map((_, si) => (
                        <motion.span
                          key={si}
                          className="text-amber-400 text-sm"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + si * 0.08, type: "spring", stiffness: 200 }}
                        >
                          ★
                        </motion.span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/10">
                        <Image src={t.image} alt={t.name} fill className="object-cover" sizes="44px" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-semibold">{t.name}</p>
                        <p className="text-gray-500 text-xs">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SPONSORS (stagger fade) ─── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.p
            {...scrollFadeUp(0)}
            className="text-center text-gray-600 text-xs uppercase tracking-[0.2em] font-medium mb-10"
          >
            Proudly supported by
          </motion.p>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
            {sponsors.map((name, i) => (
              <motion.div
                key={name}
                {...scrollScaleIn(0.05 + i * 0.08)}
                whileHover={{ scale: 1.15, color: "rgba(255,255,255,0.5)" }}
                className="text-xl sm:text-2xl font-bold text-white/[0.08] hover:text-white/[0.2] transition-colors duration-500 cursor-default"
              >
                {name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VENUE (slide-in halves) ─── */}
      <section className="py-28 px-6 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto">
          <motion.div {...scrollScaleIn(0)}>
            <TiltCard className="rounded-3xl" glareColor="rgba(168,85,247,0.06)">
              <div className="rounded-3xl border border-white/[0.06] bg-gradient-to-br from-purple-600/5 to-blue-600/5 overflow-hidden">
                <div className="grid md:grid-cols-2">
                  {/* Map side */}
                  <motion.div
                    {...scrollFadeLeft(0.1)}
                    className="relative h-64 md:h-auto bg-[#0a0a12] overflow-hidden"
                  >
                    {/* Conference venue background */}
                    <Image
                      src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop"
                      alt="Conference venue"
                      fill
                      className="object-cover opacity-30"
                      sizes="50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0c0c14]/80" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center relative z-10">
                        <motion.div
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="text-5xl mb-3"
                        >
                          📍
                        </motion.div>
                        <p className="text-white font-semibold text-sm">Moscone Center</p>
                        <p className="text-gray-400 text-xs">San Francisco, CA</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Venue details */}
                  <motion.div {...scrollFadeRight(0.2)} className="p-10">
                    <p className="text-purple-400 text-xs font-bold tracking-widest uppercase mb-3">Venue</p>
                    <h3 className="text-2xl font-bold text-white mb-4">Moscone Convention Center</h3>
                    <div className="space-y-4 text-sm text-gray-400">
                      {[
                        { icon: "📍", text: "747 Howard Street, San Francisco, CA 94103" },
                        { icon: "🕐", text: "May 15, 2026 · 9:00 AM — 5:00 PM PST" },
                        { icon: "🅿️", text: "Free parking · Transit accessible (BART/Muni)" },
                        { icon: "♿", text: "Fully wheelchair accessible" },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          {...scrollFadeLeft(0.3 + i * 0.08)}
                          className="flex items-start gap-3"
                        >
                          <span className="text-purple-400 mt-0.5">{item.icon}</span>
                          <span>{item.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Full-width background with conference image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1492684223f-36872dc57e19?w=1920&q=80"
            alt="Conference crowd"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#060609]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060609] via-transparent to-[#060609]" />
        </div>

        {/* Animated orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 left-[15%] w-[350px] h-[350px] rounded-full bg-purple-600/15 blur-[100px]"
          />
          <motion.div
            animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 right-[10%] w-[300px] h-[300px] rounded-full bg-blue-600/12 blur-[100px]"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] rounded-full bg-indigo-500/8 blur-[120px]"
          />
        </div>

        <FloatingParticles />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div {...scrollScaleIn(0)} className="text-center">
            {/* Urgency badge */}
            <motion.div {...scrollFadeUp(0)} className="mb-8 inline-flex items-center gap-2">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-red-400"
              />
              <span className="px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-semibold tracking-wide">
                Only 153 seats remaining
              </span>
            </motion.div>

            <motion.h2
              {...scrollFadeUp(0.1)}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Ready to Be Part of
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Something Big?
              </span>
            </motion.h2>

            <motion.p
              {...scrollFadeUp(0.2)}
              className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl mx-auto"
            >
              One day. Twelve speakers. Endless connections. Join 500+ tech leaders at
              the event everyone will be talking about in 2026.
            </motion.p>

            {/* Feature pills */}
            <motion.div {...scrollFadeUp(0.25)} className="flex flex-wrap justify-center gap-3 mb-10">
              {["Free Entry", "Lunch Included", "Networking", "Workshops", "Swag Bag"].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.06, ease: [0.25, 0.1, 0.25, 1] as const }}
                  className="px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.08] text-gray-300 text-xs font-medium backdrop-blur-sm hover:bg-white/[0.08] hover:border-purple-500/20 transition-all duration-300"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div {...scrollFadeUp(0.35)} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                whileHover={{ scale: 1.04, boxShadow: "0 0 50px rgba(168,85,247,0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="relative inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold text-sm transition-all duration-300 group overflow-hidden"
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  animate={{ x: ["-200%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                />
                <span className="relative z-10">Register Now — It&apos;s Free</span>
                <svg className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>

              <motion.a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#schedule")?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 text-white/80 hover:text-white hover:border-white/20 hover:bg-white/[0.03] font-medium text-sm transition-all duration-300"
              >
                View Full Schedule
              </motion.a>
            </motion.div>

            {/* Trust row */}
            <motion.div
              {...scrollFadeUp(0.45)}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-500 text-xs"
            >
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>100% Free to attend</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-700" />
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Moscone Center, SF</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-700" />
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>May 15, 2026</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-10 px-6 border-t border-white/[0.04] text-center">
        <motion.p {...scrollFadeUp(0)} className="text-gray-600 text-xs">
          Demo event page — designed &amp; built by{" "}
          <a href="/" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
            Kaowser Pro
          </a>
        </motion.p>
      </footer>
    </div>
  );
}
