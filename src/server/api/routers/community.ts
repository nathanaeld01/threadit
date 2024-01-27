import { CommunityID, Slug } from "@/lib/validators/api";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const communityRouter = createTRPCRouter({
	getCommunity: publicProcedure.input(Slug).query(async ({ ctx, input }) => {
		try {
			const community = await ctx.db.community.findUnique({
				where: { slug: input },
			});

			if (community) {
				const isCreator = ctx.session?.user.id === community?.creatorId;

				const memberCount = await ctx.db.subscription.count({
					where: {
						communityId: community.id,
					},
				});

				const isSubscribed =
					!!ctx.session?.user?.id &&
					!!(await ctx.db.subscription.findUnique({
						where: {
							userId_communityId: {
								userId: ctx.session.user.id,
								communityId: community.id,
							},
						},
					}));

				return {
					community,
					memberCount,
					isSubscribed,
					isCreator,
				};
			}
		} catch (error) {
			throw error;
		}
	}),
	subscription: protectedProcedure
		.input(CommunityID)
		.mutation(async ({ ctx, input }) => {
			try {
				const { id: userId } = ctx.session.user;
				const communityId = input;

				const subscription = await ctx.db.subscription.findUnique({
					where: {
						userId_communityId: {
							userId,
							communityId,
						},
					},
				});

				if (subscription) {
					await ctx.db.subscription.delete({
						where: {
							userId_communityId: {
								userId,
								communityId: subscription.communityId,
							},
						},
					});

					return false;
				}

				await ctx.db.subscription.create({
					data: {
						userId,
						communityId,
					},
				});

				return true;
			} catch (error) {
				throw error;
			}
		}),
});
