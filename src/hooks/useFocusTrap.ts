import { type RefObject, useEffect } from "react";

export function useFocusTrap(
	isOpen: boolean,
	ref: RefObject<HTMLElement>,
	triggerRef: RefObject<HTMLButtonElement>,
	onClose: () => void,
) {
	useEffect(() => {
		if (!isOpen || !ref.current || !triggerRef.current) return;
		const containerElement = ref.current;
		const triggerElement = triggerRef.current;

		const focusableElements = containerElement.querySelectorAll(
			'a, button, input, [tabindex]:not([tabindex="-1"])',
		);

		if (focusableElements.length === 0) return;

		const firstElement = focusableElements[0] as HTMLElement;
		const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
		function trapFocus(event: KeyboardEvent) {
			if (event.key === "Tab") {
				if (event.shiftKey) {
					if (document.activeElement === triggerElement) {
						event.preventDefault();
						lastElement.focus();
					}
				} else {
					if (document.activeElement === lastElement) {
						event.preventDefault();
						triggerElement.focus();
					}
				}
			}

			if (event.key === "Escape" && onClose) {
				onClose();
			}
		}

		containerElement.addEventListener("keydown", trapFocus);
		triggerElement.addEventListener("keydown", trapFocus);

		firstElement.focus();

		return () => {
			containerElement.removeEventListener("keydown", trapFocus);
			triggerElement.removeEventListener("keydown", trapFocus);
		};
	}, [isOpen, ref, triggerRef, onClose]);
}
