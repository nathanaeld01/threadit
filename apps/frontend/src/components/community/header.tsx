"use client";

import { Button, buttonStyles } from "@threadit/ui/button";
import { Dropdown, DropdownMenu, DropdownTrigger } from "@threadit/ui/dropdown";
import { cn } from "@threadit/utils/class";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Icon } from "@/components/shared/icons";

interface Props {
	children?: React.ReactNode;
}

interface ItemProps {
	children: React.ReactNode;
	href: string;
	icon: string;
}

export const Header = ({ children }: Props) => {
	const [toggled, setToggled] = useState(false);

	useEffect(() => {
		const resizeHandler = () => {
			if (window.innerWidth > 768 && toggled) {
				setToggled(false);
				console.log("reszied to false");
			}
		};

		window.addEventListener("resize", resizeHandler);

		return () => {
			window.removeEventListener("resize", resizeHandler);
		};
	}, [toggled]);

	return (
		<div className="relative flex h-10 w-full">
			<Dropdown active={toggled} onActiveChange={setToggled}>
				<DropdownTrigger>
					<Button
						className="flex h-10 items-center justify-start gap-2.5 rounded-none md:hidden"
						fullWidth
						onClick={() => setToggled((prev) => !prev)}
						variant="ghost"
					>
						<Icon icon={toggled ? "close-line" : "menu-line"} />
						<span>Menu</span>
					</Button>
				</DropdownTrigger>
				<DropdownMenu className="md:unset md:mt-0 md:block md:!animate-none md:rounded-none md:border-0">
					{children}
				</DropdownMenu>
			</Dropdown>
		</div>
	);
};

export const HeaderItem = ({ children, href, icon }: ItemProps) => {
	const pathname = usePathname();

	const active = pathname === href;

	return (
		<Link
			className={cn(
				buttonStyles({ variant: "ghost" }),
				"h-10 w-full justify-start gap-2.5 rounded-none md:w-28 md:justify-center",
				active && "bg-secondary/10",
			)}
			href={href}
		>
			<Icon icon={icon} />
			{children}
		</Link>
	);
};
