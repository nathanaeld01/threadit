import { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/ui/button";
import { toast, Toaster, type Toasts } from "@/components/ui/sonner";

type Props = {
	message: string;
	variant: Toasts | "default";
	response?: boolean;
};

const Component = ({ message, variant, response }: Props) => {
	const promise = () =>
		new Promise((resolve, reject) =>
			setTimeout(() => {
				if (response) resolve({ name: "Sonner" });
				reject({ name: "Error" });
			}, 2000),
		);

	const onClick = () => {
		if (variant === "promise")
			return toast.promise(promise, {
				loading: "Loading...",
				success: "Promise resolved!",
				error: "Error!",
			});
		if (variant === "default") return toast(message);

		return toast[variant](message);
	};

	return (
		<>
			<Button onClick={onClick}>Toast!</Button>
			<Toaster duration={50000} closeButton />
		</>
	);
};

export default {
	title: "UI/Sonner",
	component: Component,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		variant: {
			name: "Variant",
			options: ["success", "error", "warning", "promise", "info", "default"],
			control: {
				type: "select",
				labels: {
					default: "Default",
					promise: "Promise",
					success: "Success",
					warning: "Warning",
					error: "Error",
					info: "Info",
				},
			},
		},
		message: {
			name: "Message",
			control: { type: "text" },
		},
		response: {
			name: "Promise response",
			control: { type: "boolean" },
			if: { arg: "variant", eq: "promise" },
		},
	},
	args: {
		variant: "default",
		message: "Hello world!",
	},
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const Default: Story = {};
