"use client";

import Link from "next/link";
import { useState, useCallback, memo } from "react";

const links = [
	{ label: "Portfolio", href: "/" },
	{ label: "About", href: "#about" },
	{ label: "Projects", href: "#projects" },
	{ label: "Contact me", href: "#contact" },
];

// Выносим статичные части в отдельные компоненты чтобы не ре-рендерить при open
const DesktopNav = memo(function DesktopNav() {
	return (
		<>
			<div className="hidden md:flex gap-8">
				{links.map(({ label, href }) => (
					<Link
						href={href}
						key={href}
						className="relative font-medium text-slate-300
              hover:text-white hover:-translate-y-px
              after:absolute after:-bottom-1 after:left-0
              after:h-px after:w-0 after:bg-gradient-to-r
              after:from-violet-400 after:to-purple-500
              after:transition-[width] after:duration-300
              transition-[color,transform] duration-300"
					>
						{label}
					</Link>
				))}
			</div>

			<Link
				href="#contact"
				className="hidden md:block px-4 py-2 rounded-full
          bg-violet-500/10 text-violet-300 border border-violet-400/30
          hover:bg-violet-500/20 hover:text-white
          transition-[background-color,color] duration-200"
			>
				Hire me
			</Link>
		</>
	);
});

export function Header() {
	const [open, setOpen] = useState(false);

	const toggle = useCallback(() => setOpen(o => !o), []);
	const close = useCallback(() => setOpen(false), []);

	return (
		<header className="w-full px-4 md:px-10 py-4 sticky top-4 z-50">
			<div
				className="relative w-full rounded-3xl border border-slate-700/50 px-6 py-2"
				// backdrop-filter только там где реально нужен blur, через style чтобы браузер мог его изолировать
				style={{
					background: "rgba(15, 23, 42, 0.85)",
					// Вместо backdrop-blur-sm через Tailwind — изолируем в contain
					backdropFilter: "blur(8px)",
					WebkitBackdropFilter: "blur(8px)",
					// Даём браузеру подсказку изолировать слой
					contain: "layout style",
				}}
			>
				<nav className="flex items-center justify-between text-slate-50">
					<Link href="/" className="text-lg font-bold">
						Cenaure
					</Link>

					<DesktopNav />

					{/* Burger — transition только нужных свойств */}
					<button
						onClick={toggle}
						className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
						aria-label="Toggle menu"
						aria-expanded={open}
					>
            <span
	            className="block h-px w-6 bg-slate-300 transition-[transform,opacity] duration-300 will-change-transform"
	            style={{ transform: open ? "rotate(45deg) translateY(8px)" : undefined }}
            />
						<span
							className="block h-px w-6 bg-slate-300 transition-[transform,opacity] duration-300"
							style={{ opacity: open ? 0 : undefined }}
						/>
						<span
							className="block h-px w-6 bg-slate-300 transition-[transform,opacity] duration-300 will-change-transform"
							style={{ transform: open ? "rotate(-45deg) translateY(-8px)" : undefined }}
						/>
					</button>
				</nav>

				{/*
          Мобильное меню: grid-rows вместо max-h —
          плавнее и не требует угадывать max-h значение
        */}
				<div
					className="md:hidden grid transition-[grid-template-rows] duration-300"
					style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
				>
					<div className="overflow-hidden">
						<div className="flex flex-col gap-4 border-t border-slate-700/50 pt-4 pb-1 mt-1">
							{links.map(({ label, href }) => (
								<Link
									href={href}
									key={href}
									onClick={close}
									className="text-slate-300 hover:text-white transition-colors duration-200"
								>
									{label}
								</Link>
							))}
							<Link
								href="#contact"
								onClick={close}
								className="w-fit px-4 py-2 rounded-full
                  bg-violet-500/10 text-violet-300 border border-violet-400/30
                  hover:bg-violet-500/20 hover:text-white
                  transition-[background-color,color] duration-200"
							>
								Hire me
							</Link>
						</div>
					</div>
				</div>

				{/*
          Декоративный градиент: убираем blur-2xl — это второй слой блюра.
          Заменяем на opacity gradient без blur
        */}
				<div
					aria-hidden="true"
					className="absolute inset-0 -z-10 rounded-3xl pointer-events-none"
					style={{
						background:
							"linear-gradient(to right, rgba(139,92,246,0.15), rgba(168,85,247,0.07), transparent)",
					}}
				/>
			</div>
		</header>
	);
}