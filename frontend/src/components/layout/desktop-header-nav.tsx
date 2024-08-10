import { ActiveLink } from "@/components/layout/active-link";

export function DesktopHeaderNav() {
	return (
		<ul id="primary-navigation" className="flex gap-4">
			<li>
				<ActiveLink href="/#tools">Tools</ActiveLink>
			</li>
			<li>
				<ActiveLink href="/#blog">Blog</ActiveLink>
			</li>
			<li>
				<ActiveLink href="/#log">Log</ActiveLink>
			</li>
		</ul>
	);
}
