"use client";

import { useRef, useState } from "react";
import { AlignCenter, X } from "lucide-react";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { ActiveLink } from "@/components/layout/active-link";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import { cn } from "@/lib/utils";

export function MenuHeader() {
	const menuRef = useRef<HTMLUListElement>(null);
	const btnRef = useRef<HTMLButtonElement>(null);
	const [isOpen, setIsOpen] = useState(false);
	const isDesktop = useIsDesktop();
	const linkTabIndex = isOpen || isDesktop ? 0 : -1;
	const t = useTranslations("Common.Navigation");

	useFocusTrap(isOpen, menuRef, btnRef, handleCloseMenu);
	useClickOutside(menuRef, () => setIsOpen(false));

	function handleCloseMenu() {
		setIsOpen(false);
		btnRef?.current?.focus();
	}

	return (
		<>
			<button
				aria-controls="primary-navigation"
				aria-expanded={isOpen}
				className={cn("z-50 sm:hidden", {
					"fixed right-8 top-7": !isDesktop && isOpen,
				})}
				onClick={() => setIsOpen((prevValue) => !prevValue)}
				ref={btnRef}
			>
				{isOpen ? <X /> : <AlignCenter />}
				<span className="sr-only">{isOpen ? t("closeMenu") : t("openMenu")}</span>
			</button>

			<ul
				id="primary-navigation"
				aria-hidden={!isOpen}
				ref={menuRef}
				className={clsx(
					"fixed inset-0 z-40 flex flex-col bg-popover px-8 transition-transform [padding-block:min(30vh,10rem)] min-[380px]:left-1/3 min-[380px]:bg-popover/95 min-[380px]:backdrop-blur-sm sm:static sm:translate-x-0 sm:flex-row sm:gap-4 sm:border-none sm:bg-transparent sm:p-0 sm:backdrop-blur-none",
					{ "translate-x-0": isOpen },
					{ "translate-x-full": !isOpen },
				)}
			>
				<li className="sm:hidden">
					<ActiveLink exact href="/" tabIndex={linkTabIndex}>
						{t("menuItems.home")}
					</ActiveLink>
				</li>
				<li>
					<ActiveLink tabIndex={linkTabIndex} href="/blog">
						{t("menuItems.blog")}
					</ActiveLink>
				</li>
				<li>
					<ActiveLink tabIndex={linkTabIndex} href="/tools">
						{t("menuItems.tools")}
					</ActiveLink>
				</li>
				<li>
					<ActiveLink tabIndex={linkTabIndex} href="/dashboard">
						{t("menuItems.dashboard")}
					</ActiveLink>
				</li>
			</ul>
		</>
	);
}
