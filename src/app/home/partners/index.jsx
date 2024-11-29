// IMPORT COMPONENTS
import Container from "@/app/components/container"
import PartnerSlider from "@/app/home/partners/partner-slider/index"
import Image from "next/image"

// HARDCODED DATA
const data = {

    title: "Our Business Partners",

}

const partnerData = [

    "/assets/images/partners/aws.jpg",
    "/assets/images/partners/trellix.jpg",
    "/assets/images/partners/sophose.jpg",
    "/assets/images/partners/delinia.jpg",
    "/assets/images/partners/blackberry.jpg",
    "/assets/images/partners/sentinal.jpg",
    "/assets/images/partners/forcepoint.jpg",
    "/assets/images/partners/opswat.jpg",
    "/assets/images/partners/check.jpg",
    "/assets/images/partners/ntt.jpg",
    "/assets/images/partners/sify.png",
    "/assets/images/partners/tata.jpg",
    "/assets/images/partners/scale.png",

]

export default function PartnerSection() {

    return (

        <section className="py-14 md:py-24" id="patners-section">
            <Container>
                <div className="flex flex-col gap-10">
                    <h2 className="text-4xl md:text-5xl text-center text-yellow_title font-sora font-semibold">{ data.title }</h2>
                    {/* <div>
                        <PartnerSlider
                            partnerData={ partnerData }
                        />
                    </div> */}
                    <div className="flex items-center gap-6 overflow-hidden">
                        <div className="flex items-center gap-6 whitespace-nowrap animate-scroll">
                            {

                                partnerData.map( ( data, index ) => (

                                    <div key={index} className="aspect-video w-44 md:w-60">
                                        <Image 
                                            src={ data }
                                            alt=""
                                            width={ 500 }
                                            height={ 500 }
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                ))

                            }
                        </div>
                        <div className="flex items-center gap-6 whitespace-nowrap animate-scroll">
                            {

                                partnerData.map( ( data, index ) => (

                                    <div key={index} className="aspect-video w-44 md:w-60">
                                        <Image 
                                            src={ data }
                                            alt=""
                                            width={ 500 }
                                            height={ 500 }
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                ))

                            }
                        </div>
                    </div>
                </div>
            </Container>
        </section>

    )

}
