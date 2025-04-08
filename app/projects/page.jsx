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
        title: "Claim Request",
        description: " Website manage project\
 Handle request approvals and claims\
 Manage user roles and permissions.",
        stack: [
            "React", "Typescript", "Tailwindcss","AntDesign"
        ],
        image: "/assets/work/thumb5.png",
        live: "https://group-final-project.vercel.app",
        github: "https://github.com/QHuyyyyy/Group_Final_Project"
    },
    {
        num: "02",
        category: "Web Development",
        title: "Clone Layout",
        description: "Lorem ipsum dolor sit amet consectetur \
        adipisicing elit.Quisquam, voluptatibus.",
        stack: [
            "HTML", "CSS",
        ],
        image: "/assets/work/thumb6.png",
        live: "https://bgin-qhuys-projects.vercel.app/",
        github: "https://github.com/QHuyyyyy/Bgin"
    },
]
export default function Project() {
    const [project, setProject] = useState(projects[0]);
    const [hoverState, setHoverState] = useState({
        number: false,
        live: false,
        github: false
    });

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
                <div className="flex flex-col xl:flex-row xl:gap-[20px]">
                    <div className="w-full xl:w-[40%] xl:h-[460px] flex flex-col
                    xl:justify-between order-2 xl:order-none group">
                        <div className="flex flex-col gap-[25px] h-[50%]">
                            <div 
                                className={`text-8xl leading-none font-extrabold text-transparent ${
                                    hoverState.number || hoverState.live || hoverState.github 
                                    ? "[-webkit-text-stroke:1px_#00ff99]" 
                                    : "text-outline"
                                }`}
                                onMouseEnter={() => setHoverState({...hoverState, number: true})}
                                onMouseLeave={() => setHoverState({...hoverState, number: false})}
                            >
                                {project.num}
                            </div>

                            <h2 className="text-[42px] font-bold leading-none text-white transition-all duration-500">{project.title}</h2>
                            
                            <p className="text-white/60"> <p className="text-white/60 text-[150%]">{project.category}</p>{project.description}</p>
                            <ul className="flex gap-4 flex-wrap gap-2 ">
                                {project.stack.map((item, index) => (
                                    <li key={index} className="text-accent text-xl ">
                                        {item}
                                        {index !== project.stack.length - 1 && <span className="text-white/60">,</span>}
                                    </li>
                                ))}
                            </ul>
                            <div className="border boder-white/20"></div>
                            <div className="flex items-center gap-4">
                                <a href={project.live} target="_blank">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger 
                                                className="w-[70px] h-[70px] rounded-full bg-white/50 flex justify-center items-center"
                                                onMouseEnter={() => setHoverState({...hoverState, live: true})}
                                                onMouseLeave={() => setHoverState({...hoverState, live: false})}
                                            >
                                                <BsArrowUpRight className={`text-3xl ${hoverState.live ? "text-accent" : "text-white"}`} />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </a>
                                <a href={project.github} target="_blank">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger 
                                                className="w-[70px] h-[70px] rounded-full bg-white/50 flex justify-center items-center"
                                                onMouseEnter={() => setHoverState({...hoverState, github: true})}
                                                onMouseLeave={() => setHoverState({...hoverState, github: false})}
                                            >
                                                <BsGithub className={`text-3xl ${hoverState.github ? "text-accent" : "text-white"}`} />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github Repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[60%]">
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
