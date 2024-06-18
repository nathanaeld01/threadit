"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@threadit/ui/button";
import { Form, FormControl, FormField, useForm } from "@threadit/ui/form";
import { Input } from "@threadit/ui/input";
import { CreatePostValidator } from "@threadit/validators/forms";
import dynamic from "next/dynamic";

import type { CreatePostType } from "@threadit/validators/forms";

const Editor = dynamic(
	() => import("@threadit/ui/editor").then((mod) => mod.Editor),
	{ ssr: false },
);

interface Props {
	slug: string;
}

export const CreatePost = ({ slug }: Props) => {
	const form = useForm<CreatePostType>({
		defaultValues: {
			content: "",
			slug,
			title: "",
		},
		resolver: zodResolver(CreatePostValidator),
	});

	const { control, handleSubmit } = form;

	const createPostHandler = handleSubmit((values) => {
		console.log(values.content);
	});

	return (
		<Form {...form}>
			<form className="space-y-4" onSubmit={createPostHandler}>
				<FormField
					control={control}
					name="title"
					render={({ field }) => (
						<FormControl {...field}>
							<Input placeholder="Title" />
						</FormControl>
					)}
				/>
				<FormField
					control={control}
					name="content"
					render={({ field }) => (
						<FormControl {...field}>
							<Editor placeholder="Content" tools={{}} />
						</FormControl>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
};
