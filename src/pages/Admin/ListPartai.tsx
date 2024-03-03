import { Link } from "react-router-dom"
import { Button } from "../../components/Button"
import { Navbar } from "../../components/Navbar"
import paslonImage from "../../assets/images/paslon.png"
import Paslon from "../../Json/paslon.json"

export const ListPartai = () => {
    return (
        <div>
            <Navbar admin={""} />
            <div className="flex flex-col items-center justify-center h-screen">
                <b className="py-20 text-4xl text-fisrt">LIST PARTAI</b>
                <div>
                    <div className="absolute flex items-center justify-center h-8 right-72 w-36">
                        <Link to={"/addpartai"}><Button title={"Add Partai"} hover={"text-white hover:opacity-80"} /></Link>
                    </div>
                    <table className="text-left border border-collapse table-auto border-slate-400 border-spacing-x-5">
                        <thead>
                            <tr>
                                <th className="px-2 text-center border bg-slate-200 border-slate-300">No. Urut</th>
                                <th className="border ps-2 pe-5 bg-slate-200 border-slate-300">Image</th>
                                <th className="border ps-2 pe-5 bg-slate-200 border-slate-300">Name</th>
                                <th className="border ps-2 pe-5 bg-slate-200 border-slate-300">Visi & Misi</th>
                                <th className="border ps-2 pe-5 bg-slate-200 border-slate-300">Alamat</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Paslon.map((item) => (
                                    <tr>
                                        <td className="px-2 text-center border border-slate-300">{item.no}</td>
                                        <td className="border ps-2 pe-8 border-slate-300"><img src={paslonImage} width={"78px"} height={"94px"} alt="" /></td>
                                        <td className="border ps-2 pe-8 border-slate-300">{item.name}</td>
                                        <td className="border ps-2 pe-8 border-slate-300">
                                            {item.vimi.map(vimi => (
                                                <ul>
                                                    <li>* {vimi.title}</li>
                                                </ul>
                                            ))}
                                        </td>
                                        <td className="border ps-2 pe-8 border-slate-300">
                                            <ul>
                                                <li>* {item.addres}</li>
                                            </ul>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
