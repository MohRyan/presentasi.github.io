import dumways from "../assets/images/brandred 1.png"
import kotakSuara from "../assets/images/kotak-suara.png"

export const Welcome = () => {
    return (
        <div className="w-[1141px] relative rounded-[20px] h-[600px] bg-gradient-to-r to-[#5C1E03] from-[#7506068A] ">
            <img className="absolute" src={dumways} width={"286px"} height={"473px"} alt="" />
            <img className="absolute top-[0px] right-[120px]" src={kotakSuara} width={"342px"} height={"237px"} alt="" />
            <div className="absolute bottom-0 pb-5 font-bold text-white ps-5">
                <p className="text-6xl">SELAMAT DATANG</p>
                <p className="text-[24px]">PEMILU PRESIDEN DUMWAYS.ID YANG JUJUR</p>
                <p className="text-[24px]">DIPILIH MELALUI SEBUAH ARTI NAMA</p>
            </div>
        </div>
    )
}
