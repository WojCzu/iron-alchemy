import { Card, CardDescription, CardHeader, CardTitle } from "@/components/common/Card";

export function FeaturesSection() {
	return (
		<section className="section-spacing container" aria-labelledby="features">
			<h2 className="section-title" id="features">
				Unlock Your Powerlifting Toolbox!
			</h2>
			<div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
				<Card className="min-w-52 max-w-full md:min-w-72" href="/blog">
					<CardHeader>
						<CardTitle>Training Tips</CardTitle>
						<CardDescription>
							Dive into articles on training and programming. Learn how to perform manual muscle
							tests, understand muscle synergies and antagonists, and more.
						</CardDescription>
					</CardHeader>
				</Card>
				<Card className="min-w-52 max-w-full lg:min-w-72" href="/tools">
					<CardHeader>
						<CardTitle>Tools for Powerlifters</CardTitle>
						<CardDescription>
							Utilize tools like One Rep Max Calculator, DOTS Calculator, Load Drop Calculator, and
							more to optimize your training.
						</CardDescription>
					</CardHeader>
				</Card>
				<Card className="min-w-52 max-w-full md:min-w-72" href="/dashboard">
					<CardHeader>
						<CardTitle>Training Dashboard</CardTitle>
						<CardDescription>
							Record your workouts and track progress through microcycles, mesocycles, and
							macrocycles with advanced metrics and indicators.
						</CardDescription>
					</CardHeader>
				</Card>
				<Card className="min-w-52 max-w-full md:min-w-72" href="/trainer">
					<CardHeader>
						<CardTitle>
							Trainer’s Corner <span className="text-sm text-muted-foreground">(Coming Soon)</span>
						</CardTitle>
						<CardDescription>
							Create, edit, and assign training plans. Monitor athletes&apos; progress with
							dashboards and get alerts when intervention is needed.
						</CardDescription>
					</CardHeader>
				</Card>
			</div>
		</section>
	);
}
