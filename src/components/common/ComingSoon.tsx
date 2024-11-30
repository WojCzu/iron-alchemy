import { ActiveLink } from "@/components/layout/active-link";
import { AnimatedBackground } from "@/components/layout/animated-background";

export function ComingSoon() {
	return (
		<div className="flex h-full w-full items-center justify-center overflow-hidden p-12 sm:p-20 md:p-24 lg:p-32">
			<AnimatedBackground />
			<div className="mx-auto flex h-full w-full max-w-[1800px] flex-col items-start justify-center gap-8">
				<hgroup className="flex max-w-5xl flex-col gap-8">
					<h1 className="text-4xl font-extrabold md:text-6xl lg:text-9xl">Coming soon</h1>
					<p className="text-2xl md:text-3xl lg:text-4xl">
						We&apos;re crafting something special for you
					</p>
				</hgroup>
				<ActiveLink exact href="/">
					← take me back
				</ActiveLink>
			</div>
		</div>
	);
}
