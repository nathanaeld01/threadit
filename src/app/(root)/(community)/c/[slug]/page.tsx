type Props = {
	params: {
		slug: string;
	};
};

export const metadata = {
	title: "Community",
};

const Page = ({ params: { slug } }: Props) => <div>Community: c/{slug}</div>;

export default Page;
