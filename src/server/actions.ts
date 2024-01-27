'use server';

import type { SignInOptions, SignOutParams } from 'next-auth/react';

import { type LoginType, LoginValidator } from '@/lib/validators/auth';

import { signIn, signOut } from './auth';

async function login(data: LoginType, options: SignInOptions) {
	try {
		const validateInput = LoginValidator.safeParse(data);

		if (validateInput.success) {
			return await signIn('credentials', { ...data, options });
		}

		return validateInput;
	} catch (error) {
		throw error;
	}
}

async function logout(options?: SignOutParams) {
	try {
		await signOut(options);
	} catch (error) {
		throw error;
	}
}

export { login, logout };
