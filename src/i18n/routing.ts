import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
	locales: ["en", "pl"],
	defaultLocale: "en",
	pathnames: {
		"/": "/",
		"/blog": "/blog",
		"/dashboard": {
			en: "/dashboard",
			pl: "/panel",
		},
		"/tools": {
			en: "/tools",
			pl: "/narzedzia",
		},
		"/trainer": {
			en: "/trainer",
			pl: "/trener",
		},
	},
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
