import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeContextProvider from "@/context/ThemeContextProvider";
import Navbar from "@/components/Navbar";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import ToastProvider from "@/components/ToastProvider";
import { CartContextProvider } from "@/context/CartContextProvider";

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
  title: "Kicksville",
  description: "Sales platform",
  icons: {
    icon: "https://freepngimg.com/thumb/shoes/26593-1-vector-shoes-transparent-image.png",
  },
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
                <Navbar />
                {children}
              </ReactQueryProvider>
            </ToastProvider>
          </CartContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
