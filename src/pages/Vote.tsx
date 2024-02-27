import { Navbar } from "../components/Navbar"
import cart from "../assets/images/Cart.png"
import { NoPaslon } from "../components/Vote/NoPaslon"
import { Button } from "../components/Button"
import { Paslon } from "../components/Vote/Paslon"
import { Motto } from "../components/Motto"
import { Footer } from "../components/Footer"
import paslonImage from "../assets/images/paslon.png"
import dataPaslon from "../Json/paslon.json"
import { useState } from "react"


export const Vote = () => {
    const [show, setShow] = useState<boolean>(false)
    const handleShow = () => {
        setShow(!show)
    }

    return (
        <div>
            <Navbar users={""} />
            <div className={`fixed z-50 ${!show ? "hidden" : "flex"} flex-col items-center justify-center w-screen h-screen bg-black bg-opacity-50`}>
                <div className="relative flex flex-col items-center px-10 py-10 bg-white rounded-lg">
                    <b className="py-5 text-4xl text-fisrt">MASUKAN PILIHAN MU</b>
                    <div className="flex space-x-5">
                        {
                            dataPaslon.map((item) => (
                                <button className="relative flex flex-col p-5 rounded-lg w-80 bg-slate-300 group/modal hover:bg-yellow-200 focus:bg-yellow-200">
                                    <div className={`absolute flex items-center justify-center rounded-full top-3 right-2 w-14 h-14 bg-slate-400 ring-4 ring-white group-hover/modal:bg-pink-400 group-focus/modal:bg-pink-400`}><b className="text-4xl text-white">{item.no}</b></div>
                                    <div className="w-full group-hover/modal:border-4 group-hover/modal:border-red-600 group-focus/modal:border-4 group-focus/modal:border-red-600 h-52">
                                        <img src={paslonImage} className="object-cover w-full h-full rounded-sm" alt="" />
                                    </div>
                                    <b className={`text-xl ${item.text}`}>{item.name}</b>
                                    <p>{item.vimis}</p>
                                    <b>Partai Pengusung</b>
                                    {item.koalisi.map(partai => (
                                        <ul>
                                            <li>* {partai.partai}</li>
                                        </ul>
                                    ))}
                                </button>
                            ))
                        }
                    </div>
                    <div className="flex space-x-11 ">
                        <Button title="Reset" hover="w-80 rounded-lg text-fisrt text-2xl hover:opacity-40" bg="border-4 border-fisrt" />
                        <Button onClick={handleShow} title="Submit" hover="w-80 rounded-lg text-white text-2xl border-4 border-fisrt hover:opacity-40" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-screen pt-20">
                <p className="py-5 my-5 text-4xl font-bold text-fisrt">INFO PEMILU TERUPDATE</p>
                <div className="flex items-center justify-center w-screen">
                    <img src={cart} className="me-32" alt="" />
                    <div>
                        <NoPaslon />
                        <Button onClick={handleShow} title={"MASUKAN SUARAMU"} hover={"text-white px-32 hover:opacity-80"} />
                    </div>
                </div>
                <div>
                    <Paslon />
                </div>
                <Motto red={""} />
            </div>
            <Footer />
        </div>
    )
}
