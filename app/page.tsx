import {Header} from "@/src/components/navigation/header";
import {IntroductionSection} from "@/src/components/sections/IntroductionSection";
import {AboutMe} from "@/src/components/sections/AboutMe";
import {ProjectsSection} from "@/src/components/sections/Projects/ProjectsSection";
import {ContactMe} from "@/src/components/sections/ContactMe";

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
