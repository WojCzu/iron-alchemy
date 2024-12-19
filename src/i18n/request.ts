import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
	let locale = await requestLocale;

	if (!locale || !(routing.locales as readonly string[]).includes(locale)) {
		locale = routing.defaultLocale;
	}

	return {
		locale,
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
		messages: (await import(`../../messages/${locale}.json`)).default,
	};
});
