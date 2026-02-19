import Link from "next/link";

export default function ProjectLink({
	                     href,
	                     label,
	                     status,
                     }: {
	href: string;
	label: string;
	status?: string;
}) {
	return (
		<div className="flex gap-4 items-center">
			<Link
				href={href}
				className="
          px-5 py-2 rounded-full
          bg-violet-500/10 text-violet-300
          border border-violet-400/30
          hover:bg-violet-500/20 hover:text-white
          transition-all
        "
			>
				{label}
			</Link>
			{status && (
				<span className="text-slate-500 text-sm">{status}</span>
			)}
		</div>
	);
}