import { Button } from "../components/Button"
import { Input } from "../elements/input"
import { Link } from "react-router-dom"

export const Login = ({ showLogin, closeLogin, login }: any) => {
    return (
        <div className={`fixed z-50 ${!showLogin ? "hidden" : "flex"} flex-col items-center justify-center w-screen h-screen bg-black bg-opacity-50`}>
            <div className="w-[350px] relative bg-white px-10 py-5 rounded-lg">
                <button className="absolute text-2xl font-bold right-5" onClick={closeLogin}>x</button>
                <h1 className="my-5 text-3xl font-bold text-fisrt">Login</h1>
                <Input title={"Username"} placeHolder={"Insert Your Name"} type={"text"} />
                <Input title={"Password"} placeHolder={"Insert Your Password"} type={"password"} />
                <Button title={"Login"} onClick={login} hover={"text-white hover:bg-opacity-60 rounded-lg w-full"} />
                {/* <p className="flex justify-between">Dont have an account ? <Link to="#" className="text-link">Register</Link></p> */}
            </div>
        </div>
    )
}
