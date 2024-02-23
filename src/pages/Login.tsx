import { Button } from "../components/Button"
import { Input } from "../elements/input"
import { Link } from "react-router-dom"

export const Login = () => {

    return (
        <div className="w-screen h-screen flex justify-center flex-col items-center ">
            <div className="w-[350px]">
                <h1 className="text-3xl font-bold text-fisrt my-5">Login</h1>
                <Input title={"Username"} placeHolder={"Insert Your Name"} type={"text"} />
                <Input title={"Password"} placeHolder={"Insert Your Password"} type={"text"} />
                <Button title={"Login"} hover={"hover:text-white hover:bg-opacity-60"} />
                <p className="flex justify-between">Dont have an account ? <Link to="/register" className="text-link">Register</Link></p>
            </div>
        </div>
    )
}
