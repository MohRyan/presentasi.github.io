import { Link } from "react-router-dom"
import logo from "../assets/images/logo-merah.svg"
import { Button } from "./Button"
import { BarChart2, BarChart3, BoxSelectIcon, Ghost, Hammer, HandCoins, Sandwich, Tractor, TractorIcon } from "lucide-react"
import { useState } from "react"



export const Navbar = (props: any) => {
    const { admin = "hidden", users = "hidden" } = props
    const [navbar, setNavbar] = useState<Boolean>(false)


    const handleNavbar = () => {
        setNavbar(!navbar)
    }

    const handleLogoutAdmin = () => {
        localStorage.removeItem("Admin")
        window.location.href = "/"
    }
    const handleLogoutUsers = () => {
        localStorage.removeItem("Users")
        window.location.href = "/"
    }

    const handleImgUsers = () => {
        localStorage.setItem("Users", "users")
    }
    const handleImgAdmin = () => {
        localStorage.setItem("Admin", "admin")
    }

    return (
        <div className="Nav__">
            <div className="flex lg:container w-full justify-between h-[64px]">
                <div className="flex items-center">
                    <Link to={"/users"} onClick={handleImgUsers}><img src={logo} alt="" className={`ps-5 md:ps-0 ${users}`} /></Link>
                    <Link to={"/admin"} onClick={handleImgAdmin}><img src={logo} alt="" className={`pspace-y-3s-5 md:ps-0 ${admin}`} /></Link>
                    <p className={`md:text-white ps-3 font-bold md:text-sm text-black text-xl ${users}`}>PEMILU PRESIDEN DUMWAYS.ID</p>
                    <p className={`text-white ps-3 font-bold text-xl ${admin}`}>DASHBOARD PEMILU</p>
                </div>
                <div className="flex justify-center py-5 cursor-pointer lg:hidden">
                    {
                        !navbar ? <Sandwich onClick={handleNavbar} className="text-white duration-1000 hover:text-red-700" /> : <Sandwich onClick={handleNavbar} className="text-red-500 duration-1000 scale-125 rotate-180 hover:text-red-700" />
                    }


                </div>
                {/* Nav Mobile =============================== */}
                <div className={`${navbar ? "-translate-y-0" : "-translate-y-[140%]"} lg:hidden fixed left-0 z-10 duration-1000 flex-col bg-black top-16`}>
                    <ul className={`flex ${users} cursor-pointer flex-col text-white font-bold border-y-2 bg-slate-400`}>
                        <Link to="/home"><li className="Nav__List__Mobile">Dashboard</li></Link>
                        <li className="Nav__List__Mobile"><Link to="#">Partai</Link></li>
                        <li className="Nav__List__Mobile"><Link to="#">Paslon</Link></li>
                        <Link to="/vote"><li className="Nav__List__Mobile">Voting</li></Link>
                    </ul>
                    <ul className={`flex ${admin} cursor-pointer flex-col text-white font-bold border-y-2 bg-slate-400`}>
                        <Link to="/admin"><li className="Nav__List__Mobile">Dashboard</li></Link>
                        <Link to="/listpartai"><li className="Nav__List__Mobile">Partai</li></Link>
                        <Link to="/listpaslon"><li className="Nav__List__Mobile">Paslon</li></Link>
                    </ul>
                    <div className="w-screen">
                        <div className={`${users}`}>
                            <Button bg={"bg-white w-full"} hover={"hover:bg-red-700 hover:text-white"} title={"Moh Ryan"} />
                            <Link to="#"><Button bg={"bg-red-700 text-white"} onClick={handleLogoutUsers} hover={"hover:bg-second w-full"} title={"LogOut"} /></Link>
                        </div>
                        <div className={`${admin}`}>
                            <Button bg={"bg-white w-full"} hover={`hover:bg-red-700 hover:text-white`} title={"Moh Ryan"} />
                            <Link to="#"><Button bg={"bg-red-700 text-white"} onClick={handleLogoutAdmin} hover={"hover:bg-second w-full"} title={"LogOut"} /></Link>
                        </div>
                    </div>
                </div>
                {/* Nav Mobile =============================== */}

                <div className="items-center hidden lg:flex">
                    <ul className={`${users} flex Nav__List`}>
                        <li><Link to="#">Partai</Link></li>
                        <li>|</li>
                        <li><Link to="#">Paslon</Link></li>
                        <li>|</li>
                        <li><Link to="/vote">Voting</Link></li>
                    </ul>
                    <ul className={`${admin} flex Nav__List`}>
                        <li><Link to="/listpartai">Partai</Link></li>
                        <li>|</li>
                        <li><Link to="/listpaslon">Paslon</Link></li>
                    </ul>
                    <div>
                        <div className={`flex ${users}`}>
                            <Button bg={"bg-white rounded-full"} hover={"hover:bg-red-700 hover:text-white"} title={"Moh Ryan"} />
                            <Link to="#"><Button bg={"bg-red-700 ms-3 text-white"} onClick={handleLogoutUsers} hover={"hover:bg-second"} title={"LogOut"} /></Link>
                        </div>
                        <div className={`flex ${admin}`}>
                            <Button bg={"bg-white rounded-full"} hover={`hover:bg-red-700 hover:text-white`} title={"Moh Ryan"} />
                            <Link to="#"><Button bg={"bg-red-700 ms-3 text-white"} onClick={handleLogoutAdmin} hover={"hover:bg-second"} title={"LogOut"} /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
