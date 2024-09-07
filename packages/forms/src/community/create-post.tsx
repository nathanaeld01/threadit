"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@threadit/ui/button";
import { Form, FormControl, FormField, useForm } from "@threadit/ui/form";
import { Input } from "@threadit/ui/input";
import { CreatePostValidator } from "@threadit/validators/forms";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import type { EditorConfig } from "@threadit/ui/editor";
import type { CreatePostType } from "@threadit/validators/forms";

const Editor = dynamic(() => import("@threadit/ui/editor"), { ssr: false });

interface Props {
	slug: string;
}

const CreatePost = ({ slug }: Props) => {
	const [tools, setTools] = useState<EditorConfig["tools"]>();
	const form = useForm<CreatePostType>({
		defaultValues: {
			content: "",
			slug,
			title: "",
		},
		resolver: zodResolver(CreatePostValidator),
	});

	const {
		control,
		formState: { isDirty, isValid },
		handleSubmit,
	} = form;

	const createPostHandler = handleSubmit((values) => {
		console.log(values.content);
	});

	useEffect(() => {
		const fetchTools = async () => {
			const editorTools = (await import("@threadit/utils/tools")).default;
			setTools(editorTools);
		};

		fetchTools();
	}, []);

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
					render={({ field: { onChange } }) => (
						<Editor
							onChange={onChange}
							placeholder="Content"
							tools={tools}
						/>
					)}
				/>
				<Button disabled={!isDirty && !isValid} type="submit">
					Submit
				</Button>
			</form>
		</Form>
	);
};

export default CreatePost;
