"use client";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
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
import { RegisterValidator } from "@/lib/validators/auth";
import { api } from "@/trpc/react";

export const RegisterForm = () => {
	const form = useForm({
		resolver: zodResolver(RegisterValidator),
		mode: "onChange",
		defaultValues: {
			name: "",
			email: "",
			password: "",
			username: "",
		},
	});

	const {
		handleSubmit,
		formState: { isDirty, isValid },
	} = form;

	const { mutateAsync, isLoading } = api.user.createUser.useMutation();
	const router = useRouter();

	const onSubmit = handleSubmit((data) => {
		toast.promise(mutateAsync(data), {
			loading: "Registering user...",
			success: () => {
				router.push("/login");
				return "Successfully registered new account!";
			},
			error: "Failed to register user!",
		});
	});

	return (
		<Form {...form}>
			<form onSubmit={onSubmit}>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem className="mb-2 space-y-1">
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									type="email"
									placeholder="johndoe@example.com"
									autoComplete="off"
									{...field}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem className="mb-2 space-y-1">
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input
									type="text"
									placeholder="John Doe"
									autoComplete="off"
									{...field}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem className="mb-2 space-y-1">
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input
									type="text"
									placeholder="john_doe"
									autoComplete="off"
									{...field}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem className="mb-2 space-y-1">
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									type="password"
									placeholder="*********"
									autoComplete="off"
									{...field}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<Button
					size="sm"
					type="submit"
					className="mt-4 w-full"
					disabled={!isDirty || !isValid || isLoading}
				>
					{isLoading && <Loader2 className="mr-2 size-4 animate-spin" />}
					Register
				</Button>
			</form>
		</Form>
	);
};
