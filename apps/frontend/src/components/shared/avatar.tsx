import {
	AvatarFallback,
	AvatarImage,
	Avatar as AvatarWrapper,
} from "@threadit/ui/avatar";

interface Props {
	className?: string;
	name: string;
	src: string;
}

export const Avatar = ({ className, name, src }: Props) => {
	return (
		<AvatarWrapper className={className}>
			<AvatarImage alt={name} src={src} />
			<AvatarFallback></AvatarFallback>
		</AvatarWrapper>
	);
};
