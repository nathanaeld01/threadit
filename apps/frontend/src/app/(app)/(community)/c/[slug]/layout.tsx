import { Button, buttonStyles } from "@threadit/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@threadit/ui/card";
import Link from "next/link";

import { AboutItem } from "@/components/community/about";
import { Header, HeaderItem } from "@/components/community/header";
import { RuleItem } from "@/components/community/rules";
import { CommunityAvatar } from "@/components/shared/avatars/community";
import { Icon } from "@/components/shared/icons";
import { communities } from "@/lib/constants";

interface Props {
	children: React.ReactNode;
	params: {
		slug: string;
	};
}

export default ({ children, params: { slug } }: Props) => {
	const community = communities.find((c) => c.slug === slug);
	if (!community) {
		return null;
	}

	return (
		<>
			<div className="flex w-full flex-col">
				<div className="h-38 bg-tertiary-hover relative w-full">
					<div className="absolute left-0 top-0 z-0 flex size-full" />
					<div className="z-1 bg-community relative mt-24 h-14 py-4">
						<div className="wrapper relative px-4">
							<CommunityAvatar
								avatar={community.avatar}
								className="border-secondary absolute bottom-0 border-4"
							/>
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
								href={`/c/${slug}/top`}
								icon="bar-chart-line"
							>
								Top
							</HeaderItem>
							<HeaderItem
								href={`/c/${slug}/hot`}
								icon="fire-line"
							>
								Hot
							</HeaderItem>
							<HeaderItem
								href={`/c/${slug}/new`}
								icon="sparkling-line"
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
							<CardTitle className="text-base">
								{community.name}
							</CardTitle>
						</CardHeader>
						<CardContent className="p-4">
							<CardDescription>
								{community.description}
							</CardDescription>
							<dl className="divide-border divide-y py-4">
								<AboutItem title="Members">
									{community.stats.members}
								</AboutItem>
								<AboutItem title="Online">
									{community.stats.online}
								</AboutItem>
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
