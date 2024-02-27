import { Navbar } from "../../components/Navbar"
import paslon from "../../assets/images/paslon.png"
import Paslon from "../../Json/paslon.json"

const listTable = [
    {
        no: "1",
        name: "Sugeng No Pants",
        addres: "Cileungsi",
        gender: "Laki-Laki",
        paslon: "Paloh",
    },
    {
        no: "2",
        name: "Haris Gams",
        addres: "Serang",
        gender: "Perempuan",
        paslon: "Surya",
    },
    {
        no: "3",
        name: "Aziz Union",
        addres: "Bekasi",
        gender: "Laki-Laki",
        paslon: "Cintara",
    },
    {
        no: "4",
        name: "Lae Tanjung Balai",
        addres: "Tanjung Balai",
        gender: "Laki-Laki",
        paslon: "Paloh",
    }

]


export const DashBoard = () => {
    return (
        <div className="flex flex-col items-center">
            <Navbar admin={""} />
            <div className="flex w-[1440px] flex-col items-center justify-center pt-10">
                <div className="flex flex-col items-center h-screen">
                    <b className="py-10 text-4xl text-fisrt">DASHBOARD</b>
                    <div className="flex items-center justify-center w-full">
                        {Paslon.map(item => (
                            <div className="flex flex-col items-center justify-center w-full mx-4">
                                <div className={`flex items-center justify-center rounded-full w-20 h-20 bg-${item.bg2} my-5`}>
                                    <div className={`flex items-center justify-center rounded-full w-16 h-16 bg-${item.bg1}`}>
                                        <b className={`text-3xl ${item.text}`}>{item.no}</b>
                                    </div>
                                </div>
                                <div className={`flex flex-col h-[433px] px-9 py-5 bg-${item.bg1} text-wrap rounded-lg shadow-md`}>
                                    <img src={paslon} className="w-[330px] h-[262px]" alt="" />
                                    <div className={`${item.text} font-black w-[330px]`}>
                                        <p className="text-4xl stroke">{item.name}</p>
                                        <p className="text-xl stroke_sm">Akumulasi : {item.akumulasi}</p>
                                        <p className="text-xl stroke_sm">Jumlah Vote : {item.vote} Voters</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-screen py-10 bg-slate-300">
                    <b className="my-5 text-4xl text-fisrt">LIST OVER</b>
                    <table className="text-left border border-collapse table-auto border-slate-400 border-spacing-x-5">
                        <thead className="">
                            <tr className="bg-white">
                                <th className="p-3 text-center border bg-slate-200 border-slate-300">No</th>
                                <th className="border ps-2 pe-40 bg-slate-200 border-slate-300">Nama</th>
                                <th className="border ps-2 pe-40 bg-slate-200 border-slate-300">Alamat</th>
                                <th className="border ps-2 pe-40 bg-slate-200 border-slate-300">Jenis Kelamin</th>
                                <th className="border ps-2 pe-40 bg-slate-200 border-slate-300">Paslon</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listTable.map(item => (
                                <tr className="bg-white">
                                    <td className="py-2 text-center border border-slate-300">{item.no}</td>
                                    <td className="border ps-2 border-slate-300">{item.name}</td>
                                    <td className="border ps-2 border-slate-300">{item.addres}</td>
                                    <td className="border ps-2 border-slate-300">{item.gender}</td>
                                    <td className="border ps-2 border-slate-300">{item.paslon}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <b className="my-5 text-3xl">TOTAL SUARA TERKUMPUL : 467 Voters</b>
                </div>
            </div>
        </div>
    )
}
