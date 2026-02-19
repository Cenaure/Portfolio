export function AboutMe() {
	return (
		<section className="relative py-32 overflow-hidden" id="about">
			{/* DECOR */}
			<div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px]
				bg-violet-500/10 blur-[120px] rounded-full -z-10"
			/>

			{/* CONTENT (container stays limited) */}
			<div className="relative mx-auto max-w-5xl px-10 text-slate-200">

				<h2 className="text-4xl font-bold mb-8">
					About me
				</h2>

				<div className="space-y-6 text-lg leading-relaxed text-slate-300">
					<p>
						Full-stack web developer with solid hands-on experience, focused on building
						<span className="text-violet-400"> modern</span> and
						<span className="text-violet-400"> scalable</span> web applications with attention
						to quality, performance, and user experience.
					</p>

					<p>
						I started programming at a young age, which allowed me to explore different
						technologies, approaches, and paradigms over time. This long-term journey
						helped me develop strong problem-solving skills, a deep understanding of how
						systems work under the hood, and a thoughtful approach to writing maintainable code.
					</p>

					<p>
						My main stack includes modern JavaScript, TypeScript, React, and Next.js,
						along with backend technologies. I enjoy working close to application
						architecture, performance optimization, and product-oriented development,
						turning complex ideas into clean and reliable solutions.
					</p>
				</div>


				{/* FACTS / HIGHLIGHTS */}
				<div className="mt-12 grid md:grid-cols-3 gap-6 text-sm">
					<div className="rounded-2xl border border-slate-700/50 p-4">
						<span className="text-violet-400">Full-stack</span><br />
						Frontend & Backend
					</div>

					<div className="rounded-2xl border border-slate-700/50 p-4">
						<span className="text-violet-400">Clean code</span><br />
						Architecture mindset
					</div>
				</div>

			</div>
		</section>
	);
}
