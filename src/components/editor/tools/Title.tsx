import { Button } from '@/components/ui/button';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { Toggle } from '@/components/ui/toggle';
import { cn } from '@/lib/utils';
import type { ToggleProps } from '@/types';
import { ChevronDownIcon } from 'lucide-react';
import { useState } from 'react';

export const TitleToggle = ({ editor }: ToggleProps) => {
	const [toggle, setToggle] = useState(false);
	const isParagraph = editor?.isActive('paragraph');
	const isTitle = editor?.isActive('heading', { level: 5 });

	return (
		<Popover onOpenChange={setToggle}>
			<PopoverTrigger asChild>
				<Button
					className="w-32 h-10 flex p-2 justify-between rounded-none"
					variant="ghost"
				>
					<span className="w-full text-start">
						{isParagraph
							? 'Paragraph'
							: isTitle
							  ? 'Title'
							  : 'Paragraph'}
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
				className="h-16 w-40 bg-card p-0"
				align="start"
				side="bottom"
				sideOffset={10}
			>
				<Toggle
					className="w-full h-8 flex p-2 justify-start rounded-none"
					pressed={isParagraph}
					onClick={() => editor?.chain().focus().setParagraph().run()}
				>
					Paragraph
				</Toggle>
				<Toggle
					className="w-full h-8 flex p-2 justify-start rounded-none"
					pressed={isTitle}
					onClick={() =>
						editor
							?.chain()
							.focus()
							.toggleHeading({ level: 5 })
							.run()
					}
				>
					Title
				</Toggle>
			</PopoverContent>
		</Popover>
	);
};
