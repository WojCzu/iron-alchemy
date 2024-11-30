import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { CallToActionSection } from "@/components/landing/call-to-action-section";
import { getTestimonials } from "@/lib/landing/testimonials";

export default async function HomePage() {
	const testimonials = await getTestimonials();

	return (
		<>
			<HeroSection />
			<FeaturesSection />
			<TestimonialsSection testimonials={testimonials} />
			<CallToActionSection />
		</>
	);
}
