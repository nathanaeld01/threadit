import Link from "next/link";

import { AuthContent, AuthFooter, AuthHeader } from "../_components/auth";
import { LoginForm } from "../_components/login";

type Props = {
	searchParams?: Record<string, string | undefined>;
};

export const metadata = {
	title: "Login",
};

const Page = ({ searchParams }: Props) => (
	<>
		<AuthHeader>Login</AuthHeader>
		<AuthContent>
			<LoginForm callbackUrl={searchParams?.callbackUrl} />
		</AuthContent>
		<AuthFooter callbackUrl={searchParams?.callbackUrl}>
			Don&apos;t have an account?{" "}
			<Link className="text-primary" href="/register" replace>
				Register
			</Link>
		</AuthFooter>
	</>
);

export default Page;
