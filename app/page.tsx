import {Header} from "@/src/components/navigation/header";
import {IntroductionSection} from "@/src/components/sections/IntroductionSection";
import {AboutMe} from "@/src/components/sections/AboutMe";
import {ProjectsSection} from "@/src/components/sections/Projects/ProjectsSection";
import {ContactMe} from "@/src/components/sections/ContactMe";
import {Metadata} from "next";

export default function Home() {
	return (
		<div className="bg-zinc-950 max-w-screen-xl mx-auto">
			<Header/>

			<main>
				<IntroductionSection />
				<AboutMe />
				<ProjectsSection />
				<ContactMe />
			</main>
		</div>
	);
}

export const metadata: Metadata = {
	title: "Cenaure — Full Stack Developer",
	description:
		"Full Stack Developer specializing in Next.js, Node.js, and modern web architecture. Building scalable, production-grade applications with clean code and thoughtful design.",
	keywords: [
		"Full Stack Developer",
		"Next.js",
		"Node.js",
		"TypeScript",
		"React",
		"Web Development",
		"Cenaure",
	],
	authors: [{ name: "Cenaure" }],
	openGraph: {
		title: "Cenaure — Full Stack Developer",
		description:
			"Full Stack Developer specializing in Next.js, Node.js, and modern web architecture.",
		type: "website",
	},
	twitter: {
		card: "summary",
		title: "Cenaure — Full Stack Developer",
		description:
			"Full Stack Developer specializing in Next.js, Node.js, and modern web architecture.",
	},
};