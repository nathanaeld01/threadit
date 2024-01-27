import { Meta, StoryObj } from "@storybook/react";
import { ArrowBigDown, ArrowBigUp, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button, buttonStyles } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import image from "./assets/camera.jpg";
import avatar from "./assets/react.png";

type Props = {
	avatar: string;
	title: string;
	image?: string;
};

export const Post = ({ avatar, title, image }: Props) => {
	return (
		<Card className="grid h-fit w-[900px] grid-rows-[1fr_auto] divide-y divide-border overflow-hidden p-0 transition-[border-color] duration-300 ease-in-out hover:border-border-hover">
			<CardContent className="grid gap-2 p-2 max-md:grid-rows-[1fr_auto] md:grid-cols-[1fr_auto]">
				<div className="grid h-full w-full grid-rows-[auto_1fr] overflow-hidden md:max-h-32">
					<div className="flex gap-x-1 md:gap-x-2">
						<Link
							href="/c/ReactJs"
							className="group inline-flex h-6 w-fit items-center justify-center text-xs font-semibold text-secondary-content"
						>
							<Image
								src={avatar}
								className="rounded-full border border-border group-hover:border-border-hover"
								alt="Post Image"
								width={20}
								height={20}
							/>
							<span className="ml-1 group-hover:underline">c/ReactJs</span>
						</Link>
						<div className="select-none text-content/60">•</div>
						<Link
							href="/c/ReactJs"
							className="inline-flex h-6 w-fit items-center justify-center text-xs font-semibold text-secondary-content hover:underline"
						>
							u/nathanael01
						</Link>
						<div className="select-none text-content/60">•</div>
						<div className="inline-flex h-6 w-fit items-center justify-center bg-secondary text-xs text-secondary-content">
							5 days ago
						</div>
					</div>
					<h2 className="line-clamp-4 max-h-[6.25rem] text-xl font-semibold leading-6">
						{title}
					</h2>
				</div>
				{image && (
					<div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-md md:h-32">
						<Image src={image} alt="Post Image" fill />
					</div>
				)}
			</CardContent>
			<CardFooter className="flex h-9 divide-x divide-border overflow-hidden p-0">
				<div className="flex items-center gap-2">
					<Button
						className="size-9 rounded-none p-1 hover:text-emerald-500"
						variant="ghost"
						size="icon"
					>
						<ArrowBigUp className="h-5 w-5 transition-[stroke] duration-100 ease-in-out" />
					</Button>
					<span className="text-xs font-semibold">1</span>
					<Button
						className="size-9 rounded-none p-1 hover:text-red-500"
						variant="ghost"
						size="icon"
					>
						<ArrowBigDown className="h-5 w-5 transition-[stroke] duration-100 ease-in-out" />
					</Button>
				</div>
				<div className="">
					<Link
						href="/c/ReactJs/post/nqwiehrf29qfj9qifh"
						className={cn(
							buttonStyles({ variant: "ghost", size: "sm" }),
							"rounded-none",
						)}
					>
						<MessageCircle className="mr-1 h-4 w-4" />
						<span className="text-xs">0 Comments</span>
					</Link>
				</div>
			</CardFooter>
		</Card>
	);
};

const meta = {
	title: "Components/Post",
	component: Post,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		avatar: {
			name: "Avatar",
			control: {
				type: "text",
			},
		},
		title: {
			name: "Title",
			control: {
				type: "text",
			},
		},
		image: {
			name: "Image",
			control: {
				type: "text",
			},
		},
	},
} satisfies Meta<typeof Post>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	parameters: {
		controls: {
			exclude: ["Image"],
		},
	},
	args: {
		avatar: avatar.src,
		title:
			"This is a test title to see how it looks like on the post, with responsive text. Now we putting some extratext just to see how it looks like. Also to stretch the text a little bit more. And more specifically for tetsing the line clamp. This is to get the text to the end of the line.",
	},
};

export const WithImage: Story = {
	args: {
		avatar: avatar.src,
		title:
			"This is a test title to see how it looks like on the post, with responsive text. Now we putting some extratext just to see how it looks like. Also to stretch the text a little bit more. And more specifically for tetsing the line clamp. This is to get the text to the end of the line.",
		image: image.src,
	},
};

export const SmallTitle: Story = {
	args: {
		avatar: avatar.src,
		title: "This is a test title",
	},
};

export default meta;
