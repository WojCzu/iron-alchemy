import { z } from "zod";
import { type SchemaConfig } from "@/hooks/useTranslatedSchema";

const createOneRepMaxSchema = (t: (key: string) => string) => {
	return z.object({
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
};

type OneRepMaxSchema = ReturnType<typeof createOneRepMaxSchema>;
export type OneRepMaxFormValues = z.infer<OneRepMaxSchema>;
export const oneRepMaxSchemaConfig: SchemaConfig<OneRepMaxSchema> = {
	creator: createOneRepMaxSchema,
	namespace: "Tools.OneRepMax.Form",
};
