"use client";

import { useState } from "react";
import Image from "next/image";

interface ScreenshotGalleryProps {
	screenshots: { src: string; alt: string }[];
}

export default function ScreenshotGallery({ screenshots }: ScreenshotGalleryProps) {
	const [active, setActive] = useState<number | null>(null);

	return (
		<>
			<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
				{screenshots.map((shot, i) => (
					<button
						key={i}
						onClick={() => setActive(i)}
						className="relative rounded-xl overflow-hidden border border-white/5 bg-slate-900 focus:outline-none cursor-pointer"
					>
						<div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]" />
						<div className="relative w-full aspect-video">
							<Image
								src={shot.src}
								alt={shot.alt}
								fill
								className="object-cover object-top"
							/>
						</div>
					</button>
				))}
			</div>

			{/* Lightbox */}
			{active !== null && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 "
					onClick={() => setActive(null)}
				>
					<div
						className="relative w-full max-w-4xl"
						onClick={(e) => e.stopPropagation()}
					>
						<Image
							src={screenshots[active].src}
							alt={screenshots[active].alt}
							width={1280}
							height={800}
							className="w-full h-auto rounded-xl border border-white/10"
						/>

						{/* Dots */}
						<div className="flex justify-center gap-2 mt-4">
							{screenshots.map((_, i) => (
								<button
									key={i}
									onClick={() => setActive(i)}
									className={`h-1.5 rounded-full transition-all duration-200 ${
										i === active ? "w-6 bg-white" : "w-1.5 bg-white/30"
									}`}
								/>
							))}
						</div>
					</div>

					{/* Prev */}
					<button
						className="absolute left-3 top-1/2 -translate-y-1/2 p-2 text-slate-300 hover:text-white cursor-pointer"
						onClick={(e) => { e.stopPropagation(); setActive((active - 1 + screenshots.length) % screenshots.length); }}
					>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
							<path d="M15 18l-6-6 6-6"/>
						</svg>
					</button>
					<button
						className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-slate-300 hover:text-white cursor-pointer"
						onClick={(e) => { e.stopPropagation(); setActive((active + 1) % screenshots.length); }}
					>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
							<path d="M9 18l6-6-6-6"/>
						</svg>
					</button>

					{/* Close */}
					<button
						className="absolute top-3 right-3 p-2 text-slate-400 hover:text-white cursor-pointer"
						onClick={() => setActive(null)}
					>
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
							<path d="M18 6 6 18M6 6l12 12"/>
						</svg>
					</button>
				</div>
			)}
		</>
	);
}