"use client";

import { Button } from "@threadit/ui/button";
import { useState } from "react";

import { Icon } from "../shared/icons";

interface Props {
	id: string;
	initialVotes?: number;
}

export const PostVoting = ({ initialVotes = 0 }: Props) => {
	const [voteCount, setVoteCount] = useState(initialVotes);

	return (
		<div className="flex items-center gap-2">
			<Button
				className="size-9 rounded-none p-1 hover:text-emerald-500"
				size="icon"
				type="button"
				variant="ghost"
			>
				<Icon className="text-xl" icon="arrow-up-s-line" />
			</Button>
			<span className="text-xs font-semibold">{voteCount}</span>
			<Button
				className="size-9 rounded-none p-1 hover:text-red-500"
				size="icon"
				type="button"
				variant="ghost"
			>
				<Icon className="text-xl" icon="arrow-down-s-line" />
			</Button>
		</div>
	);
};
