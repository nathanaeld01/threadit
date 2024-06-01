import { AuthWrapper } from "@/components/auth";
import Logo from "@/components/shared/logo";

type Props = Readonly<{
	children: React.ReactNode;
}>;

export default ({ children }: Props) => {
	return (
		<>
			<nav className="h-15 fixed left-0 top-0 w-full py-2.5">
				<div className="container mx-auto flex h-full px-4">
					<Logo showText />
				</div>
			</nav>
			<div className="size-dv pb-15 flex">
				<AuthWrapper>{children}</AuthWrapper>
			</div>
		</>
	);
};
