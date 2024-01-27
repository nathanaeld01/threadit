"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/sonner";
import { getDirtyData } from "@/lib/utils";
import { type SetupType, SetupValidator } from "@/lib/validators/user";
import { api } from "@/trpc/react";

type Props = {
	profile: {
		username?: string | null;
		email?: string | null;
		name?: string | null;
	};
};

export const ProfileSetup = ({ profile }: Props) => {
	const defaultValues: typeof profile = {};

	if (profile.username == null) defaultValues.username = profile.username ?? "";
	if (profile.email === null) defaultValues.email = profile.email ?? "";
	if (profile.name === null) defaultValues.name = profile.name ?? "";

	const form = useForm<SetupType>({
		resolver: zodResolver(SetupValidator),
		mode: "onChange",
		defaultValues,
	});

	const {
		control,
		handleSubmit,
		formState: { isDirty, dirtyFields },
	} = form;

	const { mutateAsync, isLoading } = api.user.setupUser.useMutation();

	const onSubmit = handleSubmit((data) => {
		const values = getDirtyData(data, dirtyFields);

		return toast.promise(mutateAsync(values), {
			loading: "Saving...",
			success: "Saved!",
			error: "Failed to save",
		});
	});

	return (
		<Form {...form}>
			<form onSubmit={onSubmit}>
				{!profile.username && (
					<FormField
						name="username"
						control={control}
						render={({ field }) => (
							<FormItem className="flex gap-2">
								<FormLabel className="flex h-10 w-1/4 items-center">
									Username:
								</FormLabel>
								<div className="relative w-3/4">
									<div className="absolute flex h-10 w-9 items-center justify-center text-foreground/50">
										u/
									</div>
									<FormControl {...field}>
										<Input className="pl-8" autoComplete="off" />
									</FormControl>
								</div>
							</FormItem>
						)}
					/>
				)}
				{!profile.email && (
					<FormField
						name="email"
						control={control}
						render={({ field }) => (
							<FormItem className="flex items-center gap-2">
								<FormLabel className="w-1/4">Email</FormLabel>
								<FormControl {...field}>
									<Input className="w-3/4" />
								</FormControl>
							</FormItem>
						)}
					/>
				)}
				{!profile.name && (
					<FormField
						name="name"
						control={control}
						render={({ field }) => (
							<FormItem className="flex items-center gap-2">
								<FormLabel className="w-1/4">Name</FormLabel>
								<FormControl {...field}>
									<Input className="w-3/4" />
								</FormControl>
							</FormItem>
						)}
					/>
				)}
				<div className="mt-6 flex justify-end">
					<Button type="submit" size="sm" disabled={!isDirty || isLoading}>
						Submit
					</Button>
				</div>
			</form>
		</Form>
	);
};
