// IMPORT REACT ICONS
import Link from "next/link"
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa"
import { IoMail, IoLogoWhatsapp } from "react-icons/io5"

// HARDCODED DATA
const links = [

    {
        name: "Facebook",
        link: "https://www.facebook.com/people/Digisec-Technologies/100064217583863/",
        icon: <FaFacebook />
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/company/digisectechnologies/",
        icon: <FaLinkedin />
    },
    {
        name: "YouTube",
        link: "https://www.youtube.com/channel/UCzq4cNBGA9YeIWSWUUkLU4Q",
        icon: <FaYoutube />
    },
    {
        name: "Phone",
        link: "https://api.whatsapp.com/send/?phone=917827477297&text&type=phone_number&app_absent=0",
        icon: <IoLogoWhatsapp />
    },
    {
        name: "Email",
        link: "",
        icon: <IoMail />
    }

]

export default function SocialLink(){

    return (

        <div className="flex items-center md:gap-3 gap-2">
            {

                links.map( ( link, index ) => (

                    <Link key={ index } href={ link.link } target="_blank">
                        <div className="p-2 rounded-full group hover:border-black hover:bg-white duration-300">
                            <span className="text-white text-lg md:text-xl group-hover:text-blue_light duration-200">{ link.icon }</span>
                        </div>
                    </Link>

                ))

            }
        </div>

    )

}
