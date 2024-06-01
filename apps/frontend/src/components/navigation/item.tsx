"use client";

import { SheetClose } from "@threadit/ui/sheet";
import { cn } from "@threadit/utils/class";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
	children: React.ReactNode;
	className?: string;
	href: string;
}

export const NavItem = ({ children, className, href }: Props) => {
	const pathname = usePathname();

	return (
		<SheetClose asChild>
			<Link
				className={cn(
					"text-content bg-tertiary hover:bg-tertiary-hover flex w-full gap-2 px-4 py-2 text-center text-sm font-semibold transition-colors",
					pathname === href ? "text-primary" : "",
					className,
				)}
				href={href}
			>
				{children}
			</Link>
		</SheetClose>
	);
};
