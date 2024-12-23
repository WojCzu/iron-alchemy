import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { LoadDropForm } from "@/components/tools/load-drop/form";

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
		<div className="mx-auto max-w-2xl p-6">
			<h1 className="mb-6 text-2xl font-bold">{t("title")}</h1>
			<LoadDropForm />
		</div>
	);
}
