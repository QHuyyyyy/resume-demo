
"use client"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import WorkSliderBtns from "@/components/ui/WorkSliderBtns"

const projects = [
    {
        num: "01",
        category: "Web Development",
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet consectetur \
        adipisicing elit.Quisquam, voluptatibus.",
        stack: [
            "React", "css   ", "tailwind", "nextjs", "typescript"
        ],
        image: "/assets/work/thumb1.png",
        live: "",
        github: ""
    },
    {
        num: "02",
        category: "Web Development",
        title: "Project 2",
        description: "Lorem ipsum dolor sit amet consectetur \
        adipisicing elit.Quisquam, voluptatibus.",
        stack: [
            "React", "css   ", "tailwind", "nextjs", "typescript"
        ],
        image: "/assets/work/thumb2.png",
        live: "",
        github: ""
    },
]
export default function Project() {
    const [project, setProject] = useState(projects[0]);
    const handleSlideChange = (swiper) => {
        setProject(projects[swiper.activeIndex]);
    };
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { duration: 0.5, ease: "easeIn", delay: 0.2 },
            }}
            className="min-h-[80vh] flex flex-col justify-center xl:px-0 py-12"
        >
            <div className="container">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col
                    xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>

                            <h2 className="text-[42px] font-bold leading-none text-white transition-all duration-500">{project.category} project</h2>
                            <p className="text-white/60">{project.description}</p>
                            <ul className="flex gap-4 ">
                                {project.stack.map((item, index) => (
                                    <li key={index} className="text-accent text-2xl">
                                        {item}
                                        {index !== project.stack.length - 1 && <span className="text-white/60">,</span>}
                                    </li>
                                ))}
                            </ul>
                            <div className="border boder-white/20"></div>
                            <div className="flex items-center gap-4">
                                <Link href={project.live}>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/50 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                <Link href={project.github}>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/50 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github Respository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            onSlideChange={handleSlideChange}
                            spaceBetween={30} slidesPerView={1} className="w-full xl:h-[520px] mb-12">
                            {projects.map((item, index) => (
                                <SwiperSlide key={index} className="w-full ">
                                    <div className="w-full h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                        <div className="absolute top-0 bottom-0 w-full bg-black/10 z-10"></div>
                                        <div className="relative w-full h-full">
                                            <Image src={item.image} alt={item.title} fill className="object-cover" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            <WorkSliderBtns
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]
                            xl:bottom-0 z-20 w-full justufy-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
                        </Swiper>

                    </div>
                </div>
            </div>

        </motion.section >
    )
}
