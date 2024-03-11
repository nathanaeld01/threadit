import { Editor } from '@/components/editor';
import { commentEditorExts } from '@/components/editor/extension';

export const metadata = {
	title: 'Submit a Post',
};

const Page = () => {
	return <Editor extensions={commentEditorExts} />;
};

export default Page;
