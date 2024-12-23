"use client";

import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelVariants = cva(
	"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);

type LabelProps = Omit<
	ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
	keyof VariantProps<typeof labelVariants>
> &
	VariantProps<typeof labelVariants>;

const Label = forwardRef<ElementRef<typeof LabelPrimitive.Root>, LabelProps>(
	({ className, ...props }, ref) => (
		<LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
	),
);
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
Label.displayName = (LabelPrimitive.Root.displayName as string) || "Label";

export { Label };
