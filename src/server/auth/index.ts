import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { type UserRole } from "@prisma/client";

import { db } from "../db";

import authConfig from "./config";

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	callbacks: {
		async session({ token, session }) {
			if (token) {
				session.user.id = token.sub!;
				session.user.role = token.role! as UserRole;
				session.user.username = token.username as string;
				session.user.joinedOn = token.joinedOn as Date;
			}

			return session;
		},
		async jwt({ token }) {
			if (!token.sub) return token;

			const existingUser = await db.user.findUnique({
				where: { id: token.sub },
			});

			if (existingUser) {
				token.picture = existingUser.image;
				token.role = existingUser.role;
				token.username = existingUser.username;
				token.joinedOn = existingUser.joinedOn;
			}

			return token;
		},
	},
	adapter: PrismaAdapter(db),
	session: { strategy: "jwt" },
	pages: {
		signIn: "/login",
		signOut: "/register",
		error: "/auth/error",
		newUser: "/profile/setup",
	},
	...authConfig,
});
