/* eslint-disable perfectionist/sort-objects */
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@threadit/utils";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const buttonStyles = cva(
	"focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		compoundVariants: [
			{
				className: "border-2 border-primary text-primary",
				outlined: true,
				variant: "default",
			},
			{
				className: "border border-border text-foreground",
				outlined: true,
				variant: "secondary",
			},
		],
		defaultVariants: {
			fullWidth: false,
			outlined: false,
			size: "default",
			variant: "default",
		},
		variants: {
			variant: {
				default:
					"bg-primary text-alternate hover:bg-primary-hover disabled:hover:bg-primary",
				ghost: "text-content bg-transparent hover:bg-tertiary-hover disabled:hover:bg-transparent",
				secondary:
					"bg-secondary text-alternate hover:bg-secondary-hover disabled:hover:bg-secondary",
				tertiary:
					"bg-tertiary text-foreground hover:bg-tertiary-hover disabled:hover:bg-tertiary",
			},
			fullWidth: {
				true: "w-full",
			},
			outlined: {
				true: "bg-transparent hover:bg-tertiary-hover disabled:hover:bg-transparent",
			},
			size: {
				default: "h-9 rounded-md px-3 text-sm",
				icon: "size-10",
				lg: "h-11 rounded-md px-8",
				md: "h-10 px-4 py-2",
			},
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonStyles> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			asChild = false,
			className,
			fullWidth,
			outlined,
			size,
			variant,
			...props
		},
		ref,
	) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(
					buttonStyles({
						variant,
						size,
						outlined,
						fullWidth,
						className,
					}),
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";

export { Button, buttonStyles };
