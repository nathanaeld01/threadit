'use client';

import { mergeAttributes } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import CharacterCount from '@tiptap/extension-character-count';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import ListItem from '@tiptap/extension-list-item';
import Placeholder from '@tiptap/extension-placeholder';

import Bold from '@tiptap/extension-bold';
import BulletList from '@tiptap/extension-bullet-list';
import Heading from '@tiptap/extension-heading';
import Italic from '@tiptap/extension-italic';
import Link from '@tiptap/extension-link';
import OrderedList from '@tiptap/extension-ordered-list';
import Strike from '@tiptap/extension-strike';
import Underline from '@tiptap/extension-underline';

import Blockquote from '@tiptap/extension-blockquote';
import { common, createLowlight } from 'lowlight';
const lowlight = createLowlight(common);

const Base = [StarterKit, CharacterCount, ListItem];

export const commentEditorExts = [
	...Base,
	Bold,
	Italic,
	Underline,
	Strike,
	Link,
	Blockquote,
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
	Heading.configure({
		levels: [5],
	}).extend({
		renderHTML({ HTMLAttributes }) {
			return [
				'h5',
				mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
					class: 'text-2xl',
				}),
				0,
			];
		},
	}),
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
	Placeholder.configure({
		placeholder: 'Write a comment...',
		emptyEditorClass: 'is-editor-empty',
	}),
];
