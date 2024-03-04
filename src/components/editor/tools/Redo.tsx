import { Button } from '@/components/ui/button';
import { type ToggleProps } from '@/types';
import { Redo2Icon } from 'lucide-react';

export const RedoAction = ({ editor }: ToggleProps) => {
	return (
		<Button
			className="w-8 h-8 p-2 rounded-sm"
			variant="ghost"
			onClick={() => editor?.chain().focus().redo().run()}
		>
			<Redo2Icon className="w-5 h-5" />
		</Button>
	);
};
