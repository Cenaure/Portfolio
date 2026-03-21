import ProjectCard from "@/src/components/sections/Projects/Child/ProjectCard";
import {Badge} from "@/src/components/sections/Projects/Child/TechBadges";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ProjectTag {
	label: string;
}

export interface ProjectProps {
	title: string;
	subtitle: string;
	description: string;
	tags: ProjectTag[];
	href: string;
	linkLabel: string;
	status?: string;
	previewLink: string;
	reverse?: boolean;
	badges: Badge[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const PROJECTS: ProjectProps[] = [
	{
		title: "LisMarket",
		subtitle: "E-commerce platform",
		description:
			"Full-stack e-commerce application with user authentication, \n" +
			"product catalog, shopping cart, admin dashboard, and Nova Post integration. \n" +
			"Focused on clean architecture and security best practices.",
		tags: [
			{ label: "Modular architecture (frontend + backend)" },
			{ label: "Advanced filtering, pagination & caching" },
			{ label: "Authentication, roles & protected routes" },
			{ label: "Designed with future scaling in mind" },
		],
		href: "/projects/ecommerce",
		linkLabel: "View case study",
		status: "In development",
		previewLink: "",
		reverse: false,
		badges: [
			{
				label: "TypeScript",
				color: "#007acc"
			},
			{
				label: "Next.js",
				color: "#e8e8e8"
			},
			{
				label: "React",
				color: "#61DAFB"
			},
			{
				label: "Tailwind CSS",
				color: "#38bdf8"
			},
			{
				label: "Nest.js",
				color: "#DF234F"
			},
			{
				label: "MongoDB",
				color: "#439934"
			}
		]
	},
	{
		title: "Pasko Coin",
		subtitle: "Telegram Mini App",
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
		badges: [
			{
				label: "TypeScript",
				color: "#007acc"
			},
			{
				label: "Next.js",
				color: "#e8e8e8"
			},
			{
				label: "React",
				color: "#61DAFB"
			},
			{
				label: "MongoDB",
				color: "#439934"
			},
		]
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

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{PROJECTS.map((project) => (
						<ProjectCard key={project.href} {...project} />
					))}
				</div>
			</div>
		</section>
	);
}