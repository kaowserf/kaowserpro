"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectInquiry from "@/components/ProjectInquiry";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

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

const CALENDLY_URL = "https://calendly.com/kaowserpro/30min";
const FIVERR_URL = "https://www.fiverr.com/kaowserpro/convert-web-to-app";
// TODO: Replace with actual demo APK download link
const DEMO_APK_URL = "#";

const features = [
  {
    icon: "📱",
    title: "App Icon with Your Logo",
    desc: "Custom app icon designed from your brand logo for a professional store presence.",
  },
  {
    icon: "🎬",
    title: "Custom Loading Animation",
    desc: "Smooth, branded loading animations that keep users engaged while content loads.",
  },
  {
    icon: "🌐",
    title: "Full Website Conversion",
    desc: "Complete conversion of your website into a native-feeling mobile app using WebView.",
  },
  {
    icon: "📡",
    title: "No Internet Detection",
    desc: "Custom offline page that gracefully handles network issues instead of showing errors.",
  },
  {
    icon: "⏳",
    title: "Loading Spinner",
    desc: "Integrated loading indicators so users always know content is on its way.",
  },
  {
    icon: "🖼️",
    title: "Splash Screen",
    desc: "Beautiful branded splash screen that displays while your app initializes.",
  },
  {
    icon: "🔔",
    title: "Push Notifications",
    desc: "Firebase-powered push notifications to re-engage users and drive traffic back to your app.",
  },
  {
    icon: "📂",
    title: "Side Drawer Navigation",
    desc: "Clean side drawer menu for easy navigation between different sections of your app.",
  },
  {
    icon: "💰",
    title: "Ad Network Integration",
    desc: "Monetize your app with AdMob, Unity Ads, or Facebook Ads — all ad formats supported.",
  },
  {
    icon: "📦",
    title: "Source Code + APK",
    desc: "You get the complete source code and ready-to-publish APK file. Full ownership.",
  },
  {
    icon: "🚀",
    title: "App Store Submission",
    desc: "I handle the submission process to Google Play Store and Apple App Store for you.",
  },
  {
    icon: "🔄",
    title: "Auto-Updates",
    desc: "Your app mirrors your website — when you update the site, the app updates automatically.",
  },
];

const platforms = [
  "WordPress",
  "WooCommerce",
  "Wix",
  "Shopify",
  "Blogger",
  "Any CMS",
  "Custom Websites",
];

const techStack = [
  { label: "Android Studio", category: "IDE" },
  { label: "Xcode", category: "IDE" },
  { label: "Flutter", category: "Framework" },
  { label: "React Native", category: "Framework" },
  { label: "Java", category: "Language" },
  { label: "Dart", category: "Language" },
  { label: "JavaScript", category: "Language" },
  { label: "Firebase", category: "Backend" },
];

const faqs = [
  {
    q: "Will all my website features work in the app?",
    a: "Yes! Sign-in, purchasing, forms, and all interactive features work perfectly in the app. I use advanced WebView configurations to ensure full compatibility.",
  },
  {
    q: "What platforms do you support?",
    a: "I build apps for both Android and iOS. Whether your site runs on WordPress, Shopify, Wix, WooCommerce, Blogger, or any custom CMS — I can convert it.",
  },
  {
    q: "Do I get the source code?",
    a: "Absolutely. You receive the complete source code, APK file, and full ownership. No lock-in, no recurring fees.",
  },
  {
    q: "What happens when I update my website?",
    a: "The app mirrors your website in real-time. Any changes you make to your site are automatically reflected in the app — no rebuilds needed.",
  },
  {
    q: "Can I publish the app on Google Play and App Store?",
    a: "Yes! The app is built to meet all store guidelines. I can also handle the submission process for you as part of the service.",
  },
  {
    q: "Do you integrate ads?",
    a: "Yes — I integrate all major ad networks including AdMob, Unity Ads, and Facebook Ads. All ad formats (banner, interstitial, rewarded) are supported.",
  },
];

