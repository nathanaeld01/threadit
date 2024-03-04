import { Toggle } from '@/components/ui/toggle';
import { type ToggleProps } from '@/types';
import { BoldIcon } from 'lucide-react';

export const BoldToggle = ({ editor }: ToggleProps) => {
	return (
		<Toggle
			className="w-8 h-8 p-2 rounded-sm"
			pressed={editor?.isActive('bold')}
			onPressedChange={() => editor?.chain().focus().toggleBold().run()}
			disabled={editor?.isActive('heading')}
		>
			<BoldIcon className="w-5 h-5" />
		</Toggle>
	);
};
