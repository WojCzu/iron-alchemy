"use client";

import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import { LocaleSwitcherSelect } from "@/components/layout/locale-switcher-select";
import { SelectItem } from "@/components/common/Select";

export function LocaleSwitcher() {
	const currentLocale = useLocale();
	const t = useTranslations("LocaleSwitcher");

	return (
		<LocaleSwitcherSelect defaultValue={currentLocale} label={t("label")}>
			{routing.locales.map((locale) => (
				<SelectItem key={locale} value={locale} className="cursor-pointer">
					{t("locale", { locale })}
				</SelectItem>
			))}
		</LocaleSwitcherSelect>
	);
}
