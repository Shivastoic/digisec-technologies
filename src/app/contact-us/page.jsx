import Container from "@/app/components/container/index"
import ContactForm from "@/app/contact-us/contact-form/index"
import Image from "next/image"

// HARDCODED DATA
const data = {

    title: "Contact Us",
    subtitle: "Say Hello !",
    subtitle_two: "Leave a message and our a team will Get back to you :)",

}

export default function ContactUs(){

    return (

        <section className="py-24">
            <div className="bg-[url('/assets/images/testimonial-bg.svg')] bg-no-repeat bg-cover bg-center">
                <Container>
                    <div className="relative flex flex-col gap-10 py-8">
                        <h2 className="text-4xl md:text-5xl text-yellow_title text-center font-sora font-semibold">{ data.title }</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 pt-4 pb-8 bg-white rounded-xl relative z-10">
                            <div className="flex flex-col gap-10">
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-3xl text-neutral-700 font-sora font-semibold">{ data.subtitle }</h3>
                                    <p className="text-neutral-500 font-sora">{ data.subtitle_two }</p>
                                </div>
                                <ContactForm />
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="rounded-lg overflow-hidden border-2 border-neutral-300 w-full h-full">
                                    <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1702.2143119086859!2d77.38875883525762!3d28.564177723656144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef31dbfa0da5%3A0x334188e3bf6909c!2sHyde%20Park%20Crown!5e0!3m2!1sen!2sin!4v1692298965509!5m2!1sen!2sin" 
                                        width="400" 
                                        height="400" 
                                        allowFullScreen="" 
                                        loading="lazy" 
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="w-full h-full"
                                    ></iframe>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl text-neutral-700 font-sora font-semibold">Registered Address</h3>
                                    <div className="space-y-1">
                                        <p className="text-neutral-500 font-sora font-medium">Digisec Technologies</p>
                                        <p className="text-neutral-500 font-sora font-medium">62 C, MIG, Sector-100, Noida, 201301</p>
                                        <p className="text-neutral-500 font-sora font-medium">contact@digisectechnologies.com</p>
                                        <p className="text-neutral-500 font-sora font-medium">Phone: 0120-4541812</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block absolute top-4 -left-24">
                            <Image 
                                src="/assets/images/why-choose-us/dots.png"
                                alt=""
                                width={ 1000 }
                                height={ 1000 }
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="hidden lg:block absolute -bottom-14 -right-20">
                            <Image 
                                src="/assets/images/why-choose-us/shape-dot.png"
                                alt=""
                                width={ 1000 }
                                height={ 1000 }
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </Container>
            </div>
        </section>

    )

}
