interface Props {
	params: {
		topic: string;
	};
}

export default ({ params: { topic } }: Props) => {
	return <div>Topic: {topic}</div>;
};
