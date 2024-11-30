// IMPORT COMPONENTS
import Container from "@/app/components/container"
import ServiceCard from "@/app/home/services/service-card/index"

// HARDCODED DATA
const data = {

    title: "Solutions & Services",

}

const cardData = [

    {

        src: "/assets/images/services/cyber-security.png",
        link: "/services/cyber-security-solutions",
        title: "Cyber Security Solutions",
        description: "Implement both traditional and advanced cybersecurity solutions to comprehensively secure your users, network, applications, data, and mobile apps effectively.",

    },
    {

        src: "/assets/images/services/cloud.jpg",
        link: "/services/digital-transformation-cloud",
        title: "Digital Transformation & Cloud",
        description: "Empowering businesses to seamlessly transition to the cloud and navigate their digital transformation through expert consultation and facilitation.",

    },
    {

        src: "/assets/images/services/audit.jpg",
        link: "/services/security-consulting-audit",
        title: "Security Consulting & Audit",
        description: "Help organizations to meet regulatory compliance, industry standards liks ISO 27001, security assessment of your network, applications and cloud infrastructure",

    },
    {

        src: "/assets/images/services/testing.avif",
        link: "/services/vapt-services",
        title: "VAPT services",
        description: "Empowering businesses to safeguard their digital assets and strengthen their cybersecurity posture through expert Vulnerability Assessment and Penetration Testing (VAPT) services, ensuring resilience against evolving threats.",

    },

]

export default function ServiceSection(){

    return (

        <section className="py-8 md:py-16 bg-neutral-100">
            <Container>
                <div className="flex flex-col gap-8">
                    <h2 className="text-4xl md:text-5xl text-yellow_title font-sora font-medium">{ data.title }</h2>
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
            </Container>
        </section>

    )

}
