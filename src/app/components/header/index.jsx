'use client'

// COMPONENTS IMPORT
import Container from "@/app/components/container/index"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { IoMenu, IoClose } from "react-icons/io5"
import MobileNav from "@/app/components/header/mobile-nav/index"

// HARDCODED DATA
const navdata = {
    logo_src: "/assets/logos/logo-under.png",
    logo_link: "/",
    contact_link: "/contact-us",
    contact_label: "Contact Us",
}

const navlinksdata = [
    { link: "/", link_label: "Home" },
    { link: "/about-us", link_label: "About Us" },
    { link: "/services", link_label: "Services Offering" },
    { link: "/#patners-section", link_label: "Partners" },
    { link: "https://www.tatatelebusiness.com/", link_label: "Tata Tele" },
    { link: "/course", link_label: "C.E.H. Course" },
    { link: "/development", link_label: "Development" },
    { link: "/blog", link_label: "Blog" },
]

export default function Header() {
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = useState(false)

    // MOBILE NAV STATE
    const [isNavOpen, setIsNavOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (pathname === "/") {
                setIsScrolled(window.scrollY > 10)
            } else {
                setIsScrolled(true)
            }
        }
    
        // Always run the scroll listener
        window.addEventListener("scroll", handleScroll)
    
        // Call it once to initialize the state correctly
        handleScroll()
    
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [pathname])

    const headerClass =
        pathname === "/"
            ? isScrolled
                ? "bg-white/10 backdrop-blur-md shadow-md"
                : "bg-transparent"
            : "bg-white shadow-md"

    const linkClass = (link) =>
        pathname === "/"
            ? isScrolled
                ? pathname === link
                    ? "text-black underline decoration-2 underline-offset-8"
                    : "text-neutral-700 hover:text-black"
                : pathname === link
                ? "text-white underline decoration-2 underline-offset-8"
                : "text-neutral-300 hover:text-white"
            : pathname === link
            ? "text-black underline decoration-2 underline-offset-8"
            : "text-neutral-700 hover:text-black"

    const buttonClass =
        pathname === "/"
            ? isScrolled
                ? "border-blue_light text-black hover:bg-blue_light hover:text-white"
                : "border-white text-white hover:bg-white hover:text-black"
            : "border-blue_light text-black hover:bg-blue_light hover:text-white"

    return (
        <header className={`fixed top-0 w-full z-50 transition-colors duration-300 lg:px-6 px-4 ${headerClass}`}>
            {/* <Container> */}
                <nav className="flex items-center justify-between py-2">
                    <Link href={navdata.logo_link}>
                        <Image
                            alt="Logo"
                            src={navdata.logo_src}
                            width={500}
                            height={500}
                            className="w-full h-16 md:h-20"
                        />
                    </Link>
                    {/* <ul className="hidden lg:flex items-center gap-6">
                        {
                        
                            navlinksdata.map((data, index) => (

                                <li key={index} className={`font-medium duration-150 ${linkClass(data.link)}`}>
                                    <Link href={data.link}>{data.link_label}</Link>
                                </li>

                            ))
                        
                        }
                        <Link href={navdata.contact_link}>
                            <button className={`hidden lg:block border-2 px-6 py-2 rounded-full text-sm font-sora font-medium duration-200 ${buttonClass}`} >
                                {navdata.contact_label}
                            </button>
                        </Link>
                    </ul> */}
                    <div className={`size-8 md:size-12 flex items-center justify-center shadow-better_boxshadow rounded-full p-2 z-30 cursor-pointer ${ isNavOpen ? "bg-blue_dark" : "bg-white" }`} onClick={() => setIsNavOpen((prev) => !prev) }>
                        <span className={`text-lg md:text-2xl ${ isNavOpen ? "text-white" : "text-black"}`}>
                            {

                                isNavOpen ? <IoClose /> : <IoMenu />

                            }
                        </span>
                    </div>
                    <MobileNav 
                        navlinksdata={ navlinksdata }
                        contact_label={ navdata.contact_label }
                        contact_link={ navdata.contact_link }
                        open_state={ isNavOpen }
                        setIsNavOpen={ setIsNavOpen }
                        pathname={ pathname }
                    />
                </nav>
            {/* </Container> */}
        </header>
    )
}
