"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
	{ label: "Portfolio", href: "/" },
	{ label: "About", href: "#about" },
	{ label: "Projects", href: "#projects" },
	{ label: "Contact me", href: "#contact" },
];

export function Header() {
	const [open, setOpen] = useState(false);

	return (
		<header className="w-full px-4 md:px-10 py-4 sticky top-4 z-50">
			<div className="relative w-full rounded-3xl bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 px-6 py-2">

				<nav className="flex items-center justify-between text-slate-50">
					{/* Logo */}
					<Link href="/" className="text-lg font-bold">Cenaure</Link>

					{/* Desktop links */}
					<div className="hidden md:flex gap-8">
						{links.map(({ label, href }) => (
							<Link
								href={href}
								key={href}
								className="relative font-medium text-slate-300 transition-all duration-300 hover:text-white hover:-translate-y-[1px] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-violet-400 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full"
							>
								{label}
							</Link>
						))}
					</div>

					{/* Desktop CTA */}
					<Link
						href="#contact"
						className="hidden md:block px-4 py-2 rounded-full bg-violet-500/10 text-violet-300 border border-violet-400/30 hover:bg-violet-500/20 hover:text-white transition-all"
					>
						Hire me
					</Link>

					{/* Burger */}
					<button
						onClick={() => setOpen(!open)}
						className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
						aria-label="Toggle menu"
					>
						<span className={`block h-px w-6 bg-slate-300 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
						<span className={`block h-px w-6 bg-slate-300 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
						<span className={`block h-px w-6 bg-slate-300 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
					</button>
				</nav>

				{/* Mobile menu */}
				<div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-64 py-4" : "max-h-0"}`}>
					<div className="flex flex-col gap-4 border-t border-slate-700/50 pt-4">
						{links.map(({ label, href }) => (
							<Link
								href={href}
								key={href}
								onClick={() => setOpen(false)}
								className="text-slate-300 hover:text-white transition-colors"
							>
								{label}
							</Link>
						))}
						<Link
							href="#contact"
							onClick={() => setOpen(false)}
							className="w-fit px-4 py-2 rounded-full bg-violet-500/10 text-violet-300 border border-violet-400/30 hover:bg-violet-500/20 hover:text-white transition-all"
						>
							Hire me
						</Link>
					</div>
				</div>

				<div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-violet-500/20 via-purple-500/10 to-transparent blur-2xl" />
			</div>
		</header>
	);
}