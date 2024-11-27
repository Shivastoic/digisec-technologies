export default function Container({ children }) {

    return (

        <section className="w-full h-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto max-xl:px-4">
            { children }
        </section>

    )

}
