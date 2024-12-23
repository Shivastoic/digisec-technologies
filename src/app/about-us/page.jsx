// IMPORT COMPONENTS
import Container from "@/app/components/container/index"
import Image from "next/image"
import ServiceCard from "@/app/home/services/service-card/index"

// METADATA FOR ABOUT US PAGE
export const metadata = {

    title: "About Us | Digisec Technologies",
    description: "",
    keywords: "",

}

// HARDCODED DATA
const data = {

	description_four: "But our commitment to your digital protection doesn’t stop there. We also offer Cloud solutions, IT Solutions (DC & Edge IT), and Software Solutions to further enhance your online ventures.",
	description_one: "Digisec Technologies, proudly present our dedication to safeguarding your digital dreams. As a leading Cyber Security Solutions provider, we offer a comprehensive range of services and products tailored to your needs.",
	description_three: "Our team of Cyber Security Experts takes pride in specializing in various domains, from Data Security to Cloud Security. With their vigilance, we fortify your network, applications, data, and cloud infrastructure, shielding them from cyber- attacks that may seek to harm your success.",
	description_two: "Our journey begins by understanding your business objectives, for it is with this knowledge that we craft the perfect digital roadmap for you. Our world-class engagement and consultation services ensure that you are equipped to face any digital challenges that lie ahead.",
	src_one: "/assets/images/about/slider/cyber-security.png",
	src_two: "/assets/images/about/slider/audit.jpg",
	title_one: "Our Vision",
	title_two: "Our Mission",

}

const cardData = [

    {

        src: "/assets/images/services/cyber-security.png",
        link: "/services",
        title: "Cyber Security Solutions",
        description: "Implement both traditional and advanced cybersecurity solutions to comprehensively secure your users, network, applications, data, and mobile apps effectively.",

    },
    {

        src: "/assets/images/services/cloud.jpg",
        link: "/services",
        title: "Digital Transformation & Cloud",
        description: "Empowering businesses to seamlessly transition to the cloud and navigate their digital transformation through expert consultation and facilitation.",

    },
    {

        src: "/assets/images/services/audit.jpg",
        link: "/services",
        title: "Security Consulting & Audit",
        description: "Help organizations to meet regulatory compliance, industry standards liks ISO 27001, security assessment of your network, applications and cloud infrastructure",

    },
    {

        src: "/assets/images/services/development.avif",
        link: "/development",
        title: "Development services",
        description: "Empowering businesses to innovate and thrive with cutting-edge web and AI development services, crafting scalable, user-centric applications and intelligent solutions that drive efficiency, enhance user experience, and unlock new opportunities in the digital era.",

    },

]

export default function AboutUs() {
	
	return (

		<section className="pt-28 pb-10 px-4">
			<div className="bg-white/15 rounded-xl w-full py-8 md:py-16">
				<Container>
					<div className="flex flex-col gap-20">
						<div className="flex flex-col gap-4">
							<h2 className="text-4xl md:text-5xl font-sora font-semibold text-white">
								About 
								<span className="text-4xl md:text-5xl text-blue_logo"> DIGI</span>
								<span className="text-4xl md:text-5xl text-yellow_logo">SEC </span>
								Technologies
							</h2>
							<p className="text-lg font-sora text-white/90">
								We provide effective
								<span className="text-yellow_title"> Cloud Transformation, Cyber Security Solution and Consulting Services </span>
								to our Customers, spread across PAN India.
							</p>
						</div>
						<div className="flex flex-col gap-10">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 items-center">
								<div className="flex flex-col gap-4">
									<h3 className="text-3xl md:text-4xl font-sora font-semibold text-yellow_title">{ data.title_one }</h3>
									<p className="text-lg font-sora text-white/90">{ data.description_one }</p>
									<p className="text-lg font-sora text-white/90">{ data.description_two }</p>
								</div>
								<Image 
									src={ data.src_one }
									alt=""
									width={ 1000 }
									height={ 1000 }
									className="w-full h-full rounded-lg"
								/>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 items-center">
								<Image 
									src={ data.src_two }
									alt=""
									width={ 1000 }
									height={ 1000 }
									className="w-full h-full rounded-lg"
								/>
								<div className="flex flex-col gap-4">
									<h3 className="text-3xl md:text-4xl font-sora font-semibold text-yellow_title">{ data.title_two }</h3>
									<p className="text-lg font-sora text-white/90">{ data.description_three }</p>
									<p className="text-lg font-sora text-white/90">{ data.description_four }</p>
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-12 items-center justify-center">
							<h4 className="text-4xl md:text-5xl font-sora font-semibold text-white">Services we Offer</h4>
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
								{
		
									cardData.map( ( data, index ) => (
		
										<ServiceCard
											key={ index }
											src={ data.src }
											title={ data.title }
											description={ data.description }
											link={ data.link }
										/>
		
									))
		
								}
							</div>
						</div>
					</div>
				</Container>
			</div>
		</section>

	)

}
