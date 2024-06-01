"use client";

import { Button } from "@threadit/ui/button";

import { Icon } from "@/components/icons";

interface Props {
	callbackUrl?: string;
}

const GithubAuth = ({ callbackUrl }: Props) => {
	const handleClick = () => console.log("Github Auth", callbackUrl);

	return (
		<Button
			className="flex w-full gap-2.5"
			onClick={handleClick}
			outlined
			variant="secondary"
		>
			<Icon className="size-4" icon="github-fill" />
		</Button>
	);
};

const GoogleAuth = ({ callbackUrl }: Props) => {
	const handleClick = () => console.log("Google Auth", callbackUrl);

	return (
		<Button
			className="flex w-full gap-2.5"
			onClick={handleClick}
			outlined
			variant="secondary"
		>
			<Icon className="size-4" icon="google-fill" />
		</Button>
	);
};

export { GithubAuth, GoogleAuth };
