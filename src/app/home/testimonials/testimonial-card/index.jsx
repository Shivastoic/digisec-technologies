// IMPORT COMPONENTS
import Image from "next/image"

export default function TestimonialCard({ src, client_name, designation, testmony }){

    return (

        <div className="bg-neutral-50 shadow-better_boxshadow rounded-lg p-6 flex flex-col gap-6">
            <div className="flex items-center gap-4">
                <div className="size-12 bg-blue-200 rounded-full overflow-hidden">
                    <Image 
                        src={ src }
                        alt=""
                        width={ 500 }
                        height={ 500 }
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col">
                    <p className="font-sora text-sm font-medium">{ client_name }</p>
                    <p className="text-sm text-neutral-500 font-syne">{ designation }</p>
                </div>
            </div>
            <p className="text-slate-600 font-syne">{ testmony }</p>
        </div>

    )

}
