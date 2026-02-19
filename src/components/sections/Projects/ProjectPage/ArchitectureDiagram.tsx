type ArchitectureLayer = {
	title: string;
	color: "sky" | "indigo" | "violet" | "emerald";
	items: string[];
};

const COLOR_MAP = {
	sky: {
		title: "text-sky-400",
		pill: "border-sky-500/20 bg-sky-500/10 text-sky-300",
	},
	indigo: {
		title: "text-indigo-400",
		pill: "border-indigo-500/20 bg-indigo-500/10 text-indigo-300",
	},
	violet: {
		title: "text-violet-400",
		pill: "border-violet-500/20 bg-violet-500/10 text-violet-300",
	},
	emerald: {
		title: "text-emerald-400",
		pill: "border-emerald-500/20 bg-emerald-500/10 text-emerald-300",
	},
};

export function ArchitectureDiagram({
	                                    title = "Architecture",
	                                    description,
	                                    layers,
                                    }: {
	title?: string;
	description?: string;
	layers: ArchitectureLayer[];
}) {
	return (
		<section className="relative py-12">
			<div className="absolute inset-y-0 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-slate-900/50" />

			<div className="relative mx-auto max-w-6xl px-6 md:px-10">
				<header className="mb-10">
					<h2 className="text-3xl font-bold text-white mb-3">{title}</h2>
					{description && (
						<p className="text-slate-400 max-w-xl">{description}</p>
					)}
				</header>

				<div className="rounded-2xl border border-white/5 bg-slate-900/70 p-8 backdrop-blur">
					<div className="space-y-6 font-mono text-sm overflow-x-auto">
						{layers.map((layer, index) => {
							const colors = COLOR_MAP[layer.color];

							return (
								<div key={layer.title}>
									<div className="flex items-start gap-4">
                    <span
	                    className={`w-32 shrink-0 text-xs tracking-widest ${colors.title}`}
                    >
                      {layer.title.toUpperCase()}
                    </span>

										<div className="flex flex-nowrap gap-2">
											{layer.items.map((item) => (
												<span
													key={item}
													className={`rounded-md border px-3 py-1 text-xs ${colors.pill}`}
												>
                          {item}
                        </span>
											))}
										</div>
									</div>

									{index < layers.length - 1 && (
										<div className="ml-32 mt-4 flex items-center gap-2 text-slate-600">
											<span className="h-6 w-px bg-white/10" />
											<span className="text-xs tracking-wide">HTTP / Internal calls</span>
										</div>
									)}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
