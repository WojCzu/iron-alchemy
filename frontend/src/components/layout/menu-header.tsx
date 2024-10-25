"use client";

import { useRef, useState } from "react";
import { AlignCenter, X } from "lucide-react";
import clsx from "clsx";
import { ActiveLink } from "@/components/layout/active-link";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useIsDesktop } from "@/hooks/useIsDesktop";

export function MenuHeader() {
	const menuRef = useRef<HTMLUListElement>(null);
	const btnRef = useRef<HTMLButtonElement>(null);
	const [isOpen, setIsOpen] = useState(false);
	const isDesktop = useIsDesktop();
	const linkTabIndex = isOpen || isDesktop ? 0 : -1;

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
				className="z-50 sm:hidden"
				onClick={() => setIsOpen((prevValue) => !prevValue)}
				ref={btnRef}
			>
				{isOpen ? <X /> : <AlignCenter />}
				<span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
			</button>

			<ul
				id="primary-navigation"
				aria-hidden={!isOpen}
				ref={menuRef}
				className={clsx(
					"fixed inset-0 left-1/3 z-40 flex flex-col bg-popover-foreground/10 px-8 backdrop-blur-sm transition-transform [padding-block:min(30vh,10rem)] sm:static sm:translate-x-0 sm:flex-row sm:gap-4 sm:bg-transparent sm:p-0",
					{ "translate-x-0": isOpen },
					{ "translate-x-full": !isOpen },
				)}
			>
				<li className="sm:hidden">
					<ActiveLink href="/" tabIndex={linkTabIndex}>
						Home
					</ActiveLink>
				</li>
				<li>
					<ActiveLink tabIndex={linkTabIndex} href="/tools">
						Tools
					</ActiveLink>
				</li>
				<li>
					<ActiveLink tabIndex={linkTabIndex} href="/blog">
						Blog
					</ActiveLink>
				</li>
				<li>
					<ActiveLink tabIndex={linkTabIndex} href="/log">
						Log
					</ActiveLink>
				</li>
			</ul>
		</>
	);
}
