import Link from 'next/link';

import { auth } from '@/server/auth';

import { Logo } from '../svgs/logo';
import { UserAvatar } from '../svgs/user';
import { buttonStyles } from '../ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu';

import Sidenav from './Sidenav';
import Signout from './Signout';
import Theme from './Theme';

type UsernavProps = {
	avatar?: string | null;
	name?: string | null;
};

const Usernav = ({ avatar, name }: UsernavProps) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<UserAvatar
					name={name!}
					avatar={avatar}
					className="size-9 cursor-pointer rounded-full border-0"
				/>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="w-[250px]"
				sideOffset={22}
				side="bottom"
				align="end"
			>
				<DropdownMenuItem className="cursor-pointer" asChild>
					<Link href="/profile">Profile</Link>
				</DropdownMenuItem>
				<DropdownMenuItem className="cursor-pointer" asChild>
					<Link href="/profile/settings">Settings</Link>
				</DropdownMenuItem>
				<DropdownMenuItem className="cursor-pointer" asChild>
					<Link href="/profile/notifications">Notifications</Link>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<Signout
					fullWidth
					variant="ghost"
					className="h-auto justify-start rounded-sm px-2 py-1.5 text-sm"
				/>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export const Navigation = async () => {
	const session = await auth();

	return (
		<nav className="fixed z-50 h-16 w-full border-b border-b-border bg-card">
			<div className="wrapper relative flex h-full items-center px-4">
				<div className="flex w-full items-center md:w-fit">
					<Sidenav />
					<Logo className="max-md:absolute max-md:inset-0 max-md:m-auto" />
				</div>
				<div className="hidden grow justify-between *:h-fit md:flex">
					<div className="" />
					<div className="flex gap-2">
						<Theme />
						{session?.user ? (
							<Usernav
								avatar={session.user.image}
								name={session.user.name}
							/>
						) : (
							<Link className={buttonStyles()} href="/login">
								Login
							</Link>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};
