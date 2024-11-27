"use client"

// IMPORT COMPONENTS
import TestimonialCard from "@/app/home/testimonials/testimonial-card/index"

// SWIPER IMPORT 
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/bundle"
import "swiper/css/autoplay"

// Import Swiper modules
import { Autoplay } from "swiper/modules"

export default function TestimonialSlider({ cardData }){

    return (

        <Swiper 
            className="mySwiper !pb-16 !pt-4"
            loop={ true }
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            spaceBetween={ 20 }
            breakpoints={{
                0: {
                    slidesPerView: 1, // 1 slide for mobile devices
                },
                600: {
                    slidesPerView: 2, // 2 slides for screens wider than 600px
                },
                1024: {
                    slidesPerView: 3, // 4 slides for screens wider than 1024px
                },
                1280: {
                    slidesPerView: 4, // 5 slides for screens wider than extra large (1280px)
                },
            }}
        >
            {

                cardData.map( ( data, index ) => (

                    <SwiperSlide key={ index }>
                        <TestimonialCard 
                            src={ data.src }
                            client_name={ data.client_name }
                            designation={ data.designation }
                            testmony={ data.testmony }
                        />
                    </SwiperSlide>

                ))

            }
        </Swiper>

    )

}
