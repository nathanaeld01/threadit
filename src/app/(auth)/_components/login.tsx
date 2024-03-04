'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/sonner';
import { LoginValidator } from '@/lib/validators/auth';
import { login } from '@/server/actions';

type Props = {
	callbackUrl?: string;
};

export const LoginForm = ({ callbackUrl }: Props) => {
	const form = useForm({
		resolver: zodResolver(LoginValidator),
		mode: 'onChange',
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const {
		control,
		handleSubmit,
		formState: { isDirty, isValid, isLoading },
	} = form;

	const onSubmit = handleSubmit(async data => {
		toast.promise(login(data, { redirect: true, redirectTo: '/' }), {
			loading: 'Signing in...',
			success: 'Signed in!',
			error: error => {
				console.log(error);
				return 'Error signing in';
			},
		});
	});

	return (
		<Form {...form}>
			<form onSubmit={onSubmit}>
				<FormField
					control={control}
					name="email"
					render={({ field }) => (
						<FormItem className="mb-2 space-y-1">
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									type="email"
									placeholder="johndoe@example.com"
									{...field}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={control}
					name="password"
					render={({ field }) => (
						<FormItem className="mb-2 space-y-1">
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									type="password"
									placeholder="********"
									{...field}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<Button
					type="submit"
					className="mt-4 w-full"
					disabled={!isDirty || !isValid || isLoading}
				>
					{isLoading && (
						<Loader2 className="mr-2 size-4 animate-spin" />
					)}
					Login
				</Button>
			</form>
		</Form>
	);
};
