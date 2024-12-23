"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Form, FormNumericField, FormRadioGroupField } from "@/components/common/Form";
import { dotsSchemaConfig, type DotsFormValues } from "@/types/tools/dots";
import { useTranslatedSchema } from "@/hooks/useTranslatedSchema";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/common/Card";
import { Button } from "@/components/common/Button";
import { Result } from "@/components/tools/dots/result";
import { calculateDots } from "@/lib/tools/calculations";

export function DotsForm() {
	const t = useTranslations("Tools.Dots.Form");
	const dotsSchema = useTranslatedSchema(dotsSchemaConfig);

	const form = useForm<DotsFormValues>({
		resolver: zodResolver(dotsSchema),
		mode: "onChange",
		defaultValues: { gender: "male", units: "kg", bodyWeight: undefined, liftedWeight: undefined },
	});
	const [dots, setDots] = useState<number | undefined>(undefined);

	const onSubmit = (data: DotsFormValues) => {
		const parsedData = dotsSchema.parse(data);
		const dots = calculateDots({
			gender: parsedData.gender,
			units: parsedData.units,
			bodyWeight: parsedData.bodyWeight,
			liftedWeight: parsedData.liftedWeight,
		});
		setDots(dots);
	};
	return (
		<>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="mb-6">
					<Card className="mb-6">
						<CardHeader>
							<CardTitle>{t("title")}</CardTitle>
							<p className="text-sm text-muted-foreground">{t("description")}</p>
						</CardHeader>
						<CardContent>
							<div className="grid grid-cols-4 gap-4">
								<FormRadioGroupField
									name="gender"
									label={t("labels.gender")}
									control={form.control}
									options={[
										{ value: "male", label: t("labels.male") },
										{ value: "female", label: t("labels.female") },
									]}
								/>
								<FormRadioGroupField
									name="units"
									label={t("labels.units")}
									control={form.control}
									options={[
										{ value: "kg", label: t("labels.kg") },
										{ value: "lbs", label: t("labels.lbs") },
									]}
								/>
								<FormNumericField
									name="bodyWeight"
									label={t("labels.bodyWeight")}
									control={form.control}
								/>
								<FormNumericField
									name="liftedWeight"
									label={t("labels.liftedWeight")}
									control={form.control}
								/>
							</div>
						</CardContent>
					</Card>
					<Button type="submit">{t("labels.submit")}</Button>
				</form>
			</Form>
			<Result dots={dots} />
		</>
	);
}
