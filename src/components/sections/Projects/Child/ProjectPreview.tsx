import Image from "next/image";

export default function ProjectPreview({ link }: { link?: string }) {
	if (!link) {
		return (
			<div
				className="
          relative h-64 rounded-4xl
          bg-gradient-to-br from-slate-800 to-slate-900
          flex items-center justify-center
          border border-white/5
          overflow-hidden
        "
			>
				{/* Subtle grid pattern */}
				<div
					className="absolute inset-0 opacity-[0.03]"
					style={{
						backgroundImage:
							"linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
						backgroundSize: "40px 40px",
					}}
				/>

				{/* Glow */}
				<div className="absolute w-40 h-40 rounded-full bg-sky-500/10 blur-2xl" />

				{/* Logo mark */}
				<svg
					width="56"
					height="56"
					viewBox="0 0 56 56"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="relative z-10 opacity-30"
				>
					<rect x="4" y="4" width="20" height="20" rx="4" fill="white" />
					<rect x="32" y="4" width="20" height="20" rx="4" fill="white" />
					<rect x="4" y="32" width="20" height="20" rx="4" fill="white" />
					<rect x="32" y="32" width="20" height="20" rx="4" fill="white" opacity="0.4" />
				</svg>
			</div>
		);
	}

	return (
		<div
			className="
        relative h-64 rounded-4xl
        bg-gradient-to-br from-slate-800 to-slate-900
        flex items-center justify-center
      "
		>
			<Image src={link} alt="preview" objectFit="contain" layout="fill" />
		</div>
	);
}