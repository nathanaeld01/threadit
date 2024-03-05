import { Toggle } from '@/components/ui/toggle';
import { type ToggleProps } from '@/types';
import { ListIcon } from 'lucide-react';

export const UnorderedToggle = ({ editor }: ToggleProps) => {
	return (
		<Toggle
			title="Unordered List"
			className="w-8 h-8 p-2 rounded-sm"
			pressed={editor?.isActive('bulletList')}
			onPressedChange={() =>
				editor?.chain().focus().toggleBulletList().run()
			}
			disabled={editor?.isActive('heading')}
		>
			<ListIcon className="w-5 h-5" />
		</Toggle>
	);
};
