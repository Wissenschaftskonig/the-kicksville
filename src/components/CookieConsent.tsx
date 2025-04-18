// components/CookieConsent.tsx
"use client";

import { useState, useEffect } from "react";
import { initGA } from "@/utils/analytics";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const hasConsent = sessionStorage.getItem("analytics-consent");

    if (hasConsent === "true") {
      initGA();
    } else {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    sessionStorage.setItem("analytics-consent", "true");
    initGA();
    setShowConsent(false);
  };

  const declineCookies = () => {
    sessionStorage.setItem("analytics-consent", "false");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="mb-4 md:mb-0">
          We use cookies to analyze our website traffic. By continuing to use
          our site, you consent to our use of cookies.
        </p>
        <div className="flex gap-4">
          <button
            onClick={acceptCookies}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Accept
          </button>
          <button
            onClick={declineCookies}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
