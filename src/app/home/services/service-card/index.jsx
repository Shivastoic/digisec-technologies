// IMPORT COMPONENTS
import Image from "next/image"
import Link from "next/link"

export default function ServiceCard({ src, title, description, link }){

    return (

        <div className="flex flex-col gap-2 pb-4 bg-white/20 shadow-better_boxshadow rounded-xl overflow-hidden">
            <div className="w-full aspect-[3/2] overflow-hidden px-2 pt-2">
                <Image 
                    src={ src }
                    alt=""
                    width={ 1000 }
                    height={ 1000 }
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>
            <div className="flex flex-col gap-4 p-4">
                <h3 className="text-2xl text-yellow_title font-sora font-medium">{ title }</h3>
                <p className="text-white/80 font-syne font-medium">{ description }</p>
                <Link href={ link }>
                    <button className="flex items-center gap-2 rounded-full border-2 border-white text-white hover:bg-blue-500 duration-200 px-6 py-2 text-sm font-medium font-sora">
                        Know More
                    </button>
                </Link>
            </div>
        </div>

    )

}
