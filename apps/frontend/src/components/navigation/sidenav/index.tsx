import { Button } from "@threadit/ui/button";
import {
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTrigger,
} from "@threadit/ui/sheet";

import { NavItem } from "../item";
import { NavigationTheme } from "../theme";
import { SidenavCommunity } from "./community";
import { SidenavSection } from "./section";
import { SidenavWrapper } from "./wrapper";
import { Icon } from "@/components/shared/icons";
import Logo from "@/components/shared/logo";

interface Community {
	href: string;
	image: string;
	name: string;
}

interface Props {
	communities?: Community[];
	recents?: Community[];
}

const Sidenav = ({ communities, recents }: Props) => {
	return (
		<SidenavWrapper>
			<SheetTrigger asChild>
				<Button className="size-9 p-1 md:hidden" variant="ghost">
					<Icon className="text-2xl" icon="menu-line" />
				</Button>
			</SheetTrigger>
			<SheetContent className="flex max-w-[350px] flex-col" side="left">
				<SheetHeader className="relative flex h-16">
					<Logo className="m-auto h-fit" showText />
					<SheetClose className="data-[state=open]:bg-secondary absolute inset-y-0 right-5 my-auto flex size-6 rounded-sm opacity-70 transition-opacity hover:opacity-100 disabled:pointer-events-none">
						<Icon className="m-auto size-5" icon="close-line" />
						<span className="sr-only">Close</span>
					</SheetClose>
				</SheetHeader>
				<div className="grid grow grid-rows-[1fr_auto] overflow-y-scroll">
					<div className="divide-border flex flex-col divide-y [&>*]:py-3">
						<SidenavSection>
							<NavItem href="/">
								<Icon className="size-5" icon="home-4-line" />
								Home
							</NavItem>
							<NavItem href="/c/create">
								<Icon className="size-5" icon="add-line" />
								Create a Community
							</NavItem>
						</SidenavSection>
						{!!recents?.length && (
							<SidenavSection title="Recents">
								{recents.map(({ href, image, name }) => (
									<SidenavCommunity
										href={href}
										image={image}
										key={name}
									>
										c/{name}
									</SidenavCommunity>
								))}
							</SidenavSection>
						)}
						{!!communities?.length && (
							<SidenavSection title="Communities">
								{communities.map(({ href, image, name }) => (
									<SidenavCommunity
										href={href}
										image={image}
										key={name}
									>
										c/{name}
									</SidenavCommunity>
								))}
							</SidenavSection>
						)}
					</div>
					<SheetFooter className="items-center justify-center gap-2 px-4 pb-3">
						<NavItem
							className="text-alternate bg-primary hover:bg-primary-hover justify-center rounded-md font-semibold"
							href="/login"
						>
							Login
						</NavItem>
						<NavigationTheme />
					</SheetFooter>
				</div>
			</SheetContent>
		</SidenavWrapper>
	);
};

export default Sidenav;
