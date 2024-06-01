"use client";

import { cn } from "@threadit/utils/class";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
	className?: string;
	overrideHide?: boolean;
}

const Logo = ({ className, overrideHide = false }: Props) => {
	const pathname = usePathname();

	return (
		<Link
			className={cn(
				"flex h-full items-center justify-center",
				overrideHide ? "aspect-auto" : "aspect-square md:aspect-auto",
				className,
			)}
			href={pathname === "/" ? "#" : "/"}
		>
			<svg
				className="h-6"
				viewBox="0 0 91 133.15"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					className="fill-foreground"
					d="M33 0a15 15 0 0 0-15 15v20.01H6.42v30H18v23.14a45.04 45.04 0 0 0 31.74 43 45.38 45.38 0 0 0 13.26 2 15 15 0 0 0 0-30 15.26 15.26 0 0 1-6.69-1.57 14.9 14.9 0 0 1-6.74-6.74 15.07 15.07 0 0 1-1.57-6.7V65.02h4.53v-.06c.25-6.6-.55-13.27.6-19.82A22.2 22.2 0 0 1 58.08 35H48V15A15 15 0 0 0 33 0zm43 35a15 15 0 0 0-2.87.31 15 15 0 0 0-.1.03 15 15 0 0 0-11.57 11.14 15 15 0 0 0-.12.55A15 15 0 0 0 61 50v44.33c.15.05.28.12.44.15 3.87.2 7.82.71 11.37 2.37 8.63 3.77 14.23 13.28 13.62 22.65a22.49 22.49 0 0 1-4.48 12.4A15 15 0 0 0 91 118.14V50a15 15 0 0 0-.04-1.12 15 15 0 0 0-.02-.2 15 15 0 0 0-.13-1.06 15 15 0 0 0-.04-.2 15 15 0 0 0-.22-1.09 15 15 0 0 0-.02-.07 15 15 0 0 0-.3-1.02 15 15 0 0 0-.07-.17 15 15 0 0 0-.39-1 15 15 0 0 0-.08-.2 15 15 0 0 0-.48-.98 15 15 0 0 0-.07-.11 15 15 0 0 0-.52-.89 15 15 0 0 0-.1-.14 15 15 0 0 0-.62-.88 15 15 0 0 0-.13-.17 15 15 0 0 0-.7-.82 15 15 0 0 0-.12-.12 15 15 0 0 0-.71-.72 15 15 0 0 0-.1-.1 15 15 0 0 0-.84-.7 15 15 0 0 0-.17-.14 15 15 0 0 0-.88-.62 15 15 0 0 0-.15-.1 15 15 0 0 0-.9-.53 15 15 0 0 0-.1-.06 15 15 0 0 0-.97-.48 15 15 0 0 0-.2-.08 15 15 0 0 0-1-.4 15 15 0 0 0-.17-.05 15 15 0 0 0-1.02-.3 15 15 0 0 0-.07-.03 15 15 0 0 0-1.08-.22 15 15 0 0 0-.2-.04 15 15 0 0 0-1.07-.13 15 15 0 0 0-.2-.02A15 15 0 0 0 76 35z"
				/>
				<circle className="fill-primary" cx="76" cy="15" r="15" />
			</svg>
			<div
				className={cn(
					"font-poppins ml-2 text-2xl font-bold md:block",
					!overrideHide && "hidden",
				)}
			>
				<span className="text-foreground ml-1">Thread</span>
				<span className="text-primary">It</span>
			</div>
		</Link>
	);
};

export default Logo;
