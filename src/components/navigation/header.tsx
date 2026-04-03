"use client";

import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import GlassSurface from "@/src/components/react bits/GlassSurface";

const links = [
	{ label: "Portfolio", href: "/" },
	{ label: "About", href: "#about" },
	{ label: "Projects", href: "#projects" },
	{ label: "Contact me", href: "#contact" },
];

export function Header() {
	const [open, setOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	const toggle = useCallback(() => setOpen((o) => !o), []);

	// Проверка размера экрана
	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 768);
		checkMobile(); // начальная проверка
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	// Общие стили контента (чтобы не дублировать код верстки)
	const navContent = (
		<div className="px-6 w-full">
			<nav className="flex items-center gap-5 justify-between text-slate-50">
				<Link href="/public" className="text-lg font-bold">Cenaure</Link>

				{/* Desktop */}
				<div className="hidden md:flex gap-8 items-center">
					{links.map(({ label, href }) => (
						<Link key={href} href={href} className="text-slate-300 hover:text-white transition-colors">
							{label}
						</Link>
					))}
				</div>

				<Link href="#contact" className="hidden md:flex px-4 py-2 rounded-full border border-violet-400 hover:bg-violet-500 transition-all">
					Hire me
				</Link>

				{/* Burger */}
				<button onClick={toggle} className="md:hidden p-2 text-slate-300">
					<div className="w-6 h-5 relative">
						<span className={`absolute h-0.5 w-6 bg-current transition-all ${open ? 'rotate-45 top-2' : 'top-0'}`} />
						<span className={`absolute h-0.5 w-6 bg-current top-2 transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`} />
						<span className={`absolute h-0.5 w-6 bg-current transition-all ${open ? '-rotate-45 top-2' : 'top-4'}`} />
					</div>
				</button>
			</nav>

			{/* Mobile Menu */}
			<div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
				<div className="flex flex-col gap-4 border-t border-white/10 pt-4">
					{links.map(({ label, href }) => (
						<Link key={href} href={href} onClick={() => setOpen(false)} className="text-slate-300 hover:text-white">
							{label}
						</Link>
					))}
				</div>
			</div>
		</div>
	);

	return (
		<header className="sticky top-4 z-[100] px-4">
			<div className="max-w-5xl mx-auto relative">
				{isMobile ? (
					/* Обычный упрощенный фон для мобилок (Mobile) */
					<div className={`w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-[24px] transition-all ${open ? 'pb-2' : ''}`}>
						{navContent}
					</div>
				) : (
					/* Тяжелый компонент React Bits (Desktop) */
					<GlassSurface
						className={`!w-full !h-auto ease-in-out ${open ? 'pb-4' : ''}`}
						displace={0.5}
						distortionScale={0.1}
						redOffset={0}
						greenOffset={10}
						blueOffset={20}
						opacity={0.9}
						borderRadius={24}
						backgroundOpacity={0.1}
					>
						{navContent}
					</GlassSurface>
				)}
			</div>
		</header>
	);
}