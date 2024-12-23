import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { DotsForm } from "@/components/tools/dots/form";

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
		<div className="mx-auto max-w-2xl p-6">
			<h1 className="mb-6 text-2xl font-bold">{t("title")}</h1>
			<DotsForm />
		</div>
	);
}
