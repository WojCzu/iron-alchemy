import Image from "next/image";

export function Logo() {
	return (
		<Image
			src="/assets/logo.svg"
			alt="Logo"
			width={1048}
			height={307}
			className="w-40 sm:w-52 xl:w-64"
		/>
	);
}
