interface Props {
	params: {
		slug: string;
	};
}

export default ({ params: { slug } }: Props) => {
	return <div>Community: {slug}</div>;
};
