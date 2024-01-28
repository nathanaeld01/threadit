'use client';

import { ArrowBigDown, ArrowBigUp } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';

type Props = {
	initialCount?: number;
	id: string;
};

export const Voting = ({ initialCount = 0, id }: Props) => {
	const [count, setCount] = useState(initialCount);

	return (
		<div className="flex items-center gap-2">
			<Button
				className="size-9 rounded-none p-1"
				variant="ghost"
				type="button"
				size="icon"
			>
				<ArrowBigUp className="h-5 w-5 transition-[stroke] duration-100 ease-in-out hover:text-emerald-500" />
			</Button>
			<span className="text-xs font-semibold">{count}</span>
			<Button
				className="size-9 rounded-none p-1"
				variant="ghost"
				type="button"
				size="icon"
			>
				<ArrowBigDown className="h-5 w-5 transition-[stroke] duration-100 ease-in-out hover:text-red-500" />
			</Button>
		</div>
	);
};
