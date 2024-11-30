import Container from "@/app/components/container"
import DevCard from "@/app/development/dev-card/index"
import Image from "next/image"
import ServiceRequestDemo from "../services/components/service-page-request-demo"

// METADATA FOR DEVELOPMENT PAGE
export const metadata = {

    title: "Development | Digisec Technologies",
    description: "",
    keywords: "",

}

// HARDCODED DATA
const data = {

    title: "Development Services __",
    request_src: "/assets/images/services/cyber-security/cyber-request.jpg",
    request_description: "Digisec Technologies offers a wide range of services including web development (full stack), app development, AI tools and analysis, and social media marketing to help your business grow. Our expert team ensures that each solution is tailored to meet your needs, driving efficiency and innovation. Feel free to reach out to us anytime for professional assistance!",

}

const cardData = [

    {

        src: "/assets/images/development/web.svg",
        title: "Web Development",
        description: "We excel in developing responsive and dynamic web applications that deliver seamless user experiences, ensuring high performance and functionality across all platforms.",
        features: [

            "Custom website deign and development using MERN Stack.",
            "Frontend and Backend support.",
            "Responsive and UIUX focused sites.",
            "SEO optimization and Performance improvements.",

        ],
        tech: [

            "/assets/images/development/tech/next.svg",
            "/assets/images/development/tech/react.svg",
            "/assets/images/development/tech/tailwind.svg",
            "/assets/images/development/tech/html.svg",
            "/assets/images/development/tech/css.svg",
            "/assets/images/development/tech/javascript.svg",

        ],

    },
    {

        src: "/assets/images/development/app.svg",
        title: "App Development",
        description: "We specialize in crafting robust and innovative mobile applications that provide intuitive user experiences, combining high performance with seamless functionality on both iOS and Android platforms.",
        features: [

            "Custom Application deign and development using Flutter.",
            "Frontend and Backend support.",
            "Cross Platform support(android + iOS apps) with High-Performance.",
            "Responsive and UIUX focused apps.",

        ],
        tech: [

            "/assets/images/development/tech/kotlin.svg",
            "/assets/images/development/tech/java.svg",
            "/assets/images/development/tech/android.svg",
            "/assets/images/development/tech/ios.svg",
            "/assets/images/development/tech/firebase.svg",

        ],

    },
    {

        src: "/assets/images/development/ai.jpg",
        title: "AI Tools and Analysis",
        description: "We excel in designing and deploying cutting-edge AI models tailored to solve complex problems, delivering intelligent, efficient, and scalable solutions that drive innovation and automation.",
        features: [

            "Data driven insights support using IBM Cognos and Power BI.",
            "Custom AI integration, automation and chatbot creation.",
            "Responsive and UIUX focused sites.",
            "AI Tools related guidance for businesses.",

        ],
        tech: [

            "/assets/images/development/tech/google.svg",
            "/assets/images/development/tech/chatgpt.svg",
            "/assets/images/development/tech/bard.svg",

        ],

    },
    {

        src: "/assets/images/development/social.jpg",
        title: "Social Media Marketing",
        description: "We create effective social media marketing strategies that boost brand visibility, engage audiences, and drive measurable results through creative content and data-driven insights.",
        features: [

            "Reels/Shorts video editing.",
            "Content scripting and story telling insights for business and individual.",
            "Trends and Algorithms syncing.",
            "Competitive Analysis and Social Outreach.",

        ],
        tech: [

            "/assets/images/development/tech/instagram.svg",
            "/assets/images/development/tech/facebook.svg",
            "/assets/images/development/tech/linkedin.svg",
            "/assets/images/development/tech/youtube.svg",
            "/assets/images/development/tech/twitter.svg",

        ],

    },

]

export default function Development(){

    return (

        <section className="bg-neutral-100 relative py-24">
            <div className="relative z-20 space-y-16">
                <Container>
                    <div className="flex flex-col gap-10 py-16">
                        <h2 className="text-4xl md:text-5xl font-sora font-semibold text-yellow_title">{ data.title }</h2>
                        <div className="space-y-8">
                            {

                                cardData.map( ( data, index ) => (

                                    <div key={ index } className={`w-full flex ${ index % 2 === 1 ? "justify-end" : "" }`}>
                                        <DevCard 
                                            src={ data.src }
                                            title={ data.title }
                                            description={ data.description }
                                            features={ data.features }
                                            tech={ data.tech }
                                        />
                                    </div>

                                ))

                            }
                        </div>
                        
                    </div>
                </Container>
                <ServiceRequestDemo
                    src={ data.request_src }
                    description={ data.request_description }
                />
            </div>
            <div className="hidden md:block absolute bottom-[800px] right-44">
                <Image 
                    src="/assets/images/circle.png"
                    alt=""
                    width={ 1000 }
                    height={ 1000 }
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="hidden md:block absolute top-40 right-52">
                <Image 
                    src="/assets/images/hero-shape-2.png"
                    alt=""
                    width={ 1000 }
                    height={ 1000 }
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="hidden lg:block absolute top-[750px] left-44">
                <Image 
                    src="/assets/images/why-choose-us/dots.png"
                    alt=""
                    width={ 1000 }
                    height={ 1000 }
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="hidden lg:block absolute bottom-24 left-72">
                <Image 
                    src="/assets/images/dots-blue.png"
                    alt=""
                    width={ 1000 }
                    height={ 1000 }
                    className="w-full h-full object-cover"
                />
            </div>
        </section>

    )

}
