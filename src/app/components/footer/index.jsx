// IMPORT COMPONENTS
import Container from "@/app/components/container/index"
import SocialLink from "@/app/home/hero/socials"
import Link from "next/link"

// HARDCODED DATA
const data = {

    copyright_text: "Copyright © 2024 digisectechnologies",

}

const navlinksdata = [
    { link: "/about-us", link_label: "About Us" },
    { link: "/services", link_label: "Services" },
    { link: "#patners-section", link_label: "Partners" },
    { link: "https://www.tatatelebusiness.com/", link_label: "Tata" },
    { link: "/course", link_label: "Course" },
    { link: "/blog", link_label: "Blog" },
    { link: "/contact-us", link_label: "Contact Us" },
]

export default function Footer(){

    return (

        <footer className="">
            <div className="py-14 md:py-20 bg-footer-bg">
                <Container>
                    <div className="flex flex-wrap gap-10 justify-between">
                        <div className="flex flex-col  gap-6">
                            <h3 className="text-white text-2xl md:text-3xl font-sora font-semibold">Registered Address</h3>
                            <div className="space-y-2">
                                <p className="text-neutral-50 font-sora font-medium">Digisec Technologies</p>
                                <p className="text-neutral-50 font-sora font-medium">62 C, MIG, Sector-100, Noida, 201301</p>
                                <p className="text-neutral-50 font-sora font-medium">contact@digisectechnologies.com</p>
                                <p className="text-neutral-50 font-sora font-medium">Phone: 0120-4541812</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h3 className="text-white text-2xl md:text-3xl font-sora font-semibold">Pages</h3>
                            <ul className="flex flex-col justify-center gap-2">
                                {

                                    navlinksdata.map( ( data, index ) => (

                                        <li key={ index } className="text-neutral-200 hover:text-white hover:underline underline-offset-4 duration-200 font-sora font-medium">
                                            <Link href={ data.link }>
                                                { data.link_label }
                                            </Link>
                                        </li>

                                    ))

                                }
                            </ul>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h3 className="text-white text-2xl md:text-3xl font-sora font-semibold">Follow Us</h3>
                            <SocialLink />
                        </div>
                    </div>
                </Container>
            </div>
            <div className="bg-white p-2 flex items-center justify-center">
                <p className="text-neutral-700 font-sora font-medium">{ data.copyright_text }</p>
            </div>
        </footer>

    )

}
