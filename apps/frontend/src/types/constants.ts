import type { ContentType } from "@/components/post/helpers";
import type { OutputBlockData } from "@threadit/ui/editor";

interface IUser {
	avatar: string;
	name?: string | undefined;
	username: string;
}

interface ICommunity {
	avatar: string;
	description: string;
	name: string;
	slug: string;
	stats: {
		members: number;
		online: number;
	};
}

interface IPost {
	author: IUser;
	community: ICommunity;
	content?: (ContentType | OutputBlockData)[] | undefined;
	createdAt: Date;
	id: string;
	title: string;
}

export type { ICommunity, IPost, IUser };
