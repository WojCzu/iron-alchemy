"use client";

import { useRef, useState } from "react";
import { AlignCenter, X } from "lucide-react";
import clsx from "clsx";
import { ActiveLink } from "@/components/layout/active-link";
import { useFocusTrap } from "@/hooks/useFocusTrap";

export function MenuHeader() {
	const menuRef = useRef<HTMLUListElement>(null);
	const btnRef = useRef<HTMLButtonElement>(null);
	const [isOpen, setIsOpen] = useState(false);
	useFocusTrap(isOpen, menuRef, btnRef, handleCloseMenu);

	function handleCloseMenu() {
		setIsOpen(false);
		btnRef?.current?.focus();
	}

	return (
		<>
			<button
				aria-controls="primary-navigation"
				aria-expanded={isOpen}
				className="absolute right-8 top-8 z-50 sm:hidden"
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
					"fixed inset-0 left-1/3 z-40 flex flex-col gap-8 bg-popover-foreground/10 px-8 backdrop-blur-sm transition-transform [padding-block:min(30vh,10rem)] sm:static sm:translate-x-0 sm:flex-row sm:gap-4 sm:bg-transparent sm:p-0",
					{ "translate-x-0": isOpen },
					{ "translate-x-full": !isOpen },
				)}
			>
				<li className="sm:hidden">
					<ActiveLink href="/" tabIndex={isOpen ? 0 : -1}>
						Home
					</ActiveLink>
				</li>
				<li>
					<ActiveLink tabIndex={isOpen ? 0 : -1} href="/#tools">
						Tools
					</ActiveLink>
				</li>
				<li>
					<ActiveLink tabIndex={isOpen ? 0 : -1} href="/#blog">
						Blog
					</ActiveLink>
				</li>
				<li>
					<ActiveLink tabIndex={isOpen ? 0 : -1} href="/#log">
						Log
					</ActiveLink>
				</li>
			</ul>
		</>
	);
}
