import { z } from "zod";

export const requiredNumber = (
	requiredMessage: string,
	conditions: (schema: z.ZodNumber) => z.ZodNumber,
) =>
	z
		.union([z.number(), z.literal("")])
		.refine((val) => val !== "", { message: requiredMessage })
		.pipe(conditions(z.number()));
