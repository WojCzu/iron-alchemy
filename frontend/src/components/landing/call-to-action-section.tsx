import { Button } from "@/components/common/Button";

export function CallToActionSection() {
	return (
		<section className="container py-20">
			<h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">
				Ready to transform your training?
			</h2>
			<div className="flex">
				<Button size={"lg"} variant={"cta"} className="mx-auto">
					Sign Up Now
				</Button>
			</div>
		</section>
	);
}
