import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const page = () => {
    const data = {
        navbar: {
            button: {
                text: "Add to chrome Now Its free",
                link: "https://chromewebstore.google.com/detail/tejo-party/anhcmjonklecalmmmpfnefbkkmbahjoi",
                type: "button",
                icon: true
            }
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
                text: "contact Us",
                link: "/contact-us",
                type: "button",
                icon: false
            },
            privacyPolicy: {
                text: "Privacy Policy",
                link: "/privacy-policy",
                type: "button",
                icon: false
            },
            blogs: {
                text: "Blogs",
                link: "/blogs",
                type: "button",
                icon: false
            }
        }
    }
    return (
        <div className="bg-gradient-to-b  from-[#B6F1F0] to-[#FFF] text-[#000] m-auto">
            <Navbar data={data.navbar} />
            <div className='bg-gradient-to-b  from-[#B6F1F0] to-[#FFF] flex h-[90vh]'>
            <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r mb-6 from-[#212876] to-[#009082] font-extrabold text-[3.5rem] uppercase mx-auto">Blogs</h1>
            </div>
            <Footer data={data.footer} />
        </div>
    )
}

export default page