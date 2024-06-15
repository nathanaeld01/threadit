import { UserPost } from "@/components/post";
import { communities, posts } from "@/lib/constants";

interface Props {
	params: {
		slug: string;
	};
}

export const generateMetadata = ({ params: { slug } }: Props) => {
	const community = communities.find((c) => c?.slug === slug);

	return {
		title: community?.name ?? slug,
	};
};

export default ({ params: { slug } }: Props) => {
	const communityPosts = posts
		.filter((post) => post.community?.slug === slug)
		.sort((a, b) => b.createdAt.valueOf() - a.createdAt.valueOf());

	return communityPosts.map(({ author, createdAt, id, title }) => (
		<UserPost
			createdAt={createdAt}
			id={id}
			key={id}
			slug={slug}
			title={title}
			username={author.username}
		/>
	));
};
