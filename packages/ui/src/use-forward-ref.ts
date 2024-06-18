import { useImperativeHandle, useRef } from "react";

export function useForwardRef<T>(forwardRef: React.ForwardedRef<T>) {
	const ref = useRef<T>();
	useImperativeHandle(forwardRef, () => ref.current!, []);

	return ref;
}
