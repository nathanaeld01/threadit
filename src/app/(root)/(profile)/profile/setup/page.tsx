import { redirect } from 'next/navigation';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { auth } from '@/server/auth';

import { ProfileSetup } from '../_components/profile-setup';

export const metadata = {
	title: 'Profile Setup',
};

const Page = async () => {
	const session = await auth();
	const isSetup =
		session?.user?.username && session?.user?.email && session?.user?.name;

	if (isSetup) {
		redirect('/profile');
	}

	return (
		<Card>
			<CardHeader className="border-b border-b-border bg-muted/20 p-4">
				<CardTitle className="text-base">Profile Setup</CardTitle>
			</CardHeader>
			<CardContent className="p-4">
				<ProfileSetup
					profile={{
						username: session?.user.username,
						email: session?.user.email,
						name: session?.user.name,
					}}
				/>
			</CardContent>
		</Card>
	);
};

export default Page;
