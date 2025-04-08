"use client";
import React from 'react'
import CountUp from 'react-countup'
const stats = [
    {
        num: 3,
        text: 'Months of Experience',
    },
    {
        num: 10,
        text: 'Project Completed',
    },
    {
        num: 11,
        text: 'Technologies mastered',
    },
    {
        num: 513,
        text: 'Code commits',
    }
]
export default function Stats() {
    return (
        <section className='pt-4 pb-12 xl:pb-0 xl:pt-0   '>
            <div className='container mx-auto'>
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((Item, index) => {
                        return (
                            <div
                                key={index}
                                className='flex flex-1 gap-4 items-center justify-center xl:justify-start'>
                                <CountUp
                                    end={Item.num}
                                    duration={5}
                                    delay={1}
                                    className='text-4xl xl:text-5xl font-semibold' />
                                <p className={`${Item.text.length < 15 ? 'max-width-[100px]' : 'max-width-[150px]'} leading-snug text-white/80`}>{Item.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
