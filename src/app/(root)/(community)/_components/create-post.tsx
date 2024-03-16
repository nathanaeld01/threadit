'use client';

import { Editor } from '@/components/editor';
import { postExtensions } from '@/components/editor/extension';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

type Props = {
	slug: string;
};

export const CreatePost = ({ slug }: Props) => {
	const form = useForm({
		mode: 'onChange',
	});

	const { control, handleSubmit } = form;

	const createPostHandler = handleSubmit(async data => {
		console.log(data);
	});

	const isDirty = !!form.getValues('title') || !!form.getValues('content');

	return (
		<Form {...form}>
			<form onSubmit={createPostHandler} className="space-y-4">
				<FormField
					name="title"
					control={control}
					render={({ field }) => (
						<FormItem>
							<FormControl {...field}>
								<Input
									focusRing={false}
									placeholder="Post Title"
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					name="content"
					control={control}
					render={({ field: { onChange } }) => (
						<FormItem>
							<Editor
								onChange={onChange}
								extensions={postExtensions}
							/>
						</FormItem>
					)}
				/>
				<Button type="submit" disabled={!isDirty}>
					Submit Post
				</Button>
			</form>
		</Form>
	);
};
