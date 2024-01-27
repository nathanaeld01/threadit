import type React from "react";
import { toast } from "sonner";

type ToastOptions = {
	duration?: number;
	icon?: React.ReactNode;
	description?: React.ReactNode;
	action?: {
		label: string;
		onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	};
	cancel?: {
		label: string;
		onClick?: () => void;
	};
	onDismiss?: () => void;
	onAutoClose?: () => void;
};

type PromiseOptions<ToastData> = {
	loading?: string | React.ReactNode;
	success?:
		| string
		| React.ReactNode
		| ((data: ToastData) => React.ReactNode | string);
	error?:
		| string
		| React.ReactNode
		| ((error: unknown) => React.ReactNode | string);
	finally?: () => void | Promise<void>;
};

const toastDefault = (
	message: string | React.ReactNode,
	options?: ToastOptions,
) =>
	toast(message, {
		...options,
		className: "bg-secondary border-border text-secondary-content",
	});

const toastSuccess = (message: string | React.ReactNode) =>
	toast.success(message, {
		className: "bg-success-muted border-success text-success-content",
	});

const toastInfo = (message: string | React.ReactNode) =>
	toast.info(message, {
		className: "bg-secondary border-border text-secondary-content",
	});

const toastWarning = (message: string | React.ReactNode) =>
	toast.warning(message, {
		className: "bg-warning-muted border-warning text-warning-content",
		classNames: {
			closeButton: "!border-warning !bg-warning text-warning",
		},
	});

const toastError = (error: string | React.ReactNode, options?: ToastOptions) =>
	toast.error(error, {
		...options,
		className: "bg-error-muted border-error text-danger",
		classNames: {
			closeButton: "!border-error !bg-error !text-danger",
		},
	});

const toastPromise = <D>(
	promise: Promise<D> | (() => Promise<D>),
	options?: PromiseOptions<D>,
) =>
	toast.promise(promise, {
		...options,
		className:
			"border-border bg-secondary text-secondary-content data-[type=success]:bg-success-muted data-[type=success]:border-success data-[type=success]:text-success-content data-[type=error]:bg-error-muted data-[type=error]:border-error data-[type=error]:text-error-content",
		classNames: {
			closeButton:
				"!border-border !bg-secondary !text-secondary-content group-data-[type=success]:!border-success group-data-[type=success]:!bg-success group-data-[type=success]:!text-success-content group-data-[type=error]:!border-error group-data-[type=error]:!bg-error group-data-[type=error]:!text-error-content",
		},
	});

export {
	toastDefault,
	toastError,
	toastInfo,
	toastPromise,
	toastSuccess,
	toastWarning,
};
