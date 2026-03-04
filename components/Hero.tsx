"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const, delay },
});

const floatingOrbs = [
  {
    className:
      "absolute top-[15%] left-[10%] w-[420px] h-[420px] rounded-full bg-orange-500/15 blur-[100px]",
    animate: { x: [0, 40, -20, 0], y: [0, -30, 40, 0], scale: [1, 1.08, 0.95, 1] },
    duration: 14,
  },
  {
    className:
      "absolute top-[40%] right-[5%] w-[350px] h-[350px] rounded-full bg-amber-500/10 blur-[90px]",
    animate: { x: [0, -50, 20, 0], y: [0, 40, -30, 0], scale: [1, 0.92, 1.06, 1] },
    duration: 18,
  },
  {
    className:
      "absolute bottom-[10%] left-[30%] w-[300px] h-[300px] rounded-full bg-orange-600/12 blur-[80px]",
    animate: { x: [0, 25, -35, 0], y: [0, -20, 30, 0], scale: [1, 1.1, 0.96, 1] },
    duration: 11,
  },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Raw mouse position
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  // Smoothed with spring for a trailing glow effect
  const glowX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const glowY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    const handleMouseLeave = () => {
      mouseX.set(-500);
      mouseY.set(-500);
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* Mouse-following glow */}
      <motion.div
        className="pointer-events-none absolute w-[180px] h-[180px] rounded-full blur-[60px] bg-orange-500/30 -translate-x-1/2 -translate-y-1/2"
        style={{ left: glowX, top: glowY }}
      />

      {/* Animated orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          animate={orb.animate}
          transition={{ duration: orb.duration, repeat: Infinity, ease: "easeInOut" }}
          className={orb.className}
        />
      ))}

      {/* Grid mesh */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(249,115,22,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial fade over grid */}
      <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-transparent to-[#0a0a0f]/80" />

      {/* Floating tech labels */}
      {[
        { text: "Next.js", x: "8%", y: "25%" },
        { text: "React Native", x: "78%", y: "20%" },
        { text: "TypeScript", x: "85%", y: "68%" },
        { text: "Tailwind CSS", x: "5%", y: "72%" },
      ].map((tag, i) => (
        <motion.span
          key={tag.text}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.35, 0.25, 0.35] }}
          transition={{ duration: 4, delay: 1.5 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute hidden lg:block text-xs font-mono text-orange-400/40 select-none pointer-events-none"
          style={{ left: tag.x, top: tag.y }}
        >
          {tag.text}
        </motion.span>
      ))}

      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Badge */}
        <motion.div
          {...fadeUp(0.1)}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-300 text-xs font-medium mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
          Available for new projects
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
            Kaowser
          </span>
        </motion.h1>

        {/* Role */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-xl sm:text-2xl text-gray-400 font-medium mb-4"
        >
          App &amp; Web Developer
          <span className="text-orange-500 mx-2">•</span>
          Vibe Coder
        </motion.p>

        {/* Value prop */}
        <motion.p
          {...fadeUp(0.4)}
          className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          I build fast, clean, and modern digital experiences — combining
          technical precision with creative flow to ship products people love.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.5)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full bg-orange-500 hover:bg-orange-400 text-white font-semibold text-sm transition-all duration-200 hover:shadow-[0_0_28px_rgba(249,115,22,0.45)]"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full border border-white/10 hover:border-orange-500/40 text-gray-300 hover:text-white font-semibold text-sm transition-all duration-200"
          >
            View Projects
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-600 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-orange-600/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
