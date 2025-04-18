"use client";

import { useEffect } from "react";
import { initGA } from "@/utils/analytics";

export default function AnalyticsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    initGA();
  }, []);

  return <>{children}</>;
}
