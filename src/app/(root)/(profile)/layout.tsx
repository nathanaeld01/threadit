import Link from '@/components/link';
import { UserAvatar } from '@/components/svgs/user';
import { buttonStyles } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import { formatDate } from '@/lib/utils';
import { auth } from '@/server/auth';

type Props = {
	children: React.ReactNode;
};

const UserLayout = async ({ children }: Props) => {
	const session = await auth();

	return (
		<div className="wrapper layout">
			<div className="content">{children}</div>
			<div className="sidebar">
				<Card>
					<CardHeader className="relative h-28">
						<div className="absolute h-20 w-full bg-muted" />
						<div className="mt-auto flex h-fit w-full justify-center px-4">
							<UserAvatar
								name={session?.user.name}
								avatar={session?.user.image}
								className="size-20 border-4 border-secondary"
							/>
						</div>
					</CardHeader>
					<CardContent className="p-4">
						{session?.user.name && (
							<div className="text-center">
								<span>{session.user.name}</span>
							</div>
						)}
						<div className="text-center">
							<span className="text-sm text-foreground/50">
								u/
								<span className="ml-1 text-foreground">
									{session?.user.username}
								</span>
							</span>
						</div>
						<div className="text-center">
							<span className="text-sm text-foreground/50">
								Joined {formatDate(session!.user.joinedOn)}
							</span>
						</div>
					</CardContent>
					<CardFooter className="flex flex-col gap-2 p-4 pt-0">
						<Link href="/profile/submit" variant="default">
							Create Post
						</Link>
						<Link
							href="/profile/settings"
							variant="secondary"
							outlined
							fullWidth
						>
							Edit Profile
						</Link>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
};

export default UserLayout;
