// ─── Data ─────────────────────────────────────────────────────────────────────

import Link from "next/link";
import StatisticCounter from "@/src/components/sections/Projects/ProjectPage/StatisticCounter";
import TechStack from "@/src/components/sections/Projects/ProjectPage/TechStack";
import {ArchitectureDiagram} from "@/src/components/sections/Projects/ProjectPage/ArchitectureDiagram";
import Challenge from "@/src/components/sections/Projects/ProjectPage/Challenge";
import ScreenshotGallery from "@/src/components/sections/Projects/ProjectPage/ScreenshotGallery";

const TECH_STACK = [
	{category: "Frontend", items: ["Next.js 16", "TypeScript", "Tailwind CSS", "Zustand"]},
	{category: "Backend", items: ["Node.js", "Nest.js", "MongoDB", "Redis", "Meilisearch"]},
	{
		category: "Architecture",
		items: [
			"Monolithic backend",
			"Stateless API",
			"JWT authentication"
		]
	}
];

const FEATURES = [
	{
		number: "01",
		title: "Modular Architecture",
		description:
			"Separated frontend and backend into independent modules with clearly defined contracts. Each domain (products, orders, users) lives in its own layer — easy to scale, test, and replace independently.",
	},
	{
		number: "02",
		title: "Advanced Filtering & Caching",
		description:
			"Multi-parameter filtering with URL-synced state, server-side pagination, and Redis caching layer. Category trees, price ranges, and attribute filters compose into a single optimized query.",
	},
	{
		number: "03",
		title: "Authentication",
		description:
			"JWT-based auth with refresh token rotation. Simple role system. Protected routes enforce access at both API middleware and component level.",
	},
	{
		number: "04",
		title: "Scalable Architecture Foundations",
		description:
			"Designed with clear separation of concerns and stateless API boundaries, allowing the system to evolve and scale if infrastructure complexity grows.",
	},
];

const CHALLENGES = [
	{
		problem: "Keeping cart, inventory, and pricing consistent",
		solution: "Optimistic UI updates on the client, with server-side validation and correction if conflicts occur",
	},
	{
		problem: "Search performance degrading with large product catalog",
		solution: "Integrated Meilisearch for full-text search with typo tolerance; results cached in Redis to avoid redundant queries on repeated searches",
	},
	{
		problem: "Dashboard slows down with many orders",
		solution: "Implemented virtualized lists and simple pagination to keep UI responsive; analytics data loaded on demand",
	},
];

const SCREENSHOTS = [
	{ src: "/e1.webp", alt: "Product detail page" },
	{ src: "/e2.webp", alt: "User's Account page" },
	{ src: "/e3.webp", alt: "Admin dashboard" },
];


// ─── Page ─────────────────────────────────────────────────────────────────────

