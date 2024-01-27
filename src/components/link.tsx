import { cn } from '@/lib/utils';
import {
	type LinkProps as NextLinkProps,
	default as NextLink,
} from 'next/link';
import { AnchorHTMLAttributes, forwardRef } from 'react';
import { ButtonProps, buttonStyles } from './ui/button';

type LinkProps = Pick<
	ButtonProps,
	'variant' | 'size' | 'fullWidth' | 'outlined'
> &
	AnchorHTMLAttributes<HTMLAnchorElement> &
	NextLinkProps;

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
	({ variant, outlined, size, fullWidth, className, ...props }, ref) => (
		<NextLink
			className={cn(
				buttonStyles({ variant, outlined, size, fullWidth, className }),
			)}
			ref={ref}
			{...props}
		/>
	),
);

export default Link;
