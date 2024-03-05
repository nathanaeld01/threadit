import { Toggle } from '@/components/ui/toggle';
import { type ToggleProps } from '@/types';
import { CodeIcon } from 'lucide-react';

export const CodeToggle = ({ editor }: ToggleProps) => {
	return (
		<Toggle
			className="w-8 h-8 p-2 rounded-sm"
			pressed={editor?.isActive('codeBlock')}
			onPressedChange={() =>
				editor?.chain().focus().toggleCodeBlock().run()
			}
			title="Code Block"
			disabled={editor?.isActive('heading')}
		>
			<CodeIcon />
		</Toggle>
	);
};
