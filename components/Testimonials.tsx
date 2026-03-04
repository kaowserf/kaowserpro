"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Founder, LaunchPad",
    avatar: "SM",
    rating: 5,
    text: "Kaowser delivered our landing page in record time. The animations, the responsiveness, the attention to detail — everything was beyond what we expected. Our conversion rate jumped 40% after launch.",
  },
  {
    name: "James Okafor",
    role: "CEO, Finvest App",
    avatar: "JO",
    rating: 5,
    text: "We needed a mobile app fast and Kaowser made it happen. His vibe coding approach kept the energy high throughout the project. Clean code, great communication, zero drama.",
  },
  {
    name: "Priya Sharma",
    role: "Product Manager, Shopify Store",
    avatar: "PS",
    rating: 5,
    text: "Our e-commerce UI needed a complete overhaul and Kaowser nailed it. The new design feels premium and our customers actually noticed. Will definitely work together again.",
  },
  {
    name: "Daniel Lee",
    role: "Co-founder, DevTools",
    avatar: "DL",
    rating: 5,
    text: "What sets Kaowser apart is how fast he understands the vision and executes. No back and forth, no guessing. Just clean, modern work delivered on time.",
  },
  {
    name: "Aisha Rahman",
    role: "Startup Founder",
    avatar: "AR",
    rating: 5,
    text: "Hired Kaowser for a Next.js rebuild of our SaaS dashboard. The result was polished, fast, and exactly on brand. He's the kind of developer you want on every project.",
  },
  {
    name: "Marcus Webb",
    role: "Creative Director",
    avatar: "MW",
    rating: 5,
    text: "Kaowser brings both technical skill and creative sense to every project. The portfolio site he built for our agency is something our clients genuinely compliment us on.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-orange-400 text-sm">★</span>
      ))}
    </div>
  );
}

function TestimonialCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex flex-col gap-4 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-orange-500/20 hover:bg-orange-500/5 transition-all duration-300"
    >
      {/* Stars */}
      <Stars count={t.rating} />

      {/* Quote */}
      <p className="text-gray-300 text-sm leading-relaxed flex-1">
        &ldquo;{t.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-white/5">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
          {t.avatar}
        </div>
        <div>
          <p className="text-white text-sm font-semibold leading-tight">{t.name}</p>
          <p className="text-gray-500 text-xs">{t.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What Clients Say
          </h2>
          <p className="text-gray-500 max-w-xl">
            Feedback from founders, product managers, and teams I&apos;ve shipped real work with.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
