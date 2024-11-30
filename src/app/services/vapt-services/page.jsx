import ServicePageTemplate from "@/app/services/components/service-page-template/index"
import ServiceRequestDemo from "@/app/services/components/service-page-request-demo"

// HARDCODED DATA
const dataOne = {

    title: "VAPT Services",
    description: "Vulnerability Assessment and Penetration Testing (VAPT) services are critical for organizations to identify, analyze, and mitigate security weaknesses in their IT infrastructure. These services combine automated vulnerability scans with in-depth manual testing to uncover potential attack vectors in applications, networks, and systems. VAPT helps businesses assess their security posture, prioritize risks, and implement effective remediation strategies, ensuring robust protection against evolving cyber threats while meeting compliance requirements and safeguarding sensitive data.",
    cardData: [

        {

            src: "/assets/images/services/vapt/penetration.jpg",
            title: "Penetration Testing Services",
            list: [

                "VAPT (Vulnerability Assessment and Penetration Testing)",
                "WAPT (Web Application Penetration Testing)",
                "Network Penetration Testing",
                "Mobile App Penetration Testing",
                "API Penetration Testing",
                "Email Penetration Testing",
                "IoT Penetration Testing",

            ],

        },
        {

            src: "/assets/images/services/vapt/analyisis.jpg",
            title: "Investigation and Analysis Services",
            list: [

                "Digital Forensic Investigation",
                "Incident Response and Management",
                "Malware Analysis",

            ],

        },

    ],

}

const requestData = {

    src: "/assets/images/services/security-consulting/request.jpg",
    description: "Digisec Technologies is offering various kinds of IT infrastructure and cloud solutions, cyber security solutions, security services solutions, and professional enterprise services to keep you up with your business. Feel free to contact us anytime.",

}


export default function VAPTService(){

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
