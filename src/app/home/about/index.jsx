// IMPORT REACT ICONS
import { FaAngleRight, FaArrowUp } from "react-icons/fa"

// IMPORT COMPONENTS
import Container from "@/app/components/container"
import Image from "next/image"
import Link from "next/link"
import AboutSlider from "@/app/home/about/about-slider/index"

// HARDCODED DATA
const data = {

    about_img_src: "/assets/images/about-banner.png",
    btn_link: "/about-us",
    btn_label: "Learn More",

}

const aboutcarddata = [

    {

        title: "Our Vision",
        description: "Our vision is to drive digital innovation and shape a future where businesses thrive through technology. We aim to be globally recognized for delivering transformative and sustainable solutions. Through excellence and collaboration, we empower progress in a digital world.",

    },
    {

        title: "Our Mission",
        description: "Our mission is to be a trusted partner in digital transformation for our customers. We focus on delivering innovative, scalable, and customer-centric solutions. By fostering trust and excellence, we aim to empower businesses to thrive in the digital age.",

    },

]

const slider_data = [

    "/assets/images/about/slider/audit.jpg",
    "/assets/images/about/slider/cyber-security.png",
    "/assets/images/about/slider/cloud.jpg",
    "/assets/images/about/slider/testing.avif",

]

export default function AboutSection(){

    return (

        <section className="py-8 md:py-16" id="about-section">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    <div className="relative">
                        <div className="w-full aspect-[5/4] rounded-xl bg-white/15 p-2">
                            <AboutSlider 
                                slider_data={ slider_data }
                            />
                        </div>
                        <Image 
                            src="/assets/images/hero-shape-2.png"
                            alt=""
                            width={ 1000 }
                            height={ 1000 }
                            className="w-full absolute top-8 -left-16 hidden md:block z-0 scale-x-[-1]"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {

                                aboutcarddata.map( ( data, index ) => (

                                    <div
                                        key={index}
                                        className="rounded-lg shadow-better_boxshadow bg-white/20 backdrop-blur-md p-6 flex flex-col gap-4 border-2 border-transparent hover:border-white/20 hover:shadow-medium_boxshadow transition-all duration-300"
                                    >
                                        <h2 className="text-3xl text-yellow_title text-center md:text-left font-sora font-medium">
                                            {data.title}
                                        </h2>
                                        <p className="text-center md:text-left font-syne font-medium text-white/90">
                                            {data.description}
                                        </p>
                                    </div>

                                ))

                            }
                        </div>
                        <p className="text-lg text-white font-syne font-medium">
                            We provide effective
                            <span className="text-yellow_title"> Cloud Transformation, Cyber Security Solution, Consulting Services and Development Services </span>
                            to our Customers, spread across PAN India.
                        </p>
                        <Link href={ data.btn_link }>
                            <button className="rounded-full relative px-4 py-2 bg-white group border-2 border-white text-white text-lg">
                                <div className="bg-yellow_title rounded-full absolute top-0 left-0 group-hover:top-1 group-hover:left-1 duration-200 w-full h-full flex gap-2 items-center justify-center">
                                    { data.btn_label }
                                    <span className="text-white text-lg rotate-45 group-hover:rotate-90 duration-200"><FaArrowUp /></span>
                                </div>
                                Learn Moreeeeeee
                            </button>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>

    )

}
