import { type Editor } from '@tiptap/react';

type IconProps = Omit<React.SVGAttributes<SVGSVGElement>, 'viewBox'>;
type ToggleProps = {
	editor: Editor | null;
};

export type { IconProps, ToggleProps };
