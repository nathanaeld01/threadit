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
import { CreateCommunityValidator } from "@/lib/validators/forms";

export const CreateCommunity = () => {
	const form = useForm({
		resolver: zodResolver(CreateCommunityValidator),
		mode: "onChange",
		defaultValues: {
			slug: "",
		},
	});

	const {
		control,
		handleSubmit,
		formState: { isDirty, isValid },
	} = form;

	const onSubmit = handleSubmit(async (data) => {
		console.log(data);
	});

	return (
		<Form {...form}>
			<form onSubmit={onSubmit}>
				<div className="space-y-2">
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
											className="pl-8"
											placeholder="Community Name"
											autoComplete="off"
										/>
									</FormControl>
								</div>
							</FormItem>
						)}
					/>
					<ul className="pb-2 text-xs">
						<li className="list-inside list-disc">
							Community name including capitalization cannot be changed.
						</li>
						<li className="list-inside list-disc">
							Special characters, except dashes (-), are not allowed.
						</li>
					</ul>
				</div>
				<div className="flex justify-end">
					<Button type="submit" disabled={!isDirty || !isValid}>
						Create Community
					</Button>
				</div>
			</form>
		</Form>
	);
};
