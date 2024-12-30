"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Form, FormNumericField, FormSelectField } from "@/components/common/Form";
import { useTranslatedSchema } from "@/hooks/useTranslatedSchema";
import { oneRepMaxSchemaConfig, type OneRepMaxFormValues } from "@/types/tools/one-rep-max";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/common/Card";
import { Result } from "@/components/tools/one-rep-max/result";
import { Button } from "@/components/common/Button";
import { calculateE1RM } from "@/lib/tools/calculations";
import { e1rmStrategies, RPE_METHODS } from "@/lib/tools/e1rm-strategies";
import { cn } from "@/lib/utils";

export function OneRepMaxForm() {
	const t = useTranslations("Tools.OneRepMax.Form");
	const oneRepMaxSchema = useTranslatedSchema(oneRepMaxSchemaConfig);
	const form = useForm<OneRepMaxFormValues>({
		resolver: zodResolver(oneRepMaxSchema),
		mode: "onChange",
		defaultValues: { reps: undefined, rpe: 10, weight: undefined, method: "rpeChart" },
	});
	const [oneRepMax, setOneRepMax] = useState<number | undefined>(undefined);

	const selectedMethod = form.watch("method");
	const methodUsesRpe = (RPE_METHODS as readonly string[]).includes(selectedMethod);

	useEffect(() => {
		if (!methodUsesRpe) {
			form.setValue("rpe", 10);
		}
	}, [methodUsesRpe, form]);

	const onSubmit = (data: OneRepMaxFormValues) => {
		const e1rm = calculateE1RM({
			weight: data.weight,
			reps: data.reps,
			rpe: data.rpe,
			method: data.method,
			round: 0.1,
		});
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
							<div className="mb-4">
								<FormSelectField
									name="method"
									label={t("labels.method.label")}
									control={form.control}
									options={Object.keys(e1rmStrategies).map((method) => ({
										value: method,
										label: t("labels.method.methods", { method }),
									}))}
								/>
							</div>
							<div className={cn("grid grid-cols-2 gap-4", { "grid-cols-3": methodUsesRpe })}>
								<FormNumericField name="weight" label={t("labels.weight")} control={form.control} />
								<FormNumericField name="reps" label={t("labels.reps")} control={form.control} />
								{methodUsesRpe && (
									<FormNumericField name="rpe" label={t("labels.rpe")} control={form.control} />
								)}
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
