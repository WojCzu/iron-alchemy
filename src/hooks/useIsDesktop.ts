import { useState, useEffect } from "react";
import debounce from "lodash/debounce";

export function useIsDesktop(breakpoint = 640) {
	const [isDesktop, setIsDesktop] = useState(false);

	useEffect(() => {
		const checkIsDesktop = () => {
			setIsDesktop(window.matchMedia(`(min-width: ${breakpoint}px)`).matches);
		};

		const debouncedCheckIsDesktop = debounce(checkIsDesktop, 200);

		window.addEventListener("resize", debouncedCheckIsDesktop);

		return () => {
			window.removeEventListener("resize", debouncedCheckIsDesktop);
		};
	}, [breakpoint]);

	return isDesktop;
}
