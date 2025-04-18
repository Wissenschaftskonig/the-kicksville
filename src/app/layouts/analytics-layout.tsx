"use client";

import PageAnalytics from "@/components/PageAnalytics";

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageAnalytics />
      {children}
    </>
  );
}
