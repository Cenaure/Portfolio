export default function Challenge({c}: { c: { problem: string; solution: string }}) {
	return (
		<div
			className="rounded-xl border border-white/5 bg-[#0d1117] p-6 grid md:grid-cols-2 gap-6"
		>
			<div className="flex gap-4">
                  <span
	                  className="mt-0.5 h-5 w-5 shrink-0 rounded-full border border-red-500/30 bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400 text-xs">✕</span>
                  </span>
				<div>
					<div className="text-xs text-slate-500 uppercase tracking-widest mb-1">Problem</div>
					<p className="text-slate-300 text-sm">{c.problem}</p>
				</div>
			</div>
			<div className="flex gap-4">
                  <span
	                  className="mt-0.5 h-5 w-5 shrink-0 rounded-full border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 text-xs">✓</span>
                  </span>
				<div>
					<div className="text-xs text-slate-500 uppercase tracking-widest mb-1">Solution</div>
					<p className="text-slate-300 text-sm">{c.solution}</p>
				</div>
			</div>
		</div>
	)	;
}
