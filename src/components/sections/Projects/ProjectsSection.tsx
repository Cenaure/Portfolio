import Link from "next/link";
import ProjectCard from "@/src/components/sections/Projects/Child/ProjectCard";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ProjectTag {
	label: string;
}

export interface ProjectProps {
	title: string;
	description: string;
	tags: ProjectTag[];
	href: string;
	linkLabel: string;
	status?: string;
	previewLink: string;
	reverse?: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const PROJECTS: ProjectProps[] = [
	{
		title: "E-commerce platform",
		description:
			"A full-stack e-commerce project focused on scalability, clear architecture and real-world business logic. The project is still in development, but it already demonstrates how I approach complex systems.",
		tags: [
			{ label: "Modular architecture (frontend + backend)" },
			{ label: "Advanced filtering, pagination & caching" },
			{ label: "Authentication, roles & protected routes" },
			{ label: "Designed with future scaling in mind" },
		],
		href: "/projects/ecommerce",
		linkLabel: "View case study",
		status: "In progress",
		previewLink: "",
		reverse: false,
	},
	{
		title: "Telegram Mini App",
		description:
			"A Telegram Mini App built as an interactive product with real-time updates and server-side logic. The focus is on performance, UX and platform constraints.",
		tags: [
			{ label: "Telegram Web Apps API" },
			{ label: "Secure user identification" },
			{ label: "Invoices" },
			{ label: "Designed for mobile-first usage" },
		],
		href: "/projects/telegram-mini-app",
		linkLabel: "Read more",
		status: "",
		previewLink: "/pasko.webp",
		reverse: true,
	},
];

// ─── Section ──────────────────────────────────────────────────────────────────

export function ProjectsSection() {
	return (
		<section className="relative py-32" id="projects">
			{/* Full-width background */}
			<div className="absolute inset-y-0 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-slate-900/50" />

			<div className="relative mx-auto max-w-6xl px-6 md:px-10 text-slate-200">
				<h2 className="text-4xl font-bold mb-16">Projects</h2>

				<div className="space-y-20">
					{PROJECTS.map((project) => (
						<ProjectCard key={project.href} {...project} />
					))}
				</div>
			</div>
		</section>
	);
}