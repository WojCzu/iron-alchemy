"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/common/Form";
import { loadDropSchemaConfig, type LoadDropFormValues } from "@/types/tools/load-drop";
import { Result } from "@/components/tools/load-drop/result";
import { MainSetSection } from "@/components/tools/load-drop/main-set-section";
import { BackoffSetSection } from "@/components/tools/load-drop/backoff-set-section";
import { useLoadDropCalculations } from "@/hooks/useLoadDropCalculations";
import { useTranslatedSchema } from "@/hooks/useTranslatedSchema";

export function LoadDropForm() {
	const loadDropSchema = useTranslatedSchema(loadDropSchemaConfig);
	const form = useForm<LoadDropFormValues>({
		resolver: zodResolver(loadDropSchema),
		mode: "onChange",
		defaultValues: {
			mainSet: { weight: undefined, reps: undefined, rpe: undefined },
			backoffSet: { reps: undefined, sets: undefined, rpe: undefined },
		},
	});
	const { backoffWeight } = useLoadDropCalculations(form);

	return (
		<>
			<Form {...form}>
				<MainSetSection control={form.control} />
				<BackoffSetSection control={form.control} />
			</Form>
			<Result backoffWeight={backoffWeight} />
		</>
	);
}
