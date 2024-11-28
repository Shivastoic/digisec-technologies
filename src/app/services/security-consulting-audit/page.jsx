import ServicePageTemplate from "@/app/services/components/service-page-template/index"
import ServiceRequestDemo from "@/app/services/components/service-page-request-demo"

// HARDCODED DATA
const dataOne = {

    title: "Security Consulting & Audit",
    description: "Security consulting and audit services are essential for businesses to proactively identify and address security risks in their information systems, networks, and operations. Consultants provide expert guidance on risk management, security architecture, policy development, and incident response, while audits assess vulnerabilities in areas like network, application, and physical security, ensuring regulatory compliance and enabling the creation of robust defense strategies, ultimately safeguarding valuable assets and data from potential cyber threats.",
    cardData: [

        {

            src: "/assets/images/services/security-consulting/security.jpg",
            title: "Security Consulting",
            list: [

                "ISMS",
                "HIPAA",
                "PCI DSS Certification",
                "GRC",
                "Enterprise Security Strategy Planning",

            ],

        },
        {

            src: "/assets/images/services/security-consulting/assesment.jpg",
            title: "Security Assessments",
            list: [

                "Cyber Security Maturity Assessment",
                "Network Penetration (PT)",
                "VAPT,WAPT",
                "Compromise Assessment",
                "Third Party Security Assessment",

            ],

        },
        {

            src: "/assets/images/services/security-consulting/regulatory.jpg",
            title: "Regulatory Compliance",
            list: [

                "PCI DSS Compliance",
                "GDPR Compliance",

            ],

        },
        {

            src: "/assets/images/services/security-consulting/cloud.jpg",
            title: "Cloud Consulting",
            list: [

                "Cloud Security Architecture",
                "Assessment based on standards like NIST",

            ],

        },

    ],

}

const requestData = {

    src: "/assets/images/services/security-consulting/request.jpg",
    description: "Digisec Technologies is offering various kinds of IT infrastructure and cloud solutions, cyber security solutions, security services solutions, and professional enterprise services to keep you up with your business. Feel free to contact us anytime.",

}


export default function SecurityConsultingAudit(){

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
