"use client";
import React from 'react'
import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link"
import { motion } from "framer-motion";
const services = [
    {
        nums: '01',
        title: 'Web Development',
        description: 'Building fast, responsive, and modern websites using the latest web technologies.',
        href: '',
    },
    {
        nums: '02',
        title: 'UI/UX Design',
        description: 'Designing intuitive and engaging user interfaces with a focus on user experience.',
        href: '',
    },
    {
        nums: '03',
        title: 'Mobile App Development',
        description: 'Creating seamless mobile applications that run smoothly on both iOS and Android.',
        href: '',
    },
    {
        nums: '04',
        title: 'Web Development',
        description: 'Developing scalable web solutions tailored to your business needs.',
        href: '',
    }
];

export default function Service() {
    return (
        <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
            <div className='container'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 1,
                            duration: 0.4,
                            ease: "easeIn"
                        }
                    }}
                    className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
                >
                    {services.map((service, index) => {
                        return (
                            <div key={index}
                                className='flex-1 flex flex-col justify-center gap-6 group'
                            >
                                <div className='w-full flex justify-between items-center'>
                                    <div className='text-5xl font-extrabold text-outline group-hover:[-webkit-text-stroke:1px_#00ff99] text-transparent transition-all duration-500'>
                                        {service.nums}
                                    </div>
                                    <Link href={service.href}
                                        className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'
                                    >
                                        <BsArrowDownRight className='text-primary text-3xl' />
                                    </Link>
                                </div>
                                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                                <p>{service.description}</p>
                                <div className='border-b border-white/20 w-full'></div>
                            </div>
                        )
                    })}
                </motion.div>
            </div>

        </section>
    )
}
