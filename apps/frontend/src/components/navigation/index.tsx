import "@/styles/navigation.css";

import { buttonStyles } from "@threadit/ui/button";
import Link from "next/link";

import Logo from "../shared/logo";
import Sidenav from "./sidenav";
import { NavigationTheme } from "./theme";

export const Navigation = () => {
	return (
		<nav className="navigation">
			<div className="nav-wrapper">
				<div className="nav-header">
					<Sidenav />
					<Logo className="max-md:absolute max-md:inset-0 max-md:m-auto" />
				</div>
				<div className="hidden grow justify-between *:h-fit md:flex">
					<div className="" />
					<div className="flex gap-2">
						<NavigationTheme />
						<Link className={buttonStyles()} href="/login">
							Login
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};
