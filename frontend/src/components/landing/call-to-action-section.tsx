import { Button } from "@/components/common/Button";

export function CallToActionSection() {
	return (
		<section className="section-spacing container">
			<h2 className="section-title">Ready to transform your training?</h2>
			<div className="flex">
				<Button size={"lg"} variant={"cta"} className="mx-auto">
					Sign Up Now
				</Button>
			</div>
		</section>
	);
}
