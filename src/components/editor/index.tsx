'use client';

import { type AnyExtension, EditorContent, useEditor } from '@tiptap/react';
import { Loader2Icon } from 'lucide-react';
import { forwardRef } from 'react';

import { BlockquoteToggle } from './tools/Blockquote';
import { BoldToggle } from './tools/Bold';
import { CodeToggle } from './tools/Code';
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
};

export const Editor = forwardRef<HTMLDivElement, EditorProps>(
	({ extensions, ...props }, ref) => {
		const editor = useEditor({
			extensions,
			editorProps: {
				attributes: {
					class: 'prose dark:prose-invert max-w-full w-full h-[12rem] p-2 outline-none overflow-scroll',
				},
			},
		});

		console.log(extensions);

		const hasBold = extensions.some(ext => ext.name === 'bold');
		const hasItalic = extensions.some(ext => ext.name === 'italic');
		const hasUnderline = extensions.some(ext => ext.name === 'underline');
		const hasStrike = extensions.some(ext => ext.name === 'strike');
		const hasItem1 = hasBold || hasItalic || hasUnderline || hasStrike;

		const hasLink = extensions.some(ext => ext.name === 'link');
		const hasCode = extensions.some(ext => ext.name === 'codeBlock');
		const hasUnordered = extensions.some(ext => ext.name === 'bulletList');
		const hasOrdered = extensions.some(ext => ext.name === 'orderedList');
		const hasBlockquote = extensions.some(ext => ext.name === 'blockquote');
		const hasItem2 =
			hasLink || hasCode || hasUnordered || hasOrdered || hasBlockquote;

		return (
			<div className="grid grid-rows-[auto_1fr] border border-border rounded-md divide-y divide-border">
				<div className="w-full h-10 flex divide-x divide-border shrink-0 overflow-x-scroll md:overflow-x-visible">
					<div className="flex items-center p-1 gap-1">
						<UndoAction editor={editor} />
						<RedoAction editor={editor} />
					</div>
					<div className="flex items-center">
						<TitleToggle editor={editor} />
					</div>
					{hasItem1 && (
						<div className="flex items-center p-1 gap-1">
							{hasBold && <BoldToggle editor={editor} />}
							{hasItalic && <ItalicsToggle editor={editor} />}
							{hasUnderline && (
								<UnderlineToggle editor={editor} />
							)}
							{hasStrike && <StrikeToggle editor={editor} />}
						</div>
					)}
					{hasItem2 && (
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
				</div>
				{editor ? (
					<EditorContent editor={editor} className="w-full" />
				) : (
					<div className="flex items-center justify-center w-full h-[12rem] text-foeground">
						<Loader2Icon className="w-10 h-10 animate-spin" />
					</div>
				)}
			</div>
		);
	},
);
