"use client";

import { useParams } from "next/navigation";
import { type ReactNode, useTransition } from "react";
import { Globe } from "lucide-react";
import { type Locale, useRouter } from "@/i18n/routing";
import { Select, SelectContent, SelectTrigger } from "@/components/common/Select";
import { useDynamicPathname } from "@/hooks/useDynamicPathname";

type LocaleSwitcherSelectProps = {
	children: ReactNode;
	defaultValue: string;
	label: string;
};

export function LocaleSwitcherSelect({ children, defaultValue, label }: LocaleSwitcherSelectProps) {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const params = useParams();
	const pathname = useDynamicPathname();

	function onSelectChange(nextLocale: Locale) {
		startTransition(() => {
			router.replace(
				// @ts-expect-error -- Using known params from the current route
				{ pathname, params },
				{ locale: nextLocale },
			);
		});
	}

	return (
		<Select defaultValue={defaultValue} onValueChange={onSelectChange} disabled={isPending}>
			<p className="sr-only">{label}</p>
			<SelectTrigger className="relative w-[60px] border-0">
				<Globe className="mr-2 h-4 w-4" />
			</SelectTrigger>
			<SelectContent className="relative">{children}</SelectContent>
		</Select>
	);
}
