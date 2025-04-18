"use client";

import { Suspense } from "react";
import PageAnalytics from "@/components/PageAnalytics";

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={null}>
        <PageAnalytics />
      </Suspense>
      {children}
    </>
  );
}
