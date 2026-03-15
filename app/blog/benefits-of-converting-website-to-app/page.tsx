"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectInquiry from "@/components/ProjectInquiry";
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

const tableOfContents = [
  { id: "higher-engagement", label: "1. Higher User Engagement" },
  { id: "push-notifications", label: "2. Push Notifications" },
  { id: "offline-access", label: "3. Offline Access" },
  { id: "faster-performance", label: "4. Faster Performance" },
  { id: "brand-visibility", label: "5. Brand Visibility" },
  { id: "device-features", label: "6. Device Features" },
  { id: "customer-loyalty", label: "7. Customer Loyalty" },
  { id: "revenue-streams", label: "8. Revenue Streams" },
  { id: "competitive-edge", label: "9. Competitive Edge" },
  { id: "seo-aso", label: "10. SEO + ASO" },
  { id: "how-it-works", label: "How the Conversion Works" },
  { id: "conclusion", label: "Conclusion" },
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-orange-500/10 blur-[120px]" />
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Breadcrumb */}
          <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-6">
            <a
              href="/blog"
              className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
            >
              Blog
            </a>
            <span className="text-gray-600">/</span>
            <span className="text-orange-400 text-sm font-medium">
              Mobile Development
            </span>
          </motion.div>

          {/* Meta */}
          <motion.div {...fadeUp(0.05)} className="flex items-center gap-3 mb-5">
            <span className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium">
              Mobile Development
            </span>
            <span className="text-gray-600 text-xs">8 min read</span>
            <span className="text-gray-600 text-xs">March 15, 2026</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            {...fadeUp(0.1)}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            10 Powerful Benefits of Converting Your Website Into a{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Mobile App
            </span>
          </motion.h1>

          {/* Excerpt */}
          <motion.p
            {...fadeUp(0.15)}
            className="text-gray-400 text-lg leading-relaxed mb-8"
          >
            In 2026, mobile accounts for over 70% of all internet traffic. If
            your business only has a website, you&apos;re leaving money on the
            table. Here&apos;s why converting your website into a mobile app is
            one of the smartest moves you can make — and how to do it right.
          </motion.p>

          {/* Author */}
          <motion.div {...fadeUp(0.2)} className="flex items-center gap-4 pb-8 border-b border-white/8">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
              <Image
                src="/developer.jpg"
                alt="Kaowser Ahmed"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Kaowser Ahmed</p>
              <p className="text-gray-500 text-xs">
                App & Web Developer
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="pb-12 px-6">
        <motion.div
          {...fadeUp(0.15)}
          className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/8"
        >
          <Image
            src="/convert website into Mobile App.png"
            alt="Benefits of Converting Website to Mobile App"
            width={1200}
            height={630}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>
      </section>

      {/* Content */}
      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_220px] gap-12">
            {/* Article body */}
            <motion.article
              {...fadeUp(0.2)}
              className="prose-custom"
            >
              {/* Table of Contents (mobile) */}
              <div className="lg:hidden mb-10 p-6 rounded-2xl border border-white/8 bg-white/[0.02]">
                <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
                  Table of Contents
                </h3>
                <nav className="flex flex-col gap-2">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Introduction */}
              <p className="text-gray-300 text-[15px] leading-[1.85] mb-6">
                Your website is already generating traffic, leads, and sales.
                But here&apos;s the reality: <strong className="text-white">mobile users behave differently than desktop
                users</strong>. They expect faster load times, smoother navigation, and
                experiences that feel native to their device. A responsive
                website is a great start, but a dedicated mobile app takes your
                business to an entirely different level.
              </p>
              <p className="text-gray-300 text-[15px] leading-[1.85] mb-6">
                Converting your website into a mobile app doesn&apos;t mean rebuilding
                from scratch. Modern tools and frameworks like{" "}
                <strong className="text-white">Flutter, React Native, and WebView technology</strong>{" "}
                allow developers to transform your existing website into a
                fully functional Android and iOS app — often within days, not months.
              </p>
              <p className="text-gray-300 text-[15px] leading-[1.85] mb-10">
                Let&apos;s dive into the <strong className="text-white">10 most powerful benefits</strong>{" "}
                of making this conversion.
              </p>

              {/* Benefit 1 */}
              <h2
                id="higher-engagement"
                className="text-2xl font-bold text-white mb-4 mt-12 scroll-mt-24"
              >
                1. Dramatically Higher User Engagement
              </h2>
              <p className="text-gray-300 text-[15px] leading-[1.85] mb-4">
                Studies consistently show that{" "}
                <strong className="text-white">mobile app users spend 3-4x more time</strong> interacting
                with a brand compared to mobile website visitors. Why? Because
                apps are faster, more intuitive, and feel like a natural part of
                the user&apos;s device.
              </p>
              <p className="text-gray-300 text-[15px] leading-[1.85] mb-4">
                When users install your app, they&apos;ve already shown intent.
                They&apos;ve committed screen real estate to your brand. This
                psychological commitment leads to higher engagement rates, more
                frequent visits, and longer session durations.
              </p>
              <div className="my-6 p-5 rounded-2xl border border-orange-500/20 bg-orange-500/[0.04]">
                <p className="text-orange-300 text-sm font-medium mb-1">Key stat</p>
                <p className="text-gray-300 text-sm">
                  Apps have a <strong className="text-white">157% higher conversion rate</strong> than
                  mobile websites, according to industry research from Criteo.
                </p>
              </div>

              {/* Benefit 2 */}
              <h2
                id="push-notifications"
                className="text-2xl font-bold text-white mb-4 mt-12 scroll-mt-24"
              >
                2. Push Notifications That Drive Action
              </h2>
              <p className="text-gray-300 text-[15px] leading-[1.85] mb-4">
                Push notifications are the single most powerful re-engagement
                tool available to mobile businesses. Unlike email (which has a
                ~20% open rate), push notifications achieve{" "}
                <strong className="text-white">open rates of 40-60%</strong> on
                Android and 30-40% on iOS.
              </p>
              <p className="text-gray-300 text-[15px] leading-[1.85] mb-4">
                With a mobile app, you can send targeted notifications for:
              </p>
              <ul className="mb-6 flex flex-col gap-2">
                {[
                  "Flash sales and limited-time promotions",
                  "Order status updates and delivery tracking",
                  "Abandoned cart reminders",
                  "New product or content announcements",
                  "Personalized recommendations based on user behavior",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                    <span className="text-gray-300 text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-300 text-[15px] leading-[1.85] mb-4">
                This direct line of communication with your users is impossible
                with a website alone. Push notifications bring users back to
                your app even when they aren&apos;t actively browsing.
              </p>

              {/* Benefit 3 */}
              <h2
                id="offline-access"
                className="text-2xl font-bold text-white mb-4 mt-12 scroll-mt-24"
              >
                3. Offline Access & Availability
              </h2>
              <p className="text-gray-300 text-[15px] leading-[1.85] mb-4">
                Websites require an active internet connection. Mobile apps
                don&apos;t — at least not entirely. With proper caching and
                offline-first architecture, your app can serve content, display
                product catalogs, and even queue user actions for when the
                connection returns.
              </p>
              <p className="text-gray-300 text-[15px] leading-[1.85] mb-4">
                This is especially critical for businesses targeting users in
                areas with unreliable connectivity, or for use cases like{" "}
                <strong className="text-white">
                  travel apps, restaurant menus, educational content, and
                  e-commerce catalogs
                </strong>{" "}
                where users need access regardless of their connection status.
              </p>

              {/* Benefit 4 */}
              <h2
                id="faster-performance"
                className="text-2xl font-bold text-white mb-4 mt-12 scroll-mt-24"
              >
                4. Significantly Faster Performance
              </h2>
              <p className="text-gray-300 text-[15px] leading-[1.85] mb-4">
                Mobile apps store data locally on the device, which means they
                can load content <strong className="text-white">up to 10x faster</strong> than mobile
                websites. There&apos;s no need to fetch entire web pages from a
                remote server every time the user interacts with your product.
              </p>
              <p className="text-gray-300 text-[15px] leading-[1.85] mb-4">
                Speed directly impacts revenue.{" "}
                <strong className="text-white">
                  Every 1-second delay in page load time reduces conversions by
                  7%
                </strong>
                . Apps eliminate the lag that causes users to bounce, leading to
                smoother experiences and higher completion rates for purchases,
                signups, and other key actions.
              </p>

              {/* Benefit 5 */}
              <h2
                id="brand-visibility"
                className="text-2xl font-bold text-white mb-4 mt-12 scroll-mt-24"
              >
                5. 24/7 Brand Visibility on the Home Screen
              </h2>
              <p className="text-gray-300 text-[15px] leading-[1.85] mb-4">
                The average person checks their phone{" "}
                <strong className="text-white">96 times per day</strong>. Every
                single time they unlock their phone, they see your app icon. This
                constant visual reminder keeps your brand top-of-mind in a way that
                a website bookmark or search engine result simply cannot match.
              </p>
              <p className="text-gray-300 text-[15px] leading-[1.85] mb-4">
                Your app icon becomes a mini billboard that lives in your
                customer&apos;s pocket — 24 hours a day, 7 days a week. It&apos;s
                the most cost-effective brand visibility you can get.
              </p>

              {/* Benefit 6 */}
              <h2
                id="device-features"
                className="text-2xl font-bold text-white mb-4 mt-12 scroll-mt-24"
              >
                6. Access to Native Device Features
              </h2>
              <p className="text-gray-300 text-[15px] leading-[1.85] mb-4">
                Mobile apps can tap into hardware and software features that
                websites simply cannot access — or can only access with
                significant limitations:
              </p>
              <div className="my-6 grid grid-cols-2 gap-3">
                {[
                  { icon: "📷", feature: "Camera & Gallery" },
                  { icon: "📍", feature: "GPS Location" },
                  { icon: "🎤", feature: "Microphone" },
                  { icon: "📲", feature: "Biometric Auth" },
                  { icon: "📁", feature: "File System" },
                  { icon: "📡", feature: "Bluetooth & NFC" },
                  { icon: "🔔", feature: "Notifications" },
                  { icon: "📞", feature: "Contacts" },
                ].map((item) => (
                  <div
                    key={item.feature}
                    className="flex items-center gap-3 p-3 rounded-xl border border-white/8 bg-white/[0.02]"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm text-gray-300">{item.feature}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-300 text-[15px] leading-[1.85] mb-4">
                These native capabilities enable features like barcode scanning,
                location-based offers, fingerprint login, and in-app camera
                functionality that create richer, more interactive user experiences.
              </p>

              {/* Benefit 7 */}
              <h2
                id="customer-loyalty"
                className="text-2xl font-bold text-white mb-4 mt-12 scroll-mt-24"
              >
                7. Stronger Customer Loyalty & Retention
              </h2>
              <p className="text-gray-300 text-[15px] leading-[1.85] mb-4">
                Apps create a direct, personal relationship between your brand
                and the user. Features like personalized dashboards, saved
                preferences, loyalty programs, and in-app messaging build
                emotional connections that websites rarely achieve.
              </p>
              <p className="text-gray-300 text-[15px] leading-[1.85] mb-4">
                <strong className="text-white">
                  App users have a 90-day retention rate that is 3x higher
                </strong>{" "}
                than mobile web users. When someone installs your app, they&apos;re
                far more likely to return repeatedly — especially with
                well-timed push notifications and personalized content.
              </p>

              {/* Benefit 8 */}
              <h2
                id="revenue-streams"
                className="text-2xl font-bold text-white mb-4 mt-12 scroll-mt-24"
              >
                8. New Revenue Streams & Monetization
              </h2>
              <p className="text-gray-300 text-[15px] leading-[1.85] mb-4">
                A mobile app opens up monetization options that don&apos;t exist
                on websites:
              </p>
              <ul className="mb-6 flex flex-col gap-2">
                {[
                  "In-app purchases and premium features",
                  "Subscription models with recurring revenue",
                  "In-app advertising (AdMob, Unity Ads, Facebook Ads)",
                  "Sponsored content and partner promotions",
                  "Mobile-exclusive deals that drive app downloads",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                    <span className="text-gray-300 text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-300 text-[15px] leading-[1.85] mb-4">
                Many businesses find that their app generates{" "}
                <strong className="text-white">2-3x more revenue per user</strong>{" "}
                compared to their mobile website, thanks to higher engagement
                and smoother checkout experiences.
              </p>

              {/* Benefit 9 */}
              <h2
                id="competitive-edge"
                className="text-2xl font-bold text-white mb-4 mt-12 scroll-mt-24"
              >
                9. A Serious Competitive Edge
              </h2>
              <p className="text-gray-300 text-[15px] leading-[1.85] mb-4">
                Here&apos;s a reality check:{" "}
                <strong className="text-white">
                  most of your competitors don&apos;t have a mobile app
                </strong>
                . They&apos;re relying on websites and social media alone.
                Having a dedicated app immediately positions your brand as more
                professional, more accessible, and more committed to customer
                experience.
              </p>
              <p className="text-gray-300 text-[15px] leading-[1.85] mb-4">
                In industries like e-commerce, restaurants, fitness, education,
                and healthcare, a mobile app is no longer a luxury — it&apos;s
                becoming an expectation. Being early gives you a first-mover
                advantage that&apos;s hard for competitors to overcome.
              </p>

              {/* Benefit 10 */}
              <h2
                id="seo-aso"
                className="text-2xl font-bold text-white mb-4 mt-12 scroll-mt-24"
              >
                10. Double Your Discoverability: SEO + ASO
              </h2>
              <p className="text-gray-300 text-[15px] leading-[1.85] mb-4">
                Your website ranks on Google. Your app ranks on the{" "}
                <strong className="text-white">
                  Google Play Store and Apple App Store
                </strong>
                . That&apos;s two separate discovery channels reaching two
                different audiences.
              </p>
              <p className="text-gray-300 text-[15px] leading-[1.85] mb-4">
                App Store Optimization (ASO) is the mobile equivalent of SEO.
                With the right keywords, screenshots, and descriptions, your app
                can rank for searches that your website might never capture.
                Google also indexes app content and shows app install prompts in
                mobile search results, creating a powerful synergy between your
                web and app presence.
              </p>

              {/* How It Works */}
              <h2
                id="how-it-works"
                className="text-2xl font-bold text-white mb-4 mt-16 scroll-mt-24"
              >
                How the Website-to-App Conversion Works
              </h2>
              <p className="text-gray-300 text-[15px] leading-[1.85] mb-4">
                Converting your website to a mobile app is simpler than most
                people think. Here&apos;s the typical process:
              </p>
              <div className="my-6 flex flex-col gap-4">
                {[
                  {
                    step: "01",
                    title: "WebView Integration",
                    desc: "Your website is wrapped in a native WebView container that runs inside a real Android/iOS app. All your website features — login, checkout, forms — work seamlessly.",
                  },
                  {
                    step: "02",
                    title: "Native Enhancements",
                    desc: "Push notifications, splash screens, app icons, loading animations, offline detection, and side drawer navigation are added as native features on top of your web content.",
                  },
                  {
                    step: "03",
                    title: "Ad Integration (Optional)",
                    desc: "AdMob, Unity Ads, or Facebook Ads can be integrated to monetize your app from day one.",
                  },
                  {
                    step: "04",
                    title: "Testing & Submission",
                    desc: "The app is tested on multiple devices, optimized for performance, and submitted to the Google Play Store and Apple App Store.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex gap-5 p-5 rounded-2xl border border-white/8 bg-white/[0.02]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-400 text-xs font-bold">
                        {item.step}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-300 text-[15px] leading-[1.85] mb-4">
                The best part?{" "}
                <strong className="text-white">
                  Your app mirrors your website and automatically updates when
                  you make changes
                </strong>
                . Update your website content once, and the app reflects those
                changes instantly — no separate app updates needed.
              </p>

              {/* Conclusion */}
              <h2
                id="conclusion"
                className="text-2xl font-bold text-white mb-4 mt-16 scroll-mt-24"
              >
                Conclusion: Don&apos;t Leave Mobile Revenue on the Table
              </h2>
              <p className="text-gray-300 text-[15px] leading-[1.85] mb-4">
                Converting your website into a mobile app isn&apos;t a trend —
                it&apos;s a business necessity. With{" "}
                <strong className="text-white">
                  higher engagement, push notifications, offline access, faster
                  performance, and new revenue streams
                </strong>
                , a mobile app amplifies everything your website already does
                and puts your brand directly in your customers&apos; hands.
              </p>
              <p className="text-gray-300 text-[15px] leading-[1.85] mb-4">
                The technology to make this conversion is mature, affordable,
                and fast. Whether you&apos;re running WordPress, Shopify, Wix,
                WooCommerce, or a custom website — it can be converted into a
                professional mobile app in as little as 7 days.
              </p>
              <p className="text-gray-300 text-[15px] leading-[1.85] mb-8">
                The question isn&apos;t <em>should</em> you convert your website
                to an app. The question is:{" "}
                <strong className="text-white">how soon can you start?</strong>
              </p>

              {/* CTA Box */}
              <div className="p-8 rounded-3xl bg-gradient-to-b from-orange-500/10 to-transparent border border-orange-500/20 text-center">
                <h3 className="text-xl font-bold text-white mb-3">
                  Ready to Convert Your Website Into an App?
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md mx-auto">
                  I convert websites into superfast Android & iOS apps with push
                  notifications, ad integration, and full source code — starting
                  at $100.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="/services/convert-web-to-app"
                    className="px-8 py-3.5 rounded-full bg-orange-500 hover:bg-orange-400 text-white font-semibold text-sm transition-all duration-200 hover:shadow-[0_0_28px_rgba(249,115,22,0.45)]"
                  >
                    View Service Details
                  </a>
                  <a
                    href="https://calendly.com/kaowserpro/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3.5 rounded-full border border-white/15 hover:border-orange-500/40 text-gray-300 hover:text-white font-semibold text-sm transition-all duration-200"
                  >
                    Book a Free Call
                  </a>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-white/8">
                <p className="text-gray-600 text-xs uppercase tracking-wider font-medium mb-3">
                  Tags
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Website to App",
                    "Mobile App Development",
                    "WebView",
                    "Android App",
                    "iOS App",
                    "Push Notifications",
                    "App Conversion",
                    "Flutter",
                    "React Native",
                    "Mobile Marketing",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full border border-white/8 bg-white/[0.02] text-xs text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-8 pt-8 border-t border-white/8">
                <p className="text-gray-600 text-xs uppercase tracking-wider font-medium mb-3">
                  Share this article
                </p>
                <div className="flex gap-3">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("10 Powerful Benefits of Converting Your Website Into a Mobile App")}&url=${encodeURIComponent("https://kaowserpro.com/blog/benefits-of-converting-website-to-app")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/8 bg-white/[0.02] text-xs text-gray-500 transition-all hover:border-white/30 hover:text-white"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    Twitter
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://kaowserpro.com/blog/benefits-of-converting-website-to-app")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/8 bg-white/[0.02] text-xs text-gray-500 transition-all hover:border-blue-500/30 hover:text-blue-400"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://kaowserpro.com/blog/benefits-of-converting-website-to-app")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/8 bg-white/[0.02] text-xs text-gray-500 transition-all hover:border-blue-600/30 hover:text-blue-500"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </a>
                </div>
              </div>
            </motion.article>

            {/* Sidebar — Table of Contents (desktop) */}
            <motion.aside
              {...fadeUp(0.3)}
              className="hidden lg:block"
            >
              <div className="sticky top-28">
                <div className="p-5 rounded-2xl border border-white/8 bg-white/[0.02]">
                  <h3 className="text-white font-bold text-xs mb-4 uppercase tracking-wider">
                    Table of Contents
                  </h3>
                  <nav className="flex flex-col gap-2">
                    {tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="text-gray-500 hover:text-orange-400 text-xs leading-relaxed transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Author card */}
                <div className="mt-6 p-5 rounded-2xl border border-white/8 bg-white/[0.02] text-center">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border border-white/10 mx-auto mb-3">
                    <Image
                      src="/developer.jpg"
                      alt="Kaowser Ahmed"
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <p className="text-white font-semibold text-sm">
                    Kaowser Ahmed
                  </p>
                  <p className="text-gray-500 text-xs mb-3">
                    App & Web Developer
                  </p>
                  <a
                    href="/services/convert-web-to-app"
                    className="inline-block w-full py-2 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium hover:bg-orange-500/20 transition-colors"
                  >
                    Hire Me
                  </a>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Project Inquiry Form */}
      <ProjectInquiry />

      <Footer />
    </div>
  );
}
