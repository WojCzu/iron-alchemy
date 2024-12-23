import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

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
		<div>
			<ul>
				<li>
					<Link href={{ pathname: "/tools/[tool]", params: { tool: "one-rep-max" } }}>
						{t("oneRepMax")}
					</Link>
				</li>
				<li>
					<Link href={{ pathname: "/tools/[tool]", params: { tool: "load-drop" } }}>
						{t("loadDrop")}
					</Link>
				</li>
			</ul>
		</div>
	);
}
