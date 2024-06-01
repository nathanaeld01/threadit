import Image from "next/image";

import { NavItem } from "../item";

interface Props {
	children: React.ReactNode;
	href: string;
	image: string;
}

export const SidenavCommunity = ({ children, href, image }: Props) => (
	<NavItem href={href}>
		<Image
			alt="Community Image"
			className="rounded-full"
			height={20}
			src={image}
			width={20}
		/>
		{children}
	</NavItem>
);
