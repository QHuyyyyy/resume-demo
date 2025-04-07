"use client";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
const info = [
    { icon: <FaPhoneAlt />, title: "Phone", content: "+1 234 567 890" },
    { icon: <FaEnvelope />, title: "Email", content: "huynq.forwork@gmail.com" },
    { icon: <FaMapMarkedAlt />, title: "Address", content: "123 Main St, City, Country" },
]
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem, SelectLabel } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";


export default function Contact() {
    return (
        <motion.section
            className="py-6"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { duration: 0.5, ease: "easeIn", delay: 1 }
            }}


        >
            <div className="container">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" >
                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            <p className="text-white/60">
                                I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                                <br /> Whether you have a question or just want to say hi, feel free to reach out.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" placeholder="Your First Name" />
                                <Input type="lastname" placeholder="Your Last Name" />
                                <Input type="email" placeholder="Your Email" />
                                <Input type="phone" placeholder="Your Phone Number" />
                            </div>
                            <Select>
                                <SelectTrigger  >
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="bg-[#27272c] text-white border border-gray-600 rounded-lg">
                                    <SelectGroup>
                                        <SelectLabel className="text-white/60">Select a service</SelectLabel>
                                        <SelectItem value="Web Development" >Web Development</SelectItem>
                                        <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                                        <SelectItem value="Mobile App Development" >Mobile App Development</SelectItem>
                                        <SelectItem value="SEO" >SEO</SelectItem>
                                        <SelectItem value="Other" >Other</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea placeholder="Your Message" className="h-[200px]" />
                        </form>
                    </div>
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="text-accent rounded-md flex items-center justify-center w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c]">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className=" text-white/60">{item.title}</h3>
                                        <p className="text-xl">{item.content}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section >
    )
}
