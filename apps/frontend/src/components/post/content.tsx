"use client";

import parse from "html-react-parser";
import { useEffect, useState } from "react";

interface Props {
	content: string;
}

export const Content = ({ content }: Props) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return <div className="py-4">{parse(content)}</div>;
};
