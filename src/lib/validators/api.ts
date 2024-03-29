import { z } from 'zod';

const CommunityID = z
	.string()
	.refine(id => id.length > 0, { message: 'Missing community ID.' });

const Username = z.string().min(3).max(20);

const Slug = z
	.string()
	.min(3, { message: 'Name must be at least 3 characters long' })
	.max(21, { message: 'Name cannot be longer than 20 characters' })
	.regex(/^[A-Za-z0-9-]*$/g, {
		message: "Name cannot contain special characters or spaces except '-'",
	});

const Feed = z.object({
	limit: z.number().min(1).max(100).nullish(),
	cursor: z.number().nullish(), // <-- "cursor" needs to exist, but can be any type
});

export { CommunityID, Slug, Username, Feed };
