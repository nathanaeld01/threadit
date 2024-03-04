import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { type ToggleProps } from '@/types';
import { Link2Icon } from 'lucide-react';
import React from 'react';

export const LinkToggle = ({ editor }: ToggleProps) => {
	const [toggle, setToggle] = React.useState<boolean>(false);
	const linkRef = React.useRef<HTMLInputElement>(null);

	const existingLink = editor?.isActive('link');

	function toggleLink() {
		if (existingLink) {
			setToggle(false);
			editor?.chain().focus().unsetLink().run();
		} else {
			setToggle(prev => !prev);
		}
	}

	function setLink() {
		if (!linkRef.current) return;

		editor?.chain().focus().setLink({ href: linkRef.current.value }).run();
		setToggle(false);
	}

	return (
		<Popover open={toggle} onOpenChange={toggleLink}>
			<PopoverTrigger asChild>
				<Button
					className={cn(
						'w-8 h-8 p-2 rounded-sm',
						existingLink && 'bg-accent text-accent-foreground',
					)}
					variant="ghost"
				>
					<Link2Icon className="w-5 h-5" />
				</Button>
			</PopoverTrigger>
			<PopoverContent
				className="flex bg-card p-1.5 gap-2"
				align="center"
				side="bottom"
				sideOffset={10}
			>
				<Input
					className="h-8 focus-visible:ring-0 focus-visible:ring-none focus-visible:ring-offset-0"
					placeholder="https://example.com"
					ref={linkRef}
				/>
				<Button className="h-8" onClick={setLink} type="button">
					Add
				</Button>
			</PopoverContent>
		</Popover>
	);
};
