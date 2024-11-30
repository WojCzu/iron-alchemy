"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/layout/logo";

export function LogoLink() {
	const pathname = usePathname();
	const isActive = pathname === "/";

	return isActive ? (
		<span aria-current={"page"} aria-label="Home page">
			<Logo />
			<span className="sr-only">(current page)</span>
		</span>
	) : (
		<div>
			<Link href="/" aria-label="Home page">
				<Logo />
			</Link>
		</div>
	);
}
