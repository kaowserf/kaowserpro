"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing this website or engaging Kaowser Pro for any services, you confirm that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.

These terms apply to all visitors, clients, and users of our website and services.`,
  },
  {
    title: "2. Services",
    body: `Kaowser Pro provides web development, mobile app development, full-stack engineering, UI/UX design consulting, and related digital services. The specific scope of work, deliverables, timeline, and pricing for each project will be agreed upon in a separate project agreement or proposal.

We reserve the right to decline any project at our discretion.`,
  },
  {
    title: "3. Project Agreements & Proposals",
    body: `All projects commence with a formal proposal or agreement that outlines:

• **Scope of work** — features, pages, and deliverables included.
• **Timeline** — estimated start and delivery dates.
• **Pricing** — total cost and payment schedule.
• **Revision rounds** — number of revision cycles included.

Any work beyond the agreed scope will be quoted and invoiced separately as additional work.`,
  },
  {
    title: "4. Payment Terms",
    body: `**Starter Plan:** Full payment is required upfront before work begins.
**Growth & Premium Plans:** 50% deposit is required to start; the remaining 50% is due upon delivery.

All payments are in USD unless otherwise agreed. Invoices are due within 7 days of issue. Late payments may incur a delay in project delivery or suspension of work.

We reserve the right to withhold delivery of final files until full payment is received.`,
  },
  {
    title: "5. Intellectual Property",
    body: `Upon receipt of full payment, the client is granted full ownership of the final deliverables, including source code, design assets, and content created specifically for the project.

Kaowser Pro retains the right to:
• Display the work in our portfolio, case studies, and marketing materials.
• Use open-source libraries, frameworks, and tools within projects (subject to their respective licences).

Any third-party assets, fonts, or stock media used in the project are subject to their own licencing terms. The client is responsible for ensuring appropriate licences are obtained for ongoing use.`,
  },
  {
    title: "6. Confidentiality",
    body: `We treat all client information, project details, and business data as strictly confidential. We will not share, sell, or disclose your project details to any third party without your express consent.

We are happy to sign a Non-Disclosure Agreement (NDA) prior to project commencement upon request. Confidentiality obligations remain in place for a period of 2 years after project completion.`,
  },
  {
    title: "7. Client Responsibilities",
    body: `To ensure smooth project delivery, clients agree to:

• Provide all required content, assets, and access credentials in a timely manner.
• Respond to questions, review requests, and approval prompts within 5 business days.
• Ensure all provided content (text, images, logos) is legally owned or licenced for use.
• Provide honest and timely feedback during revision rounds.

Delays caused by the client's failure to fulfil these responsibilities may result in revised delivery timelines.`,
  },
  {
    title: "8. Revisions and Changes",
    body: `Each plan includes a set number of revision rounds as outlined in the proposal. A revision round is defined as a single batch of feedback submitted together.

Changes that fall outside the agreed scope (new features, significant redesigns, or additional pages) will be scoped and quoted as additional work before proceeding.

Revision rounds expire 30 days after the delivery of each milestone. Unused revisions cannot be carried forward.`,
  },
  {
    title: "9. Warranties and Disclaimer",
    body: `We warrant that all work is performed professionally and to the best of our ability. However:

• We do not guarantee specific business outcomes, conversion rates, or search engine rankings.
• We are not liable for any downtime, data loss, or issues arising from third-party hosting, CMS platforms, or external services.
• Websites and apps are delivered as tested in the environments specified in the project agreement.

THE SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND BEYOND THOSE EXPLICITLY STATED IN THE PROJECT AGREEMENT.`,
  },
  {
    title: "10. Limitation of Liability",
    body: `To the maximum extent permitted by law, Kaowser Pro's total liability for any claim arising from our services shall not exceed the total amount paid by the client for the specific project to which the claim relates.

We are not liable for any indirect, incidental, consequential, or punitive damages, including loss of revenue, loss of data, or loss of business opportunity.`,
  },
  {
    title: "11. Termination",
    body: `Either party may terminate the project agreement with written notice. In the event of termination:

• Work completed up to the termination date will be invoiced at a pro-rated rate based on the agreed project price.
• Any deposits paid are non-refundable unless termination is caused by a material breach by Kaowser Pro.
• All project files and deliverables completed and paid for will be handed over to the client within 7 business days.`,
  },
  {
    title: "12. Governing Law",
    body: `These Terms and Conditions are governed by and construed in accordance with applicable law. Any disputes arising from these terms or our services shall first be attempted to be resolved through good-faith negotiation. If unresolved, disputes may be referred to mediation or arbitration.`,
  },
  {
    title: "13. Changes to These Terms",
    body: `We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page with an updated effective date. Continued use of our services after changes are posted constitutes acceptance of the updated terms.`,
  },
  {
    title: "14. Contact",
    body: `For any questions regarding these Terms and Conditions, please reach out:

• **Email:** kaowserpro@gmail.com
• **WhatsApp:** +880 1890 273 459`,
  },
];

export default function TermsPage() {
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
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Terms & Conditions</h1>
            <p className="text-gray-500 text-sm">
              Effective date: <span className="text-gray-400">January 1, 2025</span>
            </p>
            <p className="text-gray-400 mt-4 leading-relaxed">
              These Terms and Conditions govern your use of the Kaowser Pro website and any services
              provided by Kaowser Ahmed. Please read them carefully before engaging our services.
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
