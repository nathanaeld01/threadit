import { Toggle } from '@/components/ui/toggle';
import { type ToggleProps } from '@/types';
import { QuoteIcon } from 'lucide-react';

export const BlockquoteToggle = ({ editor }: ToggleProps) => {
	return (
		<Toggle
			title="Blockquote"
			className="w-8 h-8 p-2 rounded-sm"
			pressed={editor?.isActive('blockquote')}
			onClick={() => editor?.chain().focus().toggleBlockquote().run()}
		>
			<QuoteIcon className="w-5 h-5" />
		</Toggle>
	);
};
