import { Navigation } from "@/components/navigation";

type Props = {
	children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => (
	<>
		<Navigation />
		<div className="size-full min-h-dvh py-16">{children}</div>
	</>
);

export default RootLayout;
