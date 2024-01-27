type Props = {
	params: {
		slug: string;
		id: string;
	};
};

export const metadata = {
	title: "Post",
};

const Page = ({ params: { slug, id } }: Props) => {
	return (
		<>
			<p>Community ID: {slug}</p>
			<p>Post ID: {id}</p>
		</>
	);
};

export default Page;
