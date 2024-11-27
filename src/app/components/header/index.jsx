'use client'

// COMPONENTS IMPORT
import Container from "@/app/components/container/index"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

// HARDCODED DATA
const navdata = {
    logo_src: "/assets/logos/logo-under.png",
    logo_link: "/",
    contact_link: "/contact-us",
    contact_lable: "Contact Us",
}

const navlinksdata = [
    { link: "/", link_lable: "Home" },
    { link: "/about-us", link_lable: "About Us" },
    { link: "/partners", link_lable: "Partners" },
    { link: "https://www.tatatelebusiness.com/", link_lable: "Tata" },
    { link: "/course", link_lable: "Course" },
    { link: "/blog", link_lable: "Blog" },
]

export default function Header() {
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = useState(false)

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
                ? "bg-white shadow-md"
                : "bg-transparent"
            : "bg-white shadow-md"

    const linkClass = (link) =>
        pathname === "/"
            ? isScrolled
                ? pathname === link
                    ? "text-black underline underline-offset-8"
                    : "text-neutral-700 hover:text-black"
                : pathname === link
                ? "text-white underline underline-offset-8"
                : "text-neutral-300 hover:text-white"
            : pathname === link
            ? "text-black underline underline-offset-8"
            : "text-neutral-700 hover:text-black"

    const buttonClass =
        pathname === "/"
            ? isScrolled
                ? "border-blue_light text-black hover:bg-blue_light hover:text-white"
                : "border-white text-white hover:bg-white hover:text-black"
            : "border-blue_light text-black hover:bg-blue_light hover:text-white"

    return (
        <header className={`fixed top-0 w-full z-50 transition-colors duration-300 ${headerClass}`}>
            <Container>
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
                    <ul className="hidden lg:flex items-center gap-6">
                        {navlinksdata.map((data, index) => (
                            <li
                                key={index}
                                className={`font-medium font-sora duration-150 ${linkClass(data.link)}`}
                            >
                                <Link href={data.link}>{data.link_lable}</Link>
                            </li>
                        ))}
                        <Link href={navdata.contact_link}>
                            <button
                                className={`hidden lg:block border-2 px-6 py-2 rounded-full text-sm font-sora font-medium duration-200 ${buttonClass}`}
                            >
                                {navdata.contact_lable}
                            </button>
                        </Link>
                    </ul>
                </nav>
            </Container>
        </header>
    )
}
