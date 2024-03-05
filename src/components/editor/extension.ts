'use client';

import CharacterCount from '@tiptap/extension-character-count';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import ListItem from '@tiptap/extension-list-item';
import StarterKit from '@tiptap/starter-kit';

import { common, createLowlight } from 'lowlight';
const lowlight = createLowlight(common);

const Base = [StarterKit, CharacterCount, ListItem];
const Code = CodeBlockLowlight.extend({
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
});

export const comments = [...Base, Code];
