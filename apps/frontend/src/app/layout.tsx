import "@/styles/globals.css";
import "@/styles/post.css";
import "remixicon/fonts/remixicon.css";

import Providers from "@/components/shared/providers";

import type { Metadata } from "next";

type Props = Readonly<{
	children: React.ReactNode;
}>;

export const metadata: Metadata = {
	icons: {
		icon: "/favicon.ico",
	},
	title: {
		default: "ThreadIt",
		template: "%s | ThreadIt",
	},
};

export default ({ children }: Props) => {
	return (
		<html lang="en">
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
};
