import { z } from "zod";

export const requiredNumber = (
	requiredMessage: string,
	conditions: (schema: z.ZodNumber) => z.ZodNumber,
) =>
	z
		.union([z.number(), z.literal(undefined)])
		.refine((val) => val !== undefined, { message: requiredMessage })
		.pipe(conditions(z.number()));
