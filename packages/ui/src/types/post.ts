interface PostProps {
	children: React.ReactNode;
}

interface PostWrapperProps {
	children: React.ReactNode;
}

interface PostContentProps {
	id: string;
	image?: string;
	slug: string;
	title: string;
}

interface PostHeaderProps {
	children: React.ReactNode;
}

interface PostFooterProps {
	children: React.ReactNode;
}

export type {
	PostContentProps,
	PostFooterProps,
	PostHeaderProps,
	PostProps,
	PostWrapperProps,
};
