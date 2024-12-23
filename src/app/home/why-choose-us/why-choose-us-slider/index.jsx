"use client"

import Image from "next/image"

// SWIPER IMPORT 
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/bundle"
import "swiper/css/autoplay"

// Import Swiper modules
import { Autoplay, Navigation } from "swiper/modules";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function WhyUsSlider({ slider_data }) {

    return (
        <>
            <Swiper
                className="mySwiper !py-8"
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation]}
                navigation={{
                    prevEl: ".custom-swiper-button-prev",
                    nextEl: ".custom-swiper-button-next",
                }}
                centeredSlides={true}
                spaceBetween={20}
                breakpoints={{
                    0: {
                        slidesPerView: 1, // 1 slide for mobile devices
                    },
                    600: {
                        slidesPerView: 1.5, // 1.5 slides for screens wider than 600px
                    },
                    1024: {
                        slidesPerView: 2, // 2 slides for screens wider than 1024px
                    },
                    1280: {
                        slidesPerView: 3, // 3 slides for screens wider than extra large (1280px)
                    },
                }}
            >
                {
                    slider_data.map((data, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white rounded-xl shadow-better_boxshadow flex flex-col gap-6 p-6 group hover:bg-blue_light duration-200 aspect-[5/4]">
                                <Image
                                    src={data.src}
                                    alt=""
                                    width={1000}
                                    height={1000}
                                    className="size-16 animate-pulse"
                                />
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-2xl font-medium font-sora group-hover:text-white duration-100">{data.title}</h3>
                                    <p className="text-lg text-slate-500 font-syne group-hover:text-neutral-200 duration-100">{data.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="flex items-center justify-center md:justify-end gap-4 relative bottom-0">
                <button className="custom-swiper-button-prev rounded-full p-4 flex items-center justify-center border-2 border-blue-500 bg-white">
                    <FaArrowLeft className="text-blue-500" />
                </button>
                <button className="custom-swiper-button-next rounded-full p-4 flex items-center justify-center border-2 border-blue-500 bg-blue-500">
                    <FaArrowRight className="text-white" />
                </button>
            </div>
        </>
    )
}
