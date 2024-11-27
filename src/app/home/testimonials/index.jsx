// IMPORT COMPONENTS
import Image from "next/image"
import TestimonialSlider from "./testimonial-slider"
import Container from "@/app/components/container"

// HARDCODED DATA
const data = {

    title: "Hear from our clients",
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

export default function Testimonials(){

    return (

        <section className="py-14 md:py-24">
            <Container>
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-5xl text-yellow_title font-sora font-medium">{ data.title }</h2>
                    <TestimonialSlider 
                        cardData={ cardData }
                    />
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
                </div>
            </Container>
        </section>

    )

}
