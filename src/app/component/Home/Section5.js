"use client"
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";

const Section5 = ({ data }) => {
    const { ref, inView } = useInView();

    return (
        <div ref={ref} className="min-h-screen bg-gradient-to-b  from-[#E4E6F8] to-[#9EA3FA] flex items-center flex-col gap-[3.5rem]">
            <h2 className="text-center uppercase text-transparent bg-clip-text bg-gradient-to-r  from-[#212876] to-[#009082] font-extrabold text-[3.5rem]">
                {data.gradientText}
                <span className="font-extrabold capitalize text-[3.5rem] text-[#232323] bg-clip-none">{data.heading}</span>
            </h2>
            <div className="flex flex-col md:w-[45%] w-[90%] gap-10">
                {data.steps.map((item, index) => (
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{
                            y: inView ? [-50, 0] : 0,
                            opacity: 1,
                            transition: { duration: 1, delay: index === 0 ? null : 0.3 + (index - 1) * 0.3 }
                        }}
                        className="px-5 pt-5 border-dashed border-l-[#BD33E1] border-l-[2px] relative" key={index} >
                        <h4 className="text-2xl capitalize font-semibold leading-6">{item.heading}</h4>
                        <motion.p
                            initial={{ opacity: 0.5 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-xl font-light">{item.text}</motion.p>
                        <div className="absolute w-3 h-3 rounded-[100%] bg-[#BD33E1] left-[-4.5px] bottom-[-4px] md:left-[-6px] md:bottom-[-6px]"></div>
                    </motion.div>
                ))}
            </div>
            <svg
                width="1925"
                viewBox="0 0 1925 272"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <mask
                    id="mask0_508_2106"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="1925"
                    height="272"
                >
                    <rect width="1925" height="272" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_508_2106)">
                    <path
                        d="M1925 1273.5C1925 1273.5 1743.47 1369.39 1504.5 1369C1263.42 1368.61 760.5 1330.5 537.5 1330.5C257.689 1330.5 0 1369 0 1369V211C0 211 224.167 145.5 489.5 145.5C797.5 145.5 1203 184 1504.5 184C1712.29 184 1925 104 1925 104V1273.5Z"
                        fill="url(#paint0_linear_508_2106)"
                    />
                </g>
                <defs>
                    <linearGradient
                        id="paint0_linear_508_2106"
                        x1="1925"
                        y1="155.844"
                        x2="-210.158"
                        y2="1690.72"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.368046" stopColor="white" />
                        <stop offset="0.803186" stopColor="white" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}

export default Section5;