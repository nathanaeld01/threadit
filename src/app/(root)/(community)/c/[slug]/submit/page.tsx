import { Editor } from '@/components/editor';
import { comments } from '@/components/editor/extension';

export const metadata = {
	title: 'Submit a Post',
};

const Page = () => {
	return <Editor extensions={comments} />;
};

export default Page;
