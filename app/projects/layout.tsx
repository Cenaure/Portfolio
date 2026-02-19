import Breadcrumbs from "@/src/components/sections/Projects/ProjectPage/Breadcrumbs";

export default function ProjectsLayout({children}: {children: React.ReactNode}) {
	return <div className="max-w-screen-xl md:mx-auto px-0 md:px-10">
		<nav className="sticky top-0 z-50 border-b border-white/5 bg-[#0d1117]/80 backdrop-blur-md">
			<Breadcrumbs />
		</nav>
		<main className="min-h-screen bg-[#0d1117] text-slate-200 selection:bg-sky-500/30">
			{children}
		</main>;
	</div>
}

