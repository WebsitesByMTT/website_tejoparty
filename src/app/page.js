"use client"
import Navbar from "./component/Navbar";
import section1 from "../../public/section1.png"
import section3 from "../../public/section3.png"
import Image from "next/image";
import Button from "./component/Button";
import Waves from "./component/Waves";
import { useState } from "react";

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
  },
  section3: {
    heading: "Incredible Features of ",
    gradientText: "Tejowatch Party",
    features: [
      {
        heading: "it is for everyone",
        text: "Tejowatch party is the extension that gives you access to multiple streaming services such as Netflix, Prime, Hulu, Disney Plus, HBO Max, and many more. Trust us, all these are the best options to indulge yourself in the huge variety of latest movies and series. So, YouTube watch together with close ones."
      },
      {
        heading: "Control watch party",
        text: "It’s simply up to you whether you want to host a party or not. While streaming you will the button Only I Have Control where you can be the real boss of your watch party.  You pause, play, rewind, or do anything that you want while hosting a party. Isn’t it interesting?"
      },
      {
        heading: "Group watch",
        text: "Group watch is the best part of the Tejowatch party, as from now onwards you don’t have to wait for any vacation to enjoy movies with your special ones. As with Tejowatch Party, you can plan a virtual movie date with your partner or you can also invite many more friends to connect. One of its amazing features is you can have a conversation while group-watching. So, send funny emojis and express your actual mood while streaming."
      },
      {
        heading: "worldwide accessibility",
        text: "Doesn’t matter where you are, it is easily downloadable from every corner of the world. With just a few simple steps you can install the extension on your browser including Chrome and Firefox. So, create a memorable moment with your dear ones and download the Tejowatch party extension now."
      },
      {
        heading: "HD Quailty Video",
        text: "This extension gives you high-resolution streaming and synchronization. It will also improve your streaming experience beyond all doubt. Whether it is an old movie or the latest one, you will get to watch it in high HD quality. So, share it with your friends now and start a party."
      },
      {
        heading: "customize your profiles",
        text: "With this amazing extension, you can personalize your chat profile with the addon and you can also add some fun to your virtual watch party. In addition, you will have the option to create your own avatar from the collection to use it as your profile picture. After selecting your avatar, choose a cute nickname on your Tejowatch party extension profile."
      },

    ]
  },
  section5: {
    heading: " to use the extension ",
    gradientText: "Steps",
    steps: [
      {
        heading: "Install the Tejowatch Party",
        text: "To have a thrilling experience at the Tejowatch party, you need to make sure that you have installed the extension in your browser. There are two ways to install the extension that first you can search for the Tejoparty on your browser and download the extension or you can directly install the extension from our official website. "
      },
      {
        heading: "Pin the Extension",
        text: "After installing it on your browser, now you can pin it to the toolbar of your web browser. Just Right-click the TP symbol and then press the pin icon to pin the TP button to the toolbar."
      },
      {
        heading: "Sign up for your account",
        text: "Now you can open your most preferred streaming platform including Netflix, Amazon Prime, Hulu, HBO Max, and many more. But before that remember that you should have a valid account or a subscription to these streaming websites. In case you do not have an account then don’t worry, you can still create a new account. Then you can host a watch party and invite your loved ones to enjoy movies or shows."
      },
      {
        heading: "Search and Stream",
        text: "After that, you can search for your favorite movies or series and watch together with friends and family. Now it's up to you whether you want to host a party or stream it alone."
      },
      {
        heading: "Host a watch party",
        text: "Click a watch party option and invite all your friends to binge movies together. It’s just you need to share a link to watch party with them, then after sending it, you can start a party. Now, grab a bucket of popcorn have a comfy blanket, and enjoy movies or series with your friends and family."
      },
      {
        heading: "Become a Tejoparty member",
        text: "After logging into your streaming account, tap a Tejoparty invitation.  By simply clicking a link, become a member of the party and have a great experience at the Tejowatch party."
      }
    ]
  }
}
export default function Home() {
  return (
    <div className="text-[#051704]">
      <Section1 data={data.section1} />
      <Section2 data={data.section2} />
      <Section3 data={data.section3} />
      <Section4 data={data.section4} />
      <Section5 data={data.section5} />
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
          <Image src={section1} alt="" className="h-auto w-full m-auto border-solid border-[0.8rem] border-black rounded-xl" />
        </div>
      </div>
      <Waves />
    </div>
  )
}

const Section2 = ({ data }) => {
  return (
    <div className="bg-gradient-to-b from-[#CBE5E5] to-[#CBE5E5] pt-[12rem] flex flex-col items-center justify-center gap-[5rem] relative">
      <h2 className="font-extrabold text-[3.5rem] font-[#232323]">
        {data.heading}
        <span className="uppercase inline-block text-transparent bg-clip-text bg-gradient-to-r  from-[#212876] to-[#009082] font-extrabold text-[3.5rem]">{data.gradientText}</span>
      </h2>
      <div className="flex justify-evenly text-[1.1rem] text-center">
        <div className="w-[33%] p-6 py-8 font-light text-white bg-[#121316] rounded-xl leading-7 tracking-wide"><p>{data.cardOne}</p></div>
        <div className="w-[33%] p-6 py-8 font-light text-black bg-[#D9A4FD] rounded-xl leading-7 tracking-wide"><p>{data.cardTwo}</p></div>
      </div>
    </div>
  )
}

