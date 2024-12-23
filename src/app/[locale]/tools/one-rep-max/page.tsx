import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { OneRepMaxForm } from "@/components/tools/one-rep-max/form";

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
		<div className="mx-auto max-w-2xl p-6">
			<h1 className="mb-6 text-2xl font-bold">{t("title")}</h1>
			<OneRepMaxForm />
		</div>
	);
}
