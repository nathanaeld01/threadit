import NextAuth from 'next-auth';

import authConfig from '@/server/auth/config';
import {
	DEFAULT_LOGIN_REDIRECT,
	apiRoutes,
	authRoutes,
	publicRoutes,
} from '@/server/routes';

const { auth } = NextAuth(authConfig);

export default auth(req => {
	const isLoggedIn = !!req.auth;
	const { nextUrl } = req;

	const loginRedirUrl = (url: string) => new URL(url, nextUrl);

	const isApiRoute = apiRoutes.some(route =>
		nextUrl.pathname.startsWith(route),
	);
	const isAuthRoute = authRoutes.includes(nextUrl.pathname);
	const isPublicRoute = publicRoutes.some(route =>
		nextUrl.pathname.match(route.pattern),
	);

	if (isApiRoute) return;
	if (isAuthRoute) {
		if (isLoggedIn)
			return Response.redirect(loginRedirUrl(DEFAULT_LOGIN_REDIRECT));
		return;
	}
	if (!isLoggedIn && !isPublicRoute) {
		const url = loginRedirUrl('/login');
		url.searchParams.set('callbackUrl', nextUrl.pathname);

		return Response.redirect(url);
	}

	return;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
