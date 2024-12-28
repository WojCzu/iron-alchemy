import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { OneRepMaxForm } from "@/components/tools/one-rep-max/form";
import { PageTitle } from "@/components/layout/page-title";

export async function generateMetadata() {
	const t = await getTranslations("Tools.OneRepMax.Meta");
	return {
		title: t("title"),
		description: t("description"),
	};
}

export default function OneRepMaxPage() {
	const t = useTranslations("Tools.OneRepMax.Page");
	return (
		<>
			<PageTitle>{t("title")}</PageTitle>
			<OneRepMaxForm />
		</>
	);
}
