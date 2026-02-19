"use client";

import {useState, useEffect} from "react";

export default function ScrollDownArrow() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const check = () => {
			const atBottom =
				window.innerHeight + window.scrollY >= document.body.scrollHeight - 8;
			setVisible(!atBottom);
		};

		// Small delay so the DOM is fully painted before first check
		const t = setTimeout(check, 100);
		window.addEventListener("scroll", check, {passive: true});
		window.addEventListener("resize", check, {passive: true});

		return () => {
			clearTimeout(t);
			window.removeEventListener("scroll", check);
			window.removeEventListener("resize", check);
		};
	}, []);

	const handleClick = () => {
		window.scrollBy({top: window.innerHeight * 0.85, behavior: "smooth"});
	};

	if (!visible) return null;

	return (
		<div
			className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 cursor-pointer transition-all ease-in duration-200 hover:scale-110 active:scale-95"
			onClick={handleClick}
			role="button"
			aria-label="Scroll down"
		>
			<div className="flex flex-col items-center gap-2 group">
				<div className="bg-violet-900/20 backdrop-blur-md border border-white/20 p-3 rounded-full shadow-xl animate-bounce ease-in-out duration-400 ">
					<svg
						className="w-6 h-6 stroke-white fill-none"
						viewBox="0 0 24 24"
						strokeWidth="2.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
					</svg>
				</div>
				<span className="hidden md:block text-slate-50/60 text-xs font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
          Scroll
        </span>
			</div>
		</div>
	);
}