import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { ToggleProps } from '@/types';
import { ImageIcon } from 'lucide-react';

export const Image = ({ editor }: ToggleProps) => {
	const existingImage = editor?.isActive('image');

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					className={cn(
						'w-8 h-8 p-2 rounded-sm text-foreground/70',
						existingImage && 'bg-accent text-foreground',
					)}
					title="Image"
					variant="ghost"
				>
					<ImageIcon />
				</Button>
			</DialogTrigger>
			<DialogContent>
				<h1>Image</h1>
			</DialogContent>
		</Dialog>
	);
};
