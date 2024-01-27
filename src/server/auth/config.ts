import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { compare } from "bcryptjs";

import { env } from "@/env";
import { LoginValidator } from "@/lib/validators/auth";

import { db } from "../db";

export default {
	providers: [
		GitHub({
			clientId: env.GITHUB_CLIENT_ID,
			clientSecret: env.GITHUB_CLIENT_SECRET,
		}),
		Google({
			clientId: env.GOOGLE_CLIENT_ID,
			clientSecret: env.GOOGLE_CLIENT_SECRET,
		}),
		Credentials({
			async authorize(credentials) {
				const validateFields = LoginValidator.safeParse(credentials);

				if (validateFields.success) {
					const { email, password } = validateFields.data;

					const user = await db.user.findUnique({ where: { email } });
					if (!user) throw new Error("User does not exist");
					if (!user.password) throw new Error("Login with Google or GitHub");

					const passwordsMatch = await compare(password, user.password);
					if (!passwordsMatch) throw new Error("Incorrect password");

					return user;
				}

				return null;
			},
		}),
	],
	secret: env.NEXTAUTH_SECRET,
} satisfies NextAuthConfig;
