import Container from "@/app/components/container"
import ServicePageCard from "@/app/services/components/service-page-template/service-page-card/index"

export default function ServicePageTemplate({ title, description, cardData }){

    return (

        <section className="py-8 md:py-16">
            <Container>
                <div className="flex flex-col gap-14">
                    <div className="flex flex-col gap-8">
                        <h2 className="text-4xl md:text-5xl text-yellow_title font-sora font-semibold">{ title }</h2>
                        <p className="md:text-lg text-slate-500 font-sora leading-loose">{ description }</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {

                            cardData.map( ( data, index ) => (

                                <ServicePageCard 
                                    key={ index }
                                    src={ data.src }
                                    title={ data.title }
                                    list={ data.list }
                                />

                            ))

                        }
                    </div>
                </div>
            </Container>
        </section>

    )

}
