import Link from "next/link";

import { Content } from "@/components/post/content";
import { PostVoting } from "@/components/post/voting";
import { Avatar } from "@/components/shared/avatar";
import { posts } from "@/lib/constants";

interface Props {
	params: {
		id: string;
		slug: string;
	};
}

export const generateMetadata = ({ params: { id, slug } }: Props) => {
	const post = posts.find((p) => p.id === id && p.community?.slug === slug);

	return {
		title: post?.title,
	};
};

export default ({ params: { id, slug } }: Props) => {
	const post = posts.find((p) => p.id === id && p.community?.slug === slug);

	const username = post!.author.username;

	return (
		<>
			<article className="">
				<div className="border-border border-b pb-2.5">
					<div className="flex items-center gap-2">
						<Avatar name={username} src={post?.author?.avatar} />
						<div className="flex h-10 flex-col justify-between">
							<h1 className="text-lg font-bold leading-none">
								{post?.title}
							</h1>
							<p className="text-foreground/70 text-sm leading-none">
								Posted by{" "}
								<Link
									className="text-foreground hover:underline"
									href={`/u/${username}`}
								>
									u/{username}
								</Link>{" "}
								in c/{slug}
							</p>
						</div>
					</div>
				</div>
				<Content content={post?.content ?? ""} />
			</article>
			<section className="border-border bg-card divide-border h-10 divide-x overflow-hidden rounded-lg border">
				<PostVoting id={id} initialVotes={0} />
			</section>
		</>
	);
};
