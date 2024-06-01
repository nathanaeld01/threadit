import Link from "next/link";

import { AuthContent, AuthFooter, AuthHeader } from "@/components/auth";

export const metadata = {
	title: "Register",
};

export default () => {
	return (
		<>
			<AuthHeader>Register</AuthHeader>
			<AuthContent>{/* RegisterForm */}</AuthContent>
			<AuthFooter>
				Have an account?{" "}
				<Link className="text-primary" href="/login" replace>
					Login
				</Link>
			</AuthFooter>
		</>
	);
};
