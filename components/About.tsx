"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const stats = [
  { value: "2+", label: "Years Experience", num: 2, suffix: "+" },
  { value: "10+", label: "Projects Built", num: 10, suffix: "+" },
  { value: "∞", label: "Vibe Level", num: null, suffix: "" },
];

function AnimatedStat({
  stat,
  delay,
  trigger,
}: {
  stat: (typeof stats)[0];
  delay: number;
  trigger: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger || stat.num === null) return;
    const duration = 1400;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * (stat.num as number)));
      if (progress < 1) requestAnimationFrame(animate);
    };
    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [trigger, stat.num]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={trigger ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-orange-500/20 hover:bg-orange-500/5 transition-all duration-300 text-center"
    >
      <div className="text-3xl font-bold text-white mb-1">
        {stat.num !== null ? `${count}${stat.suffix}` : (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={trigger ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay, type: "spring", stiffness: 200 }}
          >
            {stat.value}
          </motion.span>
        )}
      </div>
      <div className="text-sm text-gray-500">{stat.label}</div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — profile image + stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col items-center md:items-start gap-8"
          >
            {/* Profile image */}
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] mx-auto md:mx-0">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-orange-500/25 to-amber-500/15 blur-xl" />
              <motion.div
                initial={{ scale: 1.04 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative w-full h-[420px] sm:h-[480px] rounded-3xl overflow-hidden border border-white/10"
              >
                <Image
                  src="/developer.jpg"
                  alt="Kaowser Ahmed"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </motion.div>
            </div>

            {/* Animated stats */}
            <div className="grid grid-cols-3 gap-4 w-full">
              {stats.map((stat, i) => (
                <AnimatedStat
                  key={stat.label}
                  stat={stat}
                  delay={0.4 + i * 0.12}
                  trigger={isInView}
                />
              ))}
            </div>
          </motion.div>

          {/* Right — bio text */}
          <div className="space-y-5">
            {[
              {
                content: (
                  <p className="text-gray-300 text-lg leading-relaxed">
                    I&apos;m <strong className="text-white">Kaowser Ahmed</strong>, an
                    App &amp; Web Developer who builds modern, high-performance digital
                    products. My workflow is driven by what I call{" "}
                    <strong className="text-orange-400">Vibe Coding</strong> — a
                    creative, flow-state approach to development where ideas come to
                    life fast without sacrificing quality.
                  </p>
                ),
                delay: 0.2,
              },
              {
                content: (
                  <p className="text-gray-400 leading-relaxed">
                    I work with modern stacks — Next.js, React Native, TypeScript, and
                    Tailwind CSS — to deliver polished UIs and solid backends. Whether
                    it&apos;s a landing page, a full-stack app, or a mobile experience,
                    I focus on clean code, fast delivery, and real results.
                  </p>
                ),
                delay: 0.3,
              },
              {
                content: (
                  <p className="text-gray-400 leading-relaxed">
                    I believe great software comes from understanding people first,
                    then building accordingly.
                  </p>
                ),
                delay: 0.4,
              },
              {
                content: (
                  <div className="pt-2">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium text-sm transition-colors group"
                    >
                      Let&apos;s work together
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                ),
                delay: 0.5,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: item.delay, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {item.content}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
