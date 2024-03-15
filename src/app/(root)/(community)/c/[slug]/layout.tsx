import { Settings } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { CommunityAvatar } from '@/components/svgs/avatar/community';
import { buttonStyles } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { cn, formatDate } from '@/lib/utils';
import { api } from '@/trpc/server';

import { notFound } from 'next/navigation';
import { Subscription } from '../../_components/subscription';

type Props = {
	params: {
		slug: string;
	};
	children: React.ReactNode;
};

type AboutProps = {
	title: string;
	children: React.ReactNode;
};

type RuleProps = {
	index: number;
	title: string;
	children?: React.ReactNode;
};

const AboutItem = ({ title, children }: AboutProps) => (
	<div className="flex justify-between gap-x-4 py-2 xl:py-3">
		<dt className="text-foreground/70">{title}</dt>
		<dd className="text-foreground">{children}</dd>
	</div>
);

const RuleItem = ({ index, title, children }: RuleProps) =>
	children ? (
		<Collapsible className="w-full justify-between gap-x-4 overflow-hidden">
			<CollapsibleTrigger asChild>
				<dt className="cursor-pointer text-foreground/70">
					<span>
						{index}. {title}
					</span>
				</dt>
			</CollapsibleTrigger>
			<CollapsibleContent asChild>
				<dd className="text-foreground">{children}</dd>
			</CollapsibleContent>
		</Collapsible>
	) : (
		<div className="flex justify-between gap-x-4">
			<dt className="text-foreground/70">
				{index}. {title}
			</dt>
		</div>
	);

export const generateMetadata = async ({ params: { slug } }: Props) => {
	const data = await api.community.getCommunity.query(slug);

	return data
		? {
				title: `${data.community.name ?? `c/${slug}`}`,
		  }
		: {
				title: 'Community Not Found',
		  };
};

const CommunityLayout = async ({ params: { slug }, children }: Props) => {
	const data = await api.community.getCommunity.query(slug);

	if (!data) notFound();

	const { community, memberCount, isCreator, isSubscribed } = data;

	return (
		<>
			<section className="flex max-h-40 w-full flex-col">
				<div className="relative h-24 overflow-hidden bg-muted/50">
					{community.wallpaper && (
						<Image
							src={community.wallpaper}
							alt="Community Wallpaper"
							fill
						/>
					)}
				</div>
				<div className="h-16 w-full bg-card">
					<div className="wrapper flex h-full justify-between max-sm:px-4 md:justify-start md:gap-8">
						<div className="flex h-full w-fit">
							<div className="relative h-14">
								<CommunityAvatar
									className="absolute bottom-0"
									avatar={community.avatar}
								/>
							</div>
							<div className="flex flex-col gap-2 py-2 pl-24">
								<h1 className="text-xl font-bold leading-none">
									c/{slug}
								</h1>
								<p className="text-sm leading-none">c/{slug}</p>
							</div>
						</div>
						<div className="flex items-center">
							{!isCreator && (
								<Subscription
									initialValue={isSubscribed}
									id={community.id}
								/>
							)}
							{isCreator && (
								<Link
									className={cn(
										buttonStyles({
											variant: 'secondary',
											outlined: true,
											className: 'h-8 rounded-full gap-2',
										}),
									)}
									href={`/c/${slug}/settings`}
								>
									<Settings className="size-4" />
									Settings
								</Link>
							)}
						</div>
					</div>
				</div>
			</section>
			<div className="wrapper layout">
				<div className="content">{children}</div>
				<div className="sidebar">
					<Card>
						<CardHeader className="p-4">
							<CardTitle className="text-base">
								About c/{slug}
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4 p-4 pt-0">
							<dl className="divide-y divide-border text-sm leading-6">
								<AboutItem title="Created">
									{formatDate(community.createdAt)}
								</AboutItem>
								<AboutItem title="Members">
									{memberCount}
								</AboutItem>
								{isCreator && (
									<div className="gap-x-4 py-2 text-center text-foreground/70 xl:py-3">
										You created this community.
									</div>
								)}
							</dl>
							<Link
								href={`/c/${slug}/submit`}
								className={buttonStyles({
									variant: 'secondary',
									fullWidth: true,
								})}
							>
								Create Post
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
							<dl className="divide-y divide-border text-sm leading-6 *:py-2 first:*:pt-0 last:*:pb-0 xl:*:py-2.5">
								<RuleItem index={1} title="Rule 1">
									No Spam
								</RuleItem>
								<RuleItem index={2} title="Rule 2">
									No NSFW
								</RuleItem>
								<RuleItem index={3} title="Rule 3">
									No Harassment
								</RuleItem>
							</dl>
						</CardContent>
					</Card>
				</div>
			</div>
		</>
	);
};

export default CommunityLayout;
