import Image from "next/image";

export default function DevCard({ src, title, description, features, tech }){

    return (

        <div className="max-w-[1024px] bg-white group hover:bg-blue_light duration-200 shadow-better_boxshadow rounded-xl p-3 grid grid-col-1 md:grid-cols-5 gap-6">
            <div className="md:col-span-2 rounded-lg max-w-96 overflow-hidden">
                <Image 
                    src={ src }
                    alt=""
                    width={ 1000 }
                    height={ 1000 }
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="md:col-span-3 flex flex-col gap-6 py-4">
                <div className="flex flex-col gap-2">
                    <h3 className="text-2xl group-hover:text-white duration-100 font-sora font-medium">{ title }</h3>
                    <p className="text-neutral-600 group-hover:text-neutral-200 duration-100 font-sora">{ description }</p>
                </div>
                <ul className="list-disc pl-6">
                    {

                        features.map( ( feature, index ) => (

                            <li key={ index } className="text-neutral-600 group-hover:text-neutral-200 duration-100 font-sora">{ feature }</li>

                        ))

                    }
                </ul>
                <div className="flex gap-4 items-center">
                    <p className="text-lg font-sora group-hover:text-white duration-100 font-medium">Tools :</p>
                    <div className="flex flex-wrap gap-3">
                        {

                            tech.map( ( src, index ) => (

                                <div key={ index } className="size-8">
                                    <Image 
                                        src={ src }
                                        alt=""
                                        width={ 200 }
                                        height={ 200 }
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                            ))

                        }
                    </div>  
                </div>
            </div>
        </div>

    )

}
