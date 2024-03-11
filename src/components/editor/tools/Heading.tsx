import { Level } from '@tiptap/extension-heading';
import { type Editor } from '@tiptap/react';
import { ChevronDownIcon } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { Toggle } from '@/components/ui/toggle';
import { cn } from '@/lib/utils';
import { type ToggleProps } from '@/types';

type HeadingProps = {
	levels?: Level[] | Level;
};

export const HeadingToggle = ({
	levels = 5,
	editor,
}: ToggleProps & HeadingProps) => {
	const [toggle, setToggle] = useState(false);
	const level = editor?.getAttributes('heading').level;
	const isParagraph = editor?.isActive('paragraph');
	const isHeading = editor?.isActive('heading');

	const headingHandler = (level: Level) => {
		isHeading
			? editor?.chain().focus().setParagraph().run()
			: editor?.chain().focus().toggleHeading({ level }).run();
	};

	return (
		<Popover onOpenChange={setToggle}>
			<PopoverTrigger asChild>
				<Button
					className="w-32 h-10 flex p-2 justify-between rounded-none"
					variant="ghost"
				>
					<span className="w-full text-start">
						{isParagraph && 'Paragraph'}
						{isHeading &&
							(typeof levels === 'number'
								? 'Title'
								: `Heading ${level}`)}
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
				{typeof levels === 'number' ? (
					<Toggle
						className="w-full h-8 flex p-2 justify-start rounded-none"
						pressed={isHeading}
						onClick={() => headingHandler(levels)}
					>
						Title
					</Toggle>
				) : (
					levels.map(level => (
						<Toggle
							className="w-full h-8 flex p-2 justify-start rounded-none"
							pressed={editor?.isActive('heading', { level })}
							onClick={() => headingHandler(level)}
						>
							Heading {level}
						</Toggle>
					))
				)}
			</PopoverContent>
		</Popover>
	);
};
