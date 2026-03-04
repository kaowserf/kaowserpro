"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/kaowser", icon: "GH" },
  { label: "Twitter / X", href: "https://x.com/kaowser", icon: "𝕏" },
  { label: "LinkedIn", href: "https://linkedin.com/in/kaowser", icon: "in" },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);

  const email = "kaowserpro@gmail.com";
  const whatsappNumber = "8801890273459";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Have a project in mind, want to collaborate, or just want to say hi?
            My inbox is always open.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href={`mailto:${email}`}
            className="px-8 py-3.5 rounded-full bg-orange-500 hover:bg-orange-400 text-white font-semibold text-sm transition-all duration-200 hover:shadow-[0_0_28px_rgba(249,115,22,0.45)]"
          >
            Send Me an Email
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-sm transition-all duration-200 hover:shadow-[0_0_28px_rgba(37,211,102,0.4)]"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Message on WhatsApp
          </a>
          <button
            onClick={handleCopyEmail}
            className="px-8 py-3.5 rounded-full border border-white/10 hover:border-orange-500/40 text-gray-300 hover:text-white font-semibold text-sm transition-all duration-200 font-mono"
          >
            {copied ? "Copied!" : email}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 hover:border-orange-500/40 bg-white/[0.02] hover:bg-orange-500/10 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 text-sm font-bold"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
