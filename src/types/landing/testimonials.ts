import { z } from "zod";

export const testimonialSchema = z.object({
	message: z.string(),
	authorName: z.string().optional().default("Anonymous"),
	authorTitle: z.string().optional(),
});

export type Testimonial = z.infer<typeof testimonialSchema>;
