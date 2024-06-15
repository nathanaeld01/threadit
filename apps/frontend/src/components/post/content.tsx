"use client";

import { useEffect, useState } from "react";

import { type ContentType, parsePostData } from "@/components/post/helpers";

interface Props {
	content?: ContentType[];
}

export const Content = ({ content }: Props) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted || !content) return null;

	return <div className="py-4">{parsePostData(content)}</div>;
};
