import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { LoadDropForm } from "@/components/tools/load-drop/form";
import { PageTitle } from "@/components/layout/page-title";

export async function generateMetadata() {
	const t = await getTranslations("Tools.LoadDrop.Meta");
	return {
		title: t("title"),
		description: t("description"),
	};
}

export default function LoadDropCalculator() {
	const t = useTranslations("Tools.LoadDrop.Page");
	return (
		<>
			<PageTitle>{t("title")}</PageTitle>
			<LoadDropForm />
		</>
	);
}
