"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { Logo } from "@/components/layout/logo";

export function LogoLink() {
	const pathname = usePathname();
	const isActive = pathname === "/";
	const t = useTranslations("Common.Navigation");

	return isActive ? (
		<span aria-current={"page"} aria-label={t("menuItems.home")}>
			<Logo />
			<span className="sr-only">{t("currentPage")}</span>
		</span>
	) : (
		<div>
			<Link href="/" aria-label={t("menuItems.home")}>
				<Logo />
			</Link>
		</div>
	);
}
