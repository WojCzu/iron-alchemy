import Image from "next/image";
import React from "react";

export function HeroImage() {
	return (
		<div className="absolute inset-0 -z-10 overflow-hidden before:absolute before:right-[15%] before:top-0 before:z-10 before:block before:h-full before:w-80 before:animate-slow-pulse before:bg-gradient-to-b before:from-primary before:to-secondary before:opacity-25 before:content-['']">
			<Image
				alt=""
				role="presentation"
				src="/assets/hero-image-bg.webp"
				width={1792}
				height={1024}
				className="absolute inset-0 h-full w-full object-cover"
			/>
			<Image
				alt=""
				role="presentation"
				src="/assets/hero-image-person.webp"
				width={1792}
				height={1024}
				className="absolute inset-0 z-10 h-full w-full object-cover"
			/>
		</div>
	);
}
