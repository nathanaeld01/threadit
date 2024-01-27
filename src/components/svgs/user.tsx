import Image from "next/image";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback } from "../ui/avatar";

type Props = {
	name?: string | null;
	className?: string;
	avatar?: string | null;
	fallbackType?: "logo" | "initials";
};

export const UserAvatar = ({
	name,
	avatar,
	fallbackType = "initials",
	className,
}: Props) => {
	const userFallback = name
		?.split(" ")
		.map((n) => n[0])
		.join("")
		.toUpperCase();

	return (
		<Avatar
			className={cn(
				"relative size-20 rounded-md border-4 border-border",
				className,
			)}
		>
			{avatar ? (
				<Image fill src={avatar} alt={name ?? "Avatar"} className="size-full" />
			) : (
				<AvatarFallback className="size-full">
					{fallbackType === "initials" ? userFallback : null}
				</AvatarFallback>
			)}
		</Avatar>
	);
};
