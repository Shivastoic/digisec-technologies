"use client"

// IMPORT REACT ICONS
import { FaArrowCircleRight } from "react-icons/fa";

// IMPORT COMPONENTS
import Container from "@/app/components/container";
import SocialLink from "@/app/home/hero/socials/index";
import Link from "next/link";
import HeroNavigation from "./hero-navigation";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

// HARDCODED DATA
const data = {
    title: "Digisec Technologies",
    subtitle:
        "We are your trusted partner for digital transformation and security, empowering businesses to innovate and stay secure in a rapidly evolving world.",
    hero_img_src: "/assets/images/hand.png",
    contact_link: "/contact-us",
    contact_label: "Get in touch",
};

const hero_navigation_data = [
    { 
        label: "Cyber Security", 
        content: {
            title: "Cyber Security",
            description: "Implement both traditional and advanced cybersecurity solutions to comprehensively secure your users, network, applications, data, and mobile apps effectively.",
            src: "/assets/images/services/cyber-security.jpg",
            service_list: [
                "Endpoint Security",
                "Data Security",
                "Network Security",
                "Cloud Security",
            ],
            link: "/services",
        } 
    },
    { 
        label: "Digital Transformation", 
        content: {
            title: "Digital Transformation & Cloud",
            description: "Empowering businesses to seamlessly transition to the cloud and navigate their digital transformation through expert consultation and facilitation.",
            src: "/assets/images/services/cloud.jpg",
            service_list: [
                "Cloud Consulting",
                "Greenfield Services",
                "Brownfield Services",
                "Managed Services",
            ],
            link: "/services",
        } 
    },
    { 
        label: "Tata Tele", 
        content: {
            title: "Tata Tele Business",
            description: "Tata Tele Business Services (TTBS), belonging to the prestigious Tata Group of Companies, is India’s leading provider of advanced connectivity and communication solutions for businesses.",
            src: "/assets/images/services/tata.webp",
            service_list: [
                "Business Communications",
                "Network & Connectivity",
                "Cloud Infrastructure",
                "Cybersecurity Solutions",
            ],
            link: "https://www.tatatelebusiness.com/",
        } 
    },
    { 
        label: "Security Consulting", 
        content: {
            title: "Security Consulting & Audit",
            description: "Help organizations to meet regulatory compliance, industry standards liks ISO 27001, security assessment of your network, applications and cloud infrastructure",
            src: "/assets/images/services/audit.jpg",
            service_list: [
                "Security Consulting",
                "Security Assessments",
                "Regulatory Compliance",
                "Cloud Consulting",
            ],
            link: "/services",
        } 
    },
    { 
        label: "Development", 
        content: {
            title: "Development Services",
            description: "We build secure, scalable web and mobile applications, adhering to industry standards and delivering exceptional user experiences.",
            src: "/assets/images/services/testing.avif",
            service_list: [
                "Web Development",
                "App Development",
                "AI Tools and Analysis",
                "Social Media Marketing",
            ],
            link: "/services",
        } 
    },
];

export default function HeroSection() {
    const [scrollY, setScrollY] = useState(0);
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Start fade and scale animation when scrollY passes a threshold
    useEffect(() => {
        if (scrollY > 100) {
            controls.start({ opacity: 0, scale: 0.9 });
        } else {
            controls.start({ opacity: 1, scale: 1 });
        }
    }, [scrollY, controls]);

    return (
        <section className="relative flex items-center pb-10 pt-28 md:pb-16 bg-hero-section bg-fixed bg-no-repeat bg-cover bg-center">
            <Container>
                <div className="flex flex-col gap-10 py-14 items-center justify-center">
                    {/* Text and Socials */}
                    <motion.div
                        className="sticky top-[170px] grid grid-cols-1 lg:grid-cols-2 gap-10 z-10"
                        animate={controls}
                        initial={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex flex-col gap-8 justify-center lg:justify-start lg:items-start items-center">
                            <div className="flex flex-col gap-4 items-center">
                                <h1 className="text-4xl md:text-6xl text-center lg:text-left text-white font-sora font-semibold uppercase">
                                    <span className="text-5xl md:text-6xl text-blue_logo">DIGI</span>
                                    <span className="text-5xl md:text-6xl text-yellow_logo">SEC </span>
                                    Technologies
                                </h1>
                                <h3 className="text-neutral-200 text-center lg:text-left font-medium max-w-[600px]">
                                    {data.subtitle}
                                </h3>
                            </div>
                            <div className="w-full flex lg:justify-start justify-center">
                                <SocialLink />
                            </div>
                            <div className="flex items-center lg:justify-start justify-center gap-4 w-full">
                                <Link href="/about-us">
                                    <button className="rounded-full px-4 md:px-6 py-2 border-2 border-white bg-white hover:bg-transparent hover:text-white duration-200 font-semibold">Learn More</button>
                                </Link>
                                <Link href="/contact-us">
                                    <button className="group flex gap-3 items-center rounded-full px-4 py-2 border-2 text-white border-white hover:bg-transparent bg-blue_dark hover:text-white duration-200 font-semibold">
                                        Contact Us
                                        <span className="text-white text-lg -rotate-45 group-hover:rotate-45 duration-200"><FaArrowCircleRight /></span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full h-full hidden lg:block">
                            <Image 
                                src={ data.hero_img_src }
                                alt=""
                                width={1000}
                                height={1000}
                                className="max-w-[600px] absolute -top-20 -right-28"
                            />
                        </div>
                    </motion.div>

                    {/* Hero Navigation */}
                    <div className="w-full z-20 py-4">
                        <HeroNavigation 
                            navigationData={hero_navigation_data} 
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}
