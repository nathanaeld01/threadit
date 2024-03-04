'use client';

import { type AnyExtension, EditorContent, useEditor } from '@tiptap/react';
import { Loader2Icon } from 'lucide-react';
import { forwardRef } from 'react';

type EditorProps = {
	extensions: AnyExtension[];
};

export const Editor = forwardRef<HTMLDivElement, EditorProps>(
	({ extensions, ...props }, ref) => {
		const editor = useEditor({
			extensions,
		});

		console.log(extensions);

		return (
			<>
				<div className="w-full h-10 flex divide-x divide-x-border shrink-0 overflow-x-scroll md:overflow-x-visible">
					{/* <div className="flex items-center p-1 gap-1">
						<UndoAction editor={editor} />
						<RedoAction editor={editor} />
					</div>
					<div className="flex items-center">
						<TitleToggle editor={editor} />
					</div>
					<div className="flex items-center p-1 gap-1">
						<BoldToggle editor={editor} />
						<ItalicsToggle editor={editor} />
						<UnderlineToggle editor={editor} />
						<StrikeToggle editor={editor} />
					</div>
					<div className="flex items-center p-1 gap-1">
						<LinkToggle editor={editor} />
						<CodeToggle editor={editor} />
						<UnorderedToggle editor={editor} />
						<OrderedToggle editor={editor} />
						<BlockquoteToggle editor={editor} />
					</div> */}
				</div>
				{editor ? (
					<EditorContent
						editor={editor}
						className="w-full min-h-[12rem] max-h-[14rem]"
					/>
				) : (
					<div className="flex items-center justify-center w-full h-[12rem] text-foeground">
						<Loader2Icon className="w-10 h-10 animate-spin" />
					</div>
				)}
			</>
		);
	},
);
