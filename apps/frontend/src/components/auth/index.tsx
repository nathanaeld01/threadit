import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@threadit/ui/card";

import { GithubAuth, GoogleAuth } from "./options";

interface Props {
	children?: React.ReactNode;
}

type FooterProps = {
	callbackUrl?: string;
} & Props;

const AuthWrapper = ({ children }: Props) => {
	return (
		<Card className="m-auto w-[90%] max-w-[400px] shadow-md md:w-full">
			{children}
		</Card>
	);
};

const AuthHeader = ({ children }: Props) => {
	return (
		<CardHeader className="p-4">
			<CardTitle className="text-center text-lg">{children}</CardTitle>
		</CardHeader>
	);
};

const AuthContent = ({ children }: Props) => {
	return <CardContent className="px-4">{children}</CardContent>;
};

const AuthFooter = ({ children }: FooterProps) => {
	return (
		<CardFooter className="space-y-4 p-4 pt-2">
			<div className="flex items-center gap-2">
				<GithubAuth />
				<GoogleAuth />
			</div>
			<div>{children}</div>
		</CardFooter>
	);
};

export { AuthContent, AuthFooter, AuthHeader, AuthWrapper };
