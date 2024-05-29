import { cn } from "@threadit/utils";
import * as React from "react";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	focusRing?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, focusRing = true, type, ...props }, ref) => {
		return (
			<input
				className={cn(
					"flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
					focusRing &&
						"focus-visible:ring-2 focus-visible:ring-border-ring focus-visible:ring-offset-2",
					className,
				)}
				ref={ref}
				type={type}
				{...props}
			/>
		);
	},
);
Input.displayName = "Input";

export { Input };
