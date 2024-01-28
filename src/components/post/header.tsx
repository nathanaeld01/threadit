import { formatTimestamp } from '@/lib/utils';
import Link from 'next/link';
import { CommunityAvatar } from '../svgs/avatar/community';

type CommunityProps = {
	slug: string;
	avatar: string;
};

type AuthorProps = {
	isSessionUser: boolean;
	showPrefix: boolean;
	username: string;
};

type TimestampProps = {
	createdAt: string | Date;
};

const Community = ({ slug, avatar }: CommunityProps) =>
	!!slug && !!avatar ? (
		<>
			<Link
				href={`/c/${slug}`}
				className="group inline-flex h-6 w-fit items-center justify-center text-xs font-semibold text-content"
			>
				<CommunityAvatar
					avatar={avatar}
					className="size-5 rounded-full border-0"
				/>
				<span className="ml-1 group-hover:underline">c/{slug}</span>
			</Link>
			<div className="select-none text-muted">•</div>
		</>
	) : null;

const Author = ({ isSessionUser, showPrefix, username }: AuthorProps) => (
	<>
		<div className="inline-flex h-6 w-fit items-center text-xs text-content">
			{showPrefix && <span>Posted by&nbsp;</span>}
			<Link
				href={isSessionUser ? '/profile' : `/u/${username}`}
				className="hover:underline"
			>
				u/{username}
			</Link>
		</div>
		<div className="select-none text-muted">•</div>
	</>
);

const Timestamp = ({ createdAt }: TimestampProps) => (
	<div className="inline-flex h-6 w-fit items-center justify-center bg-secondary text-xs text-content">
		{formatTimestamp(createdAt)}
	</div>
);

export { Author, Community, Timestamp };
