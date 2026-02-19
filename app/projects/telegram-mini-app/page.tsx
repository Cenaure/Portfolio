"use client";

// ─── Data ─────────────────────────────────────────────────────────────────────

import Link from "next/link";
import StatisticCounter from "@/src/components/sections/Projects/ProjectPage/StatisticCounter";
import Breadcrumbs from "@/src/components/sections/Projects/ProjectPage/Breadcrumbs";
import TechStack from "@/src/components/sections/Projects/ProjectPage/TechStack";
import { ArchitectureDiagram } from "@/src/components/sections/Projects/ProjectPage/ArchitectureDiagram";
import Challenge from "@/src/components/sections/Projects/ProjectPage/Challenge";

const TECH_STACK = [
	{ category: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Zustand"] },
	{ category: "Backend", items: ["Next.js Server Actions", "MongoDB", "Telegram Bot API"] },
	{
		category: "Architecture",
		items: ["Serverless (no dedicated API)", "Telegram Mini App SDK"],
	},
];

const FEATURES = [
	{
		number: "01",
		title: "Idle Passive Income",
		description:
			"Core clicker-style loop where players accumulate in-game currency passively over time. Offline earnings calculated on session resume based on elapsed time and owned upgrades.",
	},
	{
		number: "02",
		title: "Upgrades & Shop",
		description:
			"Players can spend earned currency on upgrades that boost passive income rate. Each upgrade tier unlocks new multipliers, persisted in MongoDB per user.",
	},
	{
		number: "03",
		title: "Telegram Stars Payments",
		description:
			"Integrated native Telegram Stars invoices for in-app purchases. Users can buy premium upgrades or boosters directly within the Mini App using Telegram's built-in payment flow.",
	},
	{
		number: "04",
		title: "Leaderboard, Referrals & Daily Rewards",
		description:
			"Global leaderboard ranked by total earnings. Referral system tied to Telegram's invite links grants bonus currency. Daily reward streak incentivizes return sessions.",
	},
];

const CHALLENGES = [
	{
		problem: "No dedicated backend",
		solution:
			"Used Next.js Server Actions as a lightweight serverless API layer; each game action (collect earnings, buy upgrade, claim reward) maps to a single server action with MongoDB read/write",
	},
	{
		problem: "Calculating offline earnings without a background worker",
		solution:
			"Stored last-seen timestamp in MongoDB per user; on session start, server action computes elapsed time and applies the income rate formula before returning updated state to the client",
	},
	{
		problem: "Validating Telegram Stars invoice callbacks securely",
		solution:
			"Verified payment webhooks using Telegram Bot API's pre_checkout_query flow inside a Server Action; purchase credited only after successful_payment event confirmed by Telegram",
	},
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TelegramMiniApp() {
	return (
		<>
			{/* ── Hero ── */}
			<section className="relative overflow-hidden pt-20 pb-24">
				{/* Background glow */}
				<div className="pointer-events-none absolute inset-0">
					<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-500/5 rounded-full blur-3xl" />
					<div className="absolute top-20 right-10 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-3xl" />
				</div>

				<div className="relative mx-auto max-w-6xl px-6 md:px-10">
					{/* Status badge */}
					<div className="inline-flex items-center gap-2 rounded-full border border-slate-500/20 bg-slate-500/10 px-3 py-1 mb-8">
						<span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
						<span className="text-xs font-medium text-slate-400 uppercase tracking-widest">
              Abandoned
            </span>
					</div>

					<h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
						Telegram
						<br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
              Mini App Game
            </span>
					</h1>

					<p className="max-w-2xl text-lg text-slate-400 leading-relaxed">
						A Hamster Kombat-style idle game built as a Telegram Mini App. Players earn passive
						income, buy upgrades, compete on a leaderboard, and make purchases with Telegram Stars
						— all without a dedicated backend server.
					</p>

					<Link href={"https://core.telegram.org/bots/webapps"} className="underline text-sky-400">
						What telegram mini apps are?
					</Link>

					{/* Quick links */}
					<div className="flex flex-wrap gap-4 mt-12">
						<Link
							href="#architecture"
							className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:border-white/20 hover:bg-white/5 transition-colors"
						>
							Explore architecture ↓
						</Link>
					</div>
				</div>
			</section>

			{/* ── Tech stack ── */}
			<section className="py-24 mx-auto max-w-6xl px-6 md:px-10">
				<TechStack TECH_STACK={TECH_STACK} />
			</section>

			{/* ── Architecture diagram ── */}
			<section id="architecture" className="relative py-8 pb-24">
				<ArchitectureDiagram
					description="Serverless architecture with no dedicated API. Next.js Server Actions handle all game logic, communicating directly with MongoDB and the Telegram Bot API."
					layers={[
						{
							title: "Client",
							color: "sky",
							items: ["Next.js App Router", "Telegram Mini App SDK", "Zustand Store", "Server actions"],
						},
						{
							title: "External APIs",
							color: "violet",
							items: ["Telegram Bot API", "Stars Payment Webhooks"],
						},
						{
							title: "Data",
							color: "emerald",
							items: ["MongoDB"],
						},
					]}
				/>
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
				<div className="absolute inset-y-0 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-slate-900/50" />
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

			{/* ── Why abandoned ── */}
			<section className="py-24 mx-auto max-w-6xl px-6 md:px-10">
				<h2 className="text-3xl font-bold text-white mb-4">Why It Was Abandoned</h2>
				<p className="text-slate-400 max-w-2xl leading-relaxed">
					The only purpose of this project was to learn how telegram mini apps work.
				</p>
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
						href="/projects/ecommerce"
						className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2"
					>
						Next: E-commerce Platform →
					</Link>
				</div>
			</footer>
		</>
	);
}