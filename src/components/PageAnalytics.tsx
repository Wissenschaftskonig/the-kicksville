"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { pageview } from "@/utils/analytics";

export default function PageAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    try {
      if (pathname) {
        const url =
          searchParams && searchParams.size > 0
            ? `${pathname}?${searchParams.toString()}`
            : pathname;
        pageview(url);
      }
    } catch (error) {
      console.error("Analytics error:", error);
    }
  }, [pathname, searchParams]);

  return null;
}
