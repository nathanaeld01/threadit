import Link from "next/link";

import { AuthContent, AuthFooter, AuthHeader } from "@/components/auth";

export const metadata = {
	title: "Login",
};

export default () => {
	return (
		<>
			<AuthHeader>Login</AuthHeader>
			<AuthContent>{/* LoginForm  */}</AuthContent>
			<AuthFooter>
				Don&apos;t have an account?{" "}
				<Link className="text-primary" href="/register" replace>
					Register
				</Link>
			</AuthFooter>
		</>
	);
};