export default function EcommerceWebsite() {
	return (
		<>
			{/* ── Hero ── */}
			<section className="relative overflow-hidden pt-20 pb-24">
				{/* Background glow */}
				<div className="pointer-events-none absolute inset-0">
					<div
						className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-500/5 rounded-full blur-3xl"/>
					<div className="absolute top-20 right-10 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-3xl"/>
				</div>

				<div className="relative mx-auto max-w-6xl px-6 md:px-10">
					{/* Status badge */}
					<div
						className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 mb-8">
						<span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse"/>
						<span className="text-xs font-medium text-amber-400 uppercase tracking-widest">In Progress</span>
					</div>

					<h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
						E-commerce
						<br/>
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
              Platform
            </span>
					</h1>

					<p className="max-w-2xl text-lg text-slate-400 leading-relaxed mb-12">
						A full-stack e-commerce project focused on scalability, clear architecture, and real-world
						business logic. Built to demonstrate how complex systems can be structured for long-term
						maintainability and growth.
					</p>

					{/* Quick links */}
					<div className="flex flex-wrap gap-4">
						<Link
							href="#architecture"
							className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:border-white/20 hover:bg-white/5 transition-colors"
						>
							Explore architecture ↓
						</Link>
					</div>
				</div>
			</section>

			{/* ── Stats ── */}
			<section className="relative py-16 border-y border-white/20 border-dotted">
				<div className="absolute inset-y-0 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-slate-900/50"/>
				<div className="relative mx-auto max-w-6xl px-6 md:px-10">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-10">
						<StatisticCounter value={57} label="API endpoints" suffix="+"/>
						<StatisticCounter value={7} label="Core modules"/>
						<StatisticCounter value={2} label="Cache layers"/>
						<StatisticCounter value={100} label="TypeScript" suffix="%"/>
					</div>
				</div>
			</section>

			{/* ── Tech stack ── */}
			<section className="py-24 mx-auto max-w-6xl px-6 md:px-10">
				<TechStack TECH_STACK={TECH_STACK} />
			</section>

			{/* ── Architecture diagram placeholder ── */}
			<section id="architecture" className="relative py-8 pb-24">
				<ArchitectureDiagram
					description="Single-server architecture with clear separation between client, API, domain services, and data layer."
					layers={[
						{
							title: "Client",
							color: "sky",
							items: ["Next.js App Router", "Zustand Store"],
						},
						{
							title: "API Layer",
							color: "indigo",
							items: ["NestJS Controllers", "JWT Middleware", "DTO Validation"],
						},
						{
							title: "Services",
							color: "violet",
							items: ["Product Service", "Order Service", "User Service", "Shipping Service", "..."],
						},
						{
							title: "Data",
							color: "emerald",
							items: ["MongoDB", "Redis (local)", "Meilisearch"],
						},
					]}
				/>
			</section>

			<section className="relative py-24">
				<div className="absolute inset-y-0 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-slate-900/50" />
				<div className="relative mx-auto max-w-6xl px-6 md:px-10">
					<h2 className="text-3xl font-bold text-white mb-4">Screenshots</h2>
					<p className="text-slate-400 mb-12 max-w-lg">
						A look at the current state of the UI across key pages.
					</p>
					<ScreenshotGallery screenshots={SCREENSHOTS} />
				</div>
			</section>

			{/* ── Key features ── */}
			<section className="py-24 mx-auto max-w-6xl px-6 md:px-10">
				<h2 className="text-3xl font-bold text-white mb-12">Key Features</h2>
				<div className="grid md:grid-cols-2 gap-6">
					{FEATURES.map((f) => (
						<div
							key={f.number}
							className="group rounded-xl border border-white/5 bg-slate-900/40 p-7 hover:border-sky-500/20 hover:bg-slate-900/60 transition-all duration-300"
						>
							<div className="font-mono text-xs text-slate-600 mb-4 group-hover:text-sky-500/60 transition-colors">
								{f.number}
							</div>
							<h3 className="text-lg font-semibold text-white mb-3">{f.title}</h3>
							<p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
						</div>
					))}
				</div>
			</section>

			{/* ── Challenges ── */}
			<section className="relative py-24">
				<div className="absolute inset-y-0 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-slate-900/50"/>
				<div className="relative mx-auto max-w-6xl px-6 md:px-10">
					<h2 className="text-3xl font-bold text-white mb-4">Challenges & Solutions</h2>
					<p className="text-slate-400 mb-12 max-w-lg">
						Real problems encountered during development and how they were resolved.
					</p>

					<div className="space-y-4">
						{CHALLENGES.map((c, i) => (
							<Challenge c={c} key={i} />
						))}
					</div>
				</div>
			</section>

			{/* ── What's next ── */}
			<section className="py-24 mx-auto max-w-6xl px-6 md:px-10">
				<h2 className="text-3xl font-bold text-white mb-4">What&apos;s Next</h2>
				<p className="text-slate-400 mb-10 max-w-lg">
					The project is actively in development. Upcoming milestones:
				</p>
				<div className="space-y-3">
					{[
						{label: "Payment integration", done: false},
						{label: "Delivery services integration", done: false},
						{label: "Shop analytics", done: false},
						{label: "Product recommendation engine", done: false},
					].map((item) => (
						<div key={item.label} className="flex items-center gap-3 text-slate-300">
							<span className="h-2 w-2 rounded-full bg-amber-400/60 shrink-0"/>
							{item.label}
						</div>
					))}
				</div>
			</section>

			{/* ── Footer nav ── */}
			<footer className="relative border-t border-white/5 py-12">
				<div className="mx-auto max-w-6xl px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
					<Link
						href="/#projects"
						className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2"
					>
						← Back to projects
					</Link>
					<Link
						href="/projects/telegram-mini-app"
						className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2"
					>
						Next: Telegram Mini App →
					</Link>
				</div>
			</footer>
		</>
	);
}