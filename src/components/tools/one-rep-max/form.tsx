"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Form, FormNumericField } from "@/components/common/Form";
import { useTranslatedSchema } from "@/hooks/useTranslatedSchema";
import { oneRepMaxSchemaConfig, type OneRepMaxFormValues } from "@/types/tools/one-rep-max";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/common/Card";
import { Result } from "@/components/tools/one-rep-max/result";
import { Button } from "@/components/common/Button";
import { calculateE1RM } from "@/lib/tools/calculations";

export function OneRepMaxForm() {
	const t = useTranslations("Tools.OneRepMax.Form");
	const oneRepMaxSchema = useTranslatedSchema(oneRepMaxSchemaConfig);

	const form = useForm<OneRepMaxFormValues>({
		resolver: zodResolver(oneRepMaxSchema),
		mode: "onChange",
		defaultValues: { reps: undefined, rpe: 10, weight: undefined },
	});
	const [oneRepMax, setOneRepMax] = useState<number | undefined>(undefined);

	const onSubmit = (data: OneRepMaxFormValues) => {
		const e1rm = calculateE1RM({ weight: data.weight, reps: data.reps, rpe: data.rpe, round: 0.1 });
		setOneRepMax(e1rm);
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
							<div className="grid grid-cols-3 gap-4">
								<FormNumericField name="weight" label={t("labels.weight")} control={form.control} />
								<FormNumericField name="reps" label={t("labels.reps")} control={form.control} />
								<FormNumericField name="rpe" label={t("labels.rpe")} control={form.control} />
							</div>
						</CardContent>
					</Card>
					<Button type="submit">{t("labels.submit")}</Button>
				</form>
			</Form>
			<Result oneRepMax={oneRepMax} />
		</>
	);
}
