import { useEffect, useRef } from "react";
import Link from "next/link";

export default function MobileNav({ navlinksdata, contact_link, contact_label, open_state, setIsNavOpen, pathname }) {
    const navRef = useRef(null); // Ref for the navigation menu

    // Close the menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsNavOpen(false); // Close the menu
            }
        };

        if (open_state) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside); // Cleanup
        };
    }, [open_state, setIsNavOpen]);

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-20 h-screen transition-opacity duration-500 ${
                    open_state ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            ></div>

            {/* Mobile Navigation */}
            <ul
                ref={navRef} // Attach the ref to the navigation menu
                className={`bg-white shadow-xl min-w-60 md:min-w-80 z-20 py-20 md:py-28 px-6 absolute top-0 right-0 h-dvh flex flex-col gap-6 transform transition-transform duration-500 ${
                    open_state ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {navlinksdata.map((data, index) => (
                    <li
                        key={index}
                        className={`relative font-medium font-sora duration-150 ${
                            pathname === data.link
                                ? "text-black underline decoration-2 underline-offset-8"
                                : "text-neutral-700 hover:text-black"
                        }`}
                    >
                        <Link href={data.link}>
                            <span
                                className={`relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-black after:w-0 after:transition-all after:duration-300 ${
                                    pathname !== data.link ? "hover:after:w-full" : "after:w-full"
                                }`}
                            >
                                {data.link_label}
                            </span>
                        </Link>
                    </li>
                ))}
                <Link href={contact_link}>
                    <button
                        className={`w-full border-2 border-blue_light hover:border-black hover:bg-white hover:text-black bg-blue_light text-white px-6 py-2 rounded-full text-sm font-sora font-medium duration-200`}
                    >
                        {contact_label}
                    </button>
                </Link>
            </ul>
        </>
    );
}
