import { createTRPCRouter } from "@/server/api/trpc";

import { communityRouter } from "./routers/community";
import { userRouter } from "./routers/users";

export const appRouter = createTRPCRouter({
	community: communityRouter,
	user: userRouter,
});

export type AppRouter = typeof appRouter;
