"use client";

import { Slot } from "@radix-ui/react-slot";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { cn } from "@threadit/utils/class";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

import { DropdownContext, useDropdown } from "../context/dropdown-context";
import Presence from "../helpers/presence";

import type {
	DropdownCloseProps,
	DropdownMenuGroupProps,
	DropdownMenuProps,
	DropdownProps,
} from "../types/dropdown";

const Dropdown = ({
	active: prop,
	children,
	defaultValue: defaultProp,
	onActiveChange: onChange,
}: DropdownProps) => {
	const [isActive, setIsActive] = useControllableState({
		defaultProp,
		onChange,
		prop,
	});

	return (
		<DropdownContext.Provider
			value={{ active: isActive, setActive: setIsActive }}
		>
			{children}
		</DropdownContext.Provider>
	);
};

const DropdownTrigger = ({ children }: DropdownCloseProps) => {
	const { setActive } = useDropdown();

	if (!children) return null;

	return <Slot onClick={() => setActive((prev) => !prev)}>{children}</Slot>;
};

const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
	({ children, className }, ref) => {
		const { active, setActive } = useDropdown();
		const dropdownRef = useRef<HTMLDivElement>(null);

		useImperativeHandle(ref, () => dropdownRef.current!);

		useEffect(() => {
			const handleClick = (e: MouseEvent) => {
				if (dropdownRef.current?.contains(e.target as Node) && !active)
					return;

				setActive(false);
			};

			document.addEventListener("click", handleClick);

			return () => {
				document.removeEventListener("click", handleClick);
			};
		}, [active, setActive]);

		return (
			<Presence active={active}>
				<div
					className={cn(
						"absolute left-0 top-full z-10 mt-2 flex w-full flex-col overflow-hidden rounded-md border border-border bg-card slide-in-from-top-2 fill-mode-forwards data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
						className,
					)}
					data-state={active ? "open" : "closed"}
					ref={dropdownRef}
				>
					{children}
				</div>
			</Presence>
		);
	},
);

const DropdownMenuGroup = ({ children }: DropdownMenuGroupProps) => {
	return <div className="p-1">{children}</div>;
};

const DropdownMenuSeparator = () => {
	return <div className="h-px w-full bg-border" />;
};

export {
	Dropdown,
	DropdownMenu,
	DropdownMenuGroup,
	DropdownMenuSeparator,
	DropdownTrigger,
};
