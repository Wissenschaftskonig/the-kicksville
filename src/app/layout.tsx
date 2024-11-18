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
  description: "Sales platorm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Kicksville</title>
        <link
          rel="icon"
          href="https://freepngimg.com/thumb/shoes/26593-1-vector-shoes-transparent-image.png"
        />
        <meta name="description" content="Sales platform" />
      </head>

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
