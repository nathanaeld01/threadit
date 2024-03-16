import { CreatePost } from '../../../_components/create-post';

type Props = {
	params: {
		slug: string;
	};
};

export const metadata = {
	title: 'Submit a Post',
};

const Page = ({ params }: Props) => {
	return <CreatePost {...params} />;
};

export default Page;
