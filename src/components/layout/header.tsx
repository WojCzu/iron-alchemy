import { MenuHeader } from "@/components/layout/menu-header";
import { LogoLink } from "@/components/layout/logo-link";

export function Header() {
	return (
		<header className="relative">
			<a href="#main-content" className="sr-only focus:not-sr-only focus:absolute">
				Skip to main content
			</a>
			<nav className="relative left-0 right-0 top-0 flex items-center justify-between px-8 py-4">
				<LogoLink />
				<MenuHeader />
			</nav>
		</header>
	);
}
