import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiBootstrap, SiC, SiCss3, SiExpress, SiHtml5, SiJavascript, SiMongodb, SiPython, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import { FaJava } from "react-icons/fa6";

const iconVariable = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

function Technologies() {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">Technologies</motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariable(5.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiJavascript className="text-7xl text-yellow-500" />
                </motion.div>
                <motion.div
                    variants={iconVariable(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-500" />
                </motion.div>
                <motion.div
                    variants={iconVariable(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-500" />
                </motion.div>
                <motion.div
                    variants={iconVariable(3.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-500" />
                </motion.div>
                <motion.div
                    variants={iconVariable(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiExpress className="text-7xl text-cyan-700" />
                </motion.div>
                <motion.div
                    variants={iconVariable(4.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiHtml5 className="text-7xl text-orange-500" />
                </motion.div>
                <motion.div
                    variants={iconVariable(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiCss3 className="text-7xl text-blue-400" />
                </motion.div>
                <motion.div
                    variants={iconVariable(5.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTailwindcss className="text-7xl text-blue-700" />
                </motion.div>
                <motion.div
                    variants={iconVariable(5.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiBootstrap className="text-7xl text-purple-700" />
                </motion.div>
                <motion.div
                    variants={iconVariable(5.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiC className="text-7xl" />
                </motion.div>
                <motion.div
                    variants={iconVariable(5.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJava className="text-7xl" />
                </motion.div>
                <motion.div
                    variants={iconVariable(5.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPython className="text-7xl" />
                </motion.div>
            </motion.div>
        </div >
    );
};

export default Technologies;