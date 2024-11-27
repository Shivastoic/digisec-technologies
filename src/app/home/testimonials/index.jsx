// IMPORT COMPONENTS
import Image from "next/image"
import TestimonialSlider from "./testimonial-slider"
import Container from "@/app/components/container"

// HARDCODED DATA
const data = {

    title: "Hear from our clients ...",
    founder_src: "/assets/images/testemonials/founder.png",
    founder_name: "Jagdeep Bhardwaj",
    founder_designation: "Founder & Director, Digisec Technologies",
    founder_testmony: "❝At our company, we believe that success comes from putting our customers first. We prioritize agility, so we can respond quickly to their needs and provide innovative solutions. To achieve this, we foster a culture of continuous learning, where we encourage our team to learn and adapt to changing technologies and customer demands. By embracing these values, We strive to exceed our customers’ expectations, stay ahead of the competition, and drive our continued success.❞",

}

const cardData = [

    {

        src: "/assets/images/testemonials/founder.png",
        client_name: "Jagdeep Bhardwaj",
        designation: "Founder & Director",
        testmony: "“ At our company, we believe that success comes from putting our customers first. We prioritize agility, so we can respond quickly to their needs and provide innovative solutions. ”",

    },
    {

        src: "/assets/images/testemonials/founder.png",
        client_name: "Jagdeep Bhardwaj",
        designation: "Founder & Director",
        testmony: "“ At our company, we believe that success comes from putting our customers first. We prioritize agility, so we can respond quickly to their needs and provide innovative solutions. ”",

    },
    {

        src: "/assets/images/testemonials/founder.png",
        client_name: "Jagdeep Bhardwaj",
        designation: "Founder & Director",
        testmony: "“ At our company, we believe that success comes from putting our customers first. We prioritize agility, so we can respond quickly to their needs and provide innovative solutions. ”",

    },
    {

        src: "/assets/images/testemonials/founder.png",
        client_name: "Jagdeep Bhardwaj",
        designation: "Founder & Director",
        testmony: "“ At our company, we believe that success comes from putting our customers first. We prioritize agility, so we can respond quickly to their needs and provide innovative solutions. ”",

    },
    {

        src: "/assets/images/testemonials/founder.png",
        client_name: "Jagdeep Bhardwaj",
        designation: "Founder & Director",
        testmony: "“ At our company, we believe that success comes from putting our customers first. We prioritize agility, so we can respond quickly to their needs and provide innovative solutions. ”",

    },
    {

        src: "/assets/images/testemonials/founder.png",
        client_name: "Jagdeep Bhardwaj",
        designation: "Founder & Director",
        testmony: "“ At our company, we believe that success comes from putting our customers first. We prioritize agility, so we can respond quickly to their needs and provide innovative solutions. ”",

    },
    {

        src: "/assets/images/testemonials/founder.png",
        client_name: "Jagdeep Bhardwaj",
        designation: "Founder & Director",
        testmony: "“ At our company, we believe that success comes from putting our customers first. We prioritize agility, so we can respond quickly to their needs and provide innovative solutions. ”",

    },

]

const stats = [
    {
        stat: "29.3k",
        title: "Daily Users",
        bgColor: "bg-teal-100",
        textColor: "text-teal-500",
    },
    {
        stat: "22",
        title: "Trusted Clients",
        bgColor: "bg-pink-100",
        textColor: "text-pink-500",
    },
    {
        stat: "100%",
        title: "Satisfaction Rate",
        bgColor: "bg-blue-100",
        textColor: "text-blue-500",
    },
    {
        stat: "250+",
        title: "Projects Completed",
        bgColor: "bg-yellow-100",
        textColor: "text-yellow-500",
    },
];


export default function Testimonials(){

    return (

        <section className="py-14 md:py-24 bg-[url('/assets/images/testimonial-bg.svg')] bg-no-repeat bg-cover">
            <Container>
                <div className="relative space-y-12">
                    <h2 className="text-4xl md:text-5xl text-yellow_title text-center font-sora font-semibold">{ data.title }</h2>
                    <TestimonialSlider 
                        cardData={ cardData }
                    />
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {
                        
                            stats.map((stat, index) => (

                                <div key={index} className={`flex flex-col gap-2 items-center justify-center py-10 rounded-xl ${stat.bgColor}`}>
                                    <p className={`text-4xl font-bold ${stat.textColor} text-center`}>{stat.stat}</p>
                                    <p className="text-lg font-sora font-medium text-center uppercase">{stat.title}</p>
                                </div>

                            ))
                        
                        }
                    </div>
                    <div className="flex flex-col gap-6 p-6 bg-slate-50 rounded-xl">
                        <div className="flex items-center gap-6">
                            <div className="size-16 rounded-full overflow-hidden">
                                <Image 
                                    src={ data.founder_src }
                                    alt=""
                                    width={ 500 }
                                    height={ 500 }
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <p className="font-sora text-xl md:text-2xl font-semibold">{ data.founder_name }</p>
                                <p className="text-neutral-500 font-syne">{ data.founder_designation }</p>
                            </div>
                        </div>
                        <p className="text-lg md:text-xl text-slate-600 font-syne font-medium md:leading-relaxed">{ data.founder_testmony }</p>
                    </div>
                    <div className="hidden md:block absolute top-[355px] -right-16">
                        <Image 
                            src="/assets/images/circle.png"
                            alt=""
                            width={ 1000 }
                            height={ 1000 }
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            </Container>
        </section>

    )

}
