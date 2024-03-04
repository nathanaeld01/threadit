import { Button } from '@/components/ui/button';
import { type ToggleProps } from '@/types';
import { Undo2Icon } from 'lucide-react';

export const UndoAction = ({ editor }: ToggleProps) => {
	return (
		<Button
			className="w-8 h-8 p-2 rounded-sm"
			variant="ghost"
			onClick={() => editor?.chain().focus().undo().run()}
		>
			<Undo2Icon className="w-5 h-5" />
		</Button>
	);
};
