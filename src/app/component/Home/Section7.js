"use client"
import { useState } from "react";
const Section7 = ({ data }) => {
    const [openIndex, setOpenIndex] = useState(null);
    return (
        <div className="bg-gradient-to-b from-[#CEFD82] to-[#83D34A]">
            <h2 className="font-extrabold text-[3.5rem] font-[#232323] text-center capitalize">{data.heading}</h2>
            <div className="flex flex-col gap-6 md:w-[60%] w-[90%] mx-auto mt-28">
                {data.faq.map((item, index) => (
                    <div key={index}>
                        <div onClick={() => setOpenIndex(openIndex === index ? null : index)} className="flex justify-between px-5 py-7 hover:bg-[#C2DAFF] bg-[#E0ECFF] rounded-md transition-all duration-300 ease-in-out">
                            <p className="font-normal text-xl">{item.ques}</p>
                            <div className={openIndex === index ? 'transform rotate-180 transition-transform duration-300 ease' : 'transition-transform duration-300 ease'}>
                                <svg height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.7076 12.7075L16.7076 22.7075C16.6147 22.8005 16.5044 22.8742 16.383 22.9246C16.2616 22.9749 16.1315 23.0008 16.0001 23.0008C15.8686 23.0008 15.7385 22.9749 15.6171 22.9246C15.4957 22.8742 15.3854 22.8005 15.2926 22.7075L5.29256 12.7075C5.15254 12.5676 5.05718 12.3894 5.01853 12.1953C4.97988 12.0012 4.99968 11.8 5.07543 11.6172C5.15119 11.4344 5.27948 11.2782 5.44407 11.1683C5.60867 11.0584 5.80216 10.9998 6.00006 11H26.0001C26.198 10.9998 26.3914 11.0584 26.556 11.1683C26.7206 11.2782 26.8489 11.4344 26.9247 11.6172C27.0004 11.8 27.0202 12.0012 26.9816 12.1953C26.9429 12.3894 26.8476 12.5676 26.7076 12.7075Z" fill="#4098FF" />
                                </svg>
                            </div>
                        </div>
                        <div
                            className={`px-5 font-light text-xl  bg-[#ffffff1c] rounded-md ${openIndex === index ? 'py-5 max-h-[500px] transition-all duration-300 ease-in-out opacity-100' : 'max-h-0 overflow-hidden transition-all duration-300 ease-in-out opacity-0'
                                }`}
                        >
                            {item.ans}
                        </div>
                    </div>
                ))}
            </div>
            <svg width="1925" height="158" viewBox="0 0 1925 158" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1504.5 95.4998C1743.47 95.8912 1925 -7.62939e-05 1925 -7.62939e-05V158H0V95.4999C0 95.4999 257.689 56.9995 537.5 56.9995C647.716 56.9995 826.31 66.3078 1007.87 75.7709C1193.67 85.4544 1382.57 95.3001 1504.5 95.4998Z" fill="url(#paint0_linear_508_2091)" />
                <defs>
                    <linearGradient id="paint0_linear_508_2091" x1="1925" y1="7.47957" x2="1799.61" y2="632.254" gradientUnits="userSpaceOnUse">
                        <stop offset="0.368046" stopColor="white" />
                        <stop offset="0.803186" stopColor="white" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}

export default Section7;