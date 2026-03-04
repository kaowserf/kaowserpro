"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const scenarios = [
  {
    scenario: "Project not started",
    eligible: true,
    details: "If you cancel before work has commenced, your deposit is fully refundable within 7 days.",
    color: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    icon: "✓",
  },
  {
    scenario: "Work in progress — client cancels",
    eligible: "partial",
    details: "If you cancel after work has started, you will be invoiced for work completed to date. Any deposit paid will be applied to this invoice.",
    color: "border-amber-500/30 bg-amber-500/10 text-amber-400",
    icon: "~",
  },
  {
    scenario: "Work in progress — our fault",
    eligible: true,
    details: "If we are unable to deliver due to circumstances on our end, you are entitled to a full refund of all amounts paid.",
    color: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    icon: "✓",
  },
  {
    scenario: "Project delivered and approved",
    eligible: false,
    details: "Once final deliverables have been approved and handed over, no refund is available. Please review deliverables carefully before approval.",
    color: "border-red-500/30 bg-red-500/10 text-red-400",
    icon: "✕",
  },
  {
    scenario: "Change of mind after delivery",
    eligible: false,
    details: "Refunds are not available for a change of mind after the project has been completed and delivered as agreed.",
    color: "border-red-500/30 bg-red-500/10 text-red-400",
    icon: "✕",
  },
  {
    scenario: "Dissatisfied with results",
    eligible: "partial",
    details: "If you are genuinely dissatisfied, we will work to resolve the issue through additional revisions before considering a partial refund at our discretion.",
    color: "border-amber-500/30 bg-amber-500/10 text-amber-400",
    icon: "~",
  },
];

const sections = [
  {
    title: "1. Our Commitment",
    body: `At Kaowser Pro, we are committed to delivering high-quality work that meets the agreed scope and requirements. Our satisfaction guarantee means we will make reasonable efforts to resolve any issues before resorting to refunds.

We encourage open communication throughout the project so that any concerns can be addressed early.`,
  },
  {
    title: "2. Deposit Policy",
    body: `**Starter Plan:** Full payment upfront. Refundable if project has not commenced within 7 days.
**Growth & Premium Plans:** 50% deposit required. The deposit secures your spot in our schedule and covers initial planning and design work.

Deposits are non-refundable once work has commenced, unless the cancellation is due to a failure on our part to deliver.`,
  },
  {
    title: "3. How to Request a Refund",
    body: `To request a refund, please contact us within 14 days of the relevant event (e.g., project cancellation or delivery) with the following:

• Your name and project reference.
• The reason for your refund request.
• Any supporting documentation or evidence.

We will respond within 5 business days and aim to resolve all requests fairly and promptly.`,
  },
  {
    title: "4. Refund Processing",
    body: `Approved refunds will be processed within 10 business days to the original payment method. Processing times may vary depending on your bank or payment provider.

We are not responsible for delays caused by third-party payment processors.`,
  },
  {
    title: "5. Disputes",
    body: `If you believe a refund has been unfairly denied, we encourage you to contact us directly to discuss the matter. We are committed to fair and reasonable resolution of all disputes.

If a resolution cannot be reached through direct communication, you may escalate the matter to your payment provider or seek independent mediation.`,
  },
  {
    title: "6. Exceptions",
    body: `Refunds will not be issued for:

• Delays caused by the client's failure to provide content, feedback, or approvals on time.
• Changes to project scope requested by the client that are outside the original agreement.
• Third-party costs (hosting, domain names, stock assets) that have already been incurred.
• Projects where the client has approved and accepted the final deliverables.`,
  },
  {
    title: "7. Contact Us",
    body: `For refund requests or questions about this policy:

• **Email:** kaowserpro@gmail.com
• **WhatsApp:** +880 1890 273 459
• **Response time:** Within 2 business days`,
  },
];

export default function RefundPolicyPage() {
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
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Refund Policy</h1>
            <p className="text-gray-500 text-sm">
              Effective date: <span className="text-gray-400">January 1, 2025</span>
            </p>
            <p className="text-gray-400 mt-4 leading-relaxed">
              We believe in fair, transparent dealings with every client. This policy outlines when
              refunds are available and how to request one.
            </p>
          </motion.div>

          {/* Scenario table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-lg font-semibold text-white mb-6">Refund Eligibility at a Glance</h2>
            <div className="flex flex-col gap-3">
              {scenarios.map((s, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-2xl border border-white/8 bg-white/[0.02]"
                >
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center text-xs font-bold mt-0.5 ${s.color}`}>
                    {s.icon}
                  </span>
                  <div>
                    <p className="text-white text-sm font-semibold mb-1">{s.scenario}</p>
                    <p className="text-gray-400 text-xs leading-relaxed">{s.details}</p>
                  </div>
                  <span className={`flex-shrink-0 ml-auto text-[10px] font-semibold px-2 py-0.5 rounded-full border mt-1 ${s.color}`}>
                    {s.eligible === true ? "Eligible" : s.eligible === false ? "Not Eligible" : "Partial"}
                  </span>
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
