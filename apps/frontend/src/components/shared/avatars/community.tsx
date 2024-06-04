import { cn } from "@threadit/utils/class";
import Image from "next/image";

import { CommunityIcon } from "../icons/defaults";

interface Props {
	avatar?: string | undefined;
	className?: string | undefined;
}

export const CommunityAvatar = ({ avatar, className }: Props) => (
	<div
		className={cn(
			"bg-muted relative size-20 overflow-hidden rounded-xl",
			className,
		)}
	>
		{avatar ? (
			<Image alt="Community Image" fill src={avatar} />
		) : (
			<CommunityIcon className="size-full" />
		)}
	</div>
);
