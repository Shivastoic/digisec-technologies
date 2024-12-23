// IMPORT COMPONENTS
import ServiceAccordion from "./components/service-accordion"
import Container from "@/app/components/container"
import ServiceRequestDemo from "@/app/services/components/service-page-request-demo"

// METADATA FOR SERVICES PAGE
export const metadata = {

    title: "Services | Digisec Technologies",
    description: "",
    keywords: "",

}

// HARDCODED DATA
const data = {

    title: "Solutions & Services",

}

const requestData = {

    src: "/assets/images/services/cyber-security/cyber-request.jpg",
    description: "Digisec Technologies is offering various kinds of IT infrastructure and cloud solutions, cyber security solutions, security services solutions, and professional enterprise services to keep you up with your business. Feel free to contact us anytime.",

}

export default function Services(){

    return(

        <section className="pb-10 pt-24 md:pb-16 bg-hero-section">
            <div className="py-8 md:py-16 flex flex-col gap-16">
                <Container>
                    <div className="flex flex-col gap-8">
                        <h2 className="text-4xl md:text-5xl text-yellow_title font-sora font-medium">{ data.title }</h2>
                        <div className="">
                            <ServiceAccordion />
                        </div>
                    </div>
                </Container>
                <ServiceRequestDemo 
                    src={ requestData.src }
                    description={ requestData.description }
                />
            </div>
        </section>

    )

}
