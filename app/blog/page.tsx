"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

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

const posts = [
  {
    slug: "benefits-of-converting-website-to-app",
    title: "10 Powerful Benefits of Converting Your Website Into a Mobile App",
    excerpt:
      "Discover why businesses are turning their websites into mobile apps — from 3x higher engagement to push notifications and offline access that keep users coming back.",
    category: "Mobile Development",
    date: "March 15, 2026",
    readTime: "8 min read",
    image: "/convert website into Mobile App.png",
    featured: true,
  },
];

export default function BlogPage() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

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
          Insights & Guides
        </motion.p>
        <motion.h1
          {...fadeUp(0.1)}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight"
        >
          The{" "}
          <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
            Blog
          </span>
        </motion.h1>
        <motion.p
          {...fadeUp(0.2)}
          className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed"
        >
          Tips, tutorials, and insights on web development, mobile apps, and
          growing your business online.
        </motion.p>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.a
              href={`/blog/${featured.slug}`}
              {...fadeUp(0.1)}
              className="group block rounded-3xl border border-white/8 bg-white/[0.02] hover:border-orange-500/30 hover:bg-orange-500/[0.03] transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium">
                      {featured.category}
                    </span>
                    <span className="text-gray-600 text-xs">
                      {featured.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-orange-400 transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-xs">{featured.date}</span>
                    <span className="flex items-center gap-2 text-orange-400 text-sm font-medium group-hover:gap-3 transition-all">
                      Read Article <span>→</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      {rest.length > 0 && (
        <section className="pb-24 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              {...fadeUp(0)}
              className="text-xl font-bold text-white mb-8"
            >
              All Articles
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post, i) => (
                <motion.a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  {...fadeUp(0.05 + i * 0.08)}
                  className="group rounded-2xl border border-white/8 bg-white/[0.02] hover:border-orange-500/30 hover:bg-orange-500/[0.03] transition-all duration-300 overflow-hidden block"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-600 text-[10px]">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-2 leading-snug group-hover:text-orange-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 text-gray-600 text-xs">
                      {post.date}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="pb-24 px-6">
        <motion.div
          {...fadeUp(0.2)}
          className="max-w-3xl mx-auto text-center bg-gradient-to-b from-orange-500/10 to-transparent border border-orange-500/20 rounded-3xl p-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Stay in the Loop
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8 max-w-md mx-auto">
            Get the latest articles, tips, and insights delivered straight to
            your inbox. No spam — just value.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-5 py-3 rounded-full bg-white/[0.04] border border-white/10 text-white text-sm placeholder:text-gray-600 focus:border-orange-500/50 focus:outline-none transition-colors"
            />
            <button className="w-full sm:w-auto px-8 py-3 rounded-full bg-orange-500 hover:bg-orange-400 text-white font-semibold text-sm transition-all duration-200 hover:shadow-[0_0_28px_rgba(249,115,22,0.45)] whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
