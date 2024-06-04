"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@threadit/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	useForm,
} from "@threadit/ui/form";
import { Input } from "@threadit/ui/input";
import { CreateCommunityValidator } from "@threadit/validators/forms";

export const CreateCommunity = () => {
	const form = useForm({
		defaultValues: {
			slug: "",
		},
		resolver: zodResolver(CreateCommunityValidator),
	});

	const {
		control,
		formState: { isDirty, isValid },
		handleSubmit,
	} = form;

	const createCommunityHandler = handleSubmit((values) => {
		console.log(values);
	});

	return (
		<Form {...form}>
			<form onSubmit={createCommunityHandler}>
				<FormField
					control={control}
					name="slug"
					render={({ field }) => (
						<FormItem className="space-y-2">
							<FormLabel>Community Name</FormLabel>
							<div className="relative">
								<p className="absolute inset-y-0 left-0 grid w-10 place-items-center text-sm text-zinc-400">
									c/
								</p>
								<FormControl {...field}>
									<Input
										autoComplete="off"
										className="pl-8"
										placeholder="Community Name"
									/>
								</FormControl>
							</div>
						</FormItem>
					)}
				/>
				<ul className="text-muted pb-4 pl-2 pt-2 text-xs">
					<li className="list-inside list-disc">
						Community name including capitalization cannot be
						changed.
					</li>
					<li className="list-inside list-disc">
						Special characters, except dashes (-), are not allowed.
					</li>
				</ul>
				<Button
					className="ml-auto flex"
					disabled={!isDirty || !isValid}
					type="submit"
				>
					Create Community
				</Button>
			</form>
		</Form>
	);
};
