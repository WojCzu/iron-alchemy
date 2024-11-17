"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { Testimonial } from "@/components/landing/testimonial";

const testimonials = [
	{
		message:
			"This app has everything I need to optimize my training. The tools, logs, and insights make it easy to see progress and adjust as I grow.",
		authorName: "Emily",
		authorTitle: "Amateur Powerlifter",
	},
	{
		message:
			"Finally, a powerlifting app that understands real lifters' needs! The calculators and metrics keep me focused and informed.",
		authorName: "Carlos",
		authorTitle: "Powerlifter",
	},
	{
		message:
			"As a coach, I love how easy it is to design and assign custom plans. Seeing my clients’ progress in real-time is a game changer.",
		authorName: "Samatha",
		authorTitle: "Strength Coach",
	},
	{
		message:
			"The training logs and tools have transformed my workouts. Tracking every detail helps me push my limits safely.",
		authorName: "Liam",
		authorTitle: "Competitive Powerlifter",
	},
];

export function TestimonialsSection() {
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
