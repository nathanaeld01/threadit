'use client';

import { api } from '@/trpc/react';

export const Feed = () => {
	const { data, fetchNextPage } = api.posts.getPosts.useInfiniteQuery({});

	console.log(data);

	return <></>;
};
