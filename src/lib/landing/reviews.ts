import { getLocale } from "next-intl/server";
import { reviewSchema, type Review } from "@/types/landing/reviews";
import { getBaseUrl } from "@/lib/utils";

export async function getReviews(): Promise<Review[]> {
	const locale = await getLocale();
	const baseUrl = getBaseUrl();
	const res = await fetch(`${baseUrl}/mocks/reviews-${locale}.json`);
	if (!res.ok) throw new Error(`Failed to fetch reviews: ${res.statusText}`);

	const rawData: unknown = await res.json();

	return reviewSchema.array().parse(rawData);
}
