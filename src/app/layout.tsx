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

const centuryGothic = localFont({
	src: [
		{
			path: "./fonts/centurygothic.ttf",
			weight: "400",
			style: "normal",
		},
	],
	variable: "--font-century-gothic",
	display: "swap",
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
		<html lang="en" className={centuryGothic.className}>
			<head>
				<script
					async
					src="https://redpay-sdk-js.s3.eu-west-2.amazonaws.com/omni-payment-gateway-sdk.js"
				></script>
			</head>
			<body className="font-century-gothic antialiased">
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
