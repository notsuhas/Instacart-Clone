import CarouselCards from "./CarouselCards";
import StatsSection from "./StatsSection";

function AboutSection() {
	return (
		<section id="#about" className="mx-auto max-w-6xl bg-white">
			<CarouselCards />
			<StatsSection />
		</section>
	);
}

export default AboutSection;
