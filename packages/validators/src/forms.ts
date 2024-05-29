import { z } from "zod";

import { Slug } from "./api";

const CreateCommunityValidator = z.object({
	slug: Slug,
});

type CreateCommunityType = z.infer<typeof CreateCommunityValidator>;

export { CreateCommunityValidator };
export type { CreateCommunityType };
