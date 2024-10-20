import { HeroImage } from "@/components/landing/hero-image";

export function HeroSection() {
	return (
		<div className="h-dvh">
			<HeroImage />
			<div className="h-full px-10">
				<div className="mx-auto flex h-full max-w-[1800px] flex-col items-start justify-center gap-8">
					<hgroup className="flex max-w-5xl flex-col gap-8">
						<h1 className="text-9xl font-extrabold">Craft Your Perfect Training Formula</h1>
						<p className="text-4xl">Comprehensive Training Logs, Advanced Tools, Expert Insights</p>
					</hgroup>
					<button className="text-xl">Sign Up Now</button>
				</div>
			</div>
		</div>
	);
}
