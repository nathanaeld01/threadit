type Props = {
	params: {
		username: string;
	};
};

export const generateMetadata = ({ params: { username } }: Props) => ({
	title: `u/${username}`,
});

const Page = ({ params: { username } }: Props) => <div>User: u/{username}</div>;

export default Page;
