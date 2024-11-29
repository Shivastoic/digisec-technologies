// IMPORT COMPONENTS
import ServiceSection from "@/app/home/services/index"

// METADATA FOR SERVICES PAGE
export const metadata = {

    title: "Services | Digisec Technologies",
    description: "",
    keywords: "",

}

export default function Services(){

    return(

        <div className="pb-10 pt-24 md:pb-16 bg-neutral-100">
            <ServiceSection />
        </div>

    )

}
