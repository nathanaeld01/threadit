'use client';

import { signIn } from 'next-auth/react';
import React from 'react';

import { GithubIcon } from '@/components/svgs/icon/github';
import { GoogleIcon } from '@/components/svgs/icon/google';
import { Button } from '@/components/ui/button';

interface Props {
	callbackUrl?: string;
}

const GithubAuth = ({ callbackUrl }: Props) => {
	const handleClick = () => signIn('github', { redirect: true, callbackUrl });

	return (
		<Button
			className="flex w-full gap-2.5"
			variant="secondary"
			onClick={handleClick}
			outlined
		>
			<GithubIcon className="size-4" />
		</Button>
	);
};

const GoogleAuth = ({ callbackUrl }: Props) => {
	const handleClick = () => signIn('google', { redirect: true, callbackUrl });

	return (
		<Button
			className="flex w-full gap-2.5"
			variant="secondary"
			onClick={handleClick}
			outlined
		>
			<GoogleIcon className="size-4" />
		</Button>
	);
};

export { GithubAuth, GoogleAuth };
