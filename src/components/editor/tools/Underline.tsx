import { Toggle } from '@/components/ui/toggle';
import { type ToggleProps } from '@/types';
import { UnderlineIcon } from 'lucide-react';

export const UnderlineToggle = ({ editor }: ToggleProps) => {
	return (
		<Toggle
			className="w-8 h-8 p-2 rounded-sm"
			pressed={editor?.isActive('underline')}
			onPressedChange={() =>
				editor?.chain().focus().toggleUnderline().run()
			}
			disabled={editor?.isActive('heading')}
		>
			<UnderlineIcon className="w-5 h-5" />
		</Toggle>
	);
};
