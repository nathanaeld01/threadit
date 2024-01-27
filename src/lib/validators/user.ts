import { z } from "zod";

const SetupValidator = z.object({
	username: z.string().min(3).max(20).optional().nullable(),
	email: z.string().email().optional().nullable(),
	name: z.string().optional().nullable(),
});

const SettingsValidator = z.object({
	name: z.string().optional().nullable(),
});

type SetupType = z.infer<typeof SetupValidator>;
type SettingsType = z.infer<typeof SettingsValidator>;

export { SettingsValidator, SetupValidator };
export type { SettingsType, SetupType };
