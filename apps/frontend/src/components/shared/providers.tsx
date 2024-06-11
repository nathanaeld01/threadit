"use client";

import { ThemeProvider } from "next-themes";

interface Props {
	children: React.ReactNode;
}

const Providers = ({ children }: Props) => (
	<ThemeProvider
		attribute="class"
		defaultTheme="dark"
		disableTransitionOnChange
		themes={["light", "dark"]}
	>
		{children}
	</ThemeProvider>
);

export default Providers;
