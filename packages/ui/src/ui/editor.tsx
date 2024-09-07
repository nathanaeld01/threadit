"use client";

import EditorJS from "@editorjs/editorjs";
import { useEffect, useRef } from "react";

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

const Editor = ({ data, onChange, placeholder, tools }: Props) => {
	const ref = useRef<EditorJS>();

	useEffect(() => {
		if (!ref.current) {
			const editor = new EditorJS({
				data: data ?? undefined,
				holder: "editorjs",
				onChange: (api) => {
					(async () => {
						const data = await api.saver.save();
						onChange?.(data);
					})();
				},
				onReady: () => {
					console.log("Editor is ready");
				},
				placeholder: placeholder,
				tools: tools,
			});

			ref.current = editor;
		}

		return () => {
			if (ref.current?.destroy) {
				ref.current.destroy();
			}
		};
	}, []);

	return (
		<div
			className="rounded-md border border-border ring-border-ring ring-offset-background focus-within:ring-2 focus-within:ring-offset-2"
			id="editorjs"
		/>
	);
};

Editor.displayName = "Editor";

export type { EditorConfig, OutputBlockData, ToolConstructable, ToolSettings };
export default Editor;
