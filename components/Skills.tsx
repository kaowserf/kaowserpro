"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiExpo,
  SiAndroid,
  SiApple,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiSupabase,
  SiGit,
  SiVercel,
  SiFigma,
  SiOpenai,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { IconType } from "react-icons";

interface Skill {
  label: string;
  icon: IconType;
}

interface Category {
  title: string;
  emoji: string;
  skills: Skill[];
}

const skillCategories: Category[] = [
  {
    title: "Frontend",
    emoji: "🖥️",
    skills: [
      { label: "React", icon: SiReact },
      { label: "Next.js", icon: SiNextdotjs },
      { label: "TypeScript", icon: SiTypescript },
      { label: "Tailwind CSS", icon: SiTailwindcss },
      { label: "Framer Motion", icon: SiFramer },
    ],
  },
  {
    title: "Mobile",
    emoji: "📱",
    skills: [
      { label: "React Native", icon: SiReact },
      { label: "Expo", icon: SiExpo },
      { label: "iOS", icon: SiApple },
      { label: "Android", icon: SiAndroid },
    ],
  },
  {
    title: "Backend",
    emoji: "⚙️",
    skills: [
      { label: "Node.js", icon: SiNodedotjs },
      { label: "Express", icon: SiExpress },
      { label: "PostgreSQL", icon: SiPostgresql },
      { label: "Supabase", icon: SiSupabase },
    ],
  },
  {
    title: "Tools",
    emoji: "🛠️",
    skills: [
      { label: "Git", icon: SiGit },
      { label: "Vercel", icon: SiVercel },
      { label: "Figma", icon: SiFigma },
      { label: "VS Code", icon: VscCode },
      { label: "AI Dev", icon: SiOpenai },
    ],
  },
];

const vibeCodingPoints = [
  "Flow-state development",
  "Rapid prototyping",
  "AI-augmented workflow",
  "Clean-first mindset",
];

function CategoryCard({ cat, cardIndex }: { cat: Category; cardIndex: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: cardIndex * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-orange-500/20 hover:bg-orange-500/5 transition-all duration-300 group"
    >
      <div className="flex items-center gap-2 mb-5">
        <motion.span
          initial={{ scale: 0, rotate: -20 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.4, delay: cardIndex * 0.1 + 0.2, type: "spring", stiffness: 260 }}
          className="text-lg"
        >
          {cat.emoji}
        </motion.span>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider group-hover:text-orange-400 transition-colors">
          {cat.title}
        </h3>
      </div>

      {/* Each skill row animates individually */}
      <div className="flex flex-col gap-2">
        {cat.skills.map((skill, si) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, x: -12 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: cardIndex * 0.1 + 0.15 + si * 0.07,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/5 hover:border-orange-500/30 hover:bg-orange-500/8 transition-all duration-200 group/skill"
            >
              <Icon className="w-4 h-4 text-gray-500 group-hover/skill:text-orange-400 transition-colors flex-shrink-0" />
              <span className="text-sm text-gray-300 group-hover/skill:text-white transition-colors">
                {skill.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

  const vibeRef = useRef(null);
  const vibeInView = useInView(vibeRef, { once: true, margin: "-60px" });

  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
            What I Work With
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((cat, i) => (
            <CategoryCard key={cat.title} cat={cat} cardIndex={i} />
          ))}
        </div>

        {/* Vibe Coding highlight */}
        <motion.div
          ref={vibeRef}
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={vibeInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative p-8 rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-600/10 to-amber-600/5 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-[80px] -z-10" />
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={vibeInView ? { rotate: [0, -15, 15, -10, 10, 0] } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-2xl"
                >
                  ⚡
                </motion.span>
                <h3 className="text-xl font-bold text-white">Vibe Coding</h3>
                <span className="px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300 text-xs font-medium border border-orange-500/30">
                  Signature Style
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-lg">
                My signature approach to development — high energy, full
                creative flow, and ruthless focus on shipping fast without
                compromising quality.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:flex-col md:gap-2">
              {vibeCodingPoints.map((point, i) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: 20 }}
                  animate={vibeInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.09 }}
                  className="flex items-center gap-2 text-sm text-gray-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                  {point}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
