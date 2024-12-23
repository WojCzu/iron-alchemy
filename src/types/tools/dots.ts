import { z } from "zod";
import { type SchemaConfig } from "@/hooks/useTranslatedSchema";
import { requiredNumber } from "@/types/utils";

const createDotsSchema = (t: (key: string) => string) => {
	return z.object({
		gender: z.enum(["male", "female"]),
		units: z.enum(["kg", "lbs"]),
		bodyWeight: requiredNumber(t("errors.bodyWeight.required"), (schema) =>
			schema.min(1, { message: t("errors.bodyWeight.positive") }),
		),
		liftedWeight: requiredNumber(t("errors.liftedWeight.required"), (schema) =>
			schema.min(1, { message: t("errors.liftedWeight.positive") }),
		),
	});
};

type DotsSchema = ReturnType<typeof createDotsSchema>;
export type DotsFormValues = z.infer<DotsSchema>;
export const dotsSchemaConfig: SchemaConfig<DotsSchema> = {
	creator: createDotsSchema,
	namespace: "Tools.Dots.Form",
};
