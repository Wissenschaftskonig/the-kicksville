"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { pageview } from "@/utils/analytics";

export default function PageAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      const url =
        searchParams.size > 0
          ? `${pathname}?${searchParams.toString()}`
          : pathname;
      pageview(url);
    }
  }, [pathname, searchParams]);

  return null;
}
