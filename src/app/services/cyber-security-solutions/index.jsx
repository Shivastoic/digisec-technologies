import ServicePageTemplate from "@/app/services/components/service-page-template/index"

// HARDCODED DATA
const dataOne = {

    title: "Cyber Security Solutions-Traditional",
    description: "Traditional Cyber Security Solutions refer to the conventional methods and technologies employed to protect digital assets, networks, and data from cyber threats. These solutions typically include firewalls, antivirus software, intrusion detection systems, encryption, access controls, and regular security updates. While they have been effective to some extent, traditional approaches often struggle to keep up with the rapidly evolving and sophisticated nature of cyberattacks. As cyber threats become more advanced, organizations must complement these traditional measures with proactive threat hunting, continuous monitoring, and comprehensive incident response plans to strengthen their overall cybersecurity posture.",
    cardData: [

        {

            src: "/assets/images/services/cyber-security/endpoint.jpg",
            title: "Endpoint Security",
            list: [

                "Endpoint Protection",
                "Mobile Device Management",
                "Mobile Threat Protection",

            ],

        },
        {

            src: "/assets/images/services/cyber-security/data-security.jpg",
            title: "Data Security",
            list: [

                "Data Loss Prevention (DLP)",
                "Data Classification",
                "Digital Rights Management",
                "Encryption",

            ],

        },
        {

            src: "/assets/images/services/cyber-security/network-security.jpg",
            title: "Network Security",
            list: [

                "Next Gen Firewall",
                "Email Security",
                "Web/Proxy Security",
                "DDoS Protection",
                "Vulnerability Management",

            ],

        },
        {

            src: "/assets/images/services/cyber-security/cloud.jpg",
            title: "Cloud Security",
            list: [

                "CASB(Cloud Access Security Broker)",
                "Cloud Workload Security",
                "Web Application Firewall",

            ],

        },

    ],

}

const dataTwo = {

    title: "Cyber Security Solutions-Advanced",
    description: "Advanced Cyber Security Solutions encompass cutting-edge methodologies and technologies designed to defend against the ever-evolving landscape of cyber threats. These solutions leverage artificial intelligence and machine learning algorithms to detect and mitigate sophisticated attacks in real-time, enabling proactive threat hunting and automated incident response. Advanced solutions also focus on behavior-based analytics to identify anomalous activities, improve risk assessment, and strengthen adaptive defense mechanisms. Additionally, they emphasize the importance of user education and training to foster a security-aware culture within organizations. By combining these innovative approaches, advanced cyber security solutions provide a more robust and proactive defense against a wide range of cyber threats, ensuring enhanced protection of critical assets and sensitive data.",
    cardData: [

        {

            src: "/assets/images/services/cyber-security/incident.jpg",
            title: "Incident Response",
            list: [

                "Endpoint Detection & Response (EDR)",
                "Security Incident & Event Monitoring (SIEM)",
                "Security Orchestration, Automation & Response (SOAR)",

            ],

        },
        {

            src: "/assets/images/services/cyber-security/framework.jpg",
            title: "Security Frameworks",
            list: [

                "Zero Trust Network",
                "Zero Trust Security Micro-segmentation",
                "Secure Access Service Edge (SASE)",

            ],

        },
        {

            src: "/assets/images/services/cyber-security/visibility.jpg",
            title: "Visibility, Simulation and Training",
            list: [

                "Anti-phishing Simulation & Training",
                "Breach Attack Simulation",
                "Cyber Range Training",
                "Sec Dev Ops",
                "Cloud Security Posture Management",

            ],

        },
        {

            src: "/assets/images/services/cyber-security/brand.jpg",
            title: "Brand Protection",
            list: [

                "Brand Monitoring Solution",
                "Dark Web Intelligence",
                "Anti-phishing- Mobile apps & Websites",
                "DMARC Management",

            ],

        },
        {

            src: "/assets/images/services/cyber-security/iot.jpg",
            title: "IoT Security",
            list: [

                "Data Diodes",
                "Data Sanitization",
                "OT/ICS Asset Discovery, Anomaly",
                "IDS/IPS",
                "Sandbox",

            ],

        },

    ],

}

export default function CyberSecuritySolutions(){

    return (

        <section className="">
            <ServicePageTemplate 
                title={ dataOne.title }
                description={ dataOne.description }
                cardData={ dataOne.cardData }
            />
            <ServicePageTemplate 
                title={ dataTwo.title }
                description={ dataTwo.description }
                cardData={ dataTwo.cardData }
            />
        </section>

    )

}
