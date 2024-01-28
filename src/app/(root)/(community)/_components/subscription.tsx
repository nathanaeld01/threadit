'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';
import { api } from '@/trpc/react';

type Props = {
	initialValue?: boolean;
	id: string;
};

export const Subscription = ({ initialValue = false, id }: Props) => {
	const [isSubscribed, setIsSubscribed] = useState<boolean>(initialValue);
	const { status } = useSession();
	const router = useRouter();

	const { mutateAsync: subscribe, isLoading } =
		api.community.subscription.useMutation();

	const subscriptionHandler = () =>
		status !== 'authenticated'
			? toast.error('You must be logged in to subscribe to a community', {
					action: {
						label: 'Login',
						onClick: () => router.push('/login'),
					},
			  })
			: toast.promise(subscribe(id), {
					loading: isSubscribed ? 'Leaving...' : 'Joining...',
					success: data => {
						router.refresh();
						setIsSubscribed(data);
						return data ? 'Subscribed' : 'Unsubscribed';
					},
					error: error => {
						console.error(error);
						return 'Error';
					},
			  });

	return (
		<Button
			onClick={subscriptionHandler}
			disabled={isLoading}
			outlined={isSubscribed}
			className="h-8 min-w-20 rounded-full text-sm"
			variant={isSubscribed ? 'secondary' : 'default'}
		>
			{isSubscribed ? 'Leave' : 'Join'}
		</Button>
	);
};
