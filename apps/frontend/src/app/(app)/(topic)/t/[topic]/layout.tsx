interface Props {
	children: React.ReactNode;
	params: {
		topic: string;
	};
}

export default ({ children, params: { topic } }: Props) => {
	const header = topic?.charAt(0).toUpperCase() + topic.slice(1);

	return (
		<div className="wrapper layout">
			<div className="content space-y-2 lg:space-y-4">
				<div className="flex flex-col">
					<h2 className="text-2xl font-bold leading-none">
						{header}
					</h2>
					<span className="text-sm">Topic</span>
				</div>
				{children}
			</div>
			<div className="sidebar"></div>
		</div>
	);
};
