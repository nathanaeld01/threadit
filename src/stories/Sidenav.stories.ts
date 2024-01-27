import { Meta, StoryObj } from "@storybook/react";

import { Sidenav } from "@/components/sidenav";

const meta = {
	title: "Components/Sidenav",
	component: Sidenav,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Sidenav>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		profile: {
			name: "John Doe",
			image: "https://i.pravatar.cc/300",
		},
	},
};

export default meta;
