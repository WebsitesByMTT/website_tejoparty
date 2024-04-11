"use client"
import Navbar from "./component/Navbar";
import section1 from "../../public/section1.png"
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
  },
  section6: {
    heading: "join a watch party by sharing",
    gradientText: "a URL link",
    text: "To start a party, you need to have a valid account or subscription to streaming services including Netflix, Prime, Hulu, HBO Max, Disney Plus, and many more. Then you can host a party create an invitation URL link and share it with them with whom you want to watch a movie or a show. After accepting it, they can join a party. Remember they must have a Tejowatch party installed on their browser and also a valid subscription to these multiple streaming services. So, the best part is Tejoparty extension is free to use.",
    button: {
      text: "Add to chrome Now Its free",
      link: "/"
    },
  },
  section7: {
    heading: "frequently asked questions",
    faq: [
      {
        ques: "How to watch party works?",
        ans: "After installing the extension on your browser, there will be an option to start a watch party, by clicking that you can create a URL link and share it with your friends and start the party. "
      },
      {
        ques: "How to watch a movie together online?",
        ans: "It’s very simple, you and your friends need to install the extension on your browser. Remember you both have a valid account or a subscription to the streaming service where you want to watch a movie like Netflix, Hulu, HBO Max, Prime, and many others. Then you can click on the start watch party button create a link and share it with whom you want to stream. Now, you can enjoy all your favorite movies with you your friends and family. You will feel like they are sitting just behind you and enjoying."
      },
      {
        ques: "How to do Netflix watch party?",
        ans: "At the Tejowatch party, there is a vast variety of multiple streaming services including Netflix, HBO Max, Paramount, Peacock, and many more. For a Netflix watch party, you need to have a valid account and subscription to Netflix and then select a movie that you want to stream select the watchparty option create a URL link share it with your dear ones, and start a party."
      },
      {
        ques: "How to host a virtual watch party?",
        ans: "Install the extension choose your most preferred streaming website and select a watch party button. Then, create a URL link send it to your friends, and start a virtual watch party."
      },
      {
        ques: "How Do I Start a Watch Party in a Web Browser?",
        ans: "Tejowatch party only works in browsers that is Chrome and Firefox. After installing it on your browser, you can choose one streaming platform and start a party."
      },
      {
        ques: "Is installing the Tejowatch party safe?",
        ans: "Yes, it is absolutely safe and the best part is you can use the extension for free. So, enjoy all your favorite movies without any hassle."
      },
    ]
  },
  section8: {
    heading: "About",
    gradientText: "Tejoparty",
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
      <Section6 data={data.section6} />
      <Section7 data={data.section7} />
      <Section8 data={data.section8} />

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
              className={`w-[70%] z-10 transition-all ease duration-300 text-center text-xl font-light ${active === index ? 'opacity-1 translate-y-0 visible h-auto' : 'opacity-0 invisible translate-y-[100%] h-0'}`}
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
    <div className="min-h-screen bg-gradient-to-b  from-[#E4E6F8] to-[#9EA3FA] flex items-center flex-col gap-[3.5rem]">
      <h2 className="text-center uppercase text-transparent bg-clip-text bg-gradient-to-r  from-[#212876] to-[#009082] font-extrabold text-[3.5rem]">
        {data.gradientText}
        <span className="font-extrabold capitalize text-[3.5rem] text-[#232323] bg-clip-none">{data.heading}</span>
      </h2>
      <div className="flex flex-col w-[40%] gap-10">
        {data.steps.map((item, index) => (
          <div className="px-5 pt-5 border-dashed border-l-[#BD33E1] border-l-[2px] relative" key={index} >
            <h4 className="text-2xl capitalize font-semibold leading-6">{item.heading}</h4>
            <p className="text-[1rem] font-light">{item.text}</p>
            <div className="absolute w-3 h-3 rounded-[100%] bg-[#BD33E1] left-[-6px] bottom-[-6px] "></div>
          </div>
        ))}
      </div>
      <svg
        width="1925"
        height="272"
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

const Section6 = ({ data }) => {
  return (
    <div className="bg-gradient-to-b  from-[#fff] to-[#B6F1F0]">
      <h2 className="font-extrabold text-[3.5rem] font-[#232323] text-center capitalize">
        {data.heading}
      </h2>
      <h2 className="uppercase text-center text-transparent bg-clip-text bg-gradient-to-r  from-[#212876] to-[#009082] font-extrabold text-[3.5rem]">{data.gradientText}</h2>
      <p className="mt-10 w-[40%] m-auto text-xl text-center">{data.text}</p>
      <div className="flex justify-center items-center mt-20">
        <Button data={data.button} />
      </div>
      <svg width="1925" height="205" viewBox="0 0 1925 205" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1925 205V0C1925 0 1712.29 80 1504.5 80C1354.55 80 1178.88 70.4775 1002.28 60.9043C823.778 51.228 644.321 41.5 489.5 41.5C224.167 41.5 0 107 0 107V205H1925Z" fill="url(#paint0_linear_508_2092)" />
        <defs>
          <linearGradient id="paint0_linear_508_2092" x1="1925" y1="7.47957" x2="1799.61" y2="632.254" gradientUnits="userSpaceOnUse">
            <stop offset="0.368046" stop-color="#CEFD82" />
            <stop offset="0.803186" stop-color="#CEFD82" />
          </linearGradient>
        </defs>
      </svg>

    </div>
  )
}

const Section7 = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="bg-gradient-to-b min-h-screen  from-[#CEFD82] to-[#83D34A]">
      <h2 className="font-extrabold text-[3.5rem] font-[#232323] text-center capitalize">{data.heading}</h2>
      <div className="flex flex-col gap-6 w-[60%] mx-auto mt-28">
        {data.faq.map((item, index) => (
          <div key={index}>
            <div onClick={() => setOpenIndex(openIndex === index ? null : index)} className="flex justify-between px-5 py-7 hover:bg-[#C2DAFF] bg-[#E0ECFF] rounded-md transition-all duration-300 ease-in-out">
              <p className="font-normal text-xl">{item.ques}</p>
              <div className={openIndex === index ? 'transform rotate-180 transition-transform duration-300 ease' : 'transition-transform duration-300 ease'}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.7076 12.7075L16.7076 22.7075C16.6147 22.8005 16.5044 22.8742 16.383 22.9246C16.2616 22.9749 16.1315 23.0008 16.0001 23.0008C15.8686 23.0008 15.7385 22.9749 15.6171 22.9246C15.4957 22.8742 15.3854 22.8005 15.2926 22.7075L5.29256 12.7075C5.15254 12.5676 5.05718 12.3894 5.01853 12.1953C4.97988 12.0012 4.99968 11.8 5.07543 11.6172C5.15119 11.4344 5.27948 11.2782 5.44407 11.1683C5.60867 11.0584 5.80216 10.9998 6.00006 11H26.0001C26.198 10.9998 26.3914 11.0584 26.556 11.1683C26.7206 11.2782 26.8489 11.4344 26.9247 11.6172C27.0004 11.8 27.0202 12.0012 26.9816 12.1953C26.9429 12.3894 26.8476 12.5676 26.7076 12.7075Z" fill="#4098FF" />
                </svg>
              </div>
            </div>
            <div
              className={`px-5 font-light text-large  bg-[#ffffff1c] rounded-md ${openIndex === index ? 'py-5 max-h-[500px] transition-all duration-300 ease-in-out opacity-100' : 'max-h-0 overflow-hidden transition-all duration-300 ease-in-out opacity-0'
                }`}
            >
              {item.ans}
            </div>
          </div>
        ))}
      </div>
      <svg width="1925" height="158" viewBox="0 0 1925 158" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1504.5 95.4998C1743.47 95.8912 1925 -7.62939e-05 1925 -7.62939e-05V158H0V95.4999C0 95.4999 257.689 56.9995 537.5 56.9995C647.716 56.9995 826.31 66.3078 1007.87 75.7709C1193.67 85.4544 1382.57 95.3001 1504.5 95.4998Z" fill="url(#paint0_linear_508_2091)" />
        <defs>
          <linearGradient id="paint0_linear_508_2091" x1="1925" y1="7.47957" x2="1799.61" y2="632.254" gradientUnits="userSpaceOnUse">
            <stop offset="0.368046" stop-color="white" />
            <stop offset="0.803186" stop-color="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

const Section8 = ({ data }) => {
  return (
    <div className="flex bg-gradient-to-b  from-[#FFFFFF] to-[#B6F1F0] min-h-screen">
      <div className="w-[50%]">
        <h2 className="font-extrabold text-[3.5rem] font-[#232323]">
          {data.heading}
          <span className="uppercase inline-block text-transparent bg-clip-text bg-gradient-to-r  from-[#212876] to-[#009082] font-extrabold text-[3.5rem]">{data.gradientText}</span>
        </h2>
      </div>
      <div className="w-[50%]">

      </div>
    </div>
  )
}