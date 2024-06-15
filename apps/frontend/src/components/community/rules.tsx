import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@threadit/ui/collapsible";
import { cn } from "@threadit/utils/class";

import { Icon } from "../shared/icons";

interface RuleProps {
	children?: React.ReactNode;
	index: number;
	title: string;
}

export const RuleItem = ({ children, index, title }: RuleProps) => {
	return (
		<Collapsible className="w-full justify-between gap-x-4 overflow-hidden">
			<CollapsibleTrigger asChild>
				<dt
					className={cn(
						"text-foreground/70 flex select-none items-center justify-between",
						children && "cursor-pointer",
					)}
				>
					<span>
						{index}. {title}
					</span>
					{children && (
						<Icon className="size-4" icon="arrow-down-s-line" />
					)}
				</dt>
			</CollapsibleTrigger>
			{children && (
				<CollapsibleContent asChild>
					<dd className="text-foreground">{children}</dd>
				</CollapsibleContent>
			)}
		</Collapsible>
	);
};
