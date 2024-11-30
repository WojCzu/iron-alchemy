"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { Testimonial } from "@/components/landing/testimonial";
import type { Testimonial as TestimonialType } from "@/types/landing/testimonials";

type TestimonialsSectionProps = {
	testimonials: TestimonialType[];
};

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) return null;

	return (
		<section className="section-spacing container" aria-labelledby="testimonials">
			<h2 className="section-title" id="testimonials">
				Why Lifters Love Us?
			</h2>
			<Swiper
				modules={[Autoplay, Pagination]}
				slidesPerView={1}
				spaceBetween={8}
				grabCursor
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				}}
				centeredSlides
				loop
				pagination={{
					clickable: true,
				}}
				className="md:mask-gradient w-[320px] pb-20 md:w-[688px] md:pt-6 lg:w-[768px]"
				breakpoints={{
					768: {
						effect: "slide",
						slidesPerView: 3,
						spaceBetween: 8,
					},
					1024: {
						effect: "slide",
						slidesPerView: 3,
						spaceBetween: 48,
					},
				}}
			>
				{testimonials.map(({ message, authorName, authorTitle }) => (
					<SwiperSlide className="md:w-min" key={message}>
						{({ isActive }) => (
							<Testimonial
								message={message}
								authorName={authorName}
								authorTitle={authorTitle}
								active={isActive}
							/>
						)}
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
