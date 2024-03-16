import { Toggle } from '@/components/ui/toggle';
import { type ToggleProps } from '@/types';
import { ItalicIcon } from 'lucide-react';

export const ItalicsToggle = ({ editor }: ToggleProps) => {
	return (
		<Toggle
			title="Italics"
			className="size-8 p-2 rounded-sm"
			pressed={editor?.isActive('italic')}
			onPressedChange={() => editor?.chain().focus().toggleItalic().run()}
			disabled={editor?.isActive('heading')}
		>
			<ItalicIcon className="w-5 h-5" />
		</Toggle>
	);
};
