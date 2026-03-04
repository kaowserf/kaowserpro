"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Information We Collect",
    body: `When you visit our website or contact us, we may collect the following information:

• **Name and contact details** — when you fill out a contact form, book a call, or send an email.
• **Usage data** — pages visited, time spent, browser type, and device information collected automatically via analytics tools.
• **Communication data** — messages sent via email, WhatsApp, or any other contact channel.
• **Payment information** — processed securely through third-party payment providers. We do not store card details on our servers.`,
  },
  {
    title: "2. How We Use Your Information",
    body: `We use the information collected for the following purposes:

• To respond to your enquiries and provide the services you have requested.
• To send project-related updates, invoices, and support communications.
• To improve our website, services, and user experience.
• To comply with legal obligations.
• To prevent fraud and maintain the security of our systems.

We will never sell, rent, or share your personal information with third parties for marketing purposes without your explicit consent.`,
  },
  {
    title: "3. Cookies",
    body: `Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device. We use:

• **Essential cookies** — required for the website to function properly.
• **Analytics cookies** — to understand how visitors interact with our site (e.g., Google Analytics).
• **Preference cookies** — to remember your settings and preferences.

You can disable cookies in your browser settings at any time. Please note that disabling cookies may affect the functionality of this website. See our Cookie Policy for full details.`,
  },
  {
    title: "4. Data Sharing",
    body: `We may share your data with trusted third-party service providers who assist us in operating our website and delivering services, including:

• **Calendly** — for meeting scheduling.
• **Google Analytics** — for website analytics.
• **Payment processors** — for secure transaction handling.
• **Email service providers** — for communication delivery.

All third parties are required to handle your data securely and in compliance with applicable data protection laws.`,
  },
  {
    title: "5. Data Retention",
    body: `We retain personal data only for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. Project-related data is typically retained for a period of 3 years after project completion. You may request deletion of your data at any time by contacting us.`,
  },
  {
    title: "6. Your Rights",
    body: `Depending on your jurisdiction, you may have the following rights regarding your personal data:

• **Right to access** — request a copy of the data we hold about you.
• **Right to rectification** — request correction of inaccurate data.
• **Right to erasure** — request deletion of your personal data.
• **Right to restrict processing** — request that we limit how we use your data.
• **Right to data portability** — request your data in a portable format.
• **Right to object** — object to certain types of processing.

To exercise any of these rights, please contact us at kaowserpro@gmail.com.`,
  },
  {
    title: "7. Data Security",
    body: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "8. Third-Party Links",
    body: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage you to read the privacy policies of any third-party sites you visit.`,
  },
  {
    title: "9. Children's Privacy",
    body: `Our services are not directed to individuals under the age of 13. We do not knowingly collect personal data from children. If you believe we have inadvertently collected such data, please contact us immediately and we will take steps to delete it.`,
  },
  {
    title: "10. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.`,
  },
  {
    title: "11. Contact Us",
    body: `If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:

• **Email:** kaowserpro@gmail.com
• **WhatsApp:** +880 1890 273 459
• **Website:** kaowser.pro`,
  },
];

export default function PrivacyPolicyPage() {
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
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-gray-500 text-sm">
              Effective date: <span className="text-gray-400">January 1, 2025</span>
            </p>
            <p className="text-gray-400 mt-4 leading-relaxed">
              At Kaowser Pro, we take your privacy seriously. This policy explains how we collect,
              use, and protect your personal information when you use our website and services.
            </p>
          </motion.div>

          <div className="flex flex-col gap-8">
            {sections.map((sec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
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
