"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import avatar from "../public/assets/photo2.png";
export default function Photo() {
    return (
        <div className="w-full h-full relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 1, duration: 0.4, ease: "easeIn" },
                }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 1.4, duration: 0.4, ease: "easeInOut" },
                    }}
                    className="absolute w-[298px] h-[298px] xl:w-[490px] xl:h-[490px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Image
                        fill
                        src={avatar}
                        alt="avatar"
                        priority
                        quality={100}
                        className="object-contain"
                    />
                </motion.div>

                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 506 506"
                    fill="transparent"
                    className="w-[300px] xl:w-[506px] h:[300px] xl:h-[506px]"
                >
                    <motion.circle
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reserve",
                        }}

                        strokeLinecap="round"
                        strokeLinejoin="round"
                        cx="253" cy="253" r="250" stroke="#00ff99" strokeWidth="4" />
                </motion.svg>
            </motion.div>
        </div>
    )
}
