"use client"

// SWIPER IMPORT 
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/bundle"
import "swiper/css/autoplay"

// Import Swiper modules
import { Autoplay } from "swiper/modules"
import Image from "next/image"

export default function AboutSlider({ slider_data }){

    return (

        <Swiper
            className="mySwiper"
            loop={ true }
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            slidesPerView={ 1 }
            spaceBetween={ 10 }
        >
            {

                slider_data.map((src, index) => (

                    <SwiperSlide key={ index }>
                        <div className="w-full aspect-[5/4] rounded-lg overflow-hidden">
                            <Image 
                                src={ src }
                                alt=""
                                width={ 1000 }
                                height={ 1000 }
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </SwiperSlide>

                ))

            }
        </Swiper>

    )

}
