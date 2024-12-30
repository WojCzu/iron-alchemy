import { getLocale } from "next-intl/server";
import { reviewSchema, type Review } from "@/types/landing/reviews";

export async function getReviews(): Promise<Review[]> {
	const locale = await getLocale();
	const res = await fetch(`http://localhost:3000/mocks/reviews-${locale}.json`);
	if (!res.ok) throw new Error(`Failed to fetch reviews: ${res.statusText}`);

	const rawData: unknown = await res.json();

	return reviewSchema.array().parse(rawData);
}
