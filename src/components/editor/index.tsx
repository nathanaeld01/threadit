'use client';

import {
	type AnyExtension,
	EditorContent,
	type JSONContent,
	useEditor,
} from '@tiptap/react';
import { Loader2Icon } from 'lucide-react';
import { forwardRef } from 'react';

import { cn } from '@/lib/utils';
import { BlockquoteToggle } from './tools/Blockquote';
import { BoldToggle } from './tools/Bold';
import { CodeToggle } from './tools/Code';
import { Image } from './tools/Image';
import { ItalicsToggle } from './tools/Italics';
import { LinkToggle } from './tools/Link';
import { OrderedToggle } from './tools/Ordered';
import { RedoAction } from './tools/Redo';
import { StrikeToggle } from './tools/Strike';
import { TitleToggle } from './tools/Title';
import { UnderlineToggle } from './tools/Underline';
import { UndoAction } from './tools/Undo';
import { UnorderedToggle } from './tools/Unordered';

type EditorProps = {
	extensions: AnyExtension[];
	onChange: (content: JSONContent) => void;
	className?: string;
	editorClassname?: string;
};

export const Editor = forwardRef<HTMLDivElement, EditorProps>(
	({ extensions, className, editorClassname, onChange }, ref) => {
		const editor = useEditor({
			extensions,
			editorProps: {
				attributes: {
					class: cn(
						'w-full min-h-48 h-full p-2 outline-none',
						editorClassname,
					),
				},
			},
			onUpdate: ({ editor }) => onChange(editor.getJSON()),
		});

		const hasHeading = extensions.some(ext => ext.name === 'heading');

		const hasBold = extensions.some(ext => ext.name === 'bold');
		const hasItalic = extensions.some(ext => ext.name === 'italic');
		const hasUnderline = extensions.some(ext => ext.name === 'underline');
		const hasStrike = extensions.some(ext => ext.name === 'strike');

		const hasLink = extensions.some(ext => ext.name === 'link');
		const hasCode = extensions.some(ext => ext.name === 'codeBlock');
		const hasUnordered = extensions.some(ext => ext.name === 'bulletList');
		const hasOrdered = extensions.some(ext => ext.name === 'orderedList');
		const hasBlockquote = extensions.some(ext => ext.name === 'blockquote');

		const hasImage = extensions.some(ext => ext.name === 'image');

		return (
			<div className="grid grid-rows-[auto_1fr] border border-border rounded-md divide-y divide-border">
				<div className="w-full h-10 flex divide-x divide-border shrink-0 overflow-x-scroll md:overflow-x-visible">
					<div className="flex items-center p-1 gap-1">
						<UndoAction editor={editor} />
						<RedoAction editor={editor} />
					</div>
					{hasHeading && (
						<div className="flex items-center">
							<TitleToggle editor={editor} />
						</div>
					)}
					{(hasBold || hasItalic || hasUnderline || hasStrike) && (
						<div className="flex items-center p-1 gap-1">
							{hasBold && <BoldToggle editor={editor} />}
							{hasItalic && <ItalicsToggle editor={editor} />}
							{hasUnderline && (
								<UnderlineToggle editor={editor} />
							)}
							{hasStrike && <StrikeToggle editor={editor} />}
						</div>
					)}
					{(hasLink ||
						hasCode ||
						hasUnordered ||
						hasOrdered ||
						hasBlockquote) && (
						<div className="flex items-center p-1 gap-1">
							{hasLink && <LinkToggle editor={editor} />}
							{hasCode && <CodeToggle editor={editor} />}
							{hasUnordered && (
								<UnorderedToggle editor={editor} />
							)}
							{hasOrdered && <OrderedToggle editor={editor} />}
							{hasBlockquote && (
								<BlockquoteToggle editor={editor} />
							)}
						</div>
					)}
					{hasImage && (
						<div className="flex items-center p-1 gap-1">
							<Image editor={editor} />
						</div>
					)}
				</div>
				{editor ? (
					<EditorContent
						editor={editor}
						className={cn('w-full', className)}
						ref={ref}
					/>
				) : (
					<div className="flex items-center justify-center w-full h-48 text-foeground">
						<Loader2Icon className="w-10 h-10 animate-spin" />
					</div>
				)}
			</div>
		);
	},
);
