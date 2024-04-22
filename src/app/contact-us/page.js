"use client"
import emailjs from "@emailjs/browser";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Button from "../component/Button";
const ContactUs = () => {
    const data = {
        navbar: {
            button: {
                text: "Add to chrome Now Its free",
                link: "https://chromewebstore.google.com/detail/tejo-party/anhcmjonklecalmmmpfnefbkkmbahjoi",
                type: "button",
                icon: true
            }
        },
        button: {
            text: "Send Message",
            type: "submit",
        },
        footer: {
            heading: "Get it now, it’s free",
            subtext: "I am ready to join Tejowatch party",
            heading1: "Popular Searches:-",
            keywords: "Watch together with friends, watch party, watchparty, Tejo extension, party extension, amazon party, netflix party, disney plus party, hbo max watch party, youtube party, ad free extension, free party extension, teleparty chrome, teleparty chrome extention, chrome extension teleparty, chrome teleparty, chrome teleparty extension, chrome web store teleparty, google chrome teleparty, netflix party chrome download, netflix party is now teleparty chrome web store, netflix teleparty chrome, netflix teleparty chrome extension, teleparty chrome extension download, teleparty extension chrome, teleparty extension google chrome, teleparty for chrome, teleparty google chrome, teleparty google chrome extension, teleparty ipad chrome",
            heading2: "Disclaimer:- ",
            text: "Tejoparty, Tejo Watchparty Extension, Teleparty Extension, Netflix, HBO Max, Disney Plus Hotstar, Amazon Prime Video, Hulu, Paramount Plus, And Peacock TV are the brands of their respective owners. This website & extension hold no association or membership with any of the mentioned brands or third-party companies.",
            copywrite: "copyright © 2024 Tejoparty. All rights reserved.",
            contactUs: {
                text: "Contact Us",
                link: "/contact-us",
                type: "button",
                icon: false
              },
              privacyPolicy:{
                text: "Privacy Policy",
                link: "/privacy-policy",
                type: "button",
                icon: false
              }
        }
    }
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_SERVICE_ID,
                process.env.NEXT_PUBLIC_TEMPLATE_ID,
                e.target,
                process.env.NEXT_PUBLIC_USER_ID
            )
            .then(
                (result) => {
                    console.log(result);
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };

    return (
        <div className="bg-gradient-to-b  from-[#B6F1F0] to-[#FFF] text-[#000]">
            <Navbar data={data.navbar} />
            <div className="bg-gradient-to-b  from-[#B6F1F0] to-[#FFF] flex h-[90vh]">
                <div className="lg:w-[40%] w-[80%] m-auto">
                    <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r mb-6 from-[#212876] to-[#009082] font-extrabold text-[3.5rem] uppercase">Contact us</h1>
                    <form onSubmit={sendEmail} className="flex flex-col gap-6">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="name" className="text-2xl font-semibold">Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                className="p-4 rounded-md text-large focus:outline-none border-[1px] border-[#000] shadow-[0_4px_0px_0px_rgba(0,0,0,0.9)]"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="text-2xl font-semibold">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                className="p-4 rounded-md text-large focus:outline-none border-[1px] border-[#000] shadow-[0_4px_0px_0px_rgba(0,0,0,0.9)]"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="message" className="text-2xl font-semibold">Message</label>
                            <textarea
                                id="message"
                                rows="8"
                                name="message"
                                placeholder="Enter your message....."
                                className="p-4 rounded-md text-large focus:outline-none border-[1px] border-[#000] shadow-[0_4px_0px_0px_rgba(0,0,0,0.9)]"
                                required
                            ></textarea>
                        </div>
                        <div>
                            {/* <button type="submit">Send Message</button> */}
                            <Button data={data.button} />
                        </div>
                    </form>
                </div>
            </div>
            <Footer data={data.footer} />
        </div >
    );
};

export default ContactUs;