const Section3 = ({ data }) => {
  const [active, setActive] = useState(null);
  const handleClick = (index) => {
    setActive(index === active ? null : index);
  };

  return (
    <div className="bg-gradient-to-tr  from-[#CEFD82] to-[#83D34A] min-h-screen h-auto relative">
      <svg width="1920" height="160" viewBox="0 0 1920 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V75.762C0 75.762 303.934 159.594 556 159.594C681.877 159.594 808.997 130.807 936.492 101.935C1064.74 72.8914 1193.37 43.762 1321.5 43.762C1566.62 43.762 1920 159.594 1920 159.594V0H0Z" fill="url(#paint0_linear_465_896)" />
        <defs>
          <linearGradient id="paint0_linear_465_896" x1="960" y1="-542.738" x2="960" y2="200.762" gradientUnits="userSpaceOnUse">
            <stop stop-color="#CBE5E5" />
            <stop offset="1" stop-color="#CBE5E5" />
          </linearGradient>
        </defs>
      </svg>
      <h2 className="font-extrabold text-[3.5rem] font-[#232323] text-center capitalize">
        {data.heading}
      </h2>
      <h2 className="uppercase text-center text-transparent bg-clip-text bg-gradient-to-r  from-[#212876] to-[#009082] font-extrabold text-[3.5rem]">{data.gradientText}</h2>
      <div className="flex w-[80%] m-auto p-6 py-16 relative">
        <div className=" flex flex-col justify-evenly z-10">

          {data.features.map((item, index) => (
            <div className="w-fit" onClick={() => handleClick(index)} key={index} style={{ position: 'relative' }}>
              <p
                className={`text-3xl font-extralight capitalize leading-[4.5rem] p-4 text-center transition-all duration-150 ${active === index ? 'active' : ''
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
        <div style={{ backgroundImage: 'url(./section3.png)' }} className="flex items-center justify-center flex-col w-[75%] bg-[#CEEADC] border-solid border-black border-[3px] rounded-md">
          {data.features.map((item, index) => (
            <p
              key={index}
              className={`w-[70%] z-10 transition-all ease duration-300 translate-y-[-100%] text-center text-xl font-light ${active === index ? 'opacity-1 translate-y-0 visible h-auto' : 'opacity-0 invisible h-0'}`}
            >
              {item.text}
            </p>
          ))}
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="94" viewBox="0 0 1920 94" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 26.4476V94H1920V70.71C1920 70.71 1579.86 11.0273 1297.5 0.873901C1147.9 -4.50579 998.801 15.9001 851.801 36.0191C724.278 53.4725 598.332 70.71 475 70.71C285.481 70.71 0 26.4476 0 26.4476Z" fill="url(#paint0_linear_508_1403)" />
        <defs>
          <linearGradient id="paint0_linear_508_1403" x1="960" y1="0" x2="960" y2="94.0001" gradientUnits="userSpaceOnUse">
            <stop offset="1" stop-color="#fff" />
            <stop stop-color="#fff" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

const Section4 = ({ data }) => {
  return (
    <div className="bg-gradient-to-b  from-[#FFF] to-[#B6F1F0] h-auto relative pt-28">
      <div className="mx-auto h-[60vh] w-[50vw] bg-black rounded-xl p-5 mb-28">
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="182" viewBox="0 0 1920 182" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 89.5V182H1920V30C1920 30 1587.45 89.5 1354.5 89.5C1235.37 89.5 1125.48 70.9258 1005.82 50.7007C862.809 26.5293 705.849 0.000488281 502.5 0C317.868 0 0 89.5 0 89.5Z" fill="url(#paint0_linear_508_1410)" />
        <defs>
          <linearGradient id="paint0_linear_508_1410" x1="-1.77065e-05" y1="83.1796" x2="1489.46" y2="1724.77" gradientUnits="userSpaceOnUse">
            <stop offset="0.363984" stop-color="#E4E6F8" />
            <stop offset="0.803186" stop-color="#E4E6F8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

const Section5 = ({ data }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b  from-[#E4E6F8] to-[#9EA3FA] flex items-center flex-col gap-10">
      <h2 className=" text-center uppercase text-transparent bg-clip-text bg-gradient-to-r  from-[#212876] to-[#009082] font-extrabold text-[3.5rem]">
        {data.gradientText}
        <span className="font-extrabold capitalize text-[3.5rem] text-[#232323] bg-clip-none ">{data.heading}</span>
      </h2>
      <div className="flex flex-col w-[50%]">
        {data.steps.map((item, index) => (
          <div className="px-5 py-2" key={index}>
            <h4 className="text-xl font-semibold">{item.heading}</h4>
            <p className="text-large font-light">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}