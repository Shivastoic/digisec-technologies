// IMPORT COMPONENTS
import Image from "next/image"

export default function ServicePageCard({ src, title, list }) {

    return (

        <div className="flex flex-col pb-4 bg-white/20 backdrop-blur-sm shadow-better_boxshadow rounded-xl overflow-hidden">
            <div className="w-full aspect-[3/2] overflow-hidden px-2 pt-2">
                <Image 
                    src={ src }
                    alt=""
                    width={ 1000 }
                    height={ 1000 }
                    className="w-full h-full aspect-[3/2] object-cover rounded-lg"
                />
            </div>
            <div className="flex flex-col gap-4 p-4">
                <h3 className="text-xl md:text-2xl text-white font-sora font-medium">{ title }</h3>
                <ul className="space-y-1 list-disc pl-4">
                    {

                        list.map( ( item, index ) => (

                            <li key={ index } className="text-sm md:text-base text-white/70 font-sora">
                                { item }
                            </li>

                        ))

                    }
                </ul>
            </div>
        </div>

    )

}
