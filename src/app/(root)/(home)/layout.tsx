import Link from '@/components/link';
import { HomeIcon } from '@/components/svgs/icon/home';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<div className="wrapper layout">
			<div className="content">{children}</div>
			<div className="sidebar">
				<Card>
					<CardHeader className="p-4 pb-0">
						<CardTitle className="flex items-center text-base leading-none gap-2.5">
							<HomeIcon />
							Home
						</CardTitle>
						<CardDescription className="py-4">
							Your ThreadIt homepage. Get an overview of your
							favourite communites here.
						</CardDescription>
					</CardHeader>
					<CardContent className="p-4 pt-0">
						<Link fullWidth href="/c/create">
							Create Community
						</Link>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default Layout;
