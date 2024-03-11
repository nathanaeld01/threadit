import 'server-only';

import {
	TRPCClientError,
	createTRPCProxyClient,
	loggerLink,
} from '@trpc/client';
import { callProcedure } from '@trpc/server';
import { observable } from '@trpc/server/observable';
import { type TRPCErrorResponse } from '@trpc/server/rpc';
import { cookies } from 'next/headers';
import { cache } from 'react';

import { type AppRouter, appRouter } from '@/server/api/root';
import { createTRPCContext } from '@/server/api/trpc';
import { transformer } from './shared';

const createContext = cache(() => {
	return createTRPCContext({
		headers: new Headers({
			cookie: cookies().toString(),
			'x-trpc-source': 'rsc',
		}),
	});
});

export const api = createTRPCProxyClient<AppRouter>({
	transformer,
	links: [
		loggerLink({
			enabled: () => false,
		}),
		() =>
			({ op }) =>
				observable(observer => {
					createContext()
						.then(ctx => {
							return callProcedure({
								procedures: appRouter._def.procedures,
								path: op.path,
								rawInput: op.input,
								ctx,
								type: op.type,
							});
						})
						.then(data => {
							observer.next({ result: { data } });
							observer.complete();
						})
						.catch((cause: TRPCErrorResponse) => {
							observer.error(TRPCClientError.from(cause));
						});
				}),
	],
});
