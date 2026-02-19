import {ProjectTag} from "@/src/components/sections/Projects/ProjectsSection";

export default function ProjectTags({ tags }: { tags: ProjectTag[] }) {
	return (
		<ul className="space-y-2 text-sm text-slate-400 mb-8">
			{tags.map(({ label }) => (
				<li key={label}>• {label}</li>
			))}
		</ul>
	);
}