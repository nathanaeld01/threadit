"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";

import { Button } from "../ui/button";

const Theme = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	return (
		<Button
			className="size-9 shrink-0 bg-foreground text-background hover:bg-foreground"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			size="icon"
		>
			{mounted &&
				(theme === "dark" ? (
					<SunIcon className="size-5" />
				) : (
					<MoonIcon className="size-5" />
				))}
		</Button>
	);
};

export default Theme;
