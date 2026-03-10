import Image from "next/image";

export interface Badge {
	label: string;
	color: string;
}

interface Props {
	badges: Badge[];
}

export function TechBadges({ badges }: Props) {
	return (
		<div className="flex flex-wrap mb-2 gap-2">
			{badges.map(({ color, label }) => (
				<div
					key={label}
					className="group flex items-center gap-1.5 px-2.5 py-1 rounded-md"
					style={{
						backgroundColor: `${color}12`,
						border: `1px solid ${color}40`,
						boxShadow: `0 0 0 0 ${color}00`,
					}}
				>
					<div className="relative w-3.5 h-3.5 flex-shrink-0">
						<Image
							src={"/tech/" + label + ".svg"}
							alt={label}
							fill
							className="object-contain"
						/>
					</div>
					<span
						className="text-xs font-medium tracking-wide leading-none"
						style={{ color: `${color}dd` }}
					>
            {label}
          </span>
				</div>
			))}
		</div>
	);
}