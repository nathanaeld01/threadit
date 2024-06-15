import type { ContentType } from "@/components/post/helpers";

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
	content?: ContentType[] | undefined;
	createdAt: Date;
	id: string;
	title: string;
}

export type { ICommunity, IPost, IUser };
