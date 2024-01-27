import NextAuth from "next-auth";

import authConfig from "@/server/auth/config";
import {
	apiRoutes,
	authRoutes,
	DEFAULT_LOGIN_REDIRECT,
	publicRoutes,
} from "@/server/routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
	const isLoggedIn = !!req.auth;
	const { nextUrl } = req;

	const isApiRoute = apiRoutes.some((route) =>
		nextUrl.pathname.startsWith(route),
	);
	const isAuthRoute = authRoutes.includes(nextUrl.pathname);
	const isPublicRoute = publicRoutes.some((route) =>
		nextUrl.pathname.match(route.pattern),
	);

	if (isApiRoute) return null;
	if (isAuthRoute) {
		if (isLoggedIn)
			return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
		return null;
	}
	if (!isLoggedIn && !isPublicRoute) {
		console.log(nextUrl.pathname);
		return Response.redirect(new URL("/login", nextUrl));
	}

	return null;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
