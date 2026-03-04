"use client";

import { useEffect } from "react";
import { initAnalytics } from "@/lib/firebase";

const STORAGE_KEY = "kaowser_cookie_consent";

function hasConsent(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const parsed = JSON.parse(raw);
    return parsed.value === "accepted" && Date.now() <= parsed.expiry;
  } catch {
    return false;
  }
}

export default function FirebaseAnalytics() {
  useEffect(() => {
    // Init immediately if already consented, otherwise wait for consent event
    if (hasConsent()) {
      initAnalytics();
      return;
    }

    // Poll localStorage for when the user accepts via CookieBanner
    const interval = setInterval(() => {
      if (hasConsent()) {
        clearInterval(interval);
        initAnalytics();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return null;
}
