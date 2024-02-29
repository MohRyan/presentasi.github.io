import { Link } from "react-router-dom"
import logo from "../assets/images/logo-merah.svg"
import { Button } from "./Button"
import { useEffect, useState } from "react"



export const Navbar = (props: any) => {
    const { admin = "hidden", users = "hidden" } = props


    const handleLogout = () => {
        localStorage.clear()
        window.location.href = "/"
    }


    return (
        <div className="fixed z-20 flex justify-center w-screen bg-black">
            <div className=" flex justify-between w-[1440px] h-[64px]">
                <div className="flex items-center">
                    <Link to={"/"}><img src={logo} alt="" /></Link>
                    <p className={`text-white ps-3 font-bold text-xl ${users}`}>PEMILU PRESIDEN DUMWAYS.ID</p>
                    <p className={`text-white ps-3 font-bold text-xl ${admin}`}>DASHBOARD PEMILU</p>
                </div>
                <div className="flex justify-center py-5">
                    {/* <button onClick={On} className={` bg-red-700 text-white flex items-center rounded-sm py-1 px-6 w-full font-bold `}>Login</button>
                    <button onClick={Off} className={` ms-5 bg-red-700 text-white flex items-center rounded-sm py-1 px-6 w-full font-bold `}>LogOut</button> */}
                </div>
                <div className="flex items-center">
                    <ul className={`flex ${users} text-white space-x-5 me-10 font-bold`}>
                        <li><Link to="#">Partai</Link></li>
                        <li>|</li>
                        <li><Link to="#">Paslon</Link></li>
                        <li>|</li>
                        <li><Link to="/vote">Voting</Link></li>
                    </ul>
                    <ul className={`flex ${admin} text-white space-x-5 me-10 font-bold`}>
                        <li><Link to="/listpartai">Partai</Link></li>
                        <li>|</li>
                        <li><Link to="/listpaslon">Paslon</Link></li>
                    </ul>
                    {/* {isLogin !== true ? (
                        <div>
                            <div className={`flex ${users}`}>
                                <Button bg={"bg-white rounded-full"} hover={"hover:bg-red-700 hover:text-white"} title={"Moh Ryan"} />
                                <Link to="#"><Button onClick={handleIsLogin} bg={"bg-red-700 ms-3 text-white"} hover={"hover:bg-second"} title={"LogOut"} /></Link>
                            </div>
                            <div className={`flex ${admin}`}>
                                <Button bg={"bg-white rounded-full"} hover={`hover:bg-red-700 hover:text-white`} title={"Moh Ryan"} />
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className={`flex ${users}`}>
                                <Link to="#"><Button onClick={handleLogin} bg={"bg-red-700 text-white"} hover={"hover:bg-second"} title={"Login"} /></Link>
                                <Link to="#"><Button onClick={handleRegister} bg={"bg-white ms-3"} hover={"hover:bg-red-700 hover:text-white"} title={"Register"} /></Link>
                            </div>
                            <div className={`flex ${admin}`}>
                                <Button bg={"bg-white rounded-full"} hover={`hover:bg-red-700 hover:text-white`} title={"Moh Ryan"} />
                            </div>
                        </div>
                    )} */}
                    <div>
                        <div className={`flex ${users}`}>
                            <Button bg={"bg-white rounded-full"} hover={"hover:bg-red-700 hover:text-white"} title={"Moh Ryan"} />
                            <Link to="#"><Button bg={"bg-red-700 ms-3 text-white"} onClick={handleLogout} hover={"hover:bg-second"} title={"LogOut"} /></Link>
                        </div>
                        <div className={`flex ${admin}`}>
                            <Button bg={"bg-white rounded-full"} hover={`hover:bg-red-700 hover:text-white`} title={"Moh Ryan"} />
                            <Link to="#"><Button bg={"bg-red-700 ms-3 text-white"} onClick={handleLogout} hover={"hover:bg-second"} title={"LogOut"} /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
