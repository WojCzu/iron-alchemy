import { useTranslations } from "next-intl";
import { type Control } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/common/Card";
import { type SectionFields, type LoadDropFormValues } from "@/types/tools/load-drop";
import { FormNumericField } from "@/components/common/Form";

type BackoffSetSectionProps = {
	control: Control<LoadDropFormValues>;
};

export function BackoffSetSection({ control }: BackoffSetSectionProps) {
	const t = useTranslations("Tools.LoadDrop.Form");
	const fields = ["sets", "reps", "rpe"] as const satisfies readonly SectionFields<"backoffSet">[];
	return (
		<Card className="mb-6">
			<CardHeader>
				<CardTitle>{t("sections.backoffSet.title")}</CardTitle>
				<p className="text-sm text-muted-foreground">{t("sections.backoffSet.description")}</p>
			</CardHeader>
			<CardContent>
				<div className="grid grid-cols-3 gap-4">
					{fields.map((field) => (
						<FormNumericField
							key={field}
							name={`backoffSet.${field}`}
							label={t(`labels.${field}`)}
							control={control}
						/>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
