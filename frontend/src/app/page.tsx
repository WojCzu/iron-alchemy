import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { CallToActionSection } from "@/components/landing/call-to-action-section";

export default function HomePage() {
	return (
		<>
			<HeroSection />
			<FeaturesSection />
			<TestimonialsSection />
			<CallToActionSection />
		</>
	);
}
