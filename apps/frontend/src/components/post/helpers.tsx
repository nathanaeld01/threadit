import parse from "html-react-parser";
import Image from "next/image";

import { VideoPlayer } from "../shared/video";

export interface ContentType {
	children: string;
	type: "image" | "paragraph" | "video";
}

const parser = (item: ContentType) => {
	return {
		image: (
			<div className="relative h-96">
				<Image
					alt="Post Image"
					className="mx-auto !w-auto rounded-lg"
					fill
					src={item.children}
				/>
			</div>
		),
		paragraph: <p className="mb-2">{parse(item.children)}</p>,
		video: (
			<div className="flex justify-center">
				<VideoPlayer
					controls
					height="24rem"
					light
					pip
					url={item.children}
				/>
			</div>
		),
	}[item.type];
};

export const parsePostData = (content: ContentType[]) => {
	return content.map((item) => parser(item));
};
