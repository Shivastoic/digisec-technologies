// IMPORT COMPONENTS
import HeroSection from "@/app/home/hero/index"
import AboutSection from "@/app/home/about/index"
import ServiceSection from "@/app/home/services/index"
import WhyChooseUs from "@/app/home/why-choose-us"
import Testimonials from "@/app/home/testimonials"

export default function Home() {
	
	return (

		<>
			<HeroSection />
			<AboutSection />
			{/* <ServiceSection /> */}
			<WhyChooseUs />
			<Testimonials />
		</>

	)

}
