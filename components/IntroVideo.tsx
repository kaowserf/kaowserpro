"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const VIDEO_ID = "CCK7dVmvm44";

const embedUrl =
  `https://www.youtube.com/embed/${VIDEO_ID}` +
  `?autoplay=1&mute=1&controls=0&loop=1&playlist=${VIDEO_ID}` +
  `&rel=0&modestbranding=1&showinfo=0&iv_load_policy=3&disablekb=1&fs=0&playsinline=1`;

export default function IntroVideo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center"
        >
          <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3">
            Intro
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Meet Kaowser
          </h2>
        </motion.div>

        {/* Video wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative rounded-2xl overflow-hidden border border-white/8 shadow-[0_0_60px_rgba(249,115,22,0.12)]"
        >
          {/* 16:9 aspect box — iframe scaled up and offset to crop the YouTube title overlay */}
          <div className="relative w-full overflow-hidden" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src={embedUrl}
              allow="autoplay; encrypted-media"
              allowFullScreen={false}
              title="Kaowser Pro — Intro Video"
              style={{
                position: "absolute",
                top: "-8%",
                left: "-3%",
                width: "106%",
                height: "116%",
                border: "none",
              }}
            />
            {/* Transparent click-blocker — prevents any interaction with the player */}
            <div className="absolute inset-0 z-10 cursor-default" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
