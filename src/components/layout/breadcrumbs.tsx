"use client";

import { useTranslations } from "next-intl";
import { Fragment } from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/common/Breadcrumb";
import { type Link } from "@/i18n/routing";
import { useDynamicPathname } from "@/hooks/useDynamicPathname";

type BreadcrumbsProps = {
	className?: string;
};

export function Breadcrumbs({ className }: BreadcrumbsProps) {
	const t = useTranslations("Common.Navigation.menuItems");
	const paths = useDynamicPathname();
	const pathNames = paths.split("/").filter(Boolean);
	const segments = pathNames.map((path, index, pathArray) => ({
		segment: path,
		href: `/${pathArray.slice(0, index + 1).join("/")}` as Parameters<typeof Link>[0]["href"],
	}));

	return (
		<Breadcrumb className={className}>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="/">{t("home")}</BreadcrumbLink>
				</BreadcrumbItem>
				{segments.map(({ segment, href }, index) => (
					<Fragment key={String(href)}>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							{index === segments.length - 1 ? (
								<BreadcrumbPage>{t(segment)}</BreadcrumbPage>
							) : (
								<BreadcrumbLink href={href}>{t(segment)}</BreadcrumbLink>
							)}
						</BreadcrumbItem>
					</Fragment>
				))}
			</BreadcrumbList>
		</Breadcrumb>
	);
}
