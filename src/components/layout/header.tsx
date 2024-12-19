import { useTranslations } from "next-intl";
import { MenuHeader } from "@/components/layout/menu-header";
import { LogoLink } from "@/components/layout/logo-link";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";

export function Header() {
	const t = useTranslations("Navigation");

	return (
		<header className="relative">
			<a href="#main-content" className="sr-only focus:not-sr-only focus:absolute">
				{t("skipToMainContent")}
			</a>
			<nav className="relative left-0 right-0 top-0 flex items-center justify-between px-8 py-4">
				<LogoLink />
				<div className="flex items-center gap-4">
					<MenuHeader />
					<LocaleSwitcher />
				</div>
			</nav>
		</header>
	);
}
