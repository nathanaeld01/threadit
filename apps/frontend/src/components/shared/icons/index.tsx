import { cn } from "@threadit/utils/class";

interface Props {
	className?: string;
	icon: string;
}

export const Icon = ({ className, icon }: Props) => {
	return (
		// <div className={cn("size-fit shrink-0", className)}>
		<i
			className={cn(
				"block text-lg leading-none",
				`ri-${icon}`,
				className,
			)}
		/>
		// </div>
	);
};
