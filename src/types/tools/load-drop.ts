import { z } from "zod";
import { type SchemaConfig } from "@/hooks/useTranslatedSchema";

const createLoadDropSchema = (t: (key: string) => string) => {
	const mainSetSchema = z.object({
		weight: z.coerce
			.number({ required_error: t("errors.weight.required") })
			.min(1, { message: t("errors.weight.positive") }),
		reps: z.coerce
			.number({ required_error: t("errors.reps.required") })
			.min(1, { message: t("errors.reps.min") })
			.max(12, { message: t("errors.reps.max") }),
		rpe: z.coerce
			.number({ required_error: t("errors.rpe.required") })
			.min(4, { message: t("errors.rpe.min") })
			.max(10, { message: t("errors.rpe.max") }),
	});
	const backoffSetSchema = z.object({
		reps: z.coerce
			.number({ required_error: t("errors.reps.required") })
			.min(1, { message: t("errors.reps.min") }),
		sets: z.coerce
			.number({ required_error: t("errors.sets.required") })
			.min(1, { message: t("errors.sets.min") }),
		rpe: z.coerce
			.number({ required_error: t("errors.rpe.required") })
			.min(4, { message: t("errors.rpe.min") })
			.max(10, { message: t("errors.rpe.max") }),
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
