import { mergeAttributes } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';

import Blockquote from '@tiptap/extension-blockquote';
import Bold from '@tiptap/extension-bold';
import BulletList from '@tiptap/extension-bullet-list';
import CharacterCount from '@tiptap/extension-character-count';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Heading from '@tiptap/extension-heading';
import Italic from '@tiptap/extension-italic';
import Link from '@tiptap/extension-link';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';

import { common, createLowlight } from 'lowlight';

const lowlight = createLowlight(common);

export const commentExtensions = [
	StarterKit,
	CharacterCount.configure({}),
	Placeholder.configure({
		placeholder: 'Post a comment...',
		emptyEditorClass: 'is-editor-empty',
	}),
	Bold.configure(),
	Italic.configure(),
	BulletList.configure({
		HTMLAttributes: {
			class: '',
		},
	}),
	OrderedList.configure({
		HTMLAttributes: {
			class: '',
		},
	}),
	ListItem.configure(),
	Heading.configure({
		levels: [5],
	}).extend({
		renderHTML({ HTMLAttributes }) {
			return [
				'p',
				mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
					class: 'text-2xl',
				}),
				0,
			];
		},
	}),
	Link.configure({}),
	Underline.configure({}),
	CodeBlockLowlight.extend({
		addKeyboardShortcuts() {
			return {
				Tab: () =>
					this.editor.isActive('codeBlock') &&
					this.editor?.commands.insertContent('\t'),
			};
		},
	}).configure({
		lowlight,
		languageClassPrefix: 'language-',
		HTMLAttributes: { class: 'hljs p-4' },
	}),
	Blockquote.configure(),
];
