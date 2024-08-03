import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context";

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });

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
		<html lang="en" suppressHydrationWarning>
			<body className={cn("bg-background min-h-dvh font-sans antialiased", fontSans.variable)}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<main>{children}</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
