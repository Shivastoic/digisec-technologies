// IMPORT COMPONENTS
import Container from "@/app/components/container"
import PartnerSlider from "@/app/home/partners/partner-slider/index"

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
                    <div>
                        <PartnerSlider
                            partnerData={ partnerData }
                        />
                    </div>
                </div>
            </Container>
        </section>

    )

}
