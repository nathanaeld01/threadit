/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@threadit/ui/button";
import { type EditorConfig } from "@threadit/ui/editor";
import { Form, FormControl, FormField, useForm } from "@threadit/ui/form";
import { Input } from "@threadit/ui/input";
import { CreatePostValidator } from "@threadit/validators/forms";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import type { ToolConstructable } from "@threadit/ui/editor";
import type { CreatePostType } from "@threadit/validators/forms";

const Editor = dynamic(
	() => import("@threadit/ui/editor").then((mod) => mod.Editor),
	{ ssr: false },
);

interface Props {
	slug: string;
}

type Tools = Record<string, ToolConstructable>;

function useTools(): EditorConfig["tools"] {
	const [tools, setTools] = useState<Tools>({});

	useEffect(() => {
		async function getTools() {
			const Header = (await import("@threadit/utils/tools/header"))
				.default;
			const Embed = (await import("@threadit/utils/tools/embed")).default;
			const Table = (await import("@threadit/utils/tools/table")).default;
			const Code = (await import("@threadit/utils/tools/code")).default;
			const Checklist = (await import("@threadit/utils/tools/checklist"))
				.default;
			const SimpleImage = (
				await import("@threadit/utils/tools/simple-image")
			).default;
			const Quote = (await import("@threadit/utils/tools/quote")).default;
			const Underline = (await import("@threadit/utils/tools/underline"))
				.default;

			setTools({
				Checklist,
				Code,
				Embed,
				Header,
				Quote,
				SimpleImage,
				Table,
				Underline,
			});
		}

		void getTools();
	}, []);

	return {
		checklist: {
			class: tools?.Checklist,
			inlineToolbar: true,
		},
		code: tools.Code!,
		embed: {
			class: tools.Embed,
			config: {
				services: {
					youtube: true,
				},
			},
		},
		header: {
			class: tools.Header,
			config: {
				defaultLevel: 3,
				levels: [2, 3, 4],
				placeholder: "Enter a header",
			},
		},
		image: tools.SimpleImage!,
		quote: tools.Quote!,
		table: tools.Table!,
		underline: tools.Underline!,
	};
}

const CreatePost = ({ slug }: Props) => {
	const form = useForm<CreatePostType>({
		defaultValues: {
			content: "",
			slug,
			title: "",
		},
		resolver: zodResolver(CreatePostValidator),
	});
	const tools = useTools();

	const {
		control,
		formState: { isDirty, isValid },
		handleSubmit,
	} = form;

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
							<Editor placeholder="Content" tools={tools} />
						</FormControl>
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
