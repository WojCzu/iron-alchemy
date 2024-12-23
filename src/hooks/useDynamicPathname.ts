import { useSelectedLayoutSegments } from "next/navigation";
import { usePathname } from "@/i18n/routing";

export function useDynamicPathname(): string {
	const pathname = usePathname();
	const layoutSegments = useSelectedLayoutSegments();
	const originalSegments = pathname.split("/").filter(Boolean);
	const catchAllLength = layoutSegments.length - originalSegments.length + 1;
	let usedSegments = 0;
	const dynamicPathname = originalSegments
		.map((segment) => {
			if (segment.startsWith("[...") && segment.endsWith("]")) {
				const segments = layoutSegments.slice(usedSegments, catchAllLength + 1).join("/");
				usedSegments += catchAllLength;
				return segments;
			}

			if (segment.startsWith("[") && segment.endsWith("]")) {
				const dynamicSegment = layoutSegments[usedSegments] || segment;
				usedSegments++;
				return dynamicSegment;
			}
			usedSegments++;
			return segment;
		})
		.join("/");

	return `/${dynamicPathname}`;
}
