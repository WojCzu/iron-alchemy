import { Breadcrumbs } from "@/components/layout/breadcrumbs";

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="container my-8">
			<Breadcrumbs className="mb-4" />
			{children}
		</div>
	);
}
