import Link from '@/components/link';
import { UserAvatar } from '@/components/svgs/avatar/user';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import { formatDate } from '@/lib/utils';

type Props = {
	name?: string | null;
	image?: string | null;
	username?: string | null;
	joinedOn?: string | Date;
};

export const UserInfo = ({ name, image, username, joinedOn }: Props) => {
	return (
		<Card>
			<CardHeader className="relative h-28">
				<div className="absolute h-20 w-full bg-muted" />
				<div className="mt-auto flex h-fit w-full justify-center px-4">
					<UserAvatar
						name={name}
						avatar={image}
						className="size-20 border-4 border-secondary"
					/>
				</div>
			</CardHeader>
			<CardContent className="p-4">
				{name && (
					<div className="text-center">
						<span>{name}</span>
					</div>
				)}
				<div className="text-center">
					<span className="text-sm text-foreground/50">
						u/
						<span className="ml-1 text-foreground">{username}</span>
					</span>
				</div>
				<div className="text-center">
					<span className="text-sm text-foreground/50">
						Joined{' '}
						{formatDate(
							joinedOn ?? new Date(Date.now()).toISOString(),
						)}
					</span>
				</div>
			</CardContent>
			<CardFooter className="flex flex-col gap-2 p-4 pt-0">
				<Link href="/profile/submit">Create Post</Link>
				<Link href="/profile/settings" variant="secondary" fullWidth>
					Edit Profile
				</Link>
			</CardFooter>
		</Card>
	);
};
