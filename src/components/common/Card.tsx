import * as React from "react";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

type CardProps =
	| (React.HTMLAttributes<HTMLDivElement> & { href?: never })
	| Parameters<typeof Link>[0];

const Card = React.forwardRef<HTMLAnchorElement | HTMLDivElement, CardProps>(
	({ className, href, ...props }, ref) => {
		if (href) {
			return (
				<Link
					{...(props as Parameters<typeof Link>[0])}
					href={href}
					ref={ref as React.Ref<HTMLAnchorElement>}
					className={cn(
						"rounded-xl border bg-card text-card-foreground hover:shadow-primary-sm focus-visible:shadow-primary md:hover:shadow-primary",
						className,
					)}
				/>
			);
		}
		return (
			<div
				{...(props as React.HTMLAttributes<HTMLDivElement>)}
				ref={ref as React.Ref<HTMLDivElement>}
				className={cn("rounded-xl border bg-card text-card-foreground shadow", className)}
			/>
		);
	},
);

Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
	),
);
CardHeader.displayName = "CardHeader";

type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement> & {
	as?: React.ElementType;
};

const CardTitle = React.forwardRef<HTMLElement, CardTitleProps>(
	({ className, as: Component = "h3", ...props }, ref) => (
		<Component
			ref={ref}
			className={cn("font-semibold leading-none tracking-tight", className)}
			{...props}
		/>
	),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
	),
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
	),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
