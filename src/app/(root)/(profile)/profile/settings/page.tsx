import { ChevronLeftIcon } from 'lucide-react';

import Link from '@/components/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { auth } from '@/server/auth';

import { ProfileAppearance } from '../_components/profile-appeaance';
import { ProfileSettings } from '../_components/profile-settings';

export const metadata = {
	title: 'Profile Settings',
};

const Page = async () => {
	const session = await auth();

	if (!session) {
		return null;
	}

	return (
		<>
			<Link
				className="gap-2 items-center leading-none"
				variant="secondary"
				href="/profile"
				outlined
			>
				<ChevronLeftIcon className="size-5" />
				Back to Profile
			</Link>
			<Card>
				<CardHeader className="border-b border-b-border bg-muted/20 p-4">
					<CardTitle className="text-base">
						Profile Settings
					</CardTitle>
				</CardHeader>
				<CardContent className="p-4">
					<ProfileSettings profile={{ name: session.user.name }} />
				</CardContent>
			</Card>
			<Card>
				<CardHeader className="border-b border-b-border bg-muted/20 p-4">
					<CardTitle className=" text-base">
						Profile Appearance
					</CardTitle>
				</CardHeader>
				<CardContent className="p-4">
					<ProfileAppearance appearance={{}} />
				</CardContent>
			</Card>
		</>
	);
};

export default Page;
