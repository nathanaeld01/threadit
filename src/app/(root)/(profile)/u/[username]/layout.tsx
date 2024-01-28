import { api } from '@/trpc/server';
import { UserInfo } from '../../_components/user-info';

type Props = {
	params: {
		username: string;
	};
	children: React.ReactNode;
};

const UserLayout = async ({ params: { username }, children }: Props) => {
	const data = await api.user.getUserInfo.query(username);

	console.log(data);

	return (
		<div className="wrapper layout">
			<div className="content">{children}</div>
			<div className="sidebar">
				<UserInfo />
			</div>
		</div>
	);
};

export default UserLayout;
