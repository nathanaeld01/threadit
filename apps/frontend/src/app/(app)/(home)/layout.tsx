import { buttonStyles } from "@threadit/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@threadit/ui/card";
import { cn } from "@threadit/utils/class";
import Link from "next/link";

import { CommunityFlare } from "@/components/shared/flares/community";
import { TopicFlare } from "@/components/shared/flares/topic";
import { Icon } from "@/components/shared/icons";

type Props = Readonly<{
	children: React.ReactNode;
}>;

export const metadata = {
	title: "Home",
};

export default ({ children }: Props) => {
	return (
		<div className="wrapper layout">
			<div className="content">{children}</div>
			<div className="sidebar">
				<Card>
					<CardHeader className="p-4">
						<CardTitle className="flex items-center gap-2.5 text-base leading-none">
							<Icon icon="home-4-fill" />
							Home
						</CardTitle>
						<CardDescription className="pt-4">
							Your ThreadIt homepage. Get an overview of your
							favourite communites here.
						</CardDescription>
					</CardHeader>
					<CardContent className="p-4 pt-0">
						<Link
							className={cn(buttonStyles({ fullWidth: true }))}
							href="/c/create"
						>
							Create Community
						</Link>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="p-4">
						<CardTitle className="flex items-center gap-2.5 text-base leading-none">
							<Icon icon="pencil-fill" />
							Topics
						</CardTitle>
					</CardHeader>
					<CardContent className="flex flex-wrap justify-center gap-2 p-4 pt-0">
						<TopicFlare href="/t/gaming">Gaming</TopicFlare>
						<TopicFlare href="/t/business">Business</TopicFlare>
						<TopicFlare href="/t/food">Food</TopicFlare>
						<TopicFlare href="/t/health">Health</TopicFlare>
						<TopicFlare href="/t/politics">Politics</TopicFlare>
						<TopicFlare href="/t/science">Science</TopicFlare>
						<TopicFlare href="/t/sports">Sports</TopicFlare>
						<TopicFlare href="/t/entertainment">
							Entertainment
						</TopicFlare>
						<TopicFlare href="/t/technology">Technology</TopicFlare>
						<TopicFlare href="/t/travel">Travel</TopicFlare>
						<TopicFlare href="/t/history">History</TopicFlare>
						<TopicFlare href="/t/programming">
							Programming
						</TopicFlare>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="p-4">
						<CardTitle className="flex items-center gap-2.5 text-base leading-none">
							<Icon icon="community-fill" />
							Communities
						</CardTitle>
					</CardHeader>
					<CardContent className="px-2 pb-2">
						<div className="divide-border/50 divide-y overflow-hidden rounded-lg">
							<CommunityFlare
								className="hover:bg-background"
								slug="Destiny2"
								src="https://pbs.twimg.com/profile_images/1772694079337537536/d78G8xIw_400x400.jpg"
							/>
							<CommunityFlare
								className="hover:bg-background"
								slug="React"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKfxxgtvjoywpYYFjqCM2IByvFIxA6n40Wtw&s"
							/>
							<CommunityFlare
								className="hover:bg-background"
								slug="India"
								src="https://vectorflags.s3.amazonaws.com/flags/in-square-01.png"
							/>
							<CommunityFlare
								className="hover:bg-background"
								slug="NextJS"
								src="https://asset.brandfetch.io/id2alue-rx/iduLChSb1a.jpeg"
							/>
							<CommunityFlare
								className="hover:bg-background"
								slug="Football"
								src="https://img.kwcdn.com/product/1e13cb995e8/3f296843-b91c-4fdc-bbcf-9095b6070ea5_800x800.jpeg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/80"
							/>
						</div>
					</CardContent>
				</Card>
				<p className="text-muted text-xs">
					ThreadIt © 2024. Built with NextJs, React, TypeScript and
					Tailwind CSS for the front-end.
				</p>
			</div>
		</div>
	);
};
