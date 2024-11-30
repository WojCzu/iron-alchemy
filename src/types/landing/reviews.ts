import { z } from "zod";

export const reviewSchema = z.object({
	message: z.string(),
	authorName: z.string().optional().default("Anonymous"),
	authorTitle: z.string().optional(),
});

export type Review = z.infer<typeof reviewSchema>;
