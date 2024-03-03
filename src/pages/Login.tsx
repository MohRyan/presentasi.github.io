import * as React from 'react'
import { Button } from "../components/Button"
import { Select } from "../components/elements/Select"
import { Input } from "../components/elements/input"
import { Link } from "react-router-dom"

export const Login = ({ handleStatus, status, }: any) => {
    const usersRef = React.useRef<any>()
    const usersPassRef = React.useRef<any>()
    const adminRef = React.useRef<any>()
    const adminPassRef = React.useRef<any>()


    const handleUser = () => {
        const users = localStorage.getItem("Users")
        if (users == null) {
            localStorage.setItem("Users", JSON.stringify([{ name: usersRef.current.value, pass: usersPassRef.current.value }]))
            window.location.href = "/users"
        } else if (users == users) {
            const datausers = JSON.parse(users)
            datausers.push(localStorage.setItem("Users", JSON.stringify([{ name: usersRef.current.value, pass: usersPassRef.current.value }]))
            )
            window.location.href = "/users"
        }
    }
    const handleAdmin = () => {
        const admin = localStorage.getItem("Admin")
        if (admin == null) {
            localStorage.setItem("Admin", JSON.stringify([{ name: adminRef.current.value, pass: adminPassRef.current.value }]))
            window.location.href = "/admin"
        } else if (admin == admin) {
            const dataAdmin = JSON.parse(admin)
            dataAdmin.push(localStorage.setItem("Admin", JSON.stringify([{ name: adminRef.current.value, pass: adminPassRef.current.value }]))
            )
            window.location.href = "/admin"
        }
    }

    return (
        <>
            {
                !status ?
                    <form className={`flex flex-col items-center justify-center`}>
                        <div className="w-[350px] bg-white px-10 py-5 rounded-lg">
                            <div className="flex justify-between">
                                <h1 className="my-5 text-3xl font-bold text-fisrt">Login</h1>
                                {/* <h1 className="my-5 text-3xl font-bold text-fisrt">Users</h1> */}
                            </div>
                            <div>
                                <p className="mb-1 text-lg font-bold">Username</p>
                                <input required ref={usersRef} className="w-full py-2 mb-5 rounded-sm ring ring-black ps-2" type="" placeholder="Insert Your Username" />
                            </div>
                            <div>
                                <p className="mb-1 text-lg font-bold">Password</p>
                                <input required ref={usersPassRef} className="w-full py-2 mb-5 rounded-sm ring ring-black ps-2" type="" placeholder="Insert Your Password" />
                            </div>
                            <Button title={"Login"} onClick={handleUser} hover={"text-white hover:bg-opacity-60 rounded-lg w-full"} />
                            <p className="flex justify-between">Dont have an account ? <Link to="#" className="text-link">Register</Link></p>
                        </div>
                    </form>
                    :
                    <form className={`flex flex-col items-center justify-center`} >
                        <div className="w-[350px] bg-white px-10 py-5 rounded-lg">
                            <div className="flex justify-between">
                                <h1 className="my-5 text-3xl font-bold text-second">Login</h1>
                                {/* <h1 className="my-5 text-3xl font-bold text-second">Admin</h1> */}
                            </div>
                            <div>
                                <p className="mb-1 text-lg font-bold">Username</p>
                                <input required ref={adminRef} className="w-full py-2 mb-5 rounded-sm ring ring-black ps-2" type="" placeholder="Insert Your Username" />
                            </div>
                            <div>
                                <p className="mb-1 text-lg font-bold">Password</p>
                                <input required ref={adminPassRef} className="w-full py-2 mb-5 rounded-sm ring ring-black ps-2" type="" placeholder="Insert Your Password" />
                            </div>
                            <Button title={"Login"} bg="bg-second" onClick={handleAdmin} hover={"text-white hover:bg-opacity-60 rounded-lg w-full"} />
                            <p className="flex justify-between">Dont have an account ? <Link to="#" className="text-link">Register</Link></p>
                        </div>
                    </form>
            }

        </>
    )
}
