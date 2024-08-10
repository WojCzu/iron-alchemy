"use client";

import { DesktopHeaderNav } from "@/components/layout/desktop-header-nav";
import { MobileHeaderNav } from "@/components/layout/mobile-header-nav";
import { useIsDesktop } from "@/hooks/useIsDesktop";

export function MenuHeader() {
	const isDesktop = useIsDesktop();

	if (isDesktop) return <DesktopHeaderNav />;
	return <MobileHeaderNav />;
}
