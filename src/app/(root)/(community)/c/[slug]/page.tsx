type Props = {
	params: {
		slug: string;
	};
};

const Page = ({ params: { slug } }: Props) => <div>Community: c/{slug}</div>;

export default Page;
