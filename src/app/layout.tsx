import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeContextProvider from "@/context/ThemeContextProvider";
import Navbar from "@/components/Navbar";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import ToastProvider from "@/providers/ToastProvider";
import { CartContextProvider } from "@/context/CartContextProvider";
import AnalyticsProvider from "@/providers/AnalyticsProvider";
import CookieConsent from "@/components/CookieConsent";
import AnalyticsLayout from "./layouts/analytics-layout";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
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
			<head>
				<script
					async
					src="https://redpay-sdk-js.s3.eu-west-2.amazonaws.com/omni-payment-gateway-sdk.js"
				></script>
			</head>
			<body
				className={`${geistSans.className} ${geistMono.variable} antialiased`}
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
