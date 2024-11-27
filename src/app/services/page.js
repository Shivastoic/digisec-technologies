// IMPORT COMPONENTS
import Container from "@/app/components/container";

// HARDCODED DATA
const data = {

    title: "Solutions & Services",

}

const cardData = [

    {

        src: "/assets/images/services/cyber-security.jpg",
        link: "",
        title: "Cyber Security Solutions",
        description: "Implement both traditional and advanced cybersecurity solutions to comprehensively secure your users, network, applications, data, and mobile apps effectively.",

    },
    {

        src: "/assets/images/services/cloud.jpg",
        link: "",
        title: "Digital Transformation & Cloud",
        description: "Empowering businesses to seamlessly transition to the cloud and navigate their digital transformation through expert consultation and facilitation.",

    },
    {

        src: "/assets/images/services/audit.jpg",
        link: "",
        title: "Security Consulting & Audit",
        description: "Help organizations to meet regulatory compliance, industry standards liks ISO 27001, security assessment of your network, applications and cloud infrastructure",

    },

]

export default function ServiceSection(){

    return (

        <section className="py-8 md:py-16 h-dvh bg-neutral-100">
            <Container>
                <div className="flex flex-col gap-8">
                    <h2 className="text-4xl md:text-5xl text-yellow_title font-sora font-medium">{ data.title }</h2>
                    <div className="">

                    </div>
                </div>
            </Container>
        </section>

    )

}
