import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeContextProvider from "@/context/ThemeContextProvider";
import Navbar from "@/components/Navbar";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import ToastProvider from "@/providers/ToastProvider";
import { CartContextProvider } from "@/context/CartContextProvider";
import AnalyticsProvider from "@/providers/AnalyticsProvider";
import CookieConsent from "@/components/CookieConsent";
import AnalyticsLayout from "./layouts/analytics-layout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Redpay Store",
  description: "Sales platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeContextProvider>
          <CartContextProvider>
            <ToastProvider>
              <ReactQueryProvider>
                <AnalyticsProvider>
                  <Navbar />
                  <CookieConsent />
                  <AnalyticsLayout>{children}</AnalyticsLayout>
                </AnalyticsProvider>
              </ReactQueryProvider>
            </ToastProvider>
          </CartContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
