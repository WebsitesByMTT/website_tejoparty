"use client"
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const Section3 = ({ data }) => {
    const [active, setActive] = useState(null);
    const [intervalId, setIntervalId] = useState(null);
    const { ref, inView } = useInView();


    useEffect(() => {
        if (inView) {
            const timer = setInterval(() => {
                setActive(prevActive => (prevActive === null ? 0 : (prevActive + 1) % data.features.length));
            }, 2000);

            setIntervalId(timer);


            return () => clearInterval(timer);
        }
        setActive(null);
    }, [data.features.length, inView]);

    const handleClick = (index) => {
        clearInterval(intervalId);
        setActive(index === active ? null : index);
    };

    return (
        <div ref={ref} className="bg-gradient-to-tr  from-[#CEFD82] to-[#83D34A] h-auto relative cursor-default min-h-screen flex flex-col justify-between">
            <svg width="1920" height="160" viewBox="0 0 1920 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 0V75.762C0 75.762 303.934 159.594 556 159.594C681.877 159.594 808.997 130.807 936.492 101.935C1064.74 72.8914 1193.37 43.762 1321.5 43.762C1566.62 43.762 1920 159.594 1920 159.594V0H0Z" fill="url(#paint0_linear_465_896)" />
                <defs>
                    <linearGradient id="paint0_linear_465_896" x1="960" y1="-542.738" x2="960" y2="200.762" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#CBE5E5" />
                        <stop offset="1" stopColor="#CBE5E5" />
                    </linearGradient>
                </defs>
            </svg>
            <h2 className="font-extrabold text-[3.5rem] font-[#232323]  pt-10 text-center capitalize">
                {data.heading}
            </h2>
            <h2 className="uppercase text-center text-transparent bg-clip-text bg-gradient-to-r from-[#212876] to-[#009082] font-extrabold text-[3.5rem]">{data.gradientText}</h2>
            <div className="flex justify-evenly w-[100%] md:w-[80%] m-auto p-6 py-16 relative">
                <div className="flex flex-col justify-evenly z-10">
                    {data.features.map((item, index) => (
                        <div className="w-fit" onClick={() => handleClick(index)} key={index} style={{ position: 'relative' }}>
                            <p
                                className={`md:text-3xl text-xl font-extralight capitalize md:leading-[4.5rem] leading-10 p-2 md:p-4 text-left transition-all duration-150 ${active === index ? 'active' : ''
                                    }`}
                                style={{
                                    transform: active === index ? 'scale(1.2)' : 'none',
                                    color: active === index ? 'white' : 'initial',
                                    backgroundColor: active === index ? 'black' : 'initial',
                                    borderRadius: active === index ? '0.5rem' : 'initial',
                                    fontWeight: active === index ? 400 : 'initial',
                                }}
                            >
                                {item.heading}
                            </p>
                        </div>
                    ))}
                </div>
                <div style={{ backgroundImage: 'url(./section3.png)' }} className="flex overflow-hidden items-center justify-center flex-col w-[55%] lg:w-[60%] bg-[#CEEADC] border-solid border-black border-[3px] rounded-md">
                    {data.features.map((item, index) => (
                        <p
                            key={index}
                            className={`w-[90%] z-10 transition-all ease duration-300 text-center text-large md:text-xl font-light ${active === index ? 'opacity-1 translate-y-0 visible h-auto' : 'opacity-0 invisible translate-y-[100%] h-0'}`}
                        >
                            {item.text}
                        </p>
                    ))}
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="94" viewBox="0 0 1920 94" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 26.4476V94H1920V70.71C1920 70.71 1579.86 11.0273 1297.5 0.873901C1147.9 -4.50579 998.801 15.9001 851.801 36.0191C724.278 53.4725 598.332 70.71 475 70.71C285.481 70.71 0 26.4476 0 26.4476Z" fill="url(#paint0_linear_508_1403)" />
                <defs>
                    <linearGradient id="paint0_linear_508_1403" x1="960" y1="0" x2="960" y2="94.0001" gradientUnits="userSpaceOnUse">
                        <stop offset="1" stopColor="#fff" />
                        <stop stopColor="#fff" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}

export default Section3;