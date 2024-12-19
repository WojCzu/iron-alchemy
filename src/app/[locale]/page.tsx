import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { ReviewsSection } from "@/components/landing/reviews-section";
import { CallToActionSection } from "@/components/landing/call-to-action-section";

export default function HomePage() {
	return (
		<>
			<HeroSection />
			<FeaturesSection />
			<ReviewsSection />
			<CallToActionSection />
		</>
	);
}
