"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";

const PageAnalytics = dynamic(() => import("./PageAnalytics"), {
  ssr: false,
});

export default function Analytics() {
  return (
    <Suspense fallback={null}>
      <PageAnalytics />
    </Suspense>
  );
}
