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
import { UserInfo } from '../_components/user-info';

type Props = {
	children: React.ReactNode;
};

const UserLayout = async ({ children }: Props) => {
	const session = await auth();

	return (
		<div className="wrapper layout">
			<div className="content">{children}</div>
			<div className="sidebar">
				<UserInfo
					name={session?.user.name}
					image={session?.user.image}
					username={session?.user.username}
					joinedOn={session?.user.joinedOn}
				/>
			</div>
		</div>
	);
};

export default UserLayout;
