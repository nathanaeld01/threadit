import dynamic from "next/dynamic";

import type { ReactPlayerProps } from "react-player";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export const VideoPlayer = (props: ReactPlayerProps) => {
	return <ReactPlayer {...props} />;
};
