import { useTranslations } from "next-intl";
import { Button } from "@/components/common/Button";

export function CallToActionSection() {
	const t = useTranslations("HomePage.CallToAction");
	const tBtn = useTranslations("Common.Button");

	return (
		<section className="section-spacing container" aria-labelledby="call-to-action">
			<h2 className="section-title" id="call-to-action">
				{t("title")}
			</h2>
			<div className="flex">
				<Button size={"lg"} variant={"cta"} className="mx-auto">
					{tBtn("cta")}
				</Button>
			</div>
		</section>
	);
}
