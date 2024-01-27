"use client";

import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";

export const ProfileAppearance = () => {
	const form = useForm();

	const { handleSubmit } = form;

	const onSubmit = handleSubmit((data) => {
		console.log(data);
	});

	return (
		<Form {...form}>
			<form onSubmit={onSubmit}></form>
		</Form>
	);
};
