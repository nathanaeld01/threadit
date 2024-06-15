interface AboutProps {
	children: React.ReactNode;
	title: string;
}

export const AboutItem = ({ children, title }: AboutProps) => {
	return (
		<div className="flex justify-between gap-x-4 py-2 text-sm xl:py-3">
			<dt className="text-foreground/70">{title}</dt>
			<dd className="text-foreground">{children}</dd>
		</div>
	);
};
