import { Button } from "@threadit/ui/button";

import { Header, HeaderItem } from "@/components/community/header";
import { CommunityAvatar } from "@/components/shared/avatars/community";
import { Icon } from "@/components/shared/icons";

interface Props {
	children: React.ReactNode;
	params: {
		slug: string;
	};
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
				<div className="sidebar">{slug}</div>
			</div>
		</>
	);
};
