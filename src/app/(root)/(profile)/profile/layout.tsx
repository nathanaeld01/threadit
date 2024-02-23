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
