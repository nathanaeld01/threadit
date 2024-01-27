import Link from "next/link";

import { AuthContent, AuthFooter, AuthHeader } from "../_components/auth";
import { RegisterForm } from "../_components/register";

export const metadata = {
	title: "Register",
};

const Page = () => (
	<>
		<AuthHeader>Register</AuthHeader>
		<AuthContent>
			<RegisterForm />
		</AuthContent>
		<AuthFooter>
			Have an account?{" "}
			<Link className="text-primary" href="/login" replace>
				Login
			</Link>
		</AuthFooter>
	</>
);

export default Page;
