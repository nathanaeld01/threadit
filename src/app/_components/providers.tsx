'use client';

import { ThemeProvider } from 'next-themes';

type Props = {
	children: React.ReactNode;
};

export const Providers = ({ children }: Props) => (
	<ThemeProvider
		attribute="class"
		defaultTheme="dark"
		themes={['light', 'dark']}
		disableTransitionOnChange
	>
		{children}
	</ThemeProvider>
);
