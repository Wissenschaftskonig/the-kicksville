"use client";

import { useEffect } from "react";
import { initGA } from "@/utils/analytics";
import Analytics from "@/components/Analytics";

export default function AnalyticsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <>
      <Analytics />
      {children}
    </>
  );
}
