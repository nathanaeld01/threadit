import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonStyles = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default:
					'bg-primary text-alternate hover:bg-primary-hover disabled:hover:bg-primary',
				secondary:
					'bg-secondary text-alternate hover:bg-secondary-hover disabled:hover:bg-secondary',
				ghost: 'bg-transparent text-content hover:bg-tertiary-hover disabled:hover:bg-transparent',
			},
			size: {
				md: 'h-10 px-4 py-2',
				default: 'h-9 rounded-md px-3 text-sm',
				lg: 'h-11 rounded-md px-8',
				icon: 'size-10',
			},
			fullWidth: {
				true: 'w-full',
			},
			outlined: {
				true: 'bg-transparent hover:bg-tertiary-hover disabled:hover:bg-transparent',
			},
		},
		compoundVariants: [
			{
				variant: 'default',
				outlined: true,
				className: 'border-2 border-primary text-primary',
			},
			{
				variant: 'secondary',
				outlined: true,
				className: 'border border-border text-foreground',
			},
		],
		defaultVariants: {
			variant: 'default',
			size: 'default',
			fullWidth: false,
			outlined: false,
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
			className,
			variant,
			size,
			outlined,
			fullWidth,
			asChild = false,
			...props
		},
		ref,
	) => {
		const Comp = asChild ? Slot : 'button';
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
Button.displayName = 'Button';

export { Button, buttonStyles };
