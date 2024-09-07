import Checklist from "@editorjs/checklist";
import Code from "@editorjs/code";
import Embed from "@editorjs/embed";
import Header from "@editorjs/header";
import SimpleImage from "@editorjs/simple-image";
import Quote from "@editorjs/quote";
import Table from "@editorjs/table";
import Underline from "@editorjs/underline";

const CREATE_POST_TOOLS = {
	checklist: Checklist,
	underline: Underline,
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
};

export default CREATE_POST_TOOLS;
