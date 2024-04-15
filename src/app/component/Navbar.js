"use client"
import logo from "../../../public/logo.png"
import Image from "next/image";
import Button from "./Button";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const Navbar = ({ data }) => {
    const [logoRedirectUrl, setlogoRedirectUrl] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("");
    const router = useRouter();
    const pathname = usePathname();
    useEffect(() => {
        const currentLanguage = pathname.substring(1);
        console.log("CURRENT LAG : ", currentLanguage);
        setSelectedLanguage(currentLanguage);
    }, [pathname]);

    useEffect(() => {
        switch (selectedLanguage) {

            case "german":
                setlogoRedirectUrl("/german");
                break;

            case "portuguese":
                setlogoRedirectUrl("/portuguese");
                break;

            default:
                setlogoRedirectUrl("/");
                break;
        }
    }, [selectedLanguage]);

    const handleLanguageChange = (language) => {
        if (language === "english") {
            router.push("/");
        } else {
            router.push(`/${language}`);
        }
        setSelectedLanguage(language);
    };
    return (
        <div className="flex justify-between px-6 lg:px-14 relative">
            <Image src={logo} className="w-[30%] max-w-[200px]" alt="logo" />
            <ul className="flex items-center gap-10 font-light text-xl ">
                {/* <li>{data.link}</li> */}
                <li>

                    <select className="block w-full text-[1.1rem] text-center text-black border-[#55BF88] bg-[#55bf8847] border-2 p-3 py-2 rounded-[4rem] appearance-none focus:outline-none focus:ring-0 peer"
                        value={selectedLanguage}
                        onChange={(e) => handleLanguageChange(e.target.value)}
                    >
                        <option value="english">English</option>
                        <option value="german">German</option>
                        <option value="portuguese">Portuguese</option>
                    </select>
                </li>
                <li className="hidden md:block"><Button data={data.button} /></li>
            </ul>
            {/* <div className="flex md:hidden items-center" onClick={() => setIsOpen((prev) => !prev)} >{isOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-align-justify"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>}</div>
            {isOpen &&
                <ul className="md:hidden flex flex-col absolute top-[60px] left-0 py-10 gap-10 font-light text-xl w-full px-6 bg-[#f9fcfac4] backdrop-blur-sm rounded-bl-2xl rounded-br-2xl">
                    <li>
                        <form className="w-fit">
                            <select className="block w-full text-[1.1rem] text-center text-black border-[#55BF88] bg-[#55bf8847] border-2 p-3 py-2 rounded-[4rem] appearance-none focus:outline-none focus:ring-0 peer"
                                value={selectedLanguage}
                                onChange={(e) => handleLanguageChange(e.target.value)}
                            >
                                <option value="english">English</option>
                                <option value="german">German</option>
                                <option value="portuguese">Portuguese</option>
                            </select>
                        </form>
                    </li>
                    <li><Button data={data.button} /></li>
                </ul>} */}
        </div>
    )
}

export default Navbar