import { motion } from "framer-motion"

const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    }
}
const reserveIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
}

export default function Stairs() {
    return (
        <>
            {/*render 6 motion div each div representing a step of the stairs
        each div will have same animation defined by StairAnimaiton
        the delay of each div is calculated dynamically by the reserved index of the div
        creating a staggered effect with decreasing delay */}


            {[...Array(6)].map((_, index) => {
                return (
                    <motion.div
                        key={index}
                        variants={stairAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 0.4,
                            delay: reserveIndex(index) * 0.1,
                            ease: "easeInOut",
                        }}
                        className="h-full w-full bg-white relative"
                    />)
            })}

        </>
    )
}
