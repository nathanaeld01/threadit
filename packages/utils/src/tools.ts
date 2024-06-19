/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Checklist from "@editorjs/checklist";
import Code from "@editorjs/code";
import Embed from "@editorjs/embed";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import SimpleImage from "@editorjs/simple-image";
import Table from "@editorjs/table";
import Underline from "@editorjs/underline";

export const postTools = {
	checklist: {
		class: Checklist,
		inlineToolbar: true,
	},
	code: Code,
	embed: {
		class: Embed,
		config: {
			services: {
				youtube: true,
			},
		},
	},
	header: {
		class: Header,
		config: {
			defaultLevel: 3,
			levels: [2, 3, 4],
			placeholder: "Enter a header",
		},
	},
	image: SimpleImage,
	quote: Quote,
	table: Table,
	underline: Underline,
};
