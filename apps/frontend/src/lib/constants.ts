import type { ICommunity, IPost, IUser } from "@/types/constants";

export const communities: ICommunity[] = [
	{
		avatar: "https://styles.redditmedia.com/t5_2vq0w/styles/communityIcon_9o8mqi4fd6h51.png",
		description:
			"c/destiny2 is a community hub for fans to talk about the going-ons of Destiny 2. All posts and discussion should in someway relate to the game. We are not affiliated with Bungie in any way, and are a strictly fan-run community.",
		name: "Destiny 2",
		slug: "destiny2",
		stats: {
			members: 6961,
			online: 103,
		},
	},
	{
		avatar: "https://styles.redditmedia.com/t5_2t0xw/styles/communityIcon_rg0va4pdxm811.png",
		description:
			"A community for discussing anything related to the React UI framework and its ecosystem. Join the Reactiflux Discord (reactiflux.com) for additional React discussion and help.",
		name: "React",
		slug: "React",
		stats: {
			members: 93400,
			online: 244,
		},
	},
	{
		avatar: "https://styles.redditmedia.com/t5_2qh1q/styles/communityIcon_d625ty2hw24d1.png",
		description: "The Official Subreddit for India",
		name: "Incredible India",
		slug: "India",
		stats: {
			members: 123456,
			online: 7890,
		},
	},
	{
		avatar: "https://styles.redditmedia.com/t5_3h7yi/styles/communityIcon_nsrozhr9igl91.png",
		description:
			"Next.js is a React framework for building full-stack web applications.",
		name: "NextJS",
		slug: "NextJS",
		stats: {
			members: 21831,
			online: 856,
		},
	},
	{
		avatar: "https://styles.redditmedia.com/t5_2qkr5/styles/communityIcon_kqes2ztdbgc61.png",
		description:
			"Home of Football. News, Rumours, Analysis, gossip and much more.",
		name: "The Greatest Sport",
		slug: "Football",
		stats: {
			members: 28391,
			online: 387,
		},
	},
	{
		avatar: "https://styles.redditmedia.com/t5_2t0xw/styles/communityIcon_rg0va4pdxm811.png",
		description:
			"Fans of Spider-Man's greatest villain, Venom, unite on The Venom Site! This is a place for discussion of symbiotes, Carnage, Toxin, Anti-Venom and everything Venom related!",
		name: "The Venom Site",
		slug: "thevenomsite",
		stats: {
			members: 1234,
			online: 12,
		},
	},
];

export const users: IUser[] = [
	{
		avatar: "https://i.redd.it/snoovatar/avatars/nftv2_bmZ0X2VpcDE1NToxMzdfN2Q3YWFmMDNlYTUxYmMxNjU4ZTkzNWE4YWQwOWQ3N2Y4OWExZjI1MF8yMDcyMDU_rare_afb762a8-b840-413b-8fef-d6b3f369c700.png",
		username: "cosm1c15",
	},
	{
		avatar: "https://i.redd.it/snoovatar/avatars/ed084734-580a-44cc-a4aa-e0679742dd14.png",
		name: "DJToad",
		username: "djtoad03",
	},
	{
		avatar: "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_0.png",
		username: "No_Band_5399",
	},
];

export const posts: IPost[] = [
	{
		author: users.find((u) => u.username === "djtoad03")!,
		community: communities.find((c) => c.slug === "destiny2")!,
		createdAt: new Date("05-28-2024"),
		id: "1d742j1",
		title: "Destiny 2: The Final Shape | Launch Trailer",
	},
	{
		author: users.find((u) => u.username === "No_Band_5399")!,
		community: communities.find((c) => c.slug === "thevenomsite")!,
		createdAt: new Date("06-03-2024"),
		id: "1d73zy9",
		image: "https://img.youtube.com/vi/STScKOUpXR8/maxresdefault.jpg",
		title: "venom 3 last dance trailer",
	},
	{
		author: users.find((u) => u.username === "cosm1c15")!,
		community: communities.find((c) => c.slug === "destiny2")!,
		content:
			"<p>did it with a random getting over the anxiety was...... really hard , but I DID IT GOT APHOTHEOSIS AND STAR EATER WARLOCK BOND</p><p>YAY!!!</p><p>its so goddamn easy once you actually start talking with someone , you don't even feel any resistance from your &quot; social anxiety &quot;</p><p>im not gonna farm chest from now on though , got the guy and his group on discord , gonna run the mission again tmrw and grind it out</p>",
		createdAt: new Date("06-15-2024"),
		id: "1dfsvak",
		title: "DID THE DUAL DESTINY MISSION TODAY",
	},
];
