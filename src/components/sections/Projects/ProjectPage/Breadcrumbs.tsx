"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";

const links = [
	{ label: "E-commerce platform", href: "/projects/ecommerce" },
	{ label: "Telegram Mini-App", href: "/projects/telegram-mini-app" },
];

export default function Breadcrumbs() {
	const pathname = usePathname();

	return (
		<div className="mx-auto max-w-6xl px-6 md:px-10 h-14 flex items-center gap-3 text-sm">
			<Link href="/" className="text-slate-400 hover:text-white transition-colors">
				Home
			</Link>
			<span className="text-slate-700">/</span>
			<Link href="/#projects" className="text-slate-400 hover:text-white transition-colors">
				Projects
			</Link>
			<span className="text-slate-700">/</span>
			<Link href={pathname} className="text-violet-400">
				{links.find((link) => link.href === pathname)?.label ?? "Unknown project"}
			</Link>
		</div>
	);
}
