import Image from "next/image";
import React from "react";

export function HeroImage() {
	return (
		<div className="absolute left-0 right-0 top-0 -z-10 h-dvh overflow-hidden before:absolute before:right-[15%] before:top-0 before:z-10 before:block before:h-full before:w-80 before:animate-slow-pulse before:bg-gradient-to-b before:from-primary before:to-secondary before:content-['']">
			<Image
				alt=""
				role="presentation"
				src="/assets/hero-image-bg.webp"
				width={1792}
				height={1024}
				priority
				className="absolute left-0 right-0 top-0 h-dvh w-full select-none object-cover"
			/>
			<Image
				alt=""
				role="presentation"
				src="/assets/hero-image-person.webp"
				width={1792}
				height={1024}
				priority
				className="absolute left-0 right-0 top-0 z-10 h-dvh w-full select-none object-cover"
			/>
		</div>
	);
}
