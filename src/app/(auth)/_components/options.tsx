"use client";

import React from "react";
import { signIn } from "next-auth/react";

import { GithubIcon } from "@/components/svgs/icon/github";
import { GoogleIcon } from "@/components/svgs/icon/google";
import { Button } from "@/components/ui/button";

interface Props {
	callbackUrl?: string;
}

const GithubAuth = ({ callbackUrl }: Props) => {
	const handleClick = () => signIn("github", { redirect: true, callbackUrl });

	return (
		<Button
			className="flex w-full gap-2.5"
			variant="tertiary"
			onClick={handleClick}
			size="sm"
		>
			<GithubIcon className="size-4" />
		</Button>
	);
};

const GoogleAuth = ({ callbackUrl }: Props) => {
	const handleClick = () => signIn("google", { redirect: true, callbackUrl });

	return (
		<Button
			className="flex w-full gap-2.5"
			variant="tertiary"
			onClick={handleClick}
			size="sm"
		>
			<GoogleIcon className="size-4" />
		</Button>
	);
};

export { GithubAuth, GoogleAuth };
