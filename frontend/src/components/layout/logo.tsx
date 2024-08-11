import { getImageProps } from "next/image";

export function Logo() {
	const common = {
		alt: "Logo",
		width: 1048,
		height: 307,
	};

	const { src: dark } = getImageProps({ ...common, src: "/assets/logo-dark.svg" }).props;
	const { src: light, ...rest } = getImageProps({
		...common,
		src: "/assets/logo-light.svg",
	}).props;

	return (
		<picture>
			<source media="(prefers-color-scheme: dark)" srcSet={dark} />
			<source media="(prefers-color-scheme: light)" srcSet={light} />
			<img {...rest} alt={common.alt} className="w-40 sm:w-52 xl:w-64" />
		</picture>
	);
}
