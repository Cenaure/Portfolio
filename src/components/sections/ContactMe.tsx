const CONTACTS = [
	{
		label: "Telegram",
		value: "@cenaure",
		href: "https://t.me/cenaure",
		icon: (
			<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
				<path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z"/>
			</svg>
		),
	},
	{
		label: "Email",
		value: "cenaureemail@email.com",
		href: "mailto:cenaureemail@email.com",
		icon: (
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
				<rect x="2" y="4" width="20" height="16" rx="2"/>
				<path d="m2 7 10 7 10-7"/>
			</svg>
		),
	},
	{
		label: "GitHub",
		value: "github.com/yourhandle",
		href: "https://github.com/yourhandle",
		icon: (
			<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
				<path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
			</svg>
		),
	},
	{
		label: "Fiverr",
		value: "@cenaure_",
		href: "https://www.fiverr.com/s/XLyXj1D",
		icon: (
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="12" cy="12" r="12" fill="currentColor"/>
				<path d="M8.5 15.3H10.1V11.1H8.5V9.5H10.1V8.9C10.1 7.6 10.7 6.7 12.3 6.7H13.9V8.3H13C12.3 8.3 12.1 8.6 12.1 9.2V9.5H14L13.7 11.1H12.1V15.3H13.7V17H8.5V15.3Z" fill="white"/>
				<circle cx="15.5" cy="15.8" r="1.2" fill="white"/>
			</svg>
		),
	},
];

export function ContactMe() {
	return (
		<section className="relative py-32" id="contact">
			{/* Background glow */}
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/5 rounded-full blur-3xl" />
			</div>

			<div className="relative mx-auto max-w-6xl px-6 md:px-10">
				<h2 className="text-4xl font-bold text-white mb-4">Contact me</h2>
				<p className="text-slate-400 mb-12 max-w-md">
					Open to new opportunities, collaborations, or just a chat.
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
					{CONTACTS.map((c) => (
						<a
							key={c.label}
							href={c.href}
							target="_blank"
							rel="noopener noreferrer"
							className="group flex flex-col gap-4 rounded-xl border border-white/5 bg-slate-900/40 p-6 hover:border-sky-500/20 hover:bg-slate-900/60 transition-all duration-300"
						>
							<div className="text-slate-400 group-hover:text-sky-400 transition-colors duration-300">
								{c.icon}
							</div>
							<div>
								<p className="text-xs text-slate-500 mb-1">{c.label}</p>
								<p className="text-sm text-slate-200 font-medium truncate">{c.value}</p>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}