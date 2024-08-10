import { useState, useEffect } from "react";

export function useIsDesktop(breakpoint = 640) {
	const [isDesktop, setIsDesktop] = useState(false);

	useEffect(() => {
		const checkIsDesktop = () => {
			setIsDesktop(window.matchMedia(`(min-width: ${breakpoint}px)`).matches);
		};

		checkIsDesktop();

		window.addEventListener("resize", checkIsDesktop);

		return () => {
			window.removeEventListener("resize", checkIsDesktop);
		};
	}, [breakpoint]);

	return isDesktop;
}
