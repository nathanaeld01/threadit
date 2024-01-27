import { type UserRole } from '@prisma/client';
import { type User } from 'next-auth';

import 'next-auth/jwt';

declare module 'next-auth/jwt' {
	interface JWT {
		id: string;
		username?: string | null;
		role: UserRole;
	}
}

declare module 'next-auth' {
	interface Session {
		user: {
			id: string;
			username?: string | null;
			joinedOn: Date;
			role: UserRole;
		} & User;
	}
}
