import Image from 'next/image';

import { cn } from '@/lib/utils';

import { CommunityIcon } from '../icon/defaults';

type Props = {
	avatar?: string | null;
	className?: string;
};

export const CommunityAvatar = ({ avatar, className }: Props) => {
	return (
		<div
			className={cn(
				'relative size-20 overflow-hidden rounded-xl border-4 border-secondary bg-muted',
				className,
			)}
		>
			{avatar ? (
				<Image src={avatar} alt="Community Image" fill />
			) : (
				<CommunityIcon className="size-full" />
			)}
		</div>
	);
};
