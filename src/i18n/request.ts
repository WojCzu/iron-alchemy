import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
	let locale = await requestLocale;

	if (!locale || !(routing.locales as readonly string[]).includes(locale)) {
		locale = routing.defaultLocale;
	}

	return {
		locale,
		messages: {
			...(await import(`../../messages/${locale}/common.json`)).default,
			...(await import(`../../messages/${locale}/home.json`)).default,
			...(await import(`../../messages/${locale}/coming-soon.json`)).default,
		},
	};
});
