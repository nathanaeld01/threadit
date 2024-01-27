"use client";

import { type ComponentProps } from "react";
import { Toaster as Sonner } from "sonner";

import {
	toastDefault,
	toastError,
	toastInfo,
	toastPromise,
	toastSuccess,
	toastWarning,
} from "@/lib/toasts";

type ToasterProps = Exclude<
	ComponentProps<typeof Sonner>,
	"position" | "className" | "toastOptions"
>;

const Toaster = (props: ToasterProps) => {
	return (
		<Sonner
			position="bottom-right"
			className="group"
			toastOptions={{
				unstyled: true,
				className: "toast group",
				classNames: {
					closeButton:
						"group-hover:!opacity-100 opacity-0 !transition-opacity !duration-300 !ease-in-out",
				},
			}}
			{...props}
		/>
	);
};

const toast = Object.assign(toastDefault, {
	success: toastSuccess,
	error: toastError,
	warning: toastWarning,
	info: toastInfo,
	promise: toastPromise,
});

type Toasts = keyof typeof toast;

export { toast, Toaster };
export type { Toasts };
