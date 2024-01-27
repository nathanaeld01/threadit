"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "../ui/collapsible";

type Props = {
	open?: boolean;
	title?: string;
	children?: React.ReactNode;
};

const Section = ({ open = true, title, children }: Props) => {
	const [toggle, setToggle] = useState(open ?? false);

	return (
		<Collapsible open={toggle} defaultOpen={open} onOpenChange={setToggle}>
			{title && (
				<CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-2 text-xs">
					<span className="text-content/50 uppercase tracking-widest">
						{title}
					</span>
					<ChevronDown
						className={cn(
							"text-content size-4 shrink-0 transition-transform duration-200",
							toggle && "rotate-180",
						)}
					/>
				</CollapsibleTrigger>
			)}
			<CollapsibleContent>{children}</CollapsibleContent>
		</Collapsible>
	);
};

export default Section;
