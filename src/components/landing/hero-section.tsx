import { useTranslations } from "next-intl";
import { Button } from "@/components/common/Button";
import { HeroImage } from "@/components/landing/hero-image";

export function HeroSection() {
	const t = useTranslations("HomePage.HeroSection");
	return (
		<section className="h-dvh px-8" aria-labelledby="hero-section">
			<HeroImage />
			<div className="h-full">
				<div className="mx-auto flex h-full max-w-[1800px] flex-col items-start justify-center gap-8">
					<hgroup className="flex max-w-5xl flex-col gap-8">
						<h1 className="text-4xl font-extrabold md:text-6xl lg:text-9xl" id="hero-section">
							{t("title")}
						</h1>
						<p className="text-2xl md:text-3xl lg:text-4xl">{t("description")}</p>
					</hgroup>
					<Button size={"lg"} variant={"cta"}>
						{t("button")}
					</Button>
				</div>
			</div>
		</section>
	);
}
