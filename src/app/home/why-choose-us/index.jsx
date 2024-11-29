// IMPORT COMPONENTS
import Container from "@/app/components/container"
import Image from "next/image"

// HARDCODED DATA
const data = {

    title: "Why Choose Us",

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

]

export default function WhyChooseUs(){

    return (

        <section className="relative py-14 md:py-24 bg-neutral-50">
            <Container>
                <div className="flex flex-col gap-12 relative z-10">
                    <h2 className="text-4xl md:text-5xl text-center text-yellow_title font-sora font-semibold">{ data.title }</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {

                            cardData.map(( data, index ) => (

                                <div key={ index } className="bg-white rounded-xl shadow-better_boxshadow flex flex-col gap-6 p-6 group hover:bg-blue_light duration-200">
                                    <Image 
                                        src={ data.src }
                                        alt=""
                                        width={ 1000 }
                                        height={ 1000 }
                                        className="size-16"
                                    />
                                    <div className="flex flex-col gap-3">
                                        <h3 className="text-2xl font-medium font-sora group-hover:text-white duration-100">{ data.title }</h3>
                                        <p className="text-lg text-slate-500 font-syne group-hover:text-neutral-200 duration-100">{ data.description }</p>
                                    </div>
                                </div>

                            ))

                        }
                    </div>
                </div>
            </Container>
            <div className="hidden lg:block absolute top-16 right-10">
                <Image 
                    src="/assets/images/why-choose-us/dots.png"
                    alt=""
                    width={ 1000 }
                    height={ 1000 }
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="hidden lg:block absolute bottom-10 left-10 rotate-180">
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
