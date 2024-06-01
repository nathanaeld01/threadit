"use client";

import { Sheet } from "@threadit/ui/sheet";
import { useEffect, useState } from "react";

interface Props {
	children: React.ReactNode;
}

export const SidenavWrapper = ({ children }: Props) => {
	const [toggled, setToggled] = useState(false);

	useEffect(() => {
		const resizeHandler = () => {
			if (window.innerWidth > 768 && toggled) setToggled(false);
		};

		window.addEventListener("resize", resizeHandler);

		return () => {
			window.removeEventListener("resize", resizeHandler);
		};
	}, [toggled]);

	return (
		<Sheet onOpenChange={setToggled} open={toggled}>
			{children}
		</Sheet>
	);
};
