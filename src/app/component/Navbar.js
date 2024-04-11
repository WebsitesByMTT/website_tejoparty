import logo from "../../../public/logo.png"
import Image from "next/image";
import Button from "./Button";
const Navbar = ({ data }) => {
    return (
        <div className="flex justify-between px-14">
            <Image src={logo} width={200} height={200} alt="logo"/>
            <ul className="flex items-center gap-10 font-light text-xl">
                {/* <li>{data.link}</li> */}
                <li><Button data={data.button} /></li>
            </ul>
        </div>
    )
}

export default Navbar