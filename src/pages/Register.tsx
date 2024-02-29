// import { useState } from "react"
import { Button } from "../components/Button"
import { Input } from "../components/elements/input"
import { Link } from "react-router-dom"

const inputRegister = [
    {
        title: "Fullname",
        placeHolder: "Insert Your Fullname",
        type: "text"
    },
    {
        title: "Address",
        placeHolder: "Insert Your Address",
        type: "text"
    },
    {
        title: "Gender",
        placeHolder: "Insert Your Gender",
        type: "text"
    },
    {
        title: "Username",
        placeHolder: "Insert Your Name",
        type: "text"
    },
    {
        title: "Password",
        placeHolder: "Insert Your Password",
        type: "password"
    }
]


export const Register = ({ showRegister, closeRegister, register }: any) => {

    // () => {
    //     return closeRegister

    // }

    return (
        <div className={`fixed z-50 ${!showRegister ? "hidden" : "flex"} flex-col items-center justify-center w-screen h-screen bg-black bg-opacity-50`}>
            <div className="w-[350px] relative bg-white px-10 py-5 rounded-lg">
                <button className="absolute text-2xl font-bold right-5" onClick={closeRegister}>x</button>
                <h1 className="my-4 text-3xl font-bold text-fisrt">Register</h1>
                {
                    inputRegister.map(item => (
                        <Input key={item.title} title={item.title} placeHolder={item.placeHolder} type={item.type} />
                    ))
                }

                <Button title={"Register"} onClick={register} hover={"text-white hover:bg-opacity-60 rounded-lg w-full"} />
                <p className="flex justify-between">Do You have an account ? <Link to="#" onClick={register} className="text-link">Login</Link></p>
            </div>
        </div>
    )
}
