import Link from "next/link";

interface Props {
	children: React.ReactNode;
	href: string;
}

export const TopicFlare = ({ children, href }: Props) => (
	<Link
		className="hover:bg-background flex items-center justify-center rounded-lg px-3 py-1.5 text-sm leading-none"
		href={href}
	>
		{children}
	</Link>
);
