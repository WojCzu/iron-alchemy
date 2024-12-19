import { Inter } from "next/font/google";
import { getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/contexts/theme-context";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { routing } from "@/i18n/routing";
import "@/styles/globals.css";

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export async function generateMetadata() {
	const t = await getTranslations("HomePage.meta");
	return {
		title: t("title"),
		description: t("description"),
	};
}

export async function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

type RootLayoutProps = Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>;

export default async function RootLayout({ children, params: { locale } }: RootLayoutProps) {
	if (!(routing.locales as readonly string[]).includes(locale)) {
		notFound();
	}

	const messages = await getMessages();

	return (
		<html lang={locale} suppressHydrationWarning>
			<body
				className={cn(
					"grid min-h-dvh grid-rows-[auto_1fr_auto] bg-background font-sans antialiased",
					fontSans.variable,
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<NextIntlClientProvider messages={messages}>
						<Header />
						<main id="main-content">{children}</main>
						<Footer />
					</NextIntlClientProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
