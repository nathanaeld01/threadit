import { z } from "zod";

const Slug = z
	.string()
	.min(3, { message: "Name must be at least 3 characters long" })
	.max(21, { message: "Name cannot be longer than 20 characters" })
	.regex(/^[A-Za-z0-9-]*$/g, {
		message: "Name cannot contain special characters or spaces except '-'",
	});

export { Slug };