export default function ConvertWebToAppPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-orange-500/10 blur-[120px]" />
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div>
            <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-5">
              <a
                href="/services"
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
              >
                Services
              </a>
              <span className="text-gray-600">/</span>
              <span className="text-orange-400 text-sm font-medium">
                Web to App
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight"
            >
              Convert Your{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Website
              </span>{" "}
              Into a Mobile App
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="text-gray-400 text-lg leading-relaxed mb-8"
            >
              I convert any website into a superfast Android &amp; iOS app using
              WebView. All features work perfectly — sign-in, purchases,
              everything. The app auto-updates when your site changes.
            </motion.p>

            <motion.div
              {...fadeUp(0.3)}
              className="flex flex-col sm:flex-row items-start gap-4 flex-wrap"
            >
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-orange-500 hover:bg-orange-400 text-white font-semibold text-sm transition-all duration-200 hover:shadow-[0_0_28px_rgba(249,115,22,0.45)]"
              >
                Book a Free Call
              </a>
              <a
                href={FIVERR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full border border-green-500/50 hover:border-green-400 text-green-400 hover:text-green-300 font-semibold text-sm transition-all duration-200"
              >
                Order on Fiverr
              </a>
              <a
                href={DEMO_APK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full border border-orange-500/50 hover:border-orange-400 text-orange-400 hover:text-orange-300 font-semibold text-sm transition-all duration-200 flex items-center gap-2"
              >
                <span>⬇</span> Download Demo APK
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              {...fadeUp(0.4)}
              className="flex items-center gap-6 mt-8 pt-8 border-t border-white/8"
            >
              <div>
                <div className="text-2xl font-bold text-white">$100</div>
                <div className="text-xs text-gray-500">Starting from</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="text-2xl font-bold text-white">7</div>
                <div className="text-xs text-gray-500">Day delivery</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="text-2xl font-bold text-white">&infin;</div>
                <div className="text-xs text-gray-500">Revisions</div>
              </div>
            </motion.div>
          </div>

          {/* Right — Cover Image */}
          <motion.div
            {...fadeUp(0.2)}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-orange-500/20 to-amber-500/10 blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10">
              <Image
                src="/convert website into Mobile App.png"
                alt="Convert Website to Mobile App"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3">
              Everything Included
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What You{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Get
              </span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto text-sm leading-relaxed">
              A complete web-to-app conversion with every feature you need
              to launch a professional mobile app.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                {...fadeUp(0.05 + i * 0.05)}
                className="group p-6 rounded-2xl border border-white/8 bg-white/[0.02] hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300"
              >
                <div className="text-2xl mb-3">{feat.icon}</div>
                <h3 className="text-white font-semibold text-sm mb-1.5 group-hover:text-orange-400 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3">
              Works With
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Supported{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Platforms
              </span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto text-sm leading-relaxed">
              No matter what your website is built with — I can convert it.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform, i) => (
              <motion.div
                key={platform}
                {...fadeUp(0.05 + i * 0.06)}
                className="px-6 py-3.5 rounded-2xl border border-white/8 bg-white/[0.02] hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300 text-sm font-medium text-gray-300 hover:text-white"
              >
                {platform}
              </motion.div>
            ))}
          </div>

          {/* Tech stack */}
          <motion.div {...fadeUp(0.3)} className="mt-16">
            <p className="text-center text-gray-500 text-xs uppercase tracking-widest mb-6">
              Tech Stack & Tools
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech.label}
                  className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/8 text-xs text-gray-400"
                >
                  {tech.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3">
              Simple Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              How It{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Share Your Website",
                desc: "Send me your website URL and any specific requirements or customizations you need.",
              },
              {
                step: "02",
                title: "App Development",
                desc: "I build your app with all features — push notifications, splash screen, ads, and more.",
              },
              {
                step: "03",
                title: "Review & Revisions",
                desc: "You test the app and request unlimited revisions until you're 100% satisfied.",
              },
              {
                step: "04",
                title: "Launch",
                desc: "I deliver the APK, source code, and handle the app store submission for you.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                {...fadeUp(0.1 + i * 0.1)}
                className="relative group p-6 rounded-2xl border border-white/8 bg-white/[0.02] hover:border-orange-500/20 hover:bg-orange-500/5 transition-all duration-300"
              >
                <span className="text-5xl font-black text-white/[0.04] absolute top-4 right-5 group-hover:text-orange-500/10 transition-colors">
                  {item.step}
                </span>
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 text-sm font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-white font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3">
              Pricing
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              One Plan,{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Everything Included
              </span>
            </h2>
          </motion.div>

          <motion.div
            {...fadeUp(0.1)}
            className="relative group rounded-3xl border border-orange-500/30 bg-gradient-to-b from-orange-500/10 to-transparent overflow-hidden"
          >
            {/* Badge */}
            <div className="absolute top-0 left-0 right-0 flex justify-center">
              <span className="px-4 py-1 text-xs font-semibold rounded-b-xl bg-orange-500 text-white">
                Pro Package
              </span>
            </div>

            <div className="p-10 pt-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                {/* Price */}
                <div>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-gray-400 text-lg font-medium">$</span>
                    <span className="text-6xl font-bold text-white leading-none">
                      100
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">
                    USD &middot; one-time &middot; 7-day delivery
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={FIVERR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3.5 rounded-full bg-orange-500 hover:bg-orange-400 text-white font-semibold text-sm transition-all duration-200 hover:shadow-[0_0_28px_rgba(249,115,22,0.45)] text-center"
                  >
                    Order on Fiverr
                  </a>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3.5 rounded-full border border-white/15 hover:border-orange-500/40 text-gray-300 hover:text-white font-semibold text-sm transition-all duration-200 text-center"
                  >
                    Book a Call First
                  </a>
                </div>
              </div>

              <div className="h-px bg-white/8 my-8" />

              {/* Included features */}
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Free app store submission",
                  "APK file + full source code",
                  "Custom app icon",
                  "Push notifications",
                  "No internet detection page",
                  "Side drawer navigation",
                  "Custom loading animation",
                  "Splash screen",
                  "Ad network integration",
                  "Unlimited revisions",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-[10px] text-orange-400 font-bold">
                      ✓
                    </span>
                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Custom budget note */}
          <motion.p
            {...fadeUp(0.2)}
            className="text-center text-gray-500 text-sm mt-6"
          >
            Have a specific budget?{" "}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 transition-colors"
            >
              Let&apos;s discuss it
            </a>
          </motion.p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-2xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3">
              FAQ
            </p>
            <h2 className="text-3xl font-bold text-white">
              Common Questions
            </h2>
          </motion.div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.05 + i * 0.07)}
                className="border border-white/8 rounded-2xl overflow-hidden bg-white/[0.02]"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-sm font-medium text-white pr-4">
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 text-orange-400 transition-transform duration-200 ${
                      openFaq === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <motion.div
          {...fadeUp(0.2)}
          className="max-w-3xl mx-auto text-center bg-gradient-to-b from-orange-500/10 to-transparent border border-orange-500/20 rounded-3xl p-12"
        >
          <div className="text-4xl mb-4">📱</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to Convert Your Website?
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8 max-w-md mx-auto">
            Get a professional Android &amp; iOS app from your existing website.
            Fast delivery, unlimited revisions, full source code.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={FIVERR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-orange-500 hover:bg-orange-400 text-white font-semibold text-sm transition-all duration-200 hover:shadow-[0_0_28px_rgba(249,115,22,0.45)]"
            >
              Order Now on Fiverr
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full border border-white/15 hover:border-orange-500/40 text-gray-300 hover:text-white font-semibold text-sm transition-all duration-200"
            >
              Book a Free Call
            </a>
          </div>
        </motion.div>
      </section>

      <ProjectInquiry />

      <Footer />
    </div>
  );
}
