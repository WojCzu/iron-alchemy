import { useTranslations } from "next-intl";
import { ActiveLink } from "@/components/layout/active-link";
import { AnimatedBackground } from "@/components/layout/animated-background";

export function ComingSoon() {
	const t = useTranslations("ComingSoon");
	const tBtn = useTranslations("Common.Button");

	return (
		<div className="flex h-full w-full items-center justify-center overflow-hidden p-12 sm:p-20 md:p-24 lg:p-32">
			<AnimatedBackground />
			<div className="mx-auto flex h-full w-full max-w-[1800px] flex-col items-start justify-center gap-8">
				<hgroup className="flex max-w-5xl flex-col gap-8">
					<h1 className="text-4xl font-extrabold md:text-6xl lg:text-9xl">{t("title")}</h1>
					<p className="text-2xl md:text-3xl lg:text-4xl">{t("description")}</p>
				</hgroup>
				<ActiveLink exact href="/">
					← {tBtn("back")}
				</ActiveLink>
			</div>
		</div>
	);
}
