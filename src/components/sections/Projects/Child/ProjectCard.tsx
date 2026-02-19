import ProjectTags from "@/src/components/sections/Projects/Child/ProjectTags";
import ProjectLink from "@/src/components/sections/Projects/Child/ProjectLink";
import ProjectPreview from "@/src/components/sections/Projects/Child/ProjectPreview";
import {ProjectProps} from "@/src/components/sections/Projects/ProjectsSection";

export default function ProjectCard({
	                     title,
	                     description,
	                     tags,
	                     href,
	                     linkLabel,
	                     status,
	                     previewLink,
	                     reverse = false,
                     }: ProjectProps) {
	const content = (
		<div>
			<h3 className="text-3xl font-semibold mb-4">{title}</h3>
			<p className="text-slate-300 leading-relaxed mb-6">{description}</p>
			<ProjectTags tags={tags} />
			<ProjectLink href={href} label={linkLabel} status={status} />
		</div>
	);

	const preview = <ProjectPreview link={previewLink} />;

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
			{reverse ? (
				<>
					{preview}
					{content}
				</>
			) : (
				<>
					{content}
					{preview}
				</>
			)}
		</div>
	);
}