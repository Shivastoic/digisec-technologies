// IMPORT COMPONENTS
import Image from "next/image"
import Link from "next/link"

export default function ServiceCard({ src, title, description, link }){

    return (

        <div className="flex flex-col gap-2 bg-white shadow-md rounded-xl overflow-hidden">
            <div className="w-full h-full aspect-[3/2] overflow-hidden">
                <Image 
                    src={ src }
                    alt=""
                    width={ 1000 }
                    height={ 1000 }
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col gap-4 p-4">
                <h3 className="text-2xl text-yellow_title font-sora font-medium">{ title }</h3>
                <p className="text-neutral-500 font-syne font-medium">{ description }</p>
                <Link href={ link }>
                    <button className="flex items-center gap-2 rounded-full border-2 border-blue_light text-blue_light hover:bg-blue_light hover:text-white duration-200 px-6 py-2 text-sm font-medium font-sora">
                        Know More
                    </button>
                </Link>
            </div>
        </div>

    )

}
