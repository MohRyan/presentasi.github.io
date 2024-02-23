import { Link } from "react-router-dom"
import logo from "../assets/images/logo-merah.svg"
import { Button } from "./Button"
import { useState } from "react"

export const Navbar = () => {
    const [isLogin, setIsLogin] = useState<boolean>(true)

    const On = () => {
        setIsLogin(false)
    }
    const Off = () => {
        setIsLogin(true)
    }


    return (
        <div className="bg-black flex justify-center w-screen">
            <div className=" flex justify-between w-[1440px] h-[64px]">
                <div className="flex items-center">
                    <img src={logo} alt="" />
                    <p className="text-white ps-3 font-bold text-xl">PEMILU PRESIDEN DUMWAYS.ID</p>
                </div>
                <div className="flex justify-center py-5">
                    <button onClick={On} className={` bg-red-700 text-white flex items-center rounded-sm py-1 px-6 w-full font-bold `}>Login</button>
                    <button onClick={Off} className={` ms-5 bg-red-700 text-white flex items-center rounded-sm py-1 px-6 w-full font-bold `}>LogOut</button>
                </div>
                <div className="flex items-center">
                    <ul className="flex text-white space-x-5 me-10 font-bold">
                        <li><Link to="#">Partai</Link></li>
                        <li>|</li>
                        <li><Link to="#">Paslon</Link></li>
                        <li>|</li>
                        <li><Link to="#">Voting</Link></li>
                    </ul>
                    {isLogin !== true ? (
                        <Button bg={"bg-white rounded-full"} hover={"hover:bg-red-700 hover:text-white"} title={"Moh Ryan"} />
                    ) : (<div className="flex">

                        <Link to="/login"><Button bg={"bg-white me-3"} hover={"hover:bg-red-700 hover:text-white"} title={"Login"} /></Link>
                        <Link to="/register"><Button bg={"bg-white"} hover={"hover:bg-red-700 hover:text-white"} title={"Register"} /></Link>
                    </div>
                    )}



                </div>
            </div>
        </div>
    )
}
