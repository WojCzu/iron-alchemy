"use client";

import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import { LocaleSwitcherSelect } from "@/components/layout/locale-switcher-select";
import { SelectItem } from "@/components/common/Select";

export function LocaleSwitcher() {
	const locale = useLocale();
	const t = useTranslations("LocaleSwitcher");

	return (
		<LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
			{routing.locales.map((cur) => (
				<SelectItem key={cur} value={cur} className="cursor-pointer">
					{t("locale", { locale: cur })}
				</SelectItem>
			))}
		</LocaleSwitcherSelect>
	);
}
