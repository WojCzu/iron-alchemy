import { getTranslations } from "next-intl/server";
import { ReviewsCarousel } from "@/components/landing/reviews-carousel";
import { getReviews } from "@/lib/landing/reviews";

export async function ReviewsSection() {
	const reviews = await getReviews();
	const t = await getTranslations("HomePage.ReviewsSection");

	return (
		<section className="section-spacing container" aria-labelledby="reviews">
			<h2 className="section-title" id="reviews">
				{t("title")}
			</h2>
			<ReviewsCarousel reviews={reviews} />
		</section>
	);
}
