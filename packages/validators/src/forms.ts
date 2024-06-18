import { z } from "zod";

import { Slug } from "./api";

const CreateCommunityValidator = z.object({
	slug: Slug,
});

const CreatePostValidator = z.object({
	content: z.any(),
	slug: Slug,
	title: z.string().min(5).max(125),
});

type CreateCommunityType = z.infer<typeof CreateCommunityValidator>;
type CreatePostType = z.infer<typeof CreatePostValidator>;

export { CreateCommunityValidator, CreatePostValidator };
export type { CreateCommunityType, CreatePostType };
