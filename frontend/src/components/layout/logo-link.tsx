"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function LogoLink() {
	const pathname = usePathname();
	const isActive = pathname === "/";

	return isActive ? (
		<span aria-current={"page"} aria-label="Home page">
			LOGO HOME
			<span className="sr-only">(current page)</span>
		</span>
	) : (
		<div>
			<Link href="/" aria-label="Home page">
				LOGO HOME
			</Link>
		</div>
	);
}
