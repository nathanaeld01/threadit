import { AuthWrapper } from "@/components/auth";
import Logo from "@/components/shared/logo";

type Props = Readonly<{
	children: React.ReactNode;
}>;

export default ({ children }: Props) => {
	return (
		<>
			<nav className="fixed left-0 top-0 h-[60px] w-full py-2.5">
				<div className="container mx-auto flex h-full">
					<Logo />
				</div>
			</nav>
			<div className="size-dv flex">
				<AuthWrapper>{children}</AuthWrapper>
			</div>
		</>
	);
};
