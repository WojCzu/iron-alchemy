"use client";

import { type ReactNode } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";

type ActiveLinkProps = {
	href: Parameters<typeof Link>[0]["href"];
	children: ReactNode;
	exact?: boolean;
	tabIndex?: number;
	className?: string;
};

export function ActiveLink({ children, href, tabIndex = 0, exact = false }: ActiveLinkProps) {
	const t = useTranslations("Layout.Navigation");
	const pathname = usePathname();
	const isActive = exact ? pathname === href : pathname.includes(href as string);

	return isActive ? (
		<span
			aria-current={"page"}
			className="block border-b-4 border-primary px-2 py-4 font-semibold lowercase text-foreground"
		>
			{children} <span className="sr-only">{t("currentPage")}</span>
		</span>
	) : (
		<Link
			href={href}
			tabIndex={tabIndex}
			className="block px-2 py-4 font-semibold lowercase text-muted-foreground hover:text-primary focus-visible:text-primary"
		>
			{children}
		</Link>
	);
}
