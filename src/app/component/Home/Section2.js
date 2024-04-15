const Section2 = ({ data }) => {
    return (
        <div className="bg-gradient-to-b from-[#CBE5E5] to-[#CBE5E5] pt-[200px] flex flex-col items-center justify-center gap-[5rem] relative">
            <h2 className="font-extrabold text-[3.5rem] font-[#232323] text-center">
                {data.heading}
                <span className="uppercase inline-block text-transparent bg-clip-text bg-gradient-to-r  from-[#212876] to-[#009082] font-extrabold text-[3.5rem]">{data.gradientText}</span>
            </h2>
            <div className="flex md:flex-row flex-col  gap-10 justify-evenly text-[1.1rem] text-center items-center md:items-stretch">
                <div className="md:w-[35%]  w-[90%] p-6 py-8 font-light text-white bg-[#121316] rounded-xl leading-7 tracking-wide"><p>{data.cardOne}</p></div>
                <div className="md:w-[35%]  w-[90%]  p-6 py-8 font-light text-black bg-[#D9A4FD] rounded-xl leading-7 tracking-wide"><p>{data.cardTwo}</p></div>
            </div>
        </div>
    )
}

export default Section2;
