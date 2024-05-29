"use client";

import * as Primitive from "@radix-ui/react-collapsible";
import { cn } from "@threadit/utils/class";
import React from "react";

const Collapsible = Primitive.Root;

const CollapsibleTrigger = Primitive.CollapsibleTrigger;

const CollapsibleContent = React.forwardRef<
	React.ElementRef<typeof Primitive.CollapsibleContent>,
	React.ComponentPropsWithoutRef<typeof Primitive.CollapsibleContent>
>(({ className, ...props }, ref) => (
	<Primitive.CollapsibleContent
		className={cn(
			"data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden transition-all",
			className,
		)}
		ref={ref}
		{...props}
	/>
));
CollapsibleContent.displayName = "CollapsibleContent";

export { Collapsible, CollapsibleContent, CollapsibleTrigger };
