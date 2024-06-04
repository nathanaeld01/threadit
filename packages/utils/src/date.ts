import { formatDistanceToNowStrict } from "date-fns";

export function formatTimestamp(date: Date | string) {
	return formatDistanceToNowStrict(date, {
		addSuffix: true,
		roundingMethod: "ceil",
	});
}
