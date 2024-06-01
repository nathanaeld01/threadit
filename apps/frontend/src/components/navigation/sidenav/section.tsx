"use client";

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@threadit/ui/collapsible";
import { cn } from "@threadit/utils/class";
import { useState } from "react";

import { Icon } from "@/components/shared/icons";

interface Props {
	children?: React.ReactNode;
	open?: boolean;
	title?: string;
}

export const SidenavSection = ({ children, open = true, title }: Props) => {
	const [toggle, setToggle] = useState(open ?? false);

	return (
		<Collapsible defaultOpen={open} onOpenChange={setToggle} open={toggle}>
			{title && (
				<CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-2 text-xs">
					<span className="text-content/50 uppercase tracking-widest">
						{title}
					</span>
					<Icon
						className={cn(
							"text-content size-4 shrink-0 transition-transform duration-200",
							toggle && "rotate-180",
						)}
						icon="arrow-down-s-line"
					/>
				</CollapsibleTrigger>
			)}
			<CollapsibleContent>{children}</CollapsibleContent>
		</Collapsible>
	);
};
