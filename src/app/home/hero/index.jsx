// IMPORT REACT ICONS
import { RiMouseLine } from "react-icons/ri"

// IMPORT COMPONENTS
import Container from "@/app/components/container"
import Image from "next/image"
import SocialLink from "@/app/home/hero/socials/index"
import Link from "next/link"

// HARDCODED DATA
const data = {

    title: "Digisec Technologies",
    subtitle: "We are your trusted partner for digital transformation and security, empowering businesses to innovate and stay secure in a rapidly evolving world.",
    hero_img_src: "/assets/images/hero-img.svg",
    contact_link: "/contact-us",
    contact_lable: "Get in touch",

}

export default function HeroSection(){

    return (

        <section className="pb-10 pt-28 md:pb-16 bg-hero-section bg-no-repeat bg-cover bg-center">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-14 justify-center">
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl text-white font-sora font-semibold">
                                <span className="text-5xl md:text-6xl text-blue_logo">DIGI</span>
                                <span className="text-5xl md:text-6xl text-yellow_logo">SEC </span>
                                Technologies
                            </h1>
                            <h3 className="text-neutral-200 font-syne font-medium max-w-[500px]">{ data.subtitle }</h3>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                            <p className="md:text-xl text-white font-sora font-semibold">Get in touch :</p>
                            <SocialLink />
                        </div>
                        <Link href="#about-section" className="hidden md:block animate-bounce">
                            <button className="flex items-center gap-2 text-sm text-white font-medium font-sora">
                                Scroll
                                <span className="text-xl"><RiMouseLine /></span>
                            </button>
                        </Link>
                    </div>
                    <div className="relative md:pl-14">
                        <Image 
                            src={ data.hero_img_src }
                            alt=""
                            width={ 1000 }
                            height={ 1000 }
                            className="w-full h-full z-10 relative"
                        />
                        <Image 
                            src="/assets/images/hero-shape-2.png"
                            alt=""
                            width={ 1000 }
                            height={ 1000 }
                            className="hidden lg:block w-full absolute top-0 z-0"
                        />
                    </div>
                </div>
            </Container>
        </section>

    )

}
