import Button from "../Button";

const Section6 = ({ data }) => {
    return (
        <div className="bg-gradient-to-b  from-[#fff] to-[#B6F1F0]">
            <h2 className="font-extrabold text-[3.5rem] font-[#232323] text-center capitalize">
                {data.heading}
            </h2>
            <h2 className="uppercase text-center text-transparent bg-clip-text bg-gradient-to-r  from-[#212876] to-[#009082] font-extrabold text-[3.5rem]">{data.gradientText}</h2>
            <p className="mt-10 w-[90%] md:w-[40%] m-auto text-xl text-center">{data.text}</p>
            <div className="flex justify-center items-center mt-20">
                <Button data={data.button} />
            </div>
            <svg width="1925" height="205" viewBox="0 0 1925 205" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1925 205V0C1925 0 1712.29 80 1504.5 80C1354.55 80 1178.88 70.4775 1002.28 60.9043C823.778 51.228 644.321 41.5 489.5 41.5C224.167 41.5 0 107 0 107V205H1925Z" fill="url(#paint0_linear_508_2092)" />
                <defs>
                    <linearGradient id="paint0_linear_508_2092" x1="1925" y1="7.47957" x2="1799.61" y2="632.254" gradientUnits="userSpaceOnUse">
                        <stop offset="0.368046" stopColor="#CEFD82" />
                        <stop offset="0.803186" stopColor="#CEFD82" />
                    </linearGradient>
                </defs>
            </svg>

        </div>
    )
}

export default Section6;