"use client";
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation';
import Stairs from './Stairs';


export default function StairTransition() {
    return (
        <AnimatePresence>
            <div key={pathName}>
                <div className='h-screen w-screen fixed top-0 left-0 right-0 z-40 pointer-events-none flex' >
                    <Stairs />
                </div>
            </div>
        </AnimatePresence >
    )
}
