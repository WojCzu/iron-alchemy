import { testimonialSchema, type Testimonial } from "@/types/landing/testimonials";

export async function getTestimonials(): Promise<Testimonial[]> {
	const res = await fetch("http://localhost:3000/mocks/testimonials.json");
	if (!res.ok) throw new Error(`Failed to fetch testimonials: ${res.statusText}`);

	const rawData: unknown = await res.json();

	return testimonialSchema.array().parse(rawData);
}
