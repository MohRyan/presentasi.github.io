import { Button } from "../components/Button"
import { Input } from "../elements/input"
import { Link } from "react-router-dom"

export const Register = () => {

    return (
        <div className="flex justify-center items-center flex-col h-screen w-screen">
            <div className="w-[350px]">
                <h1 className="text-3xl font-bold text-fisrt my-4">Register</h1>
                <Input title={"Fullname"} placeHolder={"Insert Your Fullname"} type={"text"} />
                <Input title={"Address"} placeHolder={"Insert Your Address"} type={"text"} />
                <Input title={"Gender"} placeHolder={"Insert Your Gender"} type={"text"} />
                <Input title={"Username"} placeHolder={"Insert Your Name"} type={"text"} />
                <Input title={"Password"} placeHolder={"Insert Your Password"} type={"text"} />
                <Button title={"Register"} hover={"hover:text-white hover:bg-opacity-60"} />
                <p className="flex justify-between">Have an account? <Link to="/login" className="text-link">Login</Link></p>
            </div>
        </div>
    )
}
