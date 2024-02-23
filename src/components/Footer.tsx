import logo from "../assets/images/logo-merah.svg"

export const Footer = () => {
    return (
        <div className="flex flex-col bg-black w-screen h-[291px]">
            <div className="flex justify-center items-center w-[1141px] py-12">
                <img src={logo} width={"110px"} height={"110px"} alt="" />
                <div className="text-white ms-3">
                    <p className="font-bold text-3xl">DUMBWAYS.ID</p>
                    <p className="text-wrap w-[250px]">Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan, Banten 15413</p>
                </div>
            </div>
            <div className="w-screen bg-white h-1"></div>
            <div className="flex justify-center items-center mt-4">
                <p className="text-white text-xl">Komisi Pemilihan Umum Dumbways.ID | yourname 2023</p>
            </div>
        </div >
    )
}
