"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { initGA, pageview } from "@/utils/analytics";

export default function AnalyticsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    if (pathname) {
      const url =
        searchParams.size > 0
          ? `${pathname}?${searchParams.toString()}`
          : pathname;

      pageview(url);
    }
  }, [pathname, searchParams]);

  return (
    <>
      <main>{children}</main>
    </>
  );
}
