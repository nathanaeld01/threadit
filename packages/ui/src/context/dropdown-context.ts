import { createContext, useContext } from "react";

import type { DropdownType } from "../types/dropdown";

const DropdownContext = createContext<DropdownType<boolean> | null>(null);

const useDropdown = () => {
	const context = useContext(DropdownContext);

	if (!context)
		throw new Error("useDropdown must be used within a DropdownProvider");

	return context;
};

export { DropdownContext, useDropdown };
