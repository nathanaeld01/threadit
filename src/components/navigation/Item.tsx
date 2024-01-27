'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { cn } from '@/lib/utils';

import { SheetClose } from '../ui/sheet';

type Props = {
	href: string;
	className?: string;
	children?: React.ReactNode;
};

const Item = ({ href, className, children }: Props) => {
	const pathname = usePathname();

	return (
		<SheetClose asChild>
			<Link
				href={href}
				className={cn(
					'text-content hover:bg-tertiary-hover flex w-full gap-2 bg-tertiary px-4 py-2 text-center text-sm font-semibold transition-colors',
					pathname === href ? 'text-primary' : '',
					className,
				)}
			>
				{children}
			</Link>
		</SheetClose>
	);
};

export default Item;
