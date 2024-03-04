import { Editor } from '@/components/editor';
import { commentExtensions } from '@/components/editor/extensions';

export const metadata = {
	title: 'Submit a Post',
};

const Page = () => {
	return <Editor extensions={commentExtensions} />;
};

export default Page;
