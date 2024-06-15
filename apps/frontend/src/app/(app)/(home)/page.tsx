import { UserPost } from "@/components/post";
import { posts } from "@/lib/constants";

export default () => {
	return posts.map(({ author, community, ...post }) => (
		<UserPost
			key={post.id}
			{...post}
			avatar={community?.avatar}
			slug={community!.slug}
			username={author!.username}
		/>
	));
};
