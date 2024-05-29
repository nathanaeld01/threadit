import type { Dispatch, SetStateAction } from "react";

interface DropdownType<T> {
	active: T | undefined;
	setActive: Dispatch<SetStateAction<T | undefined>>;
}

interface DropdownProps {
	active?: boolean;
	children?: React.ReactNode;
	defaultValue?: boolean;
	onActiveChange?: (active: boolean) => void;
}

interface DropdownMenuProps {
	children?: React.ReactNode;
	className?: string;
}

interface DropdownCloseProps {
	children?: React.ReactNode;
}

interface DropdownMenuGroupProps {
	children?: React.ReactNode;
}

export type {
	DropdownCloseProps,
	DropdownMenuGroupProps,
	DropdownMenuProps,
	DropdownProps,
	DropdownType,
};
