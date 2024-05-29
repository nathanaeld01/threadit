"use client";

import { Slot } from "@radix-ui/react-slot";
import { clsx } from "@threadit/utils/class";
import { useEffect, useRef, useState } from "react";

interface Props {
	active?: boolean;
	children: React.ReactElement;
}

const Presence = ({ active, children }: Props) => {
	const [isActive, setIsActive] = useState<boolean>(active ?? false);
	const childrenRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (active) {
			setIsActive(true);
			return;
		}

		const e = childrenRef.current;

		const animationEndHandler = () => {
			setIsActive(false);
		};

		e?.addEventListener("animationend", animationEndHandler);
		e?.addEventListener("transitioncancel", animationEndHandler);

		return () => {
			e?.removeEventListener("animationend", animationEndHandler);
			e?.removeEventListener("transitioncancel", animationEndHandler);
		};
	}, [childrenRef, active]);

	return (
		<Slot className={clsx(!isActive && "hidden")} ref={childrenRef}>
			{children}
		</Slot>
	);
};

export default Presence;
