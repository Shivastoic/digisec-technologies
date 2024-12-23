import Container from "@/app/components/container"
import Image from "next/image"

// METADATA FOR BLOG PAGE
export const metadata = {

    title: "Blogs | Digisec Technologies",
    description: "",
    keywords: "",

}

// HARDCODED DATA
const data = {

    src: "/assets/images/blog/blog-banner.jpg",
    title: "Safeguarding Your Digital Assets: The Vitality of Data Security",
    blog_title: "Why Data Security is Essential?",
    description_one: "In our increasingly digital world, data plays a pivotal role. From personal memories to crucial documents, our lives are deeply intertwined with digital data. Yet, the security of this valuable information faces constant threats from cybercriminals. Therefore, data security is not just a buzzword but an absolute necessity in today’s landscape.",
    qestion_one: "1. The Surge in Data Breaches",
    answer_one: "Data breaches have become all too common, affecting individuals, businesses of all sizes, and organizations. These incidents can result in severe consequences, including financial losses and reputational damage.",
    qestion_two: "2. Preserving Personal Privacy",
    answer_two: "The safeguarding of personal information is paramount. Effective data security measures ensure the protection of privacy, thwarting identity theft and unauthorized access.",
    qestion_three: "3. Ensuring Business Continuity",
    answer_three: "For businesses, data is the lifeblood that keeps operations running. Data breaches can disrupt daily activities and lead to financial setbacks. Robust data security measures are indispensable for ensuring uninterrupted business operations.",
    blog_title_two: "Data Security Best Practices",
    description_two: "Implement Strong Passwords, Prioritize Encryption, Update Softwares regularly, Educate your team on best practices, Enforce Access Controls and Take Frequent Backups",
    bottom_title: "Conclusion: ",
    bottom_description: " In today’s digital age, data security is non-negotiable. By adhering to these best practices, you can shield your personal information, safeguard your business, and enjoy peace of mind. Vigilance is key, so remain diligent and resilient against the ever-evolving threats in the digital realm. Your digital assets deserve the protection they need.",

}

export default function Blog() {

    return (

        <section className="py-24">
            <Container>
                <div className="py-16 flex flex-col gap-20">
                    <div className="py-4 border-y-2 md:border-y-4 border-white/80">
                        <h2 className="text-3xl md:text-4xl font-sora font-medium text-white/80">{ data.title }</h2>
                    </div>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col-reverse md:flex-row gap-14">
                            <div className="md:flex-1 flex flex-col gap-8">
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-2xl md:text-3xl font-sora font-medium text-white/80">{ data.blog_title }</h3>
                                    <p className="md:text-lg text-white/70 font-sora leading-relaxed">{ data.description_one }</p>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h4 className="text-xl md:text-2xl font-sora font-medium text-white/80">{ data.qestion_one }</h4>
                                    <p className="text-sm md:text-base text-white/70 font-sora">{ data.answer_one }</p>
                                </div>
                            </div>
                            <div className="md:flex-1 w-full h-full rounded-lg overflow-hidden">
                                <Image 
                                    src={ data.src }
                                    alt=""
                                    width={1000}
                                    height={1000}
                                    className="w-full h-full"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
                            <div className="flex flex-col gap-3">
                                <h4 className="text-xl md:text-2xl font-sora font-medium text-white/80">{ data.qestion_two }</h4>
                                <p className="text-sm md:text-base text-white/70 font-sora">{ data.answer_two }</p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h4 className="text-xl md:text-2xl font-sora font-medium text-white/80">{ data.qestion_three }</h4>
                                <p className="text-sm md:text-base text-white/70 font-sora">{ data.answer_three }</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl md:text-3xl font-sora font-medium text-white/80">{ data.blog_title_two }</h3>
                        <p className="text-sm md:text-base text-white/70 font-sora font-medium">{ data.description_two }</p>
                        <div className="bg-yellow_logo p-6 rounded-lg">
                            <p className="text-neutral-600 md:text-lg font-sora"><span className="font-medium">{ data.bottom_title }</span>{ data.bottom_description }</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>

    )

}
