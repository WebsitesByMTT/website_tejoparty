import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const PrivacyPolicy = () => {
    const data = {
        navbar: {
            button: {
                text: "Add to chrome Now Its free",
                link: "/",
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
            }
        }
    }

    return (
        <div className="bg-gradient-to-b  from-[#B6F1F0] to-[#FFF] text-[#000] m-auto">
            <Navbar data={data.navbar} />
            <div className="bg-gradient-to-b  from-[#B6F1F0] to-[#FFF] px-[10%] pt-[4rem] pb-[10%]">
                <div className="md:w-[60%] w-[95%] md:min-w-[550px] mx-auto flex flex-col gap-10 items-center">
                    <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r  from-[#212876] to-[#009082] font-extrabold text-[3.5rem] uppercase">Privacy policy</h1>
                    <p className="text-center text-xl">The privacy policy of the Tejoparty documents contains all types of details that are collected by ourselves. But in case you have any queries about our privacy policy you can freely contact us without any hesitation.
                        For using our website, you need to agree with our privacy policy.
                    </p>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-3xl text-center capitalize font-[#221E1F] font-medium">Information we collect</h3>
                        <p className="text-center text-xl">When you register for an account on our website, we may ask for such information including your name, email address, phone number, company name, or permanent address. But if you are worried about leaking your personal information then worry not because we do not share our customer&apos;s information without their consent.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-3xl text-center capitalize font-[#221E1F] font-medium">How we use your information</h3>
                        <p className="text-center text-xl">We use your information in various ways including to provide, operate, and maintain our website. We improve and personalize our website. We understand and analyze how you use our website. We communicate with you either directly or indirectly through our customer service to provide you with the latest updates and other information relating to our website.</p>
                    </div>
                </div>
            </div>
            <Footer data={data.footer} />
        </div>
    )
}

export default PrivacyPolicy;