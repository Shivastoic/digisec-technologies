"use client"

// SWIPER IMPORT 
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/bundle"
import "swiper/css/autoplay"
import "swiper/css/pagination"

// Import Swiper modules
import { Autoplay, Pagination } from "swiper/modules"
import Image from "next/image"

export default function PartnerSlider({ partnerData }) {
    return (
        <Swiper 
            className="mySwiper !pt-10 !pb-16"
            loop={true}
            autoplay={{
                delay: 1000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            pagination={{
                clickable: true, // Makes dots clickable
            }}
            spaceBetween={40}
            breakpoints={{
                0: {
                    slidesPerView: 2, // 1 slide for mobile devices
                },
                600: {
                    slidesPerView: 3, // 2 slides for screens wider than 600px
                },
                1024: {
                    slidesPerView: 4, // 4 slides for screens wider than 1024px
                },
                1280: {
                    slidesPerView: 5, // 5 slides for screens wider than extra large (1280px)
                },
            }}
        >
            {
                partnerData.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="aspect-video flex items-center justify-center">
                            <Image 
                                src={src}
                                alt=""
                                width={1000}
                                height={1000}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}
