import { useTranslations } from "next-intl";

export function Footer() {
	const t = useTranslations("Common.Meta");

	return (
		<footer className="flex flex-col items-center justify-center p-4 text-muted-foreground">
			<p>{t("brand")}</p>
			<p className="text-sm">&copy; 2024</p>
		</footer>
	);
}
