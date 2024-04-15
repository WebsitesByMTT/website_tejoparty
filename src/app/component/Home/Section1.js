import Image from "next/image";
import Button from "../Button";
import Navbar from "../Navbar";
import Waves from "../Waves";
import section1 from "../../../../public/section1.png"


const Section1 = ({ data }) => {
    return (
        <div className="bg-gradient-to-b  from-[#FFFFFF] to-[#B6F1F0] relative">
            <Navbar data={data.navbar} />
            <div className="flex lg:flex-row lg:gap-0 py-4 justify-between w-[80%] md:w-[90%] m-auto flex-col-reverse  gap-6 md:gap-6">
                <div className="flex flex-col md:gap-2 gap-6 lg:w-[50%] w-[100%]">
                    <div>
                        <h1 className="font-extrabold md:text-[3.5rem] text-[2.55rem] font-[#232323] text-center">{data.heading}</h1>
                        <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r  from-[#212876] to-[#009082] font-extrabold text-[3.5rem] uppercase">{data.name}</h2>
                    </div>
                    <h4 className="text-2xl text-center font-light capitalize font-[#221E1F]">
                        {data.subHeading}
                    </h4>
                    <div className="flex flex-col gap-4 m-auto text-left md:text-center lg:m-0 w-fit">
                        <p className="md:text-[1rem] text-[1.3rem] font-light font-[#000] text-center  md:block" dangerouslySetInnerHTML={{ __html: `<span>${data.text}</span>` }}></p>
                        <div className="m-auto  z-[100]"><Button data={data.button} /></div>
                    </div>
                </div>
                <div className="lg:w-[45%] w-full flex justify-center items-center">
                    <Image src={section1} alt="" className="h-auto w-full m-auto border-solid border-[0.8rem] border-black rounded-xl" />
                </div>
            </div>
            <Waves wave3={false} />
        </div>
    )
}

export default Section1;