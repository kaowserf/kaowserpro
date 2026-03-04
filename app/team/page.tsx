"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "Kaowser Ahmed",
    role: "Founder & Lead Developer",
    bio: "App & Web Developer with a passion for building fast, modern digital experiences. Vibe Coder at heart.",
    image: "/developer.jpg",
    initials: "KA",
    socials: {
      github: "https://github.com/kaowser",
      x: "https://x.com/kaowser",
      linkedin: "https://linkedin.com/in/kaowser",
    },
    badge: "🚀 Founder",
    dept: "Leadership",
  },
  {
    name: "Team Member",
    role: "Project Manager",
    bio: "Keeping every project on track, on time, and on budget. The glue that holds the team together and clients happy.",
    image: null,
    initials: "PM",
    socials: {},
    badge: "📋 Operations",
    dept: "Operations",
  },
  {
    name: "Team Member",
    role: "Lead Designer",
    bio: "Setting the visual direction for every product. From brand identity to design systems — crafted to impress.",
    image: null,
    initials: "LD",
    socials: {},
    badge: "🎨 Design",
    dept: "Design",
  },
  {
    name: "Team Member",
    role: "UI/UX Designer",
    bio: "Turning complex user flows into intuitive, beautiful interfaces. Every click, every screen, designed with purpose.",
    image: null,
    initials: "UX",
    socials: {},
    badge: "✏️ UI/UX",
    dept: "Design",
  },
  {
    name: "Team Member",
    role: "Backend Engineer",
    bio: "Building robust, scalable server-side systems and APIs that power great applications without breaking a sweat.",
    image: null,
    initials: "BE",
    socials: {},
    badge: "⚙️ Backend",
    dept: "Engineering",
  },
  {
    name: "Team Member",
    role: "Marketing Lead",
    bio: "Driving awareness, leads, and brand growth through data-driven campaigns and creative strategy.",
    image: null,
    initials: "ML",
    socials: {},
    badge: "📣 Marketing",
    dept: "Marketing",
  },
  {
    name: "Team Member",
    role: "Organic Growth Specialist",
    bio: "Growing audiences the right way — SEO, content, social, and community. No paid shortcuts, just real traction.",
    image: null,
    initials: "OG",
    socials: {},
    badge: "🌱 Growth",
    dept: "Marketing",
  },
  {
    name: "Team Member",
    role: "Customer Support Specialist",
    bio: "First point of contact for every client. Fast responses, clear answers, and a calm head when things get complex.",
    image: null,
    initials: "CS",
    socials: {},
    badge: "🎧 Support",
    dept: "Support",
  },
];

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

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Navbar />

      {/* Page Header */}
      <section className="pt-36 pb-16 px-6 text-center relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-orange-500/10 blur-[100px]" />
        </div>

        <motion.p
          {...fadeUp(0)}
          className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3"
        >
          The People Behind the Work
        </motion.p>
        <motion.h1
          {...fadeUp(0.1)}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight"
        >
          Meet the{" "}
          <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
            Team
          </span>
        </motion.h1>
        <motion.p
          {...fadeUp(0.2)}
          className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed"
        >
          A full crew of builders, designers, marketers, and managers —
          every role covered, every project shipped right.
        </motion.p>

        {/* Dept pill stats */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-wrap items-center justify-center gap-3 mt-8"
        >
          {[
            { label: "Leadership", color: "border-orange-500/40 text-orange-400 bg-orange-500/10" },
            { label: "Design", color: "border-pink-500/40 text-pink-400 bg-pink-500/10" },
            { label: "Engineering", color: "border-cyan-500/40 text-cyan-400 bg-cyan-500/10" },
            { label: "Marketing", color: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10" },
            { label: "Operations", color: "border-purple-500/40 text-purple-400 bg-purple-500/10" },
            { label: "Support", color: "border-sky-500/40 text-sky-400 bg-sky-500/10" },
          ].map((d) => (
            <span
              key={d.label}
              className={`px-3 py-1 rounded-full border text-xs font-medium ${d.color}`}
            >
              {d.label}
            </span>
          ))}
        </motion.div>
      </section>

      {/* Team Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.1 + i * 0.09)}
              className="group relative bg-white/[0.03] border border-white/8 rounded-3xl overflow-hidden hover:border-orange-500/30 hover:bg-white/[0.05] transition-all duration-300"
            >
              {/* Card top badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 font-medium">
                  {member.badge}
                </span>
              </div>

              {/* Image / Avatar */}
              <div className="relative h-64 bg-gradient-to-br from-orange-500/10 to-amber-500/5 overflow-hidden">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500/30 to-amber-500/20 border border-orange-500/30 flex items-center justify-center">
                      <span className="text-3xl font-bold text-orange-400">
                        {member.initials}
                      </span>
                    </div>
                  </div>
                )}
                {/* Bottom gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0d0d14] to-transparent" />
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-2 mb-0.5">
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {member.name}
                  </h3>
                  <span className={`flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full border mt-1 ${
                    member.dept === "Design"      ? "border-pink-500/30 text-pink-400 bg-pink-500/10" :
                    member.dept === "Engineering" ? "border-cyan-500/30 text-cyan-400 bg-cyan-500/10" :
                    member.dept === "Marketing"   ? "border-emerald-500/30 text-emerald-400 bg-emerald-500/10" :
                    member.dept === "Operations"  ? "border-purple-500/30 text-purple-400 bg-purple-500/10" :
                    member.dept === "Support"     ? "border-sky-500/30 text-sky-400 bg-sky-500/10" :
                                                    "border-orange-500/30 text-orange-400 bg-orange-500/10"
                  }`}>
                    {member.dept}
                  </span>
                </div>
                <p className="text-orange-400 text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {member.bio}
                </p>

                {/* Socials */}
                {Object.keys(member.socials).length > 0 && (
                  <div className="flex items-center gap-3">
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-orange-500/40 hover:bg-orange-500/10 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 text-xs font-bold"
                        aria-label="GitHub"
                      >
                        GH
                      </a>
                    )}
                    {member.socials.x && (
                      <a
                        href={member.socials.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-orange-500/40 hover:bg-orange-500/10 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 text-xs font-bold"
                        aria-label="X / Twitter"
                      >
                        𝕏
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-orange-500/40 hover:bg-orange-500/10 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 text-xs font-bold"
                        aria-label="LinkedIn"
                      >
                        in
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Hover orange glow bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500/0 via-orange-500/60 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Join the team CTA */}
      <section className="pb-24 px-6">
        <motion.div
          {...fadeUp(0.3)}
          className="max-w-2xl mx-auto text-center bg-white/[0.03] border border-white/8 rounded-3xl p-12 hover:border-orange-500/20 transition-colors duration-300"
        >
          <div className="text-4xl mb-4">🤝</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Want to Join the Team?
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            We&apos;re always looking for talented people who love building
            great products. If that&apos;s you, let&apos;s talk.
          </p>
          <a
            href="mailto:kaowserpro@gmail.com"
            className="inline-block px-8 py-3.5 rounded-full bg-orange-500 hover:bg-orange-400 text-white font-semibold text-sm transition-all duration-200 hover:shadow-[0_0_28px_rgba(249,115,22,0.45)]"
          >
            Get in Touch
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
