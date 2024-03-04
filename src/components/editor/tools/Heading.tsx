import { Button } from '@/components/ui/button';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { Toggle } from '@/components/ui/toggle';
import { cn } from '@/lib/utils';
import { type ToggleProps } from '@/types';
import { type Editor } from '@tiptap/react';
import { ChevronDownIcon } from 'lucide-react';
import { useState } from 'react';

interface ItemProps {
	editor: Editor | null;
	level: 1 | 2 | 3 | 4 | 5 | 6;
}

const HeadingItem = ({ editor, level }: ItemProps) => (
	<Toggle
		className="w-full h-8 flex p-2 justify-start rounded-none"
		pressed={editor?.isActive('heading', { level })}
		onClick={() => editor?.chain().focus().toggleHeading({ level }).run()}
	>
		Heading {level}
	</Toggle>
);

export const HeadingToggle = ({ editor }: ToggleProps) => {
	const [toggle, setToggle] = useState(false);
	const level = editor?.getAttributes('heading').level;
	const isParagraph = editor?.isActive('paragraph');
	const isHeading = editor?.isActive('heading');

	return (
		<Popover onOpenChange={setToggle}>
			<PopoverTrigger asChild>
				<Button
					className="w-32 h-8 flex p-2 justify-between border border-border rounded-sm"
					variant="ghost"
				>
					<span className="w-full text-start">
						{isParagraph
							? 'Paragraph'
							: isHeading
							  ? `Heading ${level}`
							  : undefined}
					</span>
					<ChevronDownIcon
						className={cn(
							'w-5 h-5 transition-transform shrink-0',
							toggle && '-scale-y-100',
						)}
					/>
				</Button>
			</PopoverTrigger>
			<PopoverContent
				className="max-h-24 w-40 bg-card p-0 overflow-scroll"
				align="center"
				side="bottom"
				sideOffset={10}
			>
				<Toggle
					className="w-full h-8 flex p-2 justify-start rounded-none"
					pressed={editor?.isActive('paragraph')}
					onClick={() => editor?.chain().focus().setParagraph().run()}
				>
					Paragraph
				</Toggle>
				<HeadingItem editor={editor} level={1} />
				<HeadingItem editor={editor} level={2} />
				<HeadingItem editor={editor} level={3} />
				<HeadingItem editor={editor} level={4} />
				<HeadingItem editor={editor} level={5} />
				<HeadingItem editor={editor} level={6} />
			</PopoverContent>
		</Popover>
	);
};
