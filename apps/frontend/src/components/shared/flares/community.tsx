import { cn } from "@threadit/utils/class";
import Link from "next/link";

import { Avatar } from "../avatar";

interface Props {
	className?: string;
	slug: string;
	src: string;
}

export const CommunityFlare = ({ className, slug, src }: Props) => {
	return (
		<Link
			className={cn("flex w-full items-center px-2 py-1.5", className)}
			href={`/c/${slug}`}
		>
			<Avatar className="size-8" name="Destiny2" src={src} />
			<span className="ml-2 text-sm">c/{slug}</span>
		</Link>
	);
};
