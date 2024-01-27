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
import { getDirtyData } from "@/lib/utils";
import { type SettingsType, SettingsValidator } from "@/lib/validators/user";

type Props = {
	profile: {
		name?: string | undefined | null;
	};
};

export const ProfileSettings = ({ profile }: Props) => {
	const defaultValues: SettingsType = {};

	if (profile.name) defaultValues.name = profile.name ?? "";

	const form = useForm<SettingsType>({
		resolver: zodResolver(SettingsValidator),
		mode: "onChange",
		defaultValues,
	});

	const {
		control,
		handleSubmit,
		formState: { isDirty },
	} = form;

	const onSubmit = handleSubmit((data) => {
		const values = getDirtyData(data, defaultValues);
		console.log(values);
	});

	return (
		<Form {...form}>
			<form onSubmit={onSubmit}>
				<FormField
					name="name"
					control={control}
					render={({ field }) => (
						<FormItem className="flex">
							<FormLabel className="inline-flex w-1/5 items-center">
								Name:
							</FormLabel>
							<FormControl {...field}>
								<Input className="w-4/5" />
							</FormControl>
						</FormItem>
					)}
				/>
				<div className="mt-6 flex justify-end">
					<Button type="submit" size="sm" disabled={!isDirty}>
						Save
					</Button>
				</div>
			</form>
		</Form>
	);
};
