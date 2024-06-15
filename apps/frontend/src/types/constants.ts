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
	content?: string | undefined;
	createdAt: Date;
	id: string;
	image?: string | undefined;
	title: string;
}

export type { ICommunity, IPost, IUser };
