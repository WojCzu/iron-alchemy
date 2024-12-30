import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/common/Card";

export async function generateMetadata() {
	const t = await getTranslations("Tools.Meta");
	return {
		title: t("title"),
		description: t("description"),
	};
}

export default function ToolsPage() {
	const t = useTranslations("Tools.Navigation");
	return (
		<div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
			<Card
				className="min-w-52 max-w-full md:min-w-72"
				href={{ pathname: "/tools/[tool]", params: { tool: "one-rep-max" } }}
			>
				<CardHeader>
					<CardTitle>{t("oneRepMax")}</CardTitle>
					<CardDescription>{t("oneRepMaxDescription")}</CardDescription>
				</CardHeader>
			</Card>
			<Card
				className="min-w-52 max-w-full md:min-w-72"
				href={{ pathname: "/tools/[tool]", params: { tool: "load-drop" } }}
			>
				<CardHeader>
					<CardTitle>{t("loadDrop")}</CardTitle>
					<CardDescription>{t("loadDropDescription")}</CardDescription>
				</CardHeader>
			</Card>
			<Card
				className="min-w-52 max-w-full md:min-w-72"
				href={{ pathname: "/tools/[tool]", params: { tool: "dots" } }}
			>
				<CardHeader>
					<CardTitle>{t("dots")}</CardTitle>
					<CardDescription>{t("dotsDescription")}</CardDescription>
				</CardHeader>
			</Card>
		</div>
	);
}
