import Navbar from "./component/Navbar";
import section1 from "../../public/section1.png"
import Image from "next/image";
import Button from "./component/Button";
import Waves from "./component/Waves";

const data = {
  section1: {
    navbar: {
      button: {
        text: "Add to chrome Now Its free",
        link: "/"
      },
      link: "About Us",
    },
    heading: "Use Tejoparty to Start",
    name: "A WatchParty",
    subHeading: "It is the best extension where you can explore all the latest shows",
    text: "How many times, that you planned your movie date with your loved ones and canceled due to your hectic work schedules? But not anymore! As with this extension Tejoparty, you don’t need to cancel your movie nights. Because in Tejoparty you will find numerous latest movies, shows, and series on one platform. The best part is here you can start your own watch party where you can invite as many as your friends and have a chit-chat while watching a movie. It will give you a feel like you are sitting next to them and having lots of fun together. Whether you are a Netflix person or a Prime, there is everything for everyone. You can host a Hulu watch party, Netflix watch party, YouTube watch party, HBO Max watch party, Disney Plus watch party, Amazon watch party, and many others. ",
    button: {
      text: "Add to chrome Now Its free",
      link: "/"
    },
  },
  section2: {
    heading: "What is ",
    gradientText: "Tejowatch Party",
    cardOne: "In this digital era, where we all are busy in our hectic work schedules. We did not get time to connect with our loved ones and it's been ages since we met them in real and watched movies in theatres. So, in that case, the Tejowatch party is the ultimate solution where you can binge yourself on a vast variety of movies and shows. It is a very easy way to connect with your friends and family, who live miles away from you. ",
    cardTwo: "Furthermore, it is a modern option for people who are seeking other forms of entertainment. This amazing extension has some attractive features such as you can discuss your favorite scene while watching a movie or a show or you can send a funny emoji to them. Apart from this, you can invite as many people to join the viewing party. Tejowatch party can run smoothly both in Chrome and Firefox.",
  }
}
export default function Home() {
  return (
    <div className="text-[#051704]">
      <Section1 data={data.section1} />
      <Section2 data={data.section2} />
    </div>
  );
}

const Section1 = ({ data }) => {
  return (
    <div className="bg-gradient-to-b  from-[#FFFFFF] to-[#B6F1F0] min-h-screen relative">
      <Navbar data={data.navbar} />
      <div className="flex lg:flex-row lg:gap-0 py-4 items-center justify-between w-[80%] m-auto flex-col gap-6">
        <div className="flex flex-col gap-6 lg:w-[50%] w-[100%]">
          <div>
            <h1 className="font-extrabold text-[3.5rem] font-[#232323]">{data.heading}</h1>
            <h2 className=" inline-block text-transparent bg-clip-text bg-gradient-to-r  from-[#212876] to-[#009082] font-extrabold text-[3.5rem] uppercase">{data.name}</h2>
          </div>
          <h4 className="text-2xl font-light capitalize font-[#221E1F]">
            {data.subHeading}
          </h4>
          <div className="flex flex-col gap-4">
            <p className="text-[1rem] font-light font-[#000]">{data.text}</p>
            <Button data={data.button} />
          </div>
        </div>
        <div className="w-[45%] flex justify-center items-center">
          <Image src={section1} className="h-auto w-full m-auto border-solid border-[0.8rem] border-black rounded-xl" />
        </div>
      </div>
      <Waves />
    </div>
  )
}

const Section2 = ({ data }) => {
  return (
    <div className="bg-gradient-to-b from-[#CBE5E5] to-[#CBE5E5] py-[12rem] flex flex-col items-center justify-center gap-[5rem]">
      <h2 className="font-extrabold text-[3.5rem] font-[#232323]">
        {data.heading}
        <span className="uppercase inline-block text-transparent bg-clip-text bg-gradient-to-r  from-[#212876] to-[#009082] font-extrabold text-[3.5rem]">{data.gradientText}</span>
      </h2>
      <div className="flex justify-evenly text-[1.1rem] text-center">
        <div className="w-[30%] p-6 font-light text-white bg-[#121316] rounded-xl"><p>{data.cardOne}</p></div>
        <div  className="w-[30%] p-6 font-light text-black bg-[#D9A4FD] rounded-xl"><p>{data.cardTwo}</p></div>
      </div>
    </div>
  )
}
