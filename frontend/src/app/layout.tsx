import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Iron Alchemy",
	description:
		"Elevate your lifting journey with Iron Alchemy! Access comprehensive training logs, advanced tools like the One Rep Max Calculator, expert programming insights, and a trainer dashboard. Optimize your training and track progress with precision. Sign up now!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
