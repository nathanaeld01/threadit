import { Toggle } from '@/components/ui/toggle';
import { type ToggleProps } from '@/types';
import { StrikethroughIcon } from 'lucide-react';

export const StrikeToggle = ({ editor }: ToggleProps) => {
	return (
		<Toggle
			title="Strikethrough"
			className="w-8 h-8 p-2 rounded-sm"
			pressed={editor?.isActive('strike')}
			onPressedChange={() => editor?.chain().focus().toggleStrike().run()}
			disabled={editor?.isActive('heading')}
		>
			<StrikethroughIcon className="w-5 h-5" />
		</Toggle>
	);
};
