import { AuthContent, AuthFooter, AuthHeader } from "@/components/auth";

export const metadata = {
	title: "Login",
};

export default () => {
	return (
		<>
			<AuthHeader>Login</AuthHeader>
			<AuthContent>{/* LoginForm  */}</AuthContent>
			<AuthFooter></AuthFooter>
		</>
	);
};
