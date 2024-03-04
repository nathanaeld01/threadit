import { Feed } from '@/lib/validators/api';
import { createTRPCRouter, publicProcedure } from '../trpc';

export const postsRouter = createTRPCRouter({
	getPosts: publicProcedure.input(Feed).query(async ({ ctx, input }) => {
		try {
			const posts = await ctx.db.post.findMany({});

			return posts;
		} catch (error) {
			throw error;
		}
	}),
});
