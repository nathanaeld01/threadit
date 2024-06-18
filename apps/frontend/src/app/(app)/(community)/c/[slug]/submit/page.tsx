import { CreatePost } from "@threadit/forms/community";

interface Props {
	params: {
		slug: string;
	};
}

export default ({ params: { slug } }: Props) => {
	return (
		<>
			<h2 className="border-b-border mb-6 border-b pb-2 text-xl font-semibold">
				Create a Post
			</h2>
			<CreatePost slug={slug} />
		</>
	);
};
