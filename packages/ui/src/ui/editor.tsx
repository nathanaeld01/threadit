"use client";

import EditorJS from "@editorjs/editorjs";
import { forwardRef, useEffect } from "react";

import { useForwardRef } from "../use-forward-ref";

import type {
	EditorConfig,
	OutputBlockData,
	OutputData,
	ToolConstructable,
	ToolSettings,
} from "@editorjs/editorjs";

interface Props {
	data?: OutputData;
	onChange?: (data: OutputData) => void;
	placeholder?: string;
	tools: EditorConfig["tools"];
}

export const Editor = forwardRef<EditorJS, Props>((props, ref) => {
	const editorRef = useForwardRef<EditorJS>(ref);

	useEffect(() => {
		if (!editorRef.current) {
			const editor = new EditorJS({
				data: props.data,
				holder: "editorjs",
				onChange: (api) => {
					void api.saver.save().then((content) => {
						props.onChange?.(content);
					});
				},
				onReady: () => {
					console.log("Editor is ready");
				},
				placeholder: props.placeholder,
				tools: props.tools,
			});

			editorRef.current = editor;
		}

		return () => {
			if (editorRef.current?.destroy) {
				editorRef.current.destroy();
			}
		};
	}, []);

	return (
		<div
			className="rounded-md border border-border ring-border-ring ring-offset-background focus-within:ring-2 focus-within:ring-offset-2"
			id="editorjs"
		/>
	);
});

Editor.displayName = "Editor";

export type { EditorConfig, OutputBlockData, ToolConstructable, ToolSettings };
