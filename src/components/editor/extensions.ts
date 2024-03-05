'use client';

import { mergeAttributes } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';

import CountPrimitive from '@tiptap/extension-character-count';
import ListItemPrimitive from '@tiptap/extension-list-item';
import PlaceholderPrimitive from '@tiptap/extension-placeholder';

import HeadingPrimitive, { Level } from '@tiptap/extension-heading';

import BoldPrimitive from '@tiptap/extension-bold';
import ItalicPrimitive from '@tiptap/extension-italic';
import StrikePrimitive from '@tiptap/extension-strike';
import UnderlinePrimitive from '@tiptap/extension-underline';

import CodePrimitive from '@tiptap/extension-code-block-lowlight';
import LinkPrimitive from '@tiptap/extension-link';

import BlockquotePrimitive from '@tiptap/extension-blockquote';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';

export function starterKit() {
	return StarterKit.configure({});
}

export const count = () => CountPrimitive.configure({});
export const placeholder = (text: string) =>
	PlaceholderPrimitive.configure({
		placeholder: text,
		emptyEditorClass: 'is-editor-empty',
	});
export const listItem = () => ListItemPrimitive.configure({});

export const heading = (levels: Level[]) =>
	HeadingPrimitive.configure({
		levels,
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
	});

export const bold = () => BoldPrimitive.configure({});
export const italic = () => ItalicPrimitive.configure({});
export const underline = () => UnderlinePrimitive.configure({});
export const strike = () => StrikePrimitive.configure({});

export const link = () => LinkPrimitive.configure({});
export const bullet = () =>
	BulletList.configure({
		HTMLAttributes: {
			class: '',
		},
	});
export const order = () =>
	OrderedList.configure({
		HTMLAttributes: {
			class: '',
		},
	});
export const blockquote = () => BlockquotePrimitive.configure({});
