import {
	BellIcon,
	MenuIcon,
	PlusIcon,
	SettingsIcon,
	UserIcon,
	XIcon,
} from 'lucide-react';
import Image from 'next/image';

import { auth } from '@/server/auth';

import { HomeIcon } from '../svgs/icon/home';
import { Logo } from '../svgs/logo';
import { Button } from '../ui/button';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTrigger,
} from '../ui/sheet';

import Item from './Item';
import Section from './Section';
import Signout from './Signout';
import Theme from './Theme';

type Community = {
	name: string;
	href: string;
	image: string;
};

type Props = {
	recents?: Community[];
	communities?: Community[];
};

type CommunityProps = {
	href: string;
	image: string;
	children: React.ReactNode;
};

const Community = ({ href, image, children }: CommunityProps) => (
	<Item href={href}>
		<Image
			src={image}
			className="rounded-full"
			alt="Community Image"
			width={20}
			height={20}
		/>
		{children}
	</Item>
);

const Sidenav = async ({ recents, communities }: Props) => {
	const session = await auth();

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="ghost" className="size-9 p-1 md:hidden">
					<MenuIcon className="size-10" />
				</Button>
			</SheetTrigger>
			<SheetContent className="flex max-w-[350px] flex-col" side="left">
				<SheetHeader className="relative flex h-16">
					<Logo className="m-auto h-fit" overrideHide />
					<SheetClose className="absolute inset-y-0 right-5 my-auto flex size-6 rounded-sm opacity-70 transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-secondary">
						<XIcon className="m-auto size-5" />
						<span className="sr-only">Close</span>
					</SheetClose>
				</SheetHeader>
				<div className="grid grow grid-rows-[1fr_auto] overflow-y-scroll">
					<div className="flex flex-col divide-y divide-border [&>*]:py-3">
						<Section>
							<Item href="/">
								<HomeIcon className="size-5" />
								Home
							</Item>
							<Item href="/c/create">
								<PlusIcon className="size-5" />
								Create a Community
							</Item>
						</Section>
						{!!recents?.length && (
							<Section title="Recents">
								{recents.map(({ name, href, image }) => (
									<Community
										href={href}
										image={image}
										key={name}
									>
										c/{name}
									</Community>
								))}
							</Section>
						)}
						{!!communities?.length && (
							<Section title="Communities">
								{communities.map(({ name, href, image }) => (
									<Community
										href={href}
										image={image}
										key={name}
									>
										c/{name}
									</Community>
								))}
							</Section>
						)}
						{session?.user && (
							<div className="mt-auto flex flex-col">
								<div className="flex w-full items-center gap-2 px-4 py-2">
									{session.user.image && (
										<Image
											src={session.user.image}
											alt="Profile"
											width={20}
											height={20}
											className="rounded-full"
										/>
									)}
									<span className="text-xs uppercase tracking-widest text-foreground/50">
										<span className="lowercase">u/</span>
										<span className="text-foreground">
											{session.user.username}
										</span>{' '}
										Profile
									</span>
								</div>
								<Item href="/profile">
									<UserIcon className="size-5" />
									Profile
								</Item>
								<Item href="/profile/notifications">
									<BellIcon className="size-5" />
									Notifications
								</Item>
								<Item href="/profile/settings">
									<SettingsIcon className="size-5" />
									Settings
								</Item>
							</div>
						)}
					</div>
					<SheetFooter className="items-center justify-center gap-2 px-4 pb-3">
						{session?.user ? (
							<Signout fullWidth />
						) : (
							<Item
								className="justify-center rounded-md bg-primary font-semibold text-alternate hover:bg-primary-hover"
								href="/login"
							>
								Login
							</Item>
						)}
						<Theme />
					</SheetFooter>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default Sidenav;
