"use client"

import { SiTailwindcss, SiNextdotjs } from "react-icons/si"
import {
    motion
} from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"
const about =
{
    title: "About Me",
    description: `I am a passionate web developer with a focus on creating dynamic
         and responsive web applications.`,
    info: [
        {
            fieldName: "Name",
            fieldValue: "Nguyen Quoc Huy"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+84) 123456789"
        },
        {
            fieldName: "Email",
            fieldValue: "huynq.forwork@gmail.com"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Vietnamese"
        },

        {
            fieldName: "Experience",
            fieldValue: "3 months"
        },

    ]
}

const experiences = {
    title: "My experience",
    description: `I have experience in front-end development,
    and I am always eager to learn new technologies and improve my skills.`,
    items: [
        {
            position: "Front-end Developer Intern",
            company: "FPT Software",
            duration: "1/2024 - Present",
        },

    ]
}
const education = {
    title: "My education",
    description: `I have experience in both front-end and back-end development,
    and I am always eager to learn new technologies and improve my skills.`,
    items: [
        {
            institution: "FreeCodeCamp",
            degree: "Responsive Web Design",
            duration: "2025",
        },
        {
            institution: "Coursera",
            degree: "Web Design for Everybody: Basics of Web Development & Coding",
            duration: "2022",
        },
        {
            institution: "Coursera",
            degree: "Software Development Lifecycle",
            duration: "2022",
        },
        {
            institution: "FPT University",
            degree: "Not yet",
            duration: "2022 - now",
        },
    ]
}
const skills = {
    title: "My skills",
    description: `I have experience in both front-end and back-end development,
    and I am always eager to learn new technologies and improve my skills.`,
    skillLists: [
        {
            icon: "assets/resume/html-5.svg",
            name: "HTML5",
        },
        {
            icon: "assets/resume/css3.svg",
            name: "CSS3",
        },
        {
            icon: "assets/resume/javascript.svg",
            name: "JavaScript",
        },
        {
            icon: "assets/resume/react.svg",
            name: "ReactJS",
        },
        {
            icon: "assets/resume/nextjs.svg",
            name: "NextJS",
        },
        {
            icon: "assets/resume/figma.svg",
            name: "Figma",
        },
        {
            icon: "assets/resume/tailwindcss.svg",
            name: "Tailwind CSS",
        },
        {
            icon: "assets/resume/nodejs.svg",
            name: "NodeJS",
        },
        {
            icon: "assets/resume/mongodb.svg",
            name: "MongoDB",
        },
        {
            icon: "assets/resume/git.svg",
            name: "Git",
        },
        {
            icon: "assets/resume/expressjs.svg",
            name: "ExpressJS",
        }
    ]
}

export default function Resume() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 0.5,
                    duration: 0.5,
                    ease: "easeIn"
                }
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
            <div className="container">
                <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="about" >About me</TabsTrigger>
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh] w-full">

                        { /* about tab*/}
                        <TabsContent value="about" className="w-full h-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-5xl font-bold ">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-[15px]">{about.description}</p>
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-6 mx-auto xl:mx-0 ">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl" >{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        { /* experience tab*/}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-5xl font-bold ">{experiences.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-[15px] ">{experiences.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]" l>
                                        {experiences.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 
                                                rounded-xl flex flex-col justi
                                                fy-center items-center lg:items-start gap-1 text-[18px]">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        }
                                        )}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        { /* education tab*/}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-5xl font-bold ">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-[15px] ">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]" l>
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 
                                                rounded-xl flex flex-col justi
                                                fy-center items-center lg:items-start gap-1 text-[18px]">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[300px] min-h-[80px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            )
                                        }
                                        )}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        { /* skill tab*/}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title} </h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-[15px] ">{skills.description}</p>
                                </div>
                            </div>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] mt-10 gap-4">
                                {skills.skillLists.map((item, index) => {
                                    return <li key={index}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl  flex items-center justify-center group">
                                                    <div className="transition-all duration-300">
                                                        <Image src={item.icon} alt={item.name} prioriry quality={100} width={80}
                                                            height={80} />
                                                    </div>

                                                </TooltipTrigger>
                                                <TooltipContent >
                                                    <p className="capitalize">{item.name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </li>
                                })}
                            </ul>
                        </TabsContent>

                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}
