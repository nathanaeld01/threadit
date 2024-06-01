import { Navigation } from "@/components/navigation";

type Props = Readonly<{
	children: React.ReactNode;
}>;

export default ({ children }: Props) => {
	return (
		<>
			<Navigation />
			<div className="size-full min-h-dvh py-16">{children}</div>
		</>
	);
};
