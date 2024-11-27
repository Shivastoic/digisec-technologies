// IMPORT REACT ICONS
import { FaAngleRight } from "react-icons/fa"

// IMPORT COMPONENTS
import Container from "@/app/components/container"
import Image from "next/image"
import Link from "next/link"

// HARDCODED DATA
const data = {

    about_img_src: "/assets/images/about-banner.png",
    btn_link: "/about-us",
    btn_label: "Learn More",

}

const aboutcarddata = [

    {

        title: "Our Vision",
        description: "To be a Trusted Digital Transformation Partners for our customers.",

    },
    {

        title: "Our Mission",
        description: "To be a growth partner by transforming, managing and securing digital footprint of our customers.",

    },

]

export default function AboutSection(){

    return (

        <section className="py-8 md:py-16" id="about-section">
            <Container>
                <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-16">
                    <div className="md:flex-1 relative">
                        <Image 
                            src={ data.about_img_src }
                            alt=""
                            width={ 1000 }
                            height={ 1000 }
                            className="w-full h-full relative z-10"
                        />
                        <Image 
                            src="/assets/images/dots-blue.png"
                            alt=""
                            width={ 1000 }
                            height={ 1000 }
                            className="w-40 absolute top-10 left-10 hidden md:block"
                        />
                    </div>
                    <div className="md:flex-1 flex flex-col justify-center items-center gap-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {

                                aboutcarddata.map( ( data, index ) => (

                                    <div key={ index } className="rounded-lg shadow-better_boxshadow bg-neutral-50 p-6 flex flex-col gap-4">
                                        <h2 className="text-3xl text-yellow_title text-center font-sora font-medium">{ data.title }</h2>
                                        <p className="text-center font-syne font-medium">{ data.description }</p>
                                    </div>

                                ))

                            }
                        </div>
                        <p className="text-lg font-syne font-medium">
                            We provide effective
                            <span className="text-yellow_title"> Cloud Transformation, Cyber Security Solution and Consulting Services </span>
                            to our Customers, spread across PAN India.
                        </p>
                        <Link href={ data.btn_link }>
                            <button className="flex items-center gap-2 rounded-full border-2 border-blue_light text-blue_light hover:bg-blue_light hover:text-white duration-200 px-6 py-2 text-sm font-medium font-sora">
                                { data.btn_label }
                                <FaAngleRight />
                            </button>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>

    )

}
