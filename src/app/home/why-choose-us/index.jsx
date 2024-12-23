// IMPORT COMPONENTS
import Container from "@/app/components/container"
import Image from "next/image"
import Link from "next/link"
import { FaArrowUp, FaArrowRight, FaArrowLeft } from "react-icons/fa"
import WhyUsSlider from "@/app/home/why-choose-us/why-choose-us-slider/index"

// HARDCODED DATA
const data = {

    title: "Why Choose Us",
    bottom_title: "Get In Touch with our team",

}

const cardData = [

    {

        src: "/assets/images/why-choose-us/heart.svg",
        title: "Rich Industry experience",
        description: "For our exceptional quality, reliable services, and customer satisfaction, making us the ideal partner for your needs. With our expertise and commitment, we deliver outstanding results to propel your success.",

    },
    {

        src: "/assets/images/why-choose-us/chrome.svg",
        title: "Services Is Our Core",
        description: "As a company, our core focus is on delivering exceptional services, prioritizing customer satisfaction and providing value-driven solutions.",

    },
    {

        src: "/assets/images/why-choose-us/thumbs.svg",
        title: "Consultative Approach",
        description: "Our consultative approach ensures personalized solutions tailored to your specific requirements, guaranteeing a successful and collaborative partnership",

    },
    {

        src: "/assets/images/why-choose-us/heart.svg",
        title: "Rich Industry experience",
        description: "For our exceptional quality, reliable services, and customer satisfaction, making us the ideal partner for your needs. With our expertise and commitment, we deliver outstanding results to propel your success.",

    },
    {

        src: "/assets/images/why-choose-us/chrome.svg",
        title: "Services Is Our Core",
        description: "As a company, our core focus is on delivering exceptional services, prioritizing customer satisfaction and providing value-driven solutions.",

    },
    {

        src: "/assets/images/why-choose-us/thumbs.svg",
        title: "Consultative Approach",
        description: "Our consultative approach ensures personalized solutions tailored to your specific requirements, guaranteeing a successful and collaborative partnership",

    },
    

]

export default function WhyChooseUs(){

    return (

        <section className="relative flex flex-col gap-20 pt-14 md:pt-24">
            <Container>
                <div className="flex flex-col gap-6 relative z-10">
                    <div className="flex justify-between items-center">
                        <h2 className="text-4xl md:text-5xl text-center  text-yellow_title font-sora font-semibold">{ data.title }</h2>
                        
                    </div>
                    <div className="">
                        <WhyUsSlider slider_data={ cardData } />
                    </div>
                </div>
            </Container>
            <div className="bg-blue-500 py-14 flex flex-col md:flex-row gap-10 items-center justify-center px-4">
                <p className="text-4xl md:text-5xl text-center md:text-left font-semibold font-sora text-white">{ data.bottom_title }</p>
                <Link href="/contact-us">
                    <button className="rounded-full relative px-4 py-2 bg-white group border-2 border-white text-white text-lg">
                        <div className="bg-yellow_title rounded-full absolute top-0 left-0 group-hover:top-1 group-hover:left-1 duration-200 w-full h-full flex gap-2 items-center justify-center">
                            Contact Us
                            <span className="text-white text-lg rotate-45 group-hover:rotate-90 duration-200"><FaArrowUp /></span>
                        </div>
                        Learn Moreeeeeee
                    </button>
                </Link>
            </div>
            <div className="hidden lg:block absolute top-16 right-10">
                <Image 
                    src="/assets/images/why-choose-us/dots.png"
                    alt=""
                    width={ 1000 }
                    height={ 1000 }
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="hidden lg:block absolute top-96 left-10 rotate-180">
                <Image 
                    src="/assets/images/why-choose-us/shape-dot.png"
                    alt=""
                    width={ 1000 }
                    height={ 1000 }
                    className="w-full h-full object-cover"
                />
            </div>
        </section>

    )

}
