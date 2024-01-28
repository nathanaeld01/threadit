import { ErrorIcon } from '@/components/svgs/icon/defaults';
import { NoCommunity } from '@/components/svgs/no-community';

const NotFound = () => {
	return (
		<div className="relative w-full flex items-center max-w-5xl h-layout mx-auto">
			<div className="absolute size-fit inset-0 m-auto z-[2]">
				<ErrorIcon className="w-80" />
				<div className="mt-5 font-bold text-xl text-center">
					<p>This community does not exist</p>
				</div>
			</div>
			<NoCommunity />
		</div>
	);
};

export default NotFound;
