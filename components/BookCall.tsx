"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { InlineWidget } from "react-calendly";

const CALENDLY_URL = "https://calendly.com/kaowserpro/30min";

export default function BookCall() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="book" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3">
            Book a Call
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Schedule a{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Free Meeting
            </span>
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Pick a time that works for you and let&apos;s talk about your project — no pressure, no commitment.
          </p>
        </motion.div>

        {/* Calendly inline embed — always visible */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="rounded-2xl overflow-hidden border border-orange-500/20 shadow-[0_0_60px_rgba(249,115,22,0.08)]"
        >
          <InlineWidget
            url={CALENDLY_URL}
            styles={{ height: "700px", minWidth: "320px" }}
            pageSettings={{
              backgroundColor: "0a0a0f",
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: "f97316",
              textColor: "ffffff",
            }}
          />
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs text-gray-600"
        >
          {["No spam, ever", "Free 30-min call", "Cancel anytime"].map((item) => (
            <div key={item} className="flex items-center gap-1.5">
              <span className="text-orange-500">✓</span>
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
