import { InfoIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/common/Card";

type ResultProps = {
	backoffWeight?: number;
};

export function Result({ backoffWeight }: ResultProps) {
	const t = useTranslations("Tools.LoadDrop.Form.result");

	return (
		<Card>
			<CardHeader>
				<CardTitle>{t("backoffWeight")}</CardTitle>
			</CardHeader>
			<CardContent>
				{!backoffWeight ? (
					<div className="flex items-center gap-3 text-muted-foreground">
						<InfoIcon className="h-5 w-5" />
						<p>{t("fillAllFields")}</p>
					</div>
				) : (
					<div className="space-y-2">
						<p className="text-3xl font-bold">{backoffWeight}kg</p>
						<p className="text-sm text-muted-foreground">{t("explanation")}</p>
					</div>
				)}
			</CardContent>
		</Card>
	);
}
