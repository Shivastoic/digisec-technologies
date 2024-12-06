// IMPORT COMPONENTS
import Link from "next/link"

export default function MobileNav({ navlinksdata, contact_link, contact_label, open_state, pathname }){

    return (

        <ul className={`bg-white shadow-xl min-w-60 z-20 py-20 px-6 absolute top-0 right-0 h-dvh flex flex-col gap-6 transform transition-transform duration-300 ${ open_state ? "translate-x-0" : "translate-x-full" }`}>
            {
                        
                navlinksdata.map((data, index) => (

                    <li key={index} className={`font-medium font-sora duration-150  ${ pathname === data.link ? "text-black underline decoration-2 underline-offset-8" : "text-neutral-700 hover:text-black" }`}>
                        <Link href={data.link}>{data.link_label}</Link>
                    </li>

                ))
            
            }
            <Link href={ contact_link }>
                <button className={`w-full bg-blue_light text-white px-6 py-2 rounded-full text-sm font-sora font-medium duration-200`} >
                    { contact_label }
                </button>
            </Link>
        </ul>

    )

}
