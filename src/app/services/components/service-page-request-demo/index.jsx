import Image from "next/image";
import Link from "next/link";

export default function ServiceRequestDemo({ src, description }) {

    return (

        <section className="bg-blue_light flex flex-col md:flex-row">
            <div className="md:w-1/2 flex flex-col justify-center gap-6 px-4 py-6 sm:p-10 md:p-16 lg:p-20 xl:p-24">
                <h3 className="text-4xl lg:text-5xl text-white font-sora font-semibold">Request A Demo</h3>
                <p className="md:text-lg text-neutral-100 font-sora leading-relaxed">{ description }</p>
                <Link href="/contact-us">
                    <button className="border-2 border-yellow_logo duration-300 text-yellow_logo hover:bg-yellow_logo px-4 py-2 md:px-6 md:py-3 hover:text-black md:text-lg font-sora font-medium rounded-full">
                        Get In Touch
                    </button>
                </Link>
            </div>
            <div className="md:w-1/2 aspect-[3/2]">
                <Image 
                    src={ src }
                    alt=""
                    width={ 1000 }
                    height={ 1000 }
                    className="w-full h-full object-cover"
                />
            </div>
        </section>

    )

}
