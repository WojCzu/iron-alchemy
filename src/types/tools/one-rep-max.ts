import { z } from "zod";
import { type SchemaConfig } from "@/hooks/useTranslatedSchema";
import { requiredNumber } from "@/types/utils";

const createOneRepMaxSchema = (t: (key: string) => string) => {
	return z.object({
		weight: requiredNumber(t("errors.weight.required"), (schema) =>
			schema.min(1, { message: t("errors.weight.positive") }),
		),
		reps: requiredNumber(t("errors.reps.required"), (schema) =>
			schema
				.min(1, { message: t("errors.reps.min") })
				.max(12, { message: t("errors.reps.max") })
				.int({ message: t("errors.reps.integer") }),
		),
		rpe: requiredNumber(t("errors.rpe.required"), (schema) =>
			schema
				.min(4, { message: t("errors.rpe.min") })
				.max(10, { message: t("errors.rpe.max") })
				.step(0.5, { message: t("errors.rpe.step") }),
		),
	});
};

type OneRepMaxSchema = ReturnType<typeof createOneRepMaxSchema>;
export type OneRepMaxFormValues = z.infer<OneRepMaxSchema>;
export const oneRepMaxSchemaConfig: SchemaConfig<OneRepMaxSchema> = {
	creator: createOneRepMaxSchema,
	namespace: "Tools.OneRepMax.Form",
};
