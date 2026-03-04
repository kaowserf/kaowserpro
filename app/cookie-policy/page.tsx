"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const cookieTypes = [
  {
    type: "Strictly Necessary",
    color: "border-orange-500/30 bg-orange-500/10 text-orange-400",
    canDisable: false,
    desc: "These cookies are essential for the website to function and cannot be switched off. They are usually set in response to actions you take such as setting your privacy preferences, logging in, or filling in forms.",
    examples: ["Session cookies", "Security tokens", "Load balancing cookies"],
  },
  {
    type: "Analytics & Performance",
    color: "border-blue-500/30 bg-blue-500/10 text-blue-400",
    canDisable: true,
    desc: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. All information collected is aggregated and therefore anonymous.",
    examples: ["Google Analytics (_ga, _gid)", "Page view tracking", "Session duration"],
  },
  {
    type: "Functional",
    color: "border-purple-500/30 bg-purple-500/10 text-purple-400",
    canDisable: true,
    desc: "These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third-party providers whose services we have added to our pages.",
    examples: ["Language preferences", "Theme settings", "Calendly embed preferences"],
  },
  {
    type: "Third-Party",
    color: "border-amber-500/30 bg-amber-500/10 text-amber-400",
    canDisable: true,
    desc: "Some pages on our site embed third-party services such as Calendly and YouTube. These services may set their own cookies independently. We have no control over these cookies.",
    examples: ["Calendly scheduling widget", "YouTube video player", "Social share buttons"],
  },
];

const sections = [
  {
    title: "What Are Cookies?",
    body: `Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.

Cookies can be "session cookies" (deleted when you close your browser) or "persistent cookies" (stored on your device for a set period of time or until you delete them).`,
  },
  {
    title: "How We Use Cookies",
    body: `We use cookies to:

• Ensure the website functions correctly and securely.
• Analyse how visitors use our website so we can improve it.
• Remember your preferences for a better experience.
• Enable third-party services embedded on our pages (e.g., Calendly, YouTube).

We do not use cookies to track you across other websites or serve targeted advertising.`,
  },
  {
    title: "Managing Your Cookie Preferences",
    body: `You can control and manage cookies in several ways:

• **Browser settings** — Most browsers allow you to block or delete cookies through settings. Refer to your browser's help documentation for instructions.
• **Opt-out tools** — For analytics cookies, you can opt out via the Google Analytics Opt-out Browser Add-on.
• **Third-party opt-outs** — Visit the relevant third-party websites to manage their cookies.

Please note that blocking certain cookies may affect the functionality of our website and the services we offer.`,
  },
  {
    title: "Updates to This Policy",
    body: `We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our practices. Any updates will be posted on this page with a revised effective date.`,
  },
  {
    title: "Contact Us",
    body: `If you have any questions about our use of cookies, please contact us:

• **Email:** kaowserpro@gmail.com
• **WhatsApp:** +880 1890 273 459`,
  },
];

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Navbar />

      <section className="pt-36 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full bg-orange-500/8 blur-[120px]" />
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-orange-400 text-xs font-medium tracking-widest uppercase mb-3">Legal</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Cookie Policy</h1>
            <p className="text-gray-500 text-sm">
              Effective date: <span className="text-gray-400">January 1, 2025</span>
            </p>
            <p className="text-gray-400 mt-4 leading-relaxed">
              This Cookie Policy explains what cookies are, how Kaowser Pro uses them on this website,
              and your choices regarding cookies.
            </p>
          </motion.div>

          {/* Cookie type cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-lg font-semibold text-white mb-6">Cookies We Use</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {cookieTypes.map((ct, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl border border-white/8 bg-white/[0.02]"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${ct.color}`}>
                      {ct.type}
                    </span>
                    <span className={`text-[10px] font-medium ${ct.canDisable ? "text-gray-500" : "text-orange-400"}`}>
                      {ct.canDisable ? "Optional" : "Required"}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed mb-3">{ct.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {ct.examples.map((ex, ei) => (
                      <span key={ei} className="px-2 py-0.5 rounded bg-white/5 text-gray-500 text-[10px] font-mono">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Text sections */}
          <div className="flex flex-col gap-8">
            {sections.map((sec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
                className="border-b border-white/5 pb-8 last:border-0"
              >
                <h2 className="text-lg font-semibold text-white mb-4">{sec.title}</h2>
                <div className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                  {sec.body.split("**").map((part, pi) =>
                    pi % 2 === 1 ? (
                      <strong key={pi} className="text-gray-200 font-medium">{part}</strong>
                    ) : (
                      <span key={pi}>{part}</span>
                    )
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
