import { usePathname as usePathnameNext } from "next/navigation";
import { usePathname } from "@/i18n/routing";

export function useDynamicPathname(): string {
	const i18nSegments = usePathname().split("/").filter(Boolean);
	const nextSegments = usePathnameNext().split("/").filter(Boolean).slice(1);
	const catchAllLength = nextSegments.length - i18nSegments.length + 1;

	let usedSegments = 0;
	const dynamicPathname = i18nSegments
		.map((segment) => {
			if (segment.startsWith("[...") && segment.endsWith("]")) {
				const segments = nextSegments.slice(usedSegments, catchAllLength + 1).join("/");
				usedSegments += catchAllLength;
				return segments;
			}

			if (segment.startsWith("[") && segment.endsWith("]")) {
				const dynamicSegment = nextSegments[usedSegments] || segment;
				usedSegments++;
				return dynamicSegment;
			}
			usedSegments++;
			return segment;
		})
		.join("/");

	return `/${dynamicPathname}`;
}
