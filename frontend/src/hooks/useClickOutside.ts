import { useEffect, type RefObject } from "react";

export function useClickOutside(ref: RefObject<HTMLElement>, action: () => void) {
	useEffect(() => {
		if (!ref.current) return;

		function clickOutside(event: MouseEvent) {
			if (!ref.current?.contains(event.target as Node)) {
				action();
			}
		}

		document.addEventListener("click", clickOutside);

		return () => {
			document.removeEventListener("click", clickOutside);
		};
	}, [action, ref]);
}
