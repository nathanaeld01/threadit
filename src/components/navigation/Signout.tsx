"use client";

import { forwardRef } from "react";

import { logout } from "@/server/actions";

import { Button, type ButtonProps } from "../ui/button";

const Signout = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
	<Button
		onClick={() => logout({ redirect: true })}
		type="submit"
		ref={ref}
		{...props}
	>
		Sign Out
	</Button>
));
Signout.displayName = "SignOut";

export default Signout;
