import { useTranslations } from "next-intl";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/common/Card";

export function FeaturesSection() {
	const t = useTranslations("FeaturesSection");
	return (
		<section className="section-spacing container" aria-labelledby="features">
			<h2 className="section-title" id="features">
				{t("title")}
			</h2>
			<div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
				<Card className="min-w-52 max-w-full md:min-w-72" href="/blog">
					<CardHeader>
						<CardTitle>{t("features.0.title")}</CardTitle>
						<CardDescription>{t("features.0.description")}</CardDescription>
					</CardHeader>
				</Card>
				<Card className="min-w-52 max-w-full md:min-w-72" href="/tools">
					<CardHeader>
						<CardTitle>{t("features.1.title")}</CardTitle>
						<CardDescription>{t("features.1.description")}</CardDescription>
					</CardHeader>
				</Card>
				<Card className="min-w-52 max-w-full md:min-w-72" href="/dashboard">
					<CardHeader>
						<CardTitle>{t("features.2.title")}</CardTitle>
						<CardDescription>{t("features.2.description")}</CardDescription>
					</CardHeader>
				</Card>
				<Card className="min-w-52 max-w-full md:min-w-72" href="/trainer">
					<CardHeader>
						<CardTitle>
							{t("features.3.title")}{" "}
							<span className="text-sm text-muted-foreground">({t("comingSoon")})</span>
						</CardTitle>
						<CardDescription>{t("features.3.description")}</CardDescription>
					</CardHeader>
				</Card>
			</div>
		</section>
	);
}
