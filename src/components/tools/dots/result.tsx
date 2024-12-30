import { InfoIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/common/Card";

type ResultProps = {
	dots?: number;
};

export function Result({ dots }: ResultProps) {
	const t = useTranslations("Tools.Dots.Form.result");

	return (
		<Card>
			<CardHeader>
				<CardTitle>{t("dots")}</CardTitle>
			</CardHeader>
			<CardContent>
				{!dots ? (
					<div className="flex items-center gap-3 text-muted-foreground">
						<InfoIcon className="h-5 w-5" />
						<p>{t("fillAllFields")}</p>
					</div>
				) : (
					<div className="space-y-2">
						<p className="text-3xl font-bold">{dots}</p>
						<p className="text-sm text-muted-foreground">{t("explanation")}</p>
					</div>
				)}
			</CardContent>
		</Card>
	);
}
