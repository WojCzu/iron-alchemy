import { Quote } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type TeestimonialProps = {
	message: string;
	authorName?: string;
	authorTitle?: string;
	active?: boolean;
};
export function Testimonial({
	message,
	authorName = "Anonymous",
	authorTitle,
	active,
}: TeestimonialProps) {
	return (
		<div
			className={cn(
				"mx-auto flex w-[224px] flex-col items-center gap-8 rounded-lg border-2 border-secondary p-6 shadow-primary transition-transform",
				{
					"border-primary md:-translate-y-6 md:shadow-primary": active,
					"md:shadow-none": !active,
				},
			)}
		>
			<p>{message}</p>

			<Quote className="-rotate-[30deg]" />

			<div className="flex gap-4">
				<Image
					alt=""
					width={36}
					height={36}
					className="m-auto rounded-full"
					src={"/assets/placeholder-avatar.svg"}
				/>
				<div className="flex flex-col">
					<span className="text-sm font-semibold">{authorName}</span>
					{authorTitle && <span className="text-xs font-light">{authorTitle}</span>}
				</div>
			</div>
		</div>
	);
}
