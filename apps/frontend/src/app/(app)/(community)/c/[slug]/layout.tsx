import { Button, buttonStyles } from "@threadit/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@threadit/ui/card";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@threadit/ui/collapsible";
import { cn } from "@threadit/utils/class";
import Link from "next/link";

import { Header, HeaderItem } from "@/components/community/header";
import { CommunityAvatar } from "@/components/shared/avatars/community";
import { Icon } from "@/components/shared/icons";

interface Props {
	children: React.ReactNode;
	params: {
		slug: string;
	};
}

interface AboutProps {
	children: React.ReactNode;
	title: string;
}

interface RuleProps {
	children?: React.ReactNode;
	index: number;
	title: string;
}

export default ({ children, params: { slug } }: Props) => {
	return (
		<>
			<div className="flex w-full flex-col">
				<div className="h-38 bg-tertiary-hover relative w-full">
					<div className="absolute left-0 top-0 z-0 flex size-full" />
					<div className="z-1 bg-community relative mt-24 h-14 py-4">
						<div className="wrapper relative px-4">
							<CommunityAvatar className="border-secondary absolute bottom-0 border-4" />
							<div className="pl-24">
								<span className="font-xl text-foreground/60 my-auto font-semibold leading-none">
									c/
									<span className="text-foreground ml-1">
										{slug}
									</span>
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="border-border bg-card w-full border-y">
					<div className="wrapper flex h-10 items-center justify-between px-4">
						<Header>
							<HeaderItem href={`/c/${slug}`} icon="home-4-line">
								Home
							</HeaderItem>
							<HeaderItem
								href={`/c/${slug}`}
								icon="bar-chart-line"
								query="top"
							>
								Top
							</HeaderItem>
							<HeaderItem
								href={`/c/${slug}`}
								icon="fire-line"
								query="hot"
							>
								Hot
							</HeaderItem>
							<HeaderItem
								href={`/c/${slug}`}
								icon="sparkling-line"
								query="new"
							>
								New
							</HeaderItem>
						</Header>
						<Button
							className="h-10 w-36 shrink-0 rounded-none font-bold"
							variant="default"
						>
							<div className="relative">
								<Icon
									className="absolute inset-y-0 -left-6 my-auto"
									icon="add-line"
								/>
								Join
							</div>
						</Button>
					</div>
				</div>
			</div>
			<div className="wrapper layout">
				<div className="content">{children}</div>
				<div className="sidebar">
					<Card>
						<CardHeader className="border-b-border bg-tertiary-hover border-b p-4">
							<CardTitle className="text-base">Destiny</CardTitle>
						</CardHeader>
						<CardContent className="p-4">
							<CardDescription>
								This is a rather short description of this
								community.
							</CardDescription>
							<dl className="divide-border divide-y py-4">
								<AboutItem title="Members">1,234</AboutItem>
								<AboutItem title="Online">123</AboutItem>
								<AboutItem title="Created">
									2 years ago
								</AboutItem>
								<div className="text-foreground/70 py-2 text-center text-sm xl:py-3">
									You created this community
								</div>
							</dl>
							<Link
								className={buttonStyles({ fullWidth: true })}
								href={`/c/${slug}/submit`}
							>
								Create a Post
							</Link>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className="p-4">
							<CardTitle className="text-base">
								Community Rules
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4 p-4 pt-0">
							<dl className="divide-border divide-y text-sm leading-6 *:py-2 first:*:pt-0 last:*:pb-0 xl:*:py-2.5">
								<RuleItem index={1} title="Rule 1">
									No Spam
								</RuleItem>
								<RuleItem index={2} title="Rule 2">
									No NSFW
								</RuleItem>
								<RuleItem index={3} title="Rule 3" />
							</dl>
						</CardContent>
					</Card>
				</div>
			</div>
		</>
	);
};

function AboutItem({ children, title }: AboutProps) {
	return (
		<div className="flex justify-between gap-x-4 py-2 text-sm xl:py-3">
			<dt className="text-foreground/70">{title}</dt>
			<dd className="text-foreground">{children}</dd>
		</div>
	);
}

function RuleItem({ children, index, title }: RuleProps) {
	return (
		<Collapsible className="w-full justify-between gap-x-4 overflow-hidden">
			<CollapsibleTrigger asChild>
				<dt
					className={cn(
						"text-foreground/70 select-none",
						children && "cursor-pointer",
					)}
				>
					<span>
						{index}. {title}
					</span>
				</dt>
			</CollapsibleTrigger>
			{children && (
				<CollapsibleContent asChild>
					<dd className="text-foreground">{children}</dd>
				</CollapsibleContent>
			)}
		</Collapsible>
	);
}
