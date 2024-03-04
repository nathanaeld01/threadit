import { Toggle } from '@/components/ui/toggle';
import { type ToggleProps } from '@/types';
import { ListOrderedIcon } from 'lucide-react';

export const OrderedToggle = ({ editor }: ToggleProps) => {
	return (
		<Toggle
			className="w-8 h-8 p-2 rounded-sm"
			pressed={editor?.isActive('orderedList')}
			onPressedChange={() =>
				editor?.chain().focus().toggleOrderedList().run()
			}
			disabled={editor?.isActive('heading')}
		>
			<ListOrderedIcon className="w-5 h-5" />
		</Toggle>
	);
};
