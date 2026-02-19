import Image from "next/image";
import Link from "next/link";

export function IntroductionSection() {
	return (
		<section className="relative min-h-[90vh] w-full flex items-center">
			<div className="mx-auto max-w-7xl w-full px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 py-20 md:py-0">

				{/* IMAGE — показывается первым на мобиле */}
				<div className="relative flex items-center justify-center order-first md:order-last">
					<div className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full bg-violet-500/20 blur-3xl"/>
					<Link href="https://github.com/Cenaure">
						<Image
							width={250}
							height={250}
							src="/avatar.webp"
							alt="Maksym Hotvianskyi"
							className="relative z-10 object-cover rounded-3xl w-44 h-44 md:w-[250px] md:h-[250px]"
						/>
					</Link>
				</div>

				{/* TEXT */}
				<div className="flex flex-col justify-center text-white text-center md:text-left">
					<div className="text-slate-300 mono text-base md:text-2xl">
						Hi, I'm
					</div>

					<div className="uppercase text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide mono">
						Maksym Hotvianskyi
					</div>

					<div className="mt-2 text-slate-300 max-w-xl mono text-sm md:text-base mx-auto md:mx-0">
						Full-stack Developer building
						<span className="text-violet-400"> responsible & modern</span> web apps
					</div>

					<div className="mt-6 flex gap-4 justify-center md:justify-start flex-wrap">
						<Link
							href="#projects"
							className="px-5 py-2 rounded-full bg-violet-500/10 text-violet-300 border border-violet-400/30 hover:bg-violet-500/20 hover:text-white transition-all text-sm md:text-base"
						>
							View projects
						</Link>
						<Link
							href="#contact"
							className="px-5 py-2 rounded-full text-slate-300 hover:text-white transition-colors text-sm md:text-base"
						>
							Contact me →
						</Link>
					</div>
				</div>

			</div>

			<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.15),transparent_60%)]"/>
		</section>
	);
}