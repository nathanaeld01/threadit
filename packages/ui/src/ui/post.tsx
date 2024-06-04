import Image from "next/image";
import Link from "next/link";

import type {
	PostContentProps,
	PostFooterProps,
	PostHeaderProps,
	PostProps,
	PostWrapperProps,
} from "../types/post";

const Post = ({ children }: PostProps) => {
	return <div className="post divide-y divide-border">{children}</div>;
};

const PostWrapper = ({ children }: PostWrapperProps) => {
	return <div className="post-wrapper">{children}</div>;
};

const PostHeader = ({ children }: PostHeaderProps) => {
	return <div className="post-header">{children}</div>;
};

const PostContent = ({ id, image, slug, title }: PostContentProps) => {
	return (
		<Link className="post-content group" href={`/c/${slug}/post/${id}`}>
			<div className="post-title group-hover:underline">
				<span className="line-clamp-4">{title}</span>
			</div>
			{image && (
				<div className="post-image">
					<div className="relative mx-auto aspect-video h-full overflow-hidden md:rounded">
						<Image alt={title} fill src={image} />
					</div>
				</div>
			)}
		</Link>
	);
};

const PostFooter = ({ children }: PostFooterProps) => {
	return <div className="post-footer divide-x divide-border">{children}</div>;
};

export { Post, PostContent, PostFooter, PostHeader, PostWrapper };
