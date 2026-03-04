"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const row1 = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion",
  "Node.js", "Supabase", "PostgreSQL", "React Native", "Expo",
  "Vercel", "Figma", "Git", "VS Code", "OpenAI",
];

const row2 = [
  "iOS", "Android", "Express", "Stripe", "Sanity CMS",
  "REST API", "TypeScript", "Tailwind CSS", "Next.js", "React",
  "Supabase", "Vercel", "Figma", "Framer Motion", "Node.js",
];

function MarqueeRow({
  items,
  reverse = false,
  speed = 30,
}: {
  items: string[];
  reverse?: boolean;
  speed?: number;
}) {
  const doubled = [...items, ...items];

  return (
    <div className="flex overflow-hidden">
      <div
        className="flex gap-3 flex-nowrap whitespace-nowrap"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="px-4 py-1.5 rounded-full text-xs font-mono border border-white/8 bg-white/[0.03] text-gray-500 hover:text-orange-400 hover:border-orange-500/30 transition-colors duration-200 cursor-default flex-shrink-0"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechMarquee() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="py-10 overflow-hidden border-y border-white/[0.04]"
    >
      <div className="flex flex-col gap-3">
        <MarqueeRow items={row1} speed={35} />
        <MarqueeRow items={row2} reverse speed={28} />
      </div>
    </motion.div>
  );
}
