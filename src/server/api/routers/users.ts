import { hash } from 'bcryptjs';

import { RegisterValidator } from '@/lib/validators/auth';
import { SetupValidator } from '@/lib/validators/user';

import { Username } from '@/lib/validators/api';
import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc';

export const userRouter = createTRPCRouter({
	createUser: publicProcedure
		.input(RegisterValidator)
		.mutation(async ({ ctx, input }) => {
			try {
				const validatedInput = RegisterValidator.safeParse(input);

				if (validatedInput.success) {
					const { name, email, username, password } = input;
					const hashedPassword = await hash(password, 10);

					return await ctx.db.user.create({
						data: {
							name,
							email,
							username,
							password: hashedPassword,
						},
					});
				}

				throw new Error('Invalid input');
			} catch (error) {
				throw error;
			}
		}),
	setupUser: protectedProcedure
		.input(SetupValidator)
		.mutation(async ({ ctx, input }) => {
			try {
				const { username, email, name } = input;
				const updateData: typeof input = {};

				if (email) {
					updateData.email = email;
					const user = await ctx.db.user.findUnique({
						where: { email },
					});

					if (user) {
						throw new Error('Email already exists');
					}
				}

				if (username) {
					updateData.username = username;
					const user = await ctx.db.user.findUnique({
						where: { username },
					});

					if (user) {
						throw new Error('Username already exists');
					}
				}

				if (name) updateData.name = name;

				await ctx.db.user.update({
					where: { id: ctx.session.user.id },
					data: updateData,
				});
			} catch (error) {
				throw error;
			}
		}),
	getUserInfo: publicProcedure
		.input(Username)
		.query(async ({ ctx, input }) => {
			try {
				const user = await ctx.db.user.findUnique({
					where: { username: input },
				});

				return user;
			} catch (error) {
				throw error;
			}
		}),
});
