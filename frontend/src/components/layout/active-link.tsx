"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { type Route } from "next";

type ActiveLinkProps<T extends string> = {
	href: Route<T>;
	children: ReactNode;
	exact?: boolean;
	tabIndex?: number;
	className?: string;
};

export function ActiveLink<T extends string>({
	children,
	href,
	tabIndex = 0,
	exact = false,
}: ActiveLinkProps<T>) {
	const pathname = usePathname();
	const isActive = exact ? pathname === href : pathname.includes(href);

	return isActive ? (
		<span aria-current={"page"} className="text-foreground">
			{children} <span className="sr-only">(current page)</span>
		</span>
	) : (
		<Link
			href={href}
			tabIndex={tabIndex}
			className="text-muted-foreground hover:text-primary focus:text-primary"
		>
			{children}
		</Link>
	);
}
