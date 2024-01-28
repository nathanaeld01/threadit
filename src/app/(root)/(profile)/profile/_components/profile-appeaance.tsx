'use client';

import { useForm } from 'react-hook-form';

import { UserAvatar } from '@/components/svgs/user';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { fileToBase64 } from '@/lib/utils';

type Props = {
	appearance: {
		avatar?: string | undefined | null;
	};
};

export const ProfileAppearance = ({ appearance }: Props) => {
	const defaultValues: typeof appearance = {};

	if (appearance.avatar) defaultValues.avatar = appearance.avatar ?? '';

	const form = useForm({
		defaultValues,
	});

	const {
		control,
		handleSubmit,
		formState: { isDirty },
	} = form;

	const onSubmit = handleSubmit(data => {
		console.log(data);
	});

	return (
		<Form {...form}>
			<form onSubmit={onSubmit}>
				<FormField
					name="avatar"
					control={control}
					render={({ field: { onChange } }) => (
						<div className="flex gap-2">
							<UserAvatar avatar={form.getValues('avatar')} />
							<FormItem className="flex flex-col mt-auto">
								<FormLabel htmlFor="avatar">Avatar</FormLabel>
								<Input
									type="file"
									onChange={async e => {
										const file = e.target.files?.[0]!;
										const path = await fileToBase64(file);

										onChange(path);
									}}
								/>
							</FormItem>
						</div>
					)}
				/>
				<div className="flex justify-end">
					<Button type="submit" disabled={!isDirty}>
						Save
					</Button>
				</div>
			</form>
		</Form>
	);
};
