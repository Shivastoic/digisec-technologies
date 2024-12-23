'use client'

// COMPONENTS IMPORT
import Container from "@/app/components/container/index"
import Image from "next/image"
import Link from "next/link"
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
    const [isScrolled, setIsScrolled] = useState(false)

    // MOBILE NAV STATE
    const [isNavOpen, setIsNavOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll() // Call it initially to set the correct state

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    // Header background class logic
    const headerClass = isScrolled
        ? "bg-white/10 backdrop-blur-md shadow-md"
        : "bg-transparent"

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-colors duration-300 lg:px-6 px-4 ${headerClass}`}
        >
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
                <div
                    className={`size-8 md:size-12 flex items-center justify-center shadow-better_boxshadow rounded-full p-2 z-30 cursor-pointer ${
                        isNavOpen ? "bg-blue_dark" : "bg-white"
                    }`}
                    onClick={() => setIsNavOpen((prev) => !prev)}
                >
                    <span
                        className={`text-lg md:text-2xl ${
                            isNavOpen ? "text-white" : "text-black"
                        }`}
                    >
                        {isNavOpen ? <IoClose /> : <IoMenu />}
                    </span>
                </div>
                <MobileNav
                    navlinksdata={navlinksdata}
                    contact_label={navdata.contact_label}
                    contact_link={navdata.contact_link}
                    open_state={isNavOpen}
                    setIsNavOpen={setIsNavOpen}
                />
            </nav>
        </header>
    )
}
