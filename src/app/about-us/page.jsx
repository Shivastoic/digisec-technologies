// IMPORT COMPONENTS
import Container from "@/app/components/container/index"

// METADATA FOR ABOUT US PAGE
export const metadata = {

    title: "About Us | Digisec Technologies",
    description: "",
    keywords: "",

}

// HARDCODED DATA
const data = {

	description_one: "Digisec Technologies, proudly present our dedication to safeguarding your digital dreams. As a leading Cyber Security Solutions provider, we offer a comprehensive range of services and products tailored to your needs.",
	description_two: "Our journey begins by understanding your business objectives, for it is with this knowledge that we craft the perfect digital roadmap for you. Our world-class engagement and consultation services ensure that you are equipped to face any digital challenges that lie ahead.",
	description_three: "Our team of Cyber Security Experts takes pride in specializing in various domains, from Data Security to Cloud Security. With their vigilance, we fortify your network, applications, data, and cloud infrastructure, shielding them from cyber- attacks that may seek to harm your success.",
	description_four: "But our commitment to your digital protection doesn’t stop there. We also offer Cloud solutions, IT Solutions (DC & Edge IT), and Software Solutions to further enhance your online ventures.",

}

export default function AboutUs() {
	
	return (

		<section className="pt-28 pb-10 px-4">
			<div className="bg-neutral-100 rounded-xl w-full py-8 md:py-16">
				<Container>
					<div className="flex flex-col gap-8">
						<h2 className="text-4xl md:text-5xl text-neutral-700 font-sora font-semibold">
							About 
							<span className="text-4xl md:text-5xl text-blue_logo"> DIGI</span>
							<span className="text-4xl md:text-5xl text-yellow_logo">SEC </span>
							Technologies
						</h2>
						<p className="text-lg font-sora">
                            We provide effective
                            <span className="text-yellow_title"> Cloud Transformation, Cyber Security Solution and Consulting Services </span>
                            to our Customers, spread across PAN India.
                        </p>
						<p className="text-lg font-sora">{ data.description_one }</p>
						<p className="text-lg font-sora">{ data.description_two }</p>
						<p className="text-lg font-sora">{ data.description_three }</p>
						<p className="text-lg font-sora">{ data.description_four }</p>
					</div>
				</Container>
			</div>
		</section>

	)

}
