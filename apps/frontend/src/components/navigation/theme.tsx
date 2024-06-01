"use client";

import { Button } from "@threadit/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Icon } from "../shared/icons";

export const NavigationTheme = () => {
	const [mounted, setMounted] = useState(false);
	const { setTheme, theme } = useTheme();

	useEffect(() => setMounted(true), []);

	return (
		<Button
			className="bg-foreground text-background hover:bg-foreground size-9 shrink-0"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			size="icon"
		>
			{mounted && (
				<Icon icon={theme === "dark" ? "sun-line" : "moon-line"} />
			)}
		</Button>
	);
};
