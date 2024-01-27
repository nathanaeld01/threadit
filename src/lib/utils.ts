import { type ClassValue, clsx } from "clsx";
import { format, formatDistanceToNowStrict } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string) {
	return format(date, "do MMMM, yyy");
}

export function formatTimestamp(date: Date | string) {
	return formatDistanceToNowStrict(date, {
		addSuffix: true,
		roundingMethod: "ceil",
	});
}

export function getDirtyData<T>(
	data: T,
	originalData: Record<string, unknown>,
) {
	const dirtyData: Partial<T> = {};

	for (const key in data) {
		if (data[key] !== originalData[key]) {
			dirtyData[key] = data[key];
		}
	}

	return dirtyData;
}

export function fileToBase64(file: File): Promise<string> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();

		reader.onload = () => resolve(reader.result as string);
		reader.onerror = (error) => reject(error);

		reader.readAsDataURL(file);
	});
}
