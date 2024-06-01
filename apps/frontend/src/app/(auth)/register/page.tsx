import { AuthContent, AuthFooter, AuthHeader } from "@/components/auth";

export const metadata = {
	title: "Register",
};

export default () => {
	return (
		<>
			<AuthHeader>Login</AuthHeader>
			<AuthContent>RegisterForm</AuthContent>
			<AuthFooter></AuthFooter>
		</>
	);
};
