import Container from "@/app/components/container";
import Link from "next/link";
import { FaDownload } from "react-icons/fa6";
import VideoPlayer from "./video-player";
import Image from "next/image";
import CourseForm from "./course-form";

// METADATA FOR COURSE PAGE
export const metadata = {

    title: "C.E.H. Course | Digisec Technologies",
    description: "",
    keywords: "",

}

// HARDCODED DATA
const data = {
    title: "Cyber Security Zero to Hero!",
    video_src: "/assets/videos/course.mp4",
    pdf_link: "/assets/documents/document-from-ethical-hacking-training-center.pdf",
    btn_label: "Course Brief",
};

export default function Course() {

    return (
        <section className="py-24 bg-hero-section bg-no-repeat bg-cover">
            <Container>
                <div className="flex items-center justify-center max-w-[1000px] mx-auto">
                    <div className="relative flex flex-col gap-10 py-16">
                        <h2 className="text-4xl md:text-5xl text-yellow_title text-center font-sora font-medium">
                            {data.title}
                        </h2>
                        <div className="flex flex-col gap-6">
                            <VideoPlayer src={ data.video_src } />
                            <Link href={data.pdf_link} target="_blank">
                                <button className="flex items-center gap-4 rounded-full border-2 border-white text-white hover:bg-blue-500 duration-200 px-6 py-2 font-semibold font-sora">
                                    {data.btn_label}
                                    <FaDownload />
                                </button>
                            </Link>
                        </div>
                        <CourseForm />
                        <div className="hidden md:block absolute top-24 -right-12">
                            <Image 
                                src="/assets/images/circle.png"
                                alt=""
                                width={ 1000 }
                                height={ 1000 }
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="hidden md:block absolute bottom-[440px] -right-20">
                            <Image 
                                src="/assets/images/hero-shape-2.png"
                                alt=""
                                width={ 1000 }
                                height={ 1000 }
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="hidden lg:block absolute top-8 -left-24">
                            <Image 
                                src="/assets/images/why-choose-us/dots.png"
                                alt=""
                                width={ 1000 }
                                height={ 1000 }
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
