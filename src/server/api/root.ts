import { createTRPCRouter } from '@/server/api/trpc';

import { communityRouter } from './routers/community';
import { postsRouter } from './routers/posts';
import { userRouter } from './routers/users';

export const appRouter = createTRPCRouter({
	community: communityRouter,
	posts: postsRouter,
	user: userRouter,
});

export type AppRouter = typeof appRouter;
