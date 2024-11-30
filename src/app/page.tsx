import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { ReviewsSection } from "@/components/landing/reviews-section";
import { CallToActionSection } from "@/components/landing/call-to-action-section";
import { getReviews } from "@/lib/landing/reviews";

export default async function HomePage() {
	const reviews = await getReviews();

	return (
		<>
			<HeroSection />
			<FeaturesSection />
			<ReviewsSection reviews={reviews} />
			<CallToActionSection />
		</>
	);
}
