"use client";

import type * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import {
	type Control,
	Controller,
	type ControllerProps,
	type FieldPath,
	type FieldValues,
	FormProvider,
	type Path,
	useFormContext,
} from "react-hook-form";

import {
	type ComponentPropsWithoutRef,
	type ElementRef,
	type HTMLAttributes,
	createContext,
	forwardRef,
	useContext,
	useId,
} from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/common/Label";
import { Input } from "@/components/common/Input";
import { RadioGroup, RadioGroupItem } from "@/components/common/RadioGroup";
import {
	Select,
	SelectValue,
	SelectTrigger,
	SelectContent,
	SelectItem,
} from "@/components/common/Select";

const Form = FormProvider;

type FormFieldContextValue<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
	name: TName;
};

const FormFieldContext = createContext<FormFieldContextValue>({} as FormFieldContextValue);

const FormField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
	...props
}: ControllerProps<TFieldValues, TName>) => {
	return (
		<FormFieldContext.Provider value={{ name: props.name }}>
			<Controller {...props} />
		</FormFieldContext.Provider>
	);
};

const useFormField = () => {
	const fieldContext = useContext(FormFieldContext);
	const itemContext = useContext(FormItemContext);
	const { getFieldState, formState } = useFormContext();

	const fieldState = getFieldState(fieldContext.name, formState);

	if (!fieldContext) {
		throw new Error("useFormField should be used within <FormField>");
	}

	const { id } = itemContext;

	return {
		id,
		name: fieldContext.name,
		formItemId: `${id}-form-item`,
		formDescriptionId: `${id}-form-item-description`,
		formMessageId: `${id}-form-item-message`,
		...fieldState,
	};
};

type FormItemContextValue = {
	id: string;
};

const FormItemContext = createContext<FormItemContextValue>({} as FormItemContextValue);

const FormItem = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => {
		const id = useId();

		return (
			<FormItemContext.Provider value={{ id }}>
				<div ref={ref} className={cn("space-y-2", className)} {...props} />
			</FormItemContext.Provider>
		);
	},
);
FormItem.displayName = "FormItem";

const FormLabel = forwardRef<
	ElementRef<typeof LabelPrimitive.Root>,
	ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
	const { error, formItemId } = useFormField();
	return (
		<Label
			ref={ref}
			{...props}
			className={cn(error && "text-destructive", className)}
			htmlFor={formItemId}
		/>
	);
});
FormLabel.displayName = "FormLabel";

const FormControl = forwardRef<ElementRef<typeof Slot>, ComponentPropsWithoutRef<typeof Slot>>(
	({ ...props }, ref) => {
		const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

		return (
			<Slot
				ref={ref}
				id={formItemId}
				aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
				aria-invalid={!!error}
				{...props}
			/>
		);
	},
);
FormControl.displayName = "FormControl";

const FormDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
	({ className, ...props }, ref) => {
		const { formDescriptionId } = useFormField();

		return (
			<p
				ref={ref}
				id={formDescriptionId}
				className={cn("text-[0.8rem] text-muted-foreground", className)}
				{...props}
			/>
		);
	},
);
FormDescription.displayName = "FormDescription";

const FormMessage = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
	({ className, children, ...props }, ref) => {
		const { error, formMessageId } = useFormField();
		const body = error ? String(error?.message) : children;

		if (!body) {
			return null;
		}

		return (
			<p
				ref={ref}
				id={formMessageId}
				className={cn("text-[0.8rem] font-medium text-destructive", className)}
				{...props}
			>
				{body}
			</p>
		);
	},
);
FormMessage.displayName = "FormMessage";

const FormNumericField = <T extends FieldValues>({
	name,
	label,
	control,
	min,
	max,
}: {
	name: Path<T>;
	label: string;
	control: Control<T>;
	min?: number;
	max?: number;
}) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field: { value, onChange, ...props } }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Input
							{...props}
							type="number"
							min={min}
							max={max}
							value={value ?? ""}
							onChange={(e) => {
								const value = e.target.value === "" ? "" : parseFloat(e.target.value);
								onChange(value);
							}}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};
FormNumericField.displayName = "FormNumericField";

const FormRadioGroupField = <T extends FieldValues>({
	name,
	label,
	control,
	options,
	className,
}: {
	name: Path<T>;
	label: string;
	control: Control<T>;
	options: {
		value: string;
		label: string;
	}[];
	className?: string;
}) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className={cn("space-y-3", className)}>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<RadioGroup
							onValueChange={field.onChange}
							defaultValue={field.value}
							className="flex flex-col space-y-1"
						>
							{options.map((option) => (
								<FormItem key={option.value} className="flex items-center space-x-3 space-y-0">
									<FormControl>
										<RadioGroupItem value={option.value} />
									</FormControl>
									<FormLabel className="font-normal">{option.label}</FormLabel>
								</FormItem>
							))}
						</RadioGroup>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};
FormRadioGroupField.displayName = "FormRadioGroupField";

const FormSelectField = <T extends FieldValues>({
	name,
	label,
	control,
	options,
	placeholder,
}: {
	name: Path<T>;
	label: string;
	control: Control<T>;
	options: { value: string; label: string }[];
	placeholder?: string;
}) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<Select defaultValue={field.value} onValueChange={field.onChange}>
						<SelectTrigger>
							<SelectValue placeholder={placeholder} />
						</SelectTrigger>
						<SelectContent className="relative">
							{options.map((option) => (
								<SelectItem key={option.value} value={option.value} className="cursor-pointer">
									{option.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

FormSelectField.displayName = "FormSelectField";

export {
	useFormField,
	Form,
	FormItem,
	FormLabel,
	FormControl,
	FormDescription,
	FormMessage,
	FormField,
	FormNumericField,
	FormRadioGroupField,
	FormSelectField,
};
