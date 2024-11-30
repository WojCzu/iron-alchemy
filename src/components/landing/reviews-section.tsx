import { ReviewsCarousel } from "@/components/landing/reviews-carousel";
import { getReviews } from "@/lib/landing/reviews";

export async function ReviewsSection() {
	const reviews = await getReviews();

	return (
		<section className="section-spacing container" aria-labelledby="reviews">
			<h2 className="section-title" id="reviews">
				Why Lifters Love Us?
			</h2>
			<ReviewsCarousel reviews={reviews} />
		</section>
	);
}
