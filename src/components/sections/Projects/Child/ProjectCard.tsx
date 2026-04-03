"use client"

import ProjectTags from "@/src/components/sections/Projects/Child/ProjectTags";
import ProjectLink from "@/src/components/sections/Projects/Child/ProjectLink";
import {ProjectProps} from "@/src/components/sections/Projects/ProjectsSection";
import SpotlightCard from "@/src/components/SpotlightCard";
import {SquareArrowOutUpRight} from "lucide-react";
import {TechBadges} from "@/src/components/sections/Projects/Child/TechBadges";
import Link from "next/link";

export default function ProjectCard({
	                                    title,
																			subtitle,
	                                    description,
	                                    tags,
	                                    href,
	                                    linkLabel,
	                                    status,
	                                    previewLink,
	                                    reverse = false,
	                                    badges
                                    }: ProjectProps) {
	return (
		<Link href={href} className="m-0 flex">
			<SpotlightCard
				className="shadow-xl flex flex-col hover:shadow-4xl bg-gradient-to-br from-slate-950 m-0 to-indigo-950/80 border-slate-800 hover:scale-105 transition-all cursor-pointer !p-0"
				spotlightColor="rgba(50, 29, 133, 0.2)"
			>
				<div className="w-full min-h-16 bg-gradient-to-r from-violet-950/60 to-cyan-950 px-5 py-4 md:px-8 md:py-5 flex items-center justify-between gap-3">
					<div>
						<h3 className="text-xl md:text-3xl font-semibold">{title}</h3>
						<p className="text-lg text-indigo-400/70">{subtitle}</p>
					</div>

					<SquareArrowOutUpRight className="shrink-0 w-5 h-5"/>
				</div>
				<div className="p-5 md:p-8 flex flex-col">
					<TechBadges badges={badges} />
					<p className="text-slate-300 leading-relaxed mb-6 mono text-sm md:text-base">{description}</p>
					<ProjectTags tags={tags}/>
				</div>
				<div className="px-5 pb-5 md:px-8 md:pb-8 flex-1 flex items-end">
					<ProjectLink href={href} label={linkLabel} status={status}/>

				</div>
			</SpotlightCard>
		</Link>
	);
}