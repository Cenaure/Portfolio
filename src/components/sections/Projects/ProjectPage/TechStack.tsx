export default function TechStack({TECH_STACK}: { TECH_STACK: { category: string; items: string[] }[]}) {
	return (
		<>
			<h2 className="text-xs uppercase tracking-widest text-slate-500 mb-8">Tech Stack</h2>
			<div className="grid md:grid-cols-3 gap-4">
				{TECH_STACK.map((group) => (
					<div
						key={group.category}
						className="rounded-xl border border-white/5 bg-slate-900/40 p-6 hover:border-white/10 transition-colors"
					>
						<div className="text-xs uppercase tracking-widest text-slate-500 mb-4">
							{group.category}
						</div>
						<div className="flex flex-wrap gap-2">
							{group.items.map((item) => (
								<span
									key={item}
									className="rounded-md bg-white/5 px-3 py-1 text-sm text-slate-300 font-mono"
								>
                    {item}
                  </span>
							))}
						</div>
					</div>
				))}
			</div>
		</>
	);
}
