import {
	Post,
	PostContent,
	PostFooter,
	PostHeader,
	PostWrapper,
} from "@threadit/ui/post";
import { formatTimestamp } from "@threadit/utils/date";
import Link from "next/link";

import { CommunityAvatar } from "../shared/avatars/community";
import { PostVoting } from "./voting";

interface Props {
	avatar?: string;
	createdAt: Date | string;
	id: string;
	image?: string;
	slug: string;
	title: string;
	username: string;
}

interface CommunityProps {
	avatar?: string;
	slug: string;
}

export const UserPost = ({
	avatar,
	createdAt,
	id,
	image,
	slug,
	title,
	username,
}: Props) => {
	return (
		<Post>
			<PostWrapper>
				<PostHeader>
					{avatar && <Community avatar={avatar} slug={slug} />}
					<div className="post-author">
						<Link
							className="hover:underline"
							href={`/u/${username}`}
						>
							u/{username}
						</Link>
					</div>
					<div className="post-dot">•</div>
					<div className="post-time">
						{formatTimestamp(createdAt)}
					</div>
				</PostHeader>
				<PostContent id={id} image={image} slug={slug} title={title} />
			</PostWrapper>
			<PostFooter>
				<PostVoting id="neiniwngviwniwen" />
			</PostFooter>
		</Post>
	);
};

function Community({ avatar, slug }: CommunityProps) {
	return avatar && slug ? (
		<>
			<Link className="post-community group" href={`/c/${slug}`}>
				<CommunityAvatar
					avatar={avatar}
					className="size-5 rounded-full border-0"
				/>
				<span className="ml-1.5 group-hover:underline">c/{slug}</span>
			</Link>
			<div className="post-dot">•</div>
		</>
	) : null;
}
