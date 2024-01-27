import { z } from "zod";

const LoginValidator = z.object({
	email: z.string().email(),
	password: z.string().min(8),
});

const RegisterValidator = z.object({
	name: z.string(),
	email: z.string().email(),
	username: z.string().min(8).max(20),
	password: z.string().min(8),
});

type LoginType = z.infer<typeof LoginValidator>;
type RegisterType = z.infer<typeof RegisterValidator>;

export { LoginValidator, RegisterValidator };
export type { LoginType, RegisterType };
