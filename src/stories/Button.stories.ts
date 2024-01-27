import { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/ui/button";

export default {
	title: "UI/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		children: {
			name: "Label",
			control: {
				type: "text",
			},
		},
		variant: {
			name: "Variant",
			options: ["primary", "secondary", "ghost"],
			control: {
				type: "select",
				labels: {
					primary: "Primary",
					secondary: "Secondary",
					ghost: "Ghost",
				},
			},
			defaultValue: "primary",
		},
		size: {
			name: "Size",
			options: ["sm", "md", "lg", "icon"],
			control: {
				type: "select",
				labels: {
					sm: "Small",
					md: "Medium",
					lg: "Large",
					icon: "Icon",
				},
			},
			defaultValue: "md",
		},
		fullWidth: {
			name: "Full Width?",
			control: {
				type: "boolean",
			},
			defaultValue: false,
		},
		outlined: {
			name: "Outlined?",
			control: {
				type: "boolean",
			},
			defaultValue: false,
		},
		disabled: {
			name: "Disabled?",
			control: {
				type: "boolean",
			},
			defaultValue: false,
		},
		asChild: {
			table: {
				disable: true,
			},
		},
	},
	args: { children: "Button" },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	parameters: {
		controls: {
			exclude: ["Variant"],
		},
	},
	args: {
		variant: "primary",
	},
};

export const Secondary: Story = {
	parameters: {
		controls: {
			exclude: ["Variant"],
		},
	},
	args: {
		variant: "secondary",
	},
};

export const Ghost: Story = {
	parameters: {
		controls: {
			exclude: ["Variant"],
		},
	},
	args: {
		variant: "ghost",
	},
};
