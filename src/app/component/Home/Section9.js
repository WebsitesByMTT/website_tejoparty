const Section9 = ({ data }) => {
    return (
        <div className="bg-gradient-to-b from-[#E4E6F8] to-[#9EA3FA] ">
            <div className="flex gap-12 flex-col w-[60%] md:w-[40%] m-auto items-center justify-center text-center">
                <h2 className="font-extrabold text-[3.5rem] font-[#232323]">
                    {data.heading}
                    <span className="uppercase inline-block text-transparent bg-clip-text bg-gradient-to-r  from-[#212876] to-[#009082] font-extrabold text-[3.5rem]">{data.gradientText}</span>
                </h2>
                <p className="text-[1.1rem] font-light" >{data.text}</p>
            </div>
            <svg width="1920" height="120" viewBox="0 0 1920 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 14.0001V119.999H1920V48.4086C1920 48.4086 1634.74 9.15527e-05 1431 9.15527e-05C1297.49 9.15527e-05 1150.47 22.8407 1000.22 46.1816C843.251 70.5678 682.763 95.5001 530.5 95.5001C285.376 95.5001 0 14.0001 0 14.0001Z" fill="#fff" />
            </svg>


        </div>
    )
}

export default Section9;