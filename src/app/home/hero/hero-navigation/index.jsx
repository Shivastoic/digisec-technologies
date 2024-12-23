"use client"

import React, { useState } from 'react'
import { FaArrowUp, FaCheck } from "react-icons/fa"
import Link from 'next/link'
import Image from 'next/image'

export default function HeroNavigation({ navigationData }) {

    const [activeIndex, setActiveIndex] = useState(0)

    return (

        <div className="flex flex-col items-center justify-center gap-3 w-full">
            <div className="flex gap-1 flex-wrap md:rounded-full rounded-lg justify-center border-2 border-white/15 bg-white/10 backdrop-blur-lg w-fit p-1">
                {
                
                    navigationData.map((data, index) => (

                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`duration-150 px-3 py-2 rounded-full text-white ${
                                activeIndex === index ? 'bg-blue-500' : 'hover:bg-black/20'
                            }`}
                        >
                            {data.label}
                        </button>

                    ))
                
                }
            </div>
            <div className="w-full p-2 md:p-4 bg-white/10 backdrop-blur-lg rounded-xl shadow-big_boxshadow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="flex flex-col p-6 gap-12">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-3xl md:text-4xl text-white font-semibold font-sora">{ navigationData[activeIndex]?.content.title }</h2>
                            <p className="text-white font-medium font-sora">{ navigationData[activeIndex]?.content.description }</p>
                            <ul className="flex flex-col gap-4">
                                {

                                    navigationData[activeIndex]?.content.service_list.map( ( item, index ) => (

                                        <li key={ index } className="flex items-center gap-2 text-white">
                                            <div className="flex items-center justify-center rounded-full size-6 bg-white/20 p-1">
                                                <FaCheck className="text-white" size={ 10 } />
                                            </div>
                                            { item }
                                        </li>

                                    ))

                                }
                            </ul>
                        </div>
                        <Link href={ navigationData[activeIndex]?.content.link }>
                            <button className="rounded-full relative px-3 md:px-4 py-2 bg-white group border-2 border-white text-white md:text-lg">
                                <div className="bg-blue-600 rounded-full absolute top-0 left-0 group-hover:top-1 group-hover:left-1 duration-200 w-full h-full flex gap-2 items-center justify-center">
                                    Learn More
                                    <span className="text-white text-lg rotate-45 group-hover:rotate-90 duration-200"><FaArrowUp /></span>
                                </div>
                                Learn Moreeeeeee
                            </button>
                        </Link>
                    </div>
                    <div className="w-full h-full rounded-lg overflow-hidden">
                        <Image
                            src={ navigationData[activeIndex]?.content.src }
                            alt=''
                            width={ 1000 }
                            height={ 1000 }
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </div>

    )

}

