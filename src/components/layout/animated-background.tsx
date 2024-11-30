"use client";

import { useEffect, useState } from "react";

export function AnimatedBackground() {
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
		setPrefersReducedMotion(mediaQuery.matches);
	}, []);

	return (
		<svg
			id="visual"
			viewBox="0 0 900 450"
			width="900"
			height="450"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			version="1.1"
			preserveAspectRatio="none"
			className="absolute inset-0 -z-10 h-full w-full"
			style={{ willChange: "transform" }}
		>
			<defs>
				<linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
					<stop offset="0%" style={{ stopColor: "hsl(var(--primary))" }} />
					<stop offset="100%" style={{ stopColor: "hsl(var(--muted))" }} />
				</linearGradient>
			</defs>

			<Path opacity="0.5">
				<animate
					attributeName="d"
					dur={prefersReducedMotion ? "0s" : "60s"}
					repeatCount="indefinite"
					values="
		M672 450L677 431.3C682 412.7 692 375.3 690.2 337.8C688.3 300.3 674.7 262.7 664.8 225.2C655 187.7 649 150.3 653.2 112.8C657.3 75.3 671.7 37.7 678.8 18.8L686 0L900 0L900 18.8C900 37.7 900 75.3 900 112.8C900 150.3 900 187.7 900 225.2C900 262.7 900 300.3 900 337.8C900 375.3 900 412.7 900 431.3L900 450Z;
        M632 450L641.8 431.3C651.7 412.7 671.3 375.3 681.3 337.8C691.3 300.3 691.7 262.7 681.5 225.2C671.3 187.7 650.7 150.3 656.5 112.8C662.3 75.3 694.7 37.7 710.8 18.8L727 0L900 0L900 18.8C900 37.7 900 75.3 900 112.8C900 150.3 900 187.7 900 225.2C900 262.7 900 300.3 900 337.8C900 375.3 900 412.7 900 431.3L900 450Z;
        M648 450L660.3 431.3C672.7 412.7 697.3 375.3 695.7 337.8C694 300.3 666 262.7 664.7 225.2C663.3 187.7 688.7 150.3 699.3 112.8C710 75.3 706 37.7 704 18.8L702 0L900 0L900 18.8C900 37.7 900 75.3 900 112.8C900 150.3 900 187.7 900 225.2C900 262.7 900 300.3 900 337.8C900 375.3 900 412.7 900 431.3L900 450Z;
		M672 450L677 431.3C682 412.7 692 375.3 690.2 337.8C688.3 300.3 674.7 262.7 664.8 225.2C655 187.7 649 150.3 653.2 112.8C657.3 75.3 671.7 37.7 678.8 18.8L686 0L900 0L900 18.8C900 37.7 900 75.3 900 112.8C900 150.3 900 187.7 900 225.2C900 262.7 900 300.3 900 337.8C900 375.3 900 412.7 900 431.3L900 450Z;
        "
				/>
			</Path>
			<Path opacity="0.75">
				<animate
					attributeName="d"
					dur={prefersReducedMotion ? "0s" : "60s"}
					repeatCount="indefinite"
					values="
		M714 450L714 431.3C714 412.7 714 375.3 720.5 337.8C727 300.3 740 262.7 745.8 225.2C751.7 187.7 750.3 150.3 755.5 112.8C760.7 75.3 772.3 37.7 778.2 18.8L784 0L900 0L900 18.8C900 37.7 900 75.3 900 112.8C900 150.3 900 187.7 900 225.2C900 262.7 900 300.3 900 337.8C900 375.3 900 412.7 900 431.3L900 450Z;
        M730 450L730.2 431.3C730.3 412.7 730.7 375.3 726.7 337.8C722.7 300.3 714.3 262.7 719.3 225.2C724.3 187.7 742.7 150.3 747.3 112.8C752 75.3 743 37.7 738.5 18.8L734 0L900 0L900 18.8C900 37.7 900 75.3 900 112.8C900 150.3 900 187.7 900 225.2C900 262.7 900 300.3 900 337.8C900 375.3 900 412.7 900 431.3L900 450Z;
        M700 450L706.8 431.3C713.7 412.7 727.3 375.3 728.2 337.8C729 300.3 717 262.7 713.8 225.2C710.7 187.7 716.3 150.3 727.3 112.8C738.3 75.3 754.7 37.7 762.8 18.8L771 0L900 0L900 18.8C900 37.7 900 75.3 900 112.8C900 150.3 900 187.7 900 225.2C900 262.7 900 300.3 900 337.8C900 375.3 900 412.7 900 431.3L900 450Z;
		M714 450L714 431.3C714 412.7 714 375.3 720.5 337.8C727 300.3 740 262.7 745.8 225.2C751.7 187.7 750.3 150.3 755.5 112.8C760.7 75.3 772.3 37.7 778.2 18.8L784 0L900 0L900 18.8C900 37.7 900 75.3 900 112.8C900 150.3 900 187.7 900 225.2C900 262.7 900 300.3 900 337.8C900 375.3 900 412.7 900 431.3L900 450Z;
        "
				/>
			</Path>
			<Path>
				<animate
					attributeName="d"
					dur={prefersReducedMotion ? "0s" : "60s"}
					repeatCount="indefinite"
					values="
		M811 450L813.8 431.3C816.7 412.7 822.3 375.3 822.2 337.8C822 300.3 816 262.7 811 225.2C806 187.7 802 150.3 802.2 112.8C802.3 75.3 806.7 37.7 808.8 18.8L811 0L900 0L900 18.8C900 37.7 900 75.3 900 112.8C900 150.3 900 187.7 900 225.2C900 262.7 900 300.3 900 337.8C900 375.3 900 412.7 900 431.3L900 450Z;
        M784 450L787.3 431.3C790.7 412.7 797.3 375.3 800 337.8C802.7 300.3 801.3 262.7 805 225.2C808.7 187.7 817.3 150.3 813.3 112.8C809.3 75.3 792.7 37.7 784.3 18.8L776 0L900 0L900 18.8C900 37.7 900 75.3 900 112.8C900 150.3 900 187.7 900 225.2C900 262.7 900 300.3 900 337.8C900 375.3 900 412.7 900 431.3L900 450Z;
        M810 450L811 431.3C812 412.7 814 375.3 809.3 337.8C804.7 300.3 793.3 262.7 797.7 225.2C802 187.7 822 150.3 825.5 112.8C829 75.3 816 37.7 809.5 18.8L803 0L900 0L900 18.8C900 37.7 900 75.3 900 112.8C900 150.3 900 187.7 900 225.2C900 262.7 900 300.3 900 337.8C900 375.3 900 412.7 900 431.3L900 450Z;
		M811 450L813.8 431.3C816.7 412.7 822.3 375.3 822.2 337.8C822 300.3 816 262.7 811 225.2C806 187.7 802 150.3 802.2 112.8C802.3 75.3 806.7 37.7 808.8 18.8L811 0L900 0L900 18.8C900 37.7 900 75.3 900 112.8C900 150.3 900 187.7 900 225.2C900 262.7 900 300.3 900 337.8C900 375.3 900 412.7 900 431.3L900 450Z;
        "
				/>
			</Path>
		</svg>
	);
}

type PathProps = {
	opacity?: string;
	children: JSX.IntrinsicElements["animate"];
};
function Path({ opacity = "1", children }: PathProps) {
	return (
		<path
			fill="url(#gradient)"
			opacity={opacity}
			className="origin-right -translate-x-1/2 translate-y-1/2 rotate-90 scale-x-50 scale-y-[2] sm:translate-x-0 sm:translate-y-0 sm:rotate-0 sm:scale-100"
		>
			{children as React.ReactNode}
		</path>
	);
}