const publicRoutes = [
	{ path: '/', pattern: /^\/$/ },
	{ path: '/c/:value', pattern: /^\/c\/(?!create$)[\w-]+$/ },
	{
		path: '/c/:value/post/:value',
		pattern: /^\/c\/(?!create$)[\w-]+\/post\/[\w-]+$/,
	},
	{ path: '/u/:value', pattern: /^\/u\/[\w-]+$/ },
];

const authRoutes = ['/login', '/register'];

const apiRoutes = ['/api/auth', '/api/trpc'];

const DEFAULT_LOGIN_REDIRECT = '/';
const DEFAULT_LOGGEDIN_REDIRECT = '/profile';

export {
	apiRoutes,
	authRoutes,
	DEFAULT_LOGGEDIN_REDIRECT,
	DEFAULT_LOGIN_REDIRECT,
	publicRoutes,
};
