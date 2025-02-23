import { z } from "zod";
import { type SchemaConfig } from "@/hooks/useTranslatedSchema";
import { requiredNumber } from "@/types/utils";

const createLoadDropSchema = (t: (key: string) => string) => {
	const mainSetSchema = z.object({
		weight: requiredNumber(t("errors.weight.required"), (schema) =>
			schema.min(1, { message: t("errors.weight.positive") }),
		),
		reps: requiredNumber(t("errors.reps.required"), (schema) =>
			schema
				.min(1, { message: t("errors.reps.min") })
				.max(12, { message: t("errors.reps.max") })
				.int({ message: "errors.reps.integer" }),
		),
		rpe: requiredNumber(t("errors.rpe.required"), (schema) =>
			schema
				.min(4, { message: t("errors.rpe.min") })
				.max(10, { message: t("errors.rpe.max") })
				.step(0.5, { message: "errors.rpe.step" }),
		),
	});
	const backoffSetSchema = z.object({
		reps: requiredNumber(t("errors.reps.required"), (schema) =>
			schema.min(1, { message: t("errors.reps.min") }).int({ message: t("errors.reps.integer") }),
		),
		sets: requiredNumber(t("errors.sets.required"), (schema) =>
			schema.min(1, { message: t("errors.sets.min") }).int({ message: t("errors.sets.integer") }),
		),
		rpe: requiredNumber(t("errors.rpe.required"), (schema) =>
			schema
				.min(4, { message: t("errors.rpe.min") })
				.max(10, { message: t("errors.rpe.max") })
				.step(0.5, { message: "errors.rpe.step" }),
		),
	});
	return z.object({
		mainSet: mainSetSchema,
		backoffSet: backoffSetSchema,
	});
};

type LoadDropSchema = ReturnType<typeof createLoadDropSchema>;

export type LoadDropFormValues = z.infer<LoadDropSchema>;
export type Section = keyof LoadDropFormValues;
export type SectionFields<T extends Section> = keyof LoadDropFormValues[T];
export type FieldPath<T extends Section> = `${T}.${SectionFields<T> & string}`;

export const loadDropSchemaConfig: SchemaConfig<LoadDropSchema> = {
	creator: createLoadDropSchema,
	namespace: "Tools.LoadDrop.Form",
};
