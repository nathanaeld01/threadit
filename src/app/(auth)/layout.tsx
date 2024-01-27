import { Logo } from "@/components/svgs/logo";

import { AuthWrapper } from "./_components/auth";

type Props = {
	children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => (
	<>
		<nav className="fixed left-0 top-0 h-[60px] w-full py-2.5">
			<div className="container mx-auto flex h-full">
				<Logo />
			</div>
		</nav>
		<div className="flex size-dv">
			<AuthWrapper>{children}</AuthWrapper>
		</div>
	</>
);

export default AuthLayout;
