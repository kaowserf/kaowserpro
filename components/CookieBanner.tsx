"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "kaowser_cookie_consent";
const EXPIRY_DAYS = 365;

function getConsent(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    // Check expiry
    if (Date.now() > parsed.expiry) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return parsed.value; // "accepted" | "declined"
  } catch {
    return null;
  }
}

function saveConsent(value: "accepted" | "declined") {
  const expiry = Date.now() + EXPIRY_DAYS * 24 * 60 * 60 * 1000;
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ value, expiry }));
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Small delay so it doesn't flash on page load
    const timer = setTimeout(() => {
      if (getConsent() === null) setVisible(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    saveConsent("accepted");
    setVisible(false);
    // Here you could fire analytics init, e.g. gtag('consent', 'update', {...})
  };

  const handleDecline = () => {
    saveConsent("declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-4 left-4 right-4 z-[300] max-w-2xl mx-auto"
        >
          <div className="bg-[#111118] border border-white/10 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.6)] overflow-hidden">
            {/* Orange top accent line */}
            <div className="h-[2px] bg-gradient-to-r from-orange-500/0 via-orange-500 to-orange-500/0" />

            <div className="p-5 sm:p-6">
              <div className="flex items-start gap-4">
                {/* Cookie icon */}
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/25 flex items-center justify-center text-xl mt-0.5">
                  🍪
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-sm mb-1">
                    We use cookies
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    We use cookies to enhance your experience, analyse site traffic, and improve our
                    services. By clicking{" "}
                    <span className="text-orange-400 font-medium">Accept All</span>, you consent to
                    our use of cookies.{" "}
                    <button
                      onClick={() => setShowDetails(!showDetails)}
                      className="text-orange-400 hover:text-orange-300 underline underline-offset-2 transition-colors"
                    >
                      {showDetails ? "Hide details" : "Learn more"}
                    </button>
                  </p>

                  {/* Expandable details */}
                  <AnimatePresence>
                    {showDetails && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {[
                            {
                              label: "Essential",
                              desc: "Required for the site to work. Cannot be disabled.",
                              always: true,
                              color: "border-orange-500/25 bg-orange-500/8",
                            },
                            {
                              label: "Analytics",
                              desc: "Help us understand how visitors use the site.",
                              always: false,
                              color: "border-white/8 bg-white/[0.02]",
                            },
                            {
                              label: "Functional",
                              desc: "Remember your preferences and settings.",
                              always: false,
                              color: "border-white/8 bg-white/[0.02]",
                            },
                          ].map((item) => (
                            <div
                              key={item.label}
                              className={`px-3 py-2.5 rounded-xl border ${item.color}`}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-white text-[11px] font-semibold">
                                  {item.label}
                                </span>
                                {item.always ? (
                                  <span className="text-[9px] text-orange-400 font-medium">
                                    Always on
                                  </span>
                                ) : (
                                  <span className="text-[9px] text-gray-500">Optional</span>
                                )}
                              </div>
                              <p className="text-gray-500 text-[10px] leading-relaxed">
                                {item.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                        <p className="text-gray-600 text-[10px] mt-2">
                          Read our{" "}
                          <a
                            href="/cookie-policy"
                            className="text-orange-400/70 hover:text-orange-400 transition-colors"
                          >
                            Cookie Policy
                          </a>{" "}
                          and{" "}
                          <a
                            href="/privacy-policy"
                            className="text-orange-400/70 hover:text-orange-400 transition-colors"
                          >
                            Privacy Policy
                          </a>{" "}
                          for more information.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Action buttons */}
                  <div className="flex flex-wrap items-center gap-2 mt-4">
                    <button
                      onClick={handleAccept}
                      className="px-5 py-2 rounded-full bg-orange-500 hover:bg-orange-400 text-white text-xs font-semibold transition-all duration-200 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]"
                    >
                      Accept All
                    </button>
                    <button
                      onClick={handleDecline}
                      className="px-5 py-2 rounded-full border border-white/15 hover:border-white/30 text-gray-400 hover:text-white text-xs font-semibold transition-all duration-200"
                    >
                      Decline
                    </button>
                    <a
                      href="/cookie-policy"
                      className="px-5 py-2 rounded-full text-gray-600 hover:text-gray-400 text-xs transition-colors duration-200"
                    >
                      Manage
                    </a>
                  </div>
                </div>

                {/* Close / dismiss button */}
                <button
                  onClick={handleDecline}
                  className="flex-shrink-0 w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-500 hover:text-white transition-all duration-200 text-xs mt-0.5"
                  aria-label="Dismiss"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
