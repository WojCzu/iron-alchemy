import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { DotsForm } from "@/components/tools/dots/form";
import { PageTitle } from "@/components/layout/page-title";

export async function generateMetadata() {
	const t = await getTranslations("Tools.Dots.Meta");
	return {
		title: t("title"),
		description: t("description"),
	};
}

export default function DotsPage() {
	const t = useTranslations("Tools.Dots.Page");
	return (
		<>
			<PageTitle>{t("title")}</PageTitle>
			<DotsForm />
		</>
	);
}
