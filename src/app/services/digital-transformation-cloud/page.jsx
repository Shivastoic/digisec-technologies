import ServicePageTemplate from "@/app/services/components/service-page-template/index"
import ServiceRequestDemo from "@/app/services/components/service-page-request-demo"

// HARDCODED DATA
const dataOne = {

    title: "Digital Transformation & Cloud",
    description: "Digital transformation involves integrating digital technologies into a business to enhance efficiency, customer experiences, and competitiveness. It encompasses digitizing processes, data-driven decision-making, agile operations, and innovation. Cloud services, on the other hand, deliver computing resources over the internet, including infrastructure, platforms, and software, enabling scalability, cost savings, and accessibility. In the context of digital transformation, cloud services play a crucial role by providing flexible, scalable, and cost- effective resources, facilitating rapid deployment and innovation, and empowering organizations to adapt to the dynamic digital landscape while delivering enhanced value to customers.",
    cardData: [

        {

            src: "/assets/images/services/digital-transformation/cloud.jpg",
            title: "Cloud Consulting",
            list: [

                "Cloud Consulting-Multi-cloud strategy and cloud fitment analysis",
                "Data Security Compliance",
                "Data Privacy Compliance",
                "Cloud Security Posture Management",
                "Cloud Architecture Assessment",

            ],

        },
        {

            src: "/assets/images/services/digital-transformation/greenfield.jpg",
            title: "Greenfield Services",
            list: [

                "Workload migration (On Prem to Cloud Migration)",
                "Application modernization- SAP",
                "Hybrid Cloud",
                "App. migration to cloud",
                "Data Center co-lo",
                "DR Services",
                "Backup Services",

            ],

        },
        {

            src: "/assets/images/services/digital-transformation/brownfield.jpg",
            title: "Brownfield Services",
            list: [

                "Optimization and enhancement Services",
                "Cloud to Cloud Migration",
                "Cloud Cost Optimization",

            ],

        },
        {

            src: "/assets/images/services/digital-transformation/managed.jpg",
            title: "Managed Services",
            list: [

                "Cloud Monitoring & Alerting",
                "OS Managed",
                "DB Management",
                "DB Management",
                "Cloud Security",

            ],

        },

    ],

}

const requestData = {

    src: "/assets/images/services/digital-transformation/request.jpeg",
    description: "Digisec Technologies is offering various kinds of IT infrastructure and cloud solutions, cyber security solutions, security services solutions, and professional enterprise services to keep you up with your business. Feel free to contact us anytime.",

}

export default function DigitalTransformationCloud(){

    return (

        <section className="py-28">
            <ServicePageTemplate 
                title={ dataOne.title }
                description={ dataOne.description }
                cardData={ dataOne.cardData }
            />
            <ServiceRequestDemo 
                src={ requestData.src }
                description={ requestData.description }
            />
        </section>

    )

}